'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { TVShowForm } from '@/components/dashboard/tv-shows/tv-show-form';

interface TVShowDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  show?: any;
  onSubmit: (data: any) => Promise<void>;
}

export function TVShowDialog({
  open,
  onOpenChange,
  show,
  onSubmit,
}: TVShowDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{show ? 'Edit TV Show' : 'Add New TV Show'}</DialogTitle>
        </DialogHeader>
        <TVShowForm show={show} onSubmit={onSubmit} />
      </DialogContent>
    </Dialog>
  );
}