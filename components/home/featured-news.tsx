import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

const FeaturedNews = () => {
  const featuredArticle = {
    title: "Latest Hollywood Blockbuster Breaks Box Office Records",
    excerpt: "The newest superhero film has shattered expectations with an unprecedented opening weekend...",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&q=80",
    category: "Movies",
    date: "2024-03-25",
  };

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6">Featured Story</h2>
      <Card className="overflow-hidden">
        <div className="relative aspect-[21/9] w-full">
          <Image
            src={featuredArticle.image}
            alt={featuredArticle.title}
            fill
            className="object-cover"
            priority
          />
        </div>
        <CardContent className="p-6">
          <div className="flex items-center gap-4 mb-3">
            <span className="text-sm font-medium text-primary">{featuredArticle.category}</span>
            <span className="text-sm text-muted-foreground">{featuredArticle.date}</span>
          </div>
          <Link href="/news/latest-hollywood-blockbuster">
            <h3 className="text-2xl font-bold mb-2 hover:text-primary transition-colors">
              {featuredArticle.title}
            </h3>
          </Link>
          <p className="text-muted-foreground">{featuredArticle.excerpt}</p>
        </CardContent>
      </Card>
    </section>
  );
};

export default FeaturedNews;