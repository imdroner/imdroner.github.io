import { products } from '@/data/products';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import ProductDetailHero from '@/components/ProductDetailHero';
import ProductCTA from '@/components/ProductCTA';
import { 
  Package, 
  Check, 
  Mail, 
  Phone, 
  ChevronLeft,
  FileText,
  ShoppingBag,
  ArrowRight
} from 'lucide-react';

export function generateStaticParams() {
    // hasDetailedPage가 없는 제품만 동적 생성
    return products
        .filter(product => !product.hasDetailedPage)
        .map((product) => ({ id: product.id }));
}

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const product = products.find((p) => p.id === id);
    
    if (!product) return notFound();

    // 관련 제품 추천 (같은 카테고리의 다른 제품 3개)
    const relatedProducts = products
        .filter(p => p.id !== product.id && p.category === product.category)
        .slice(0, 3);

    return (
        <main className="min-h-screen">
            {/* Breadcrumb */}
            <section className="bg-muted/50 py-6">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Link href="/" className="hover:text-primary">홈</Link>
                        <ChevronLeft className="h-4 w-4 rotate-180" />
                        <Link href="/products" className="hover:text-primary">제품 구매</Link>
                        <ChevronLeft className="h-4 w-4 rotate-180" />
                        <span className="text-foreground font-medium">{product.name}</span>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <ProductDetailHero product={product} />

            <Separator />

            {/* Detailed Description */}
            {product.detailDescription && (
                <section className="py-12 bg-muted/50">
                    <div className="max-w-7xl mx-auto px-4">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-2xl">
                                    <FileText className="h-6 w-6 text-primary" />
                                    제품 상세 설명
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-lg leading-relaxed text-muted-foreground">
                                    {product.detailDescription}
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </section>
            )}

            {/* Specifications */}
            {product.specifications && product.specifications.length > 0 && (
                <>
                    <Separator />
                    <section className="py-12">
                        <div className="max-w-7xl mx-auto px-4">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2 text-2xl">
                                        <Package className="h-6 w-6 text-primary" />
                                        제품 사양
                                    </CardTitle>
                                    <CardDescription>
                                        상세한 기술 스펙을 확인하세요
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {product.specifications.map((spec, index) => (
                                            <div 
                                                key={index} 
                                                className="flex justify-between items-center p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                                            >
                                                <span className="font-medium text-muted-foreground">
                                                    {spec.label}
                                                </span>
                                                <span className="font-semibold">
                                                    {spec.value}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </section>
                </>
            )}

            {/* Related Products */}
            {relatedProducts.length > 0 && (
                <>
                    <Separator />
                    <section className="py-20 bg-muted/50">
                        <div className="max-w-7xl mx-auto px-4">
                            <div className="mb-12">
                                <Badge variant="outline" className="mb-4">Related Products</Badge>
                                <h2 className="text-4xl font-bold mb-4">관련 제품</h2>
                                <p className="text-xl text-muted-foreground">
                                    {product.category} 카테고리의 다른 제품을 확인하세요
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {relatedProducts.map((relatedProduct) => (
                                    <Card key={relatedProduct.id} variant="hover-lg" className="flex flex-col">
                                        <CardHeader>
                                            <div className="aspect-video w-full bg-muted rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                                                <Package className="h-16 w-16 text-muted-foreground/30" />
                                            </div>
                                            <Badge variant="outline" className="w-fit mb-2">
                                                {relatedProduct.category}
                                            </Badge>
                                            <CardTitle className="text-xl">{relatedProduct.name}</CardTitle>
                                            <CardDescription className="line-clamp-2">
                                                {relatedProduct.description}
                                            </CardDescription>
                                        </CardHeader>

                                        <CardContent className="flex-grow">
                                            <ul className="space-y-2">
                                                {relatedProduct.features.slice(0, 3).map((feature, index) => (
                                                    <li key={index} className="flex items-start gap-2 text-sm">
                                                        <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                                                        <span>{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </CardContent>

                                        <CardContent>
                                            <Button asChild variant="outline" className="w-full gap-2">
                                                <Link href={`/products/${relatedProduct.id}`}>
                                                    상세보기
                                                    <ArrowRight className="h-4 w-4" />
                                                </Link>
                                            </Button>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>

                            <div className="text-center mt-12">
                                <Button asChild size="lg" variant="outline" className="gap-2">
                                    <Link href="/products">
                                        <ShoppingBag className="h-5 w-5" />
                                        모든 제품 보기
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </section>
                </>
            )}

            {/* CTA Section */}
            <ProductCTA productName={product.name} />
        </main>
    );
}

