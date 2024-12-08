'use client';

import { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Plus, MoreHorizontal, Search, ArrowUpDown } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { MovieDialog } from '@/components/dashboard/dialogs/movie-dialog';

const movies = [
  {
    id: '1',
    title: 'The Latest Blockbuster',
    genre: 'Action',
    releaseDate: '2024',
    status: 'Released',
    rating: '4.5',
    boxOffice: '$250M',
  },
  {
    id: '2',
    title: 'Upcoming Thriller',
    genre: 'Thriller',
    releaseDate: '2024',
    status: 'Pre-production',
    rating: 'N/A',
    boxOffice: 'N/A',
  },
];

export default function MoviesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortField, setSortField] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<any>(null);

  const handleSort = (field: string) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const handleEdit = (movie: any) => {
    setSelectedMovie(movie);
    setDialogOpen(true);
  };

  const handleCreate = () => {
    setSelectedMovie(null);
    setDialogOpen(true);
  };

  const handleSubmit = async (data: any) => {
    console.log('Form submitted:', data);
    setDialogOpen(false);
  };

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Movies</h2>
          <p className="text-muted-foreground">
            Manage movie listings and information
          </p>
        </div>
        <Button onClick={handleCreate}>
          <Plus className="mr-2 h-4 w-4" />
          Add Movie
        </Button>
      </div>

      <div className="flex items-center space-x-2">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search movies..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-8"
          />
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead onClick={() => handleSort('title')} className="cursor-pointer">
                <div className="flex items-center space-x-1">
                  <span>Title</span>
                  <ArrowUpDown className="h-4 w-4" />
                </div>
              </TableHead>
              <TableHead onClick={() => handleSort('genre')} className="cursor-pointer">
                <div className="flex items-center space-x-1">
                  <span>Genre</span>
                  <ArrowUpDown className="h-4 w-4" />
                </div>
              </TableHead>
              <TableHead onClick={() => handleSort('releaseDate')} className="cursor-pointer">
                <div className="flex items-center space-x-1">
                  <span>Release Date</span>
                  <ArrowUpDown className="h-4 w-4" />
                </div>
              </TableHead>
              <TableHead onClick={() => handleSort('status')} className="cursor-pointer">
                <div className="flex items-center space-x-1">
                  <span>Status</span>
                  <ArrowUpDown className="h-4 w-4" />
                </div>
              </TableHead>
              <TableHead onClick={() => handleSort('rating')} className="cursor-pointer">
                <div className="flex items-center space-x-1">
                  <span>Rating</span>
                  <ArrowUpDown className="h-4 w-4" />
                </div>
              </TableHead>
              <TableHead onClick={() => handleSort('boxOffice')} className="cursor-pointer">
                <div className="flex items-center space-x-1">
                  <span>Box Office</span>
                  <ArrowUpDown className="h-4 w-4" />
                </div>
              </TableHead>
              <TableHead className="w-[70px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredMovies.map((movie) => (
              <TableRow key={movie.id}>
                <TableCell className="font-medium">{movie.title}</TableCell>
                <TableCell>{movie.genre}</TableCell>
                <TableCell>{movie.releaseDate}</TableCell>
                <TableCell>
                  <Badge variant={movie.status === 'Released' ? 'default' : 'secondary'}>
                    {movie.status}
                  </Badge>
                </TableCell>
                <TableCell>{movie.rating}</TableCell>
                <TableCell>{movie.boxOffice}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => handleEdit(movie)}>
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem>View Details</DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <MovieDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        movie={selectedMovie}
        onSubmit={handleSubmit}
      />
    </div>
  );
}