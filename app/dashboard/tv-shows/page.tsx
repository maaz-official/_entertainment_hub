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
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Plus, MoreHorizontal, Search, ArrowUpDown, Filter } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { TVShowDialog } from '@/components/dashboard/dialogs/tv-show-dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const tvShows = [
  {
    id: '1',
    title: 'Mystery Chronicles',
    genre: 'Drama',
    network: 'Netflix',
    status: 'Airing',
    seasons: 3,
    episodes: 24,
    rating: '4.8',
  },
  {
    id: '2',
    title: 'Space Frontier',
    genre: 'Sci-Fi',
    network: 'Amazon Prime',
    status: 'Upcoming',
    seasons: 1,
    episodes: 10,
    rating: 'N/A',
  },
];

export default function TVShowsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [sortField, setSortField] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedShow, setSelectedShow] = useState<any>(null);

  const handleSort = (field: string) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const handleEdit = (show: any) => {
    setSelectedShow(show);
    setDialogOpen(true);
  };

  const handleCreate = () => {
    setSelectedShow(null);
    setDialogOpen(true);
  };

  const handleSubmit = async (data: any) => {
    console.log('Form submitted:', data);
    setDialogOpen(false);
  };

  const filteredShows = tvShows
    .filter((show) =>
      show.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((show) =>
      statusFilter === 'all' ? true : show.status.toLowerCase() === statusFilter.toLowerCase()
    );

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">TV Shows</h2>
          <p className="text-muted-foreground">
            Manage TV show listings and information
          </p>
        </div>
        <Button onClick={handleCreate}>
          <Plus className="mr-2 h-4 w-4" />
          Add TV Show
        </Button>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-center">
        <div className="relative flex-1">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search TV shows..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-8"
          />
        </div>
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-muted-foreground" />
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="airing">Airing</SelectItem>
              <SelectItem value="upcoming">Upcoming</SelectItem>
              <SelectItem value="ended">Ended</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <ScrollArea className="rounded-md border h-[600px]">
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
              <TableHead onClick={() => handleSort('network')} className="cursor-pointer">
                <div className="flex items-center space-x-1">
                  <span>Network</span>
                  <ArrowUpDown className="h-4 w-4" />
                </div>
              </TableHead>
              <TableHead onClick={() => handleSort('status')} className="cursor-pointer">
                <div className="flex items-center space-x-1">
                  <span>Status</span>
                  <ArrowUpDown className="h-4 w-4" />
                </div>
              </TableHead>
              <TableHead onClick={() => handleSort('seasons')} className="cursor-pointer">
                <div className="flex items-center space-x-1">
                  <span>Seasons</span>
                  <ArrowUpDown className="h-4 w-4" />
                </div>
              </TableHead>
              <TableHead onClick={() => handleSort('episodes')} className="cursor-pointer">
                <div className="flex items-center space-x-1">
                  <span>Episodes</span>
                  <ArrowUpDown className="h-4 w-4" />
                </div>
              </TableHead>
              <TableHead onClick={() => handleSort('rating')} className="cursor-pointer">
                <div className="flex items-center space-x-1">
                  <span>Rating</span>
                  <ArrowUpDown className="h-4 w-4" />
                </div>
              </TableHead>
              <TableHead className="w-[70px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredShows.map((show) => (
              <TableRow key={show.id}>
                <TableCell className="font-medium">{show.title}</TableCell>
                <TableCell>{show.genre}</TableCell>
                <TableCell>{show.network}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      show.status === 'Airing'
                        ? 'default'
                        : show.status === 'Upcoming'
                        ? 'secondary'
                        : 'outline'
                    }
                  >
                    {show.status}
                  </Badge>
                </TableCell>
                <TableCell>{show.seasons}</TableCell>
                <TableCell>{show.episodes}</TableCell>
                <TableCell>{show.rating}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => handleEdit(show)}>
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
      </ScrollArea>

      <TVShowDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        show={selectedShow}
        onSubmit={handleSubmit}
      />
    </div>
  );
}