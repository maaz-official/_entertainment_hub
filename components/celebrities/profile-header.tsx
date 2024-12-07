import Image from 'next/image';
import { Celebrity } from '@/types/celebrity';
import { Instagram, Twitter, Facebook } from 'lucide-react';

interface ProfileHeaderProps {
  celebrity: Celebrity;
}

const ProfileHeader = ({ celebrity }: ProfileHeaderProps) => {
  return (
    <div className="relative">
      <div className="relative h-[300px] w-full">
        <Image
          src={celebrity.coverImage}
          alt={`${celebrity.name} cover`}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/20" />
      </div>
      
      <div className="container mx-auto px-4">
        <div className="relative -mt-24 flex flex-col md:flex-row gap-6 items-start">
          <div className="relative h-48 w-48 rounded-lg overflow-hidden border-4 border-background">
            <Image
              src={celebrity.image}
              alt={celebrity.name}
              fill
              className="object-cover"
              priority
            />
          </div>
          
          <div className="flex-1 pt-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h1 className="text-4xl font-bold">{celebrity.name}</h1>
                <p className="text-lg text-muted-foreground">{celebrity.category}</p>
              </div>
              
              <div className="flex gap-4">
                {celebrity.socialMedia.instagram && (
                  <a href={`https://instagram.com/${celebrity.socialMedia.instagram}`} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                    <Instagram className="h-6 w-6" />
                  </a>
                )}
                {celebrity.socialMedia.twitter && (
                  <a href={`https://twitter.com/${celebrity.socialMedia.twitter}`} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                    <Twitter className="h-6 w-6" />
                  </a>
                )}
                {celebrity.socialMedia.facebook && (
                  <a href={`https://facebook.com/${celebrity.socialMedia.facebook}`} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                    <Facebook className="h-6 w-6" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;