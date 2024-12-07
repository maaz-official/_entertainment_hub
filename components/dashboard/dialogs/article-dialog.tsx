'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { ArticleForm } from '@/components/dashboard/articles/article-form';

interface ArticleDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  article?: any;
  onSubmit: (data: any) => Promise<void>;
}

export function ArticleDialog({
  open,
  onOpenChange,
  article,
  onSubmit,
}: ArticleDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>{article ? 'Edit Article' : 'Create New Article'}</DialogTitle>
        </DialogHeader>
        <ArticleForm article={article} onSubmit={onSubmit} />
      </DialogContent>
    </Dialog>
  );
}