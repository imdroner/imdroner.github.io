import { products } from '@/data/products';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
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
            <section className="py-12">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Left Column - Image */}
                        <div>
                            <Card className="overflow-hidden sticky top-24">
                                <div className="aspect-square bg-muted flex items-center justify-center">
                                    <Package className="h-32 w-32 text-muted-foreground/30" />
                                    {/* 실제 이미지: <img src={product.image} alt={product.name} /> */}
                                </div>
                            </Card>
                        </div>

                        {/* Right Column - Details */}
                        <div>
                            {/* Category Badge */}
                            <Badge variant="outline" className="mb-4 text-sm px-4 py-1">
                                {product.category}
                            </Badge>

                            {/* Product Name */}
                            <h1 className="text-2xl md:text-4xl font-bold mb-6">
                                {product.name}
                            </h1>

                            {/* Short Description */}
                            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                                {product.description}
                            </p>

                            {/* Price */}
                            <div className="mb-8">
                                <Card variant="hover-lg">
                                    <CardContent className="p-4">
                                        <p className="text-sm text-muted-foreground mb-2">가격</p>
                                        <p className="text-lg font-bold text-primary">
                                            {product.price === 0 
                                                ? '견적 문의' 
                                                : `₩${product.price.toLocaleString('ko-KR')}`
                                            }
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 mb-8">
                                <Button asChild size="lg" className="flex-1 gap-2" variant="primary-blue">
                                    <Link href="/contact">
                                        <Mail className="h-5 w-5" />
                                        견적 문의하기
                                    </Link>
                                </Button>
                                <Button asChild size="lg" variant="outline" className="flex-1 gap-2">
                                    <a href="tel:010-4790-6650">
                                        <Phone className="h-5 w-5" />
                                        전화 상담
                                    </a>
                                </Button>
                            </div>

                            {/* Key Features */}
                            <Card className="mb-8">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2 text-lg">
                                        주요 특징
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2">
                                        {product.features.map((feature, index) => (
                                            <li key={index} className="flex items-start gap-2 text-sm">
                                                <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                                                <span className="text-sm">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>

                            {/* Trust Badges */}
                            <div className="grid grid-cols-3 gap-4 mb-8">
                                <Card className="text-center">
                                    <CardContent className="p-4">
                                        <div className="font-bold text-primary mb-1">정품 보증</div>
                                        <p className="text-xs text-muted-foreground">100% 정품</p>
                                    </CardContent>
                                </Card>
                                <Card className="text-center">
                                    <CardContent className="p-4">
                                        <div className="font-bold text-primary mb-1">기술 지원</div>
                                        <p className="text-xs text-muted-foreground">전문가 상담</p>
                                    </CardContent>
                                </Card>
                                <Card className="text-center">
                                    <CardContent className="p-4">
                                        <div className="font-bold text-primary mb-1">신속 A/S</div>
                                        <p className="text-xs text-muted-foreground">빠른 처리</p>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

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
            <section className="relative py-20 overflow-hidden">
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: 'url(/images/team/team-hero.webp)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        filter: 'brightness(0.3)'
                    }}
                />
                <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
                    <Badge variant="hero" className="mb-6 text-base px-6 py-2">
                        <Mail className="h-4 w-4 mr-2" />
                        Contact Us
                    </Badge>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        구매 상담이 필요하신가요?
                    </h2>
                    <p className="text-xl text-white/90 mb-8 leading-relaxed">
                        전문 컨설턴트가 귀사의 요구사항에 맞는<br />
                        최적의 솔루션을 제안해드립니다
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Button asChild size="lg" variant="primary-blue" className="gap-2 text-lg px-8 py-6">
                            <Link href="/contact">
                                <Mail className="h-5 w-5" />
                                견적 문의하기
                            </Link>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="gap-2 text-lg px-8 py-6 bg-white/10 hover:bg-white/20 text-white border-white/30">
                            <a href="tel:010-4790-6650">
                                <Phone className="h-5 w-5" />
                                전화 상담
                            </a>
                        </Button>
                    </div>

                    <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center text-white/80">
                        <div className="flex items-center gap-2">
                            <Check className="h-5 w-5 text-green-400" />
                            <span>무료 현장 데모</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Check className="h-5 w-5 text-green-400" />
                            <span>맞춤형 견적 제공</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Check className="h-5 w-5 text-green-400" />
                            <span>24시간 이내 답변</span>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

