// src/components/dashboard/BlogEditor.tsx
import React, { useEffect, useRef, useState } from "react";
import type { Blog } from "../../types/blog";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import { toast } from "react-toastify";
import api from "../../services/api";

/* Props typed so callers know the onSave param is Blog (no implicit any). */
interface BlogEditorProps {
  blog?: Blog;
  onClose: () => void;
  onSave: (savedBlog: Blog) => void;
}

const BlogEditor: React.FC<BlogEditorProps> = ({ blog, onClose, onSave }) => {
  const [meta, setMeta] = useState({
    title: blog?.title ?? "",
    category: blog?.category ?? "",
    tags: blog?.tags?.join(", ") ?? "",
    image: blog?.image ?? "",
  });

  const editor = useEditor({
    extensions: [StarterKit, Image],
    content: blog?.content ?? "<p></p>",
    editorProps: {
      attributes: { class: "prose max-w-full focus:outline-none" },
    },
  });

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    // keep editor content in sync if blog prop changes
    if (editor && blog?.content) {
      editor.commands.setContent(blog.content);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [blog]);

  const insertImageFromUrl = (url: string) => {
    if (!editor) return;
    editor.chain().focus().setImage({ src: url }).run();
  };

  const handlePickFile = () => {
    fileInputRef.current?.click();
  };

  const handleFile = async (file?: File) => {
    if (!file || !editor) return;
    // convert to base64 and insert (small sites/preview); swap for real upload if you have an upload API
    const base64 = await fileToBase64(file);
    editor.chain().focus().setImage({ src: base64 }).run();
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
              Simple editor (headings, bold, lists, images).
            </p>
          </div>

          <div className="flex gap-2">
            <button
              onClick={onClose}
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

          {/* Editor toolbar */}
          <div className="flex flex-wrap gap-2 mb-2">
            <button
              className="px-3 py-1 bg-gray-100 rounded"
              onClick={() => editor?.chain().focus().toggleBold().run()}
            >
              Bold
            </button>
            <button
              className="px-3 py-1 bg-gray-100 rounded"
              onClick={() => editor?.chain().focus().toggleItalic().run()}
            >
              Italic
            </button>
            <button
              className="px-3 py-1 bg-gray-100 rounded"
              onClick={() =>
                editor?.chain().focus().toggleHeading({ level: 1 }).run()
              }
            >
              H1
            </button>
            <button
              className="px-3 py-1 bg-gray-100 rounded"
              onClick={() =>
                editor?.chain().focus().toggleHeading({ level: 2 }).run()
              }
            >
              H2
            </button>
            <button
              className="px-3 py-1 bg-gray-100 rounded"
              onClick={() => editor?.chain().focus().toggleBulletList().run()}
            >
              • List
            </button>
            <button
              className="px-3 py-1 bg-gray-100 rounded"
              onClick={() => editor?.chain().focus().toggleOrderedList().run()}
            >
              1. List
            </button>

            <button
              className="px-3 py-1 bg-gray-100 rounded"
              onClick={() => {
                const url = prompt("Image URL");
                if (url) insertImageFromUrl(url);
              }}
            >
              Insert Image (URL)
            </button>

            <button
              className="px-3 py-1 bg-gray-100 rounded"
              onClick={handlePickFile}
            >
              Upload Image
            </button>

            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => handleFile(e.target.files?.[0])}
            />
          </div>

          {/* Editor content */}
          <div className="border rounded p-3 min-h-[260px]">
            <EditorContent editor={editor} />
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-3 mt-4">
            <button className="px-4 py-2 bg-gray-200 rounded" onClick={onClose}>
              Cancel
            </button>
            <button
              className="px-4 py-2 bg-green-600 text-white rounded"
              onClick={handleSave}
            >
              {blog ? "Update" : "Publish"}
            </button>
          </div>
        </div>
      </div>
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
