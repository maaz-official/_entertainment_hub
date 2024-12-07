import { getAllCelebrities } from '@/lib/celebrities';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

export default function CelebritiesPage() {
  const celebrities = getAllCelebrities();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">Celebrities</h1>
          <p className="text-muted-foreground">Discover the stories behind your favorite stars</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {celebrities.map((celebrity) => (
          <Card key={celebrity.slug} className="overflow-hidden group">
            <Link href={`/celebrities/${celebrity.slug}`}>
              <div className="relative aspect-square">
                <Image
                  src={celebrity.image}
                  alt={celebrity.name}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold group-hover:text-primary transition-colors">
                  {celebrity.name}
                </h3>
                <p className="text-sm text-muted-foreground">{celebrity.category}</p>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}