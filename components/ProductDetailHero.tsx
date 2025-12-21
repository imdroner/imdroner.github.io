'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ProductImageGallery from '@/components/ProductImageGallery';
import { Product } from '@/data/products';
import { Mail, Phone, Check } from 'lucide-react';

interface ProductDetailHeroProps {
  product: Product;
}

export default function ProductDetailHero({ product }: ProductDetailHeroProps) {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-12">
          {/* Left Column - Image Gallery (6/10) */}
          <div className="lg:col-span-6">
            <ProductImageGallery 
              images={product.images && product.images.length > 0 ? product.images : [product.image]}
              productName={product.name}
            />
          </div>

          {/* Right Column - Details (4/10) */}
          <div className="lg:col-span-4">
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
              <Card variant="default">
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
  );
}

