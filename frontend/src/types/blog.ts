// src/types/blog.ts
export interface Blog {
  _id: string;
  title: string;
  slug: string;
  content: string; // HTML saved
  author: string;
  category: string;
  image?: string;
  views: number;
  likes: string[];
  comments: any[];
  tags?: string[];
}
