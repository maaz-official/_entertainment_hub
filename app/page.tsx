import FeaturedNews from '@/components/home/featured-news';
import TrendingCelebrities from '@/components/home/trending-celebrities';
import LatestNews from '@/components/home/latest-news';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <FeaturedNews />
      <TrendingCelebrities />
      <LatestNews />
    </div>
  );
}