import { redirect } from 'next/navigation';

/**
 * 프로필 페이지 리다이렉트
 * 
 * 이 페이지는 새로운 팀 시스템으로 마이그레이션되었습니다.
 * 기존 /profile URL을 /team/youngjin-park로 자동 리다이렉트합니다.
 * 
 * 목적:
 * - SEO: 기존 URL의 검색 엔진 순위 유지
 * - 북마크: 사용자 북마크 호환성 보장
 * - 외부 링크: 외부에서 연결된 링크 유지
 * - 하위 호환성: 이전 버전과의 호환성 보장
 */
export default function ProfilePage() {
  // 새로운 팀 시스템의 박영진님 프로필로 영구 리다이렉트
  redirect('/team/youngjin-park');
}
