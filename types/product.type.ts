import z from 'zod';
import { insertProductSchema } from '@/lib/validators/product.validator';

export type Product = z.infer<typeof insertProductSchema> & {
  id: string;
  rating: number;
  created_at: Date;
};
