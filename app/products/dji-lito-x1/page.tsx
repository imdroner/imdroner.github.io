import ProductDetailPage from '../[id]/page';

export default async function Page() {
  return ProductDetailPage({ params: Promise.resolve({ id: 'dji-lito-x1' }) });
}
