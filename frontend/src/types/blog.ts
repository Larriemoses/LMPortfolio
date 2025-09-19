export interface Blog {
  _id: string;
  title: string;
  content: string;
  slug: string;
  category: string;
  author: string;
  views: number;
  image?: string;
  tags: string[]; // ✅ Enforced as string[]
  createdAt?: string;
  updatedAt?: string;
}
