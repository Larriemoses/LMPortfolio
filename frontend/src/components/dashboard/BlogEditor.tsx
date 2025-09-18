// src/components/dashboard/BlogEditor.tsx
import React, { useEffect, useRef, useState } from "react";
import type { Blog } from "../../types/blog";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import { toast } from "react-toastify";
import api from "../../services/api";

/**
 * BlogEditor
 * - Robust toolbar (bold, italic, H1/H2, ordered/unordered lists, image URL/upload)
 * - Uses onMouseDown + type="button" to avoid losing focus (common Tiptap gotcha)
 * - Inserts images as base64 for now (swap for upload endpoint later)
 */

/* Props typed so callers know the onSave param is Blog (no implicit any). */
interface BlogEditorProps {
  blog?: Blog;
  onClose: () => void;
  onSave: (savedBlog: Blog) => void;
}

const EditorMenuBar: React.FC<{
  editor: ReturnType<typeof useEditor> | null;
}> = ({ editor }) => {
  if (!editor) return null;

  const btn = (active: boolean) =>
    `px-3 py-1 rounded ${
      active ? "bg-blue-600 text-white" : "bg-gray-100 hover:bg-gray-200"
    }`;

  return (
    <div className="flex flex-wrap gap-2 mb-3">
      <button
        type="button"
        onMouseDown={(e) => e.preventDefault()}
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={btn(editor.isActive("bold"))}
        aria-pressed={editor.isActive("bold")}
        title="Bold"
      >
        B
      </button>

      <button
        type="button"
        onMouseDown={(e) => e.preventDefault()}
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={btn(editor.isActive("italic"))}
        aria-pressed={editor.isActive("italic")}
        title="Italic"
      >
        I
      </button>

      <button
        type="button"
        onMouseDown={(e) => e.preventDefault()}
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={btn(editor.isActive("underline"))}
        aria-pressed={editor.isActive("underline")}
        title="Underline"
      >
        U
      </button>

      <button
        type="button"
        onMouseDown={(e) => e.preventDefault()}
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={btn(editor.isActive("heading", { level: 1 }))}
        title="Heading 1"
      >
        H1
      </button>

      <button
        type="button"
        onMouseDown={(e) => e.preventDefault()}
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={btn(editor.isActive("heading", { level: 2 }))}
        title="Heading 2"
      >
        H2
      </button>

      <button
        type="button"
        onMouseDown={(e) => e.preventDefault()}
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={btn(editor.isActive("bulletList"))}
        title="Bullet list"
      >
        • List
      </button>

      <button
        type="button"
        onMouseDown={(e) => e.preventDefault()}
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={btn(editor.isActive("orderedList"))}
        title="Numbered list"
      >
        1. List
      </button>
    </div>
  );
};

const BlogEditor: React.FC<BlogEditorProps> = ({ blog, onClose, onSave }) => {
  const [meta, setMeta] = useState({
    title: blog?.title ?? "",
    category: blog?.category ?? "",
    tags: blog?.tags?.join(", ") ?? "",
    image: blog?.image ?? "",
  });

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        // keep default StarterKit nodes (heading, lists, paragraph, code, etc.)
      }),
      Image,
      Underline,
      Link.configure({ openOnClick: true }),
    ],
    content: blog?.content ?? "<p></p>",
    editorProps: {
      attributes: {
        class: "editor-content prose prose-lg max-w-full focus:outline-none",
        spellCheck: "true",
      },
    },
  });

  useEffect(() => {
    if (editor && typeof blog?.content === "string" && blog.content) {
      editor.commands.setContent(blog.content);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [blog]);

  const insertImageFromUrl = (url: string, alt?: string) => {
    if (!editor) return;
    editor
      .chain()
      .focus()
      .setImage({ src: url, alt: alt ?? "" })
      .run();
  };

  const handlePickFile = () => fileInputRef.current?.click();

  const handleFile = async (file?: File) => {
    if (!file || !editor) return;
    try {
      const base64 = await fileToBase64(file);
      editor.chain().focus().setImage({ src: base64, alt: file.name }).run();
    } catch (err) {
      console.error(err);
      toast.error("Failed to insert image");
    }
  };

  const handleSave = async () => {
    if (!meta.title.trim()) {
      toast.error("Please provide a title.");
      return;
    }
    if (!editor) {
      toast.error("Editor not ready.");
      return;
    }

    const html = editor.getHTML();

    const payload: any = {
      ...meta,
      tags: meta.tags ? meta.tags.split(",").map((t) => t.trim()) : [],
      content: html,
    };

    try {
      let res;
      if (blog) {
        res = await api.put(`/blogs/${blog.slug}`, payload);
        toast.success("Blog updated");
      } else {
        res = await api.post("/blogs", payload);
        toast.success("Blog published");
      }
      const saved: Blog = res.data as Blog;
      onSave(saved);
    } catch (err) {
      console.error(err);
      toast.error("Failed to save blog.");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg p-6 overflow-y-auto max-h-[90vh]">
        <header className="flex items-start justify-between mb-4 gap-4">
          <div>
            <h3 className="text-xl font-semibold">
              {blog ? "Edit Blog" : "New Blog"}
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              Editor: headings, lists, bold, italic, images.
            </p>
          </div>

          <div className="flex gap-2">
            <button
              onClick={onClose}
              type="button"
              className="px-3 py-2 bg-gray-100 rounded hover:bg-gray-200"
            >
              Close
            </button>
          </div>
        </header>

        <div className="space-y-3">
          <input
            className="w-full p-3 border rounded-lg"
            placeholder="Title"
            value={meta.title}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setMeta((p) => ({ ...p, title: e.target.value }))
            }
          />

          <div className="flex gap-2">
            <input
              className="flex-1 p-2 border rounded-lg"
              placeholder="Category"
              value={meta.category}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setMeta((p) => ({ ...p, category: e.target.value }))
              }
            />
            <input
              className="flex-1 p-2 border rounded-lg"
              placeholder="Tags (comma separated)"
              value={meta.tags}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setMeta((p) => ({ ...p, tags: e.target.value }))
              }
            />
          </div>

          {/* Toolbar */}
          <EditorMenuBar editor={editor} />

          {/* Image buttons (URL + upload) */}
          <div className="flex gap-2 mb-2">
            <button
              type="button"
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => {
                const url = window.prompt("Image URL");
                if (url) insertImageFromUrl(url);
              }}
              className="px-3 py-1 bg-gray-100 rounded"
            >
              Insert Image (URL)
            </button>

            <button
              type="button"
              onMouseDown={(e) => e.preventDefault()}
              onClick={handlePickFile}
              className="px-3 py-1 bg-gray-100 rounded"
            >
              Upload Image
            </button>

            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => handleFile(e.target.files?.[0] ?? undefined)}
            />
          </div>

          {/* Editor container */}
          <div className="border rounded p-3 min-h-[260px]">
            <EditorContent editor={editor} />
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-3 mt-4">
            <button
              type="button"
              className="px-4 py-2 bg-gray-200 rounded"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="button"
              className="px-4 py-2 bg-green-600 text-white rounded"
              onClick={handleSave}
            >
              {blog ? "Update" : "Publish"}
            </button>
          </div>
        </div>
      </div>

      {/* Inline editor styles — add these to global CSS if you prefer */}
      <style>{`
        /* increase readable font size similar to medium */
        .editor-content { font-size: 18px; line-height: 1.7; }
        .editor-content img { max-width: 100%; height: auto; display: block; margin: 1rem auto; border-radius: 8px; }
        .editor-content ul, .editor-content ol { margin-left: 1.25rem; margin-top: 0.5rem; margin-bottom: 0.5rem; }
        .editor-content h1, .editor-content h2, .editor-content h3 { margin-top: 1.25rem; margin-bottom: 0.5rem; }
        /* make code blocks readable */
        .editor-content pre { background: #f6f8fa; padding: 1rem; border-radius: 6px; overflow:auto; }
      `}</style>
    </div>
  );
};

export default BlogEditor;

/* small helper (kept here) */
async function fileToBase64(file: File): Promise<string> {
  return await new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}
