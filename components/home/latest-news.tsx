import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import Image from 'next/image';

const LatestNews = () => {
  const news = [
    {
      title: "New Season of Popular Drama Series Announced",
      excerpt: "Fans rejoice as streaming platform confirms renewal for another season...",
      image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=400&q=80",
      category: "TV Shows",
      date: "2024-03-24",
      slug: "new-season-drama-series"
    },
    {
      title: "Music Festival Lineup Revealed",
      excerpt: "This year's biggest music festival announces star-studded lineup...",
      image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&q=80",
      category: "Music",
      date: "2024-03-23",
      slug: "music-festival-lineup"
    },
    {
      title: "Rising Star's Breakthrough Performance",
      excerpt: "New talent catches Hollywood's attention with stunning debut...",
      image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&q=80",
      category: "Movies",
      date: "2024-03-22",
      slug: "rising-star-breakthrough"
    }
  ];

  return (
    <section>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Latest News</h2>
        <Link href="/news" className="text-primary hover:underline">
          View All News
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {news.map((article) => (
          <Card key={article.slug} className="overflow-hidden">
            <div className="relative aspect-video">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-4">
              <div className="flex items-center gap-4 mb-3">
                <span className="text-sm font-medium text-primary">{article.category}</span>
                <span className="text-sm text-muted-foreground">{article.date}</span>
              </div>
              <Link href={`/news/${article.slug}`}>
                <h3 className="font-semibold mb-2 hover:text-primary transition-colors">
                  {article.title}
                </h3>
              </Link>
              <p className="text-sm text-muted-foreground">{article.excerpt}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default LatestNews;