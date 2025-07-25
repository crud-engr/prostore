export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || 'Prostore';
export const APP_DESCRIPTION =
  process.env.APP_DESCRIPTION ||
  'Ecommerce platform built with Next.js and Tailwind CSS';
export const SERVER_URL =
  process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000';
export const LATEST_PRODUCTS_LIMIT =
  Number(process.env.LATEST_PRODUCTS_LIMIT) || 4;
export const SUPABASE_URL = process.env.SUPABASE_URL || '';
export const SUPABASE_KEY = process.env.SUPABASE_KEY || '';
export const signInDefaultValues = {
  email: '',
  password: '',
};
export const SUPERBASE_SERVICE_ROLE_KEY =
  process.env.SUPERBASE_SERVICE_ROLE_KEY || '';
