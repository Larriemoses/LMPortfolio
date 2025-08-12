import { useEffect, useState } from "react";
import { getAllBlogs } from "../services/blogService";

interface Blog {
  _id: string;
  title: string;
  content: string;
  author: string;
}

function BlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllBlogs()
      .then((data) => {
        console.log("API result:", data); // Debugging log
        if (Array.isArray(data)) {
          setBlogs(data);
        } else {
          console.error("Expected array, got:", data);
          setBlogs([]); // fallback to empty array
        }
      })
      .catch((err) => {
        console.error("API call failed:", err);
        setBlogs([]); // fallback to empty array
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading blogs...</p>;

  if (blogs.length === 0) return <p>No blogs found</p>;

  return (
    <div>
      <h1>Blogs</h1>
      {blogs.map((blog) => (
        <div key={blog._id} style={{ marginBottom: "1rem" }}>
          <h2>{blog.title}</h2>
          <p>{blog.content}</p>
          <small>By {blog.author}</small>
        </div>
      ))}
    </div>
  );
}

export default BlogsPage;
