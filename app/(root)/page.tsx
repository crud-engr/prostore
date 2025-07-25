import ProductList from '@/components/shared/product/product-list';
import { getLatestProducts } from '@/lib/actions/product/product.action';

const HomePage = async () => {
  const latestProducts = await getLatestProducts();
  return (
    <>
      <ProductList data={latestProducts} title='Newest Arrivals' />
    </>
  );
};

export default HomePage;
