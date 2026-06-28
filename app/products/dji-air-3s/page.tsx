import ProductDetailPage from '../[id]/page';

export default async function Page() {
  return ProductDetailPage({ params: Promise.resolve({ id: 'dji-air-3s' }) });
}
