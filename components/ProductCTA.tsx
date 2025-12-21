import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Mail, Phone, Check } from 'lucide-react';

interface ProductCTAProps {
  productName?: string;
  title?: string;
  description?: string;
  features?: string[];
}

export default function ProductCTA({
  productName,
  title,
  description,
  features = ['무료 현장 데모', '맞춤형 견적 제공', '24시간 이내 답변']
}: ProductCTAProps) {
  const defaultTitle = productName 
    ? `${productName}\n구매 상담을 시작하세요` 
    : '구매 상담이 필요하신가요?';
  
  const defaultDescription = '전문 컨설턴트가 귀사의 요구사항에 맞는\n최적의 솔루션을 제안해드립니다';

  return (
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
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 whitespace-pre-line">
          {title || defaultTitle}
        </h2>
        <p className="text-xl text-white/90 mb-8 leading-relaxed whitespace-pre-line">
          {description || defaultDescription}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
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

        <div className="flex flex-col sm:flex-row gap-6 justify-center text-white/80">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-400" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

