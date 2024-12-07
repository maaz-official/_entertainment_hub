import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

const TrendingCelebrities = () => {
  const celebrities = [
    {
      name: "Emma Stone",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
      category: "Actress",
      slug: "emma-stone"
    },
    {
      name: "Tom Hardy",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
      category: "Actor",
      slug: "tom-hardy"
    },
    {
      name: "Taylor Swift",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
      category: "Singer",
      slug: "taylor-swift"
    },
    {
      name: "Michael B. Jordan",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
      category: "Actor",
      slug: "michael-b-jordan"
    }
  ];

  return (
    <section className="mb-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Trending Celebrities</h2>
        <Link href="/celebrities" className="text-primary hover:underline">
          View All
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {celebrities.map((celebrity) => (
          <Card key={celebrity.slug} className="overflow-hidden">
            <div className="relative aspect-square">
              <Image
                src={celebrity.image}
                alt={celebrity.name}
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-4">
              <Link href={`/celebrities/${celebrity.slug}`}>
                <h3 className="font-semibold hover:text-primary transition-colors">
                  {celebrity.name}
                </h3>
              </Link>
              <p className="text-sm text-muted-foreground">{celebrity.category}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default TrendingCelebrities;