import { getCelebrity } from '@/lib/celebrities';
import { notFound } from 'next/navigation';
import ProfileHeader from '@/components/celebrities/profile-header';
import BiographySection from '@/components/celebrities/biography-section';
import { getAllCelebrities } from '@/lib/celebrities'; // Adjust the import path as necessary

interface CelebrityPageProps {
  params: {
    slug: string;
  };
}

export default function CelebrityPage({ params }: CelebrityPageProps) {
  const celebrity = getCelebrity(params.slug);

  if (!celebrity) {
    notFound();
  }

  return (
    <div>
      <ProfileHeader celebrity={celebrity} />
      <div className="container mx-auto px-4">
        <BiographySection celebrity={celebrity} />
      </div>
    </div>
  );
}

// This function generates the static params (paths) for dynamic routes
export function generateStaticParams() {
  const celebrities = getAllCelebrities();
  return celebrities.map((celebrity) => ({
    slug: celebrity.slug, // For each celebrity, return the corresponding slug
  }));
}
