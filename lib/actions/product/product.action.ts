'use server';

import {
  getProductBySlugService,
  getProductsService,
} from '@/services/products/product.service';

// Get latest products
export async function getLatestProducts() {
  return await getProductsService();
}

// Get product by slug
export async function getProductBySlug(slug: string) {
  return await getProductBySlugService(slug);
}
