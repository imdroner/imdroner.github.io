import { LucideIcon } from 'lucide-react';

// 기능 카드 컴포넌트
export function FeatureCard({ 
  icon: Icon, 
  title, 
  description 
}: { 
  icon: LucideIcon; 
  title: string; 
  description: string;
}) {
  return (
    <div className="text-center">
      <div className="flex justify-center mb-2">
        <Icon className="w-8 h-8 text-blue-600" />
      </div>
      <div className="font-semibold text-lg text-gray-900 mb-1">{title}</div>
      <div className="text-sm text-gray-600">{description}</div>
    </div>
  );
}

// 스펙 헤더 행
export function SpecHeaderRow({ title }: { title: string }) {
  return (
    <tr>
      <td 
        colSpan={2} 
        className="px-6 py-4 font-bold text-lg text-gray-900"
      >
        {title}
      </td>
    </tr>
  );
}

// 스펙 행
export function SpecRow({ 
  label, 
  value, 
  highlight = false 
}: { 
  label: string;
  value: React.ReactNode;
  highlight?: boolean;
}) {
  return (
    <tr>
      <td className="px-6 py-4 font-medium text-gray-900 w-1/12 align-top">
      </td>
      <td className="px-6 py-4 font-medium text-gray-900 w-1/4 align-top">
        {label}
      </td>
      <td className="px-6 py-4 text-gray-900">
        {value}
      </td>
    </tr>
  );
}

