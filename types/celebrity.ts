export interface Celebrity {
  id: string;
  name: string;
  slug: string;
  image: string;
  coverImage: string;
  category: string;
  birthDate: string;
  birthPlace: string;
  bio: string;
  awards: Award[];
  socialMedia: SocialMedia;
  filmography: Project[];
}

export interface Award {
  name: string;
  year: number;
  category: string;
}

export interface SocialMedia {
  instagram?: string;
  twitter?: string;
  facebook?: string;
}

export interface Project {
  title: string;
  year: number;
  role: string;
  type: 'movie' | 'tv' | 'music';
}