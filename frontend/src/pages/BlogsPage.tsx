import { posts } from "../data/posts";
import PostCard from "../components/blog/PostCard";

function BlogsPage() {
  return (
    <main style={{ padding: "4rem 1rem", maxWidth: "960px", margin: "0 auto" }}>
      <h1
        style={{
          fontFamily: "Source Serif Pro",
          fontSize: "clamp(28px, 4.5vw, 40px)",
          marginBottom: "2rem",
        }}
      >
        Blog
      </h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2rem",
        }}
      >
        {posts.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>
    </main>
  );
}

export default BlogsPage;
