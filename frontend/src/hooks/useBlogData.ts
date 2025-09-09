// src/hooks/useBlogData.ts

import { useEffect, useState } from "react";
import api from "../services/api";

interface Blog {
  _id: string;
  slug: string;
  title: string;
  content: string;
  author: string;
  category: string;
  image?: string;
  views: number;
  comments: Comment[];
  createdAt: string;
}

interface Comment {
  _id: string;
  name: string;
  text: string;
  createdAt: string;
}

const useBlogData = (slug: string | undefined) => {
  const [blog, setBlog] = useState<Blog | null>(null);
  const [relatedBlogs, setRelatedBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogData = async () => {
      if (!slug) {
        setLoading(false);
        return;
      }
      try {
        setLoading(true);
        setError(null);

        // Fetch the main blog post
        const blogResponse = await api.get(`/blogs/${slug}`);
        if (!blogResponse.data) {
          throw new Error("Blog data not found in the response.");
        }
        setBlog(blogResponse.data);

        // Fetch related blogs
        const relatedBlogsResponse = await api.get("/blogs");
        const filteredBlogs = relatedBlogsResponse.data
          .filter((b: Blog) => b.slug !== slug)
          .slice(0, 5);
        setRelatedBlogs(filteredBlogs);

        // Increment views
        await api.patch(`/blogs/${slug}/views`);
      } catch (err: any) {
        console.error("Failed to fetch blog:", err);
        if (err.response && err.response.status === 404) {
          setError("Blog not found.");
        } else {
          setError("An error occurred. Please try again later.");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchBlogData();
  }, [slug]);

  return { blog, relatedBlogs, loading, error, setBlog };
};

export default useBlogData;
