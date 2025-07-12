import supabase from '@/db/supabase';
import { LATEST_PRODUCTS_LIMIT } from '@/lib/constants';
import { Product } from '@/types/product.type';
import { notFound } from 'next/navigation';

// Get all products
export const getProductsService = async (): Promise<Product[]> => {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .limit(LATEST_PRODUCTS_LIMIT)
    .order('created_at', { ascending: false });

  if (error) {
    console.error(error);
    throw new Error('Error fetching products');
  }

  return data;
};

// Get a product by its Slug
export const getProductBySlugService = async (
  slug: string
): Promise<Product> => {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error) {
    console.error(error);
    notFound();
  }

  return data;
};
