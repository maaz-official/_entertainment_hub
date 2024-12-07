export interface Article {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  image: string;
  category: string;
  status: 'draft' | 'published';
  publishedAt: string;
  author: {
    name: string;
    avatar: string;
  };
}