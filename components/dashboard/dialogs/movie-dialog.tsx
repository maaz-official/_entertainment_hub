'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { MovieForm } from '@/components/dashboard/movies/movie-form';

interface MovieDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  movie?: any;
  onSubmit: (data: any) => Promise<void>;
}

export function MovieDialog({
  open,
  onOpenChange,
  movie,
  onSubmit,
}: MovieDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>{movie ? 'Edit Movie' : 'Add New Movie'}</DialogTitle>
        </DialogHeader>
        <MovieForm movie={movie} onSubmit={onSubmit} />
      </DialogContent>
    </Dialog>
  );
}