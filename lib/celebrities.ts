import { Celebrity } from '@/types/celebrity';

export const celebrities: Celebrity[] = [
  {
    id: '1',
    name: 'Emma Stone',
    slug: 'emma-stone',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
    coverImage: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1200&q=80',
    category: 'Actress',
    birthDate: '1988-11-06',
    birthPlace: 'Scottsdale, Arizona, USA',
    bio: 'Emma Stone is an Academy Award-winning actress known for her versatile roles in both comedy and drama. She began her career in theater as a child and made her television debut in 2004.',
    awards: [
      {
        name: 'Academy Award',
        year: 2017,
        category: 'Best Actress'
      },
      {
        name: 'Golden Globe',
        year: 2017,
        category: 'Best Actress - Comedy or Musical'
      }
    ],
    socialMedia: {
      instagram: 'emmastone',
      twitter: 'emmastone',
    },
    filmography: [
      {
        title: 'La La Land',
        year: 2016,
        role: 'Mia Dolan',
        type: 'movie'
      },
      {
        title: 'Poor Things',
        year: 2023,
        role: 'Bella Baxter',
        type: 'movie'
      }
    ]
  }
];

export const getCelebrity = (slug: string): Celebrity | undefined => {
  return celebrities.find((celebrity) => celebrity.slug === slug);
};

export const getAllCelebrities = (): Celebrity[] => {
  return celebrities;
};