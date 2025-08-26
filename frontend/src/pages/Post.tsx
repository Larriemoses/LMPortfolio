import { useParams } from "react-router-dom";
import posts from "../data/";

export default function Post() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);
  if (!post)
    return <main className="max-w-3xl mx-auto px-4 py-10">Not found.</main>;

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <article>
        <header className="mb-6">
          <div className="text-xs text-[var(--muted)]">
            {post.date} • {post.readingTime} min read
          </div>
          <h1
            className="text-3xl md:text-4xl font-semibold mt-2"
            style={{ fontFamily: "Source Serif Pro, serif" }}
          >
            {post.title}
          </h1>
        </header>
        <div className="prose dark:prose-invert max-w-none">
          {/* Replace with your MDX/markdown renderer later */}
          <p>{post.content}</p>
        </div>
      </article>
    </main>
  );
}
