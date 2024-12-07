'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { CelebrityForm } from '@/components/dashboard/celebrities/celebrity-form';

interface CelebrityDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  celebrity?: any;
  onSubmit: (data: any) => Promise<void>;
}

export function CelebrityDialog({
  open,
  onOpenChange,
  celebrity,
  onSubmit,
}: CelebrityDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>{celebrity ? 'Edit Celebrity' : 'Add New Celebrity'}</DialogTitle>
        </DialogHeader>
        <CelebrityForm celebrity={celebrity} onSubmit={onSubmit} />
      </DialogContent>
    </Dialog>
  );
}