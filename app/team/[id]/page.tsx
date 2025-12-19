import { teamMembers, educationData, certificateData, experienceData, activityData } from '@/data/team';
import { notFound } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { 
    User, 
    Phone, 
    Mail, 
    FileText, 
    GraduationCap, 
    Briefcase, 
    Award, 
    Trophy,
    Zap,
    Globe,
    Instagram,
    Youtube,
    Bookmark,
    ArrowLeft
} from 'lucide-react';

// 정적 경로 생성
export async function generateStaticParams() {
  return teamMembers.map((member) => ({
    id: member.id,
  }));
}

export default function TeamMemberPage({ params }: { params: { id: string } }) {
  const member = teamMembers.find(m => m.id === params.id);

  if (!member) {
    notFound();
  }

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      {/* 뒤로 가기 버튼 */}
      <Button variant="ghost" asChild className="mb-6">
        <Link href="/team">
          <ArrowLeft className="h-4 w-4 mr-2" />
          팀 목록으로 돌아가기
        </Link>
      </Button>

      <h1 className="text-3xl font-bold mb-8 text-center">프로필</h1>

      {/* 프로필 헤더 카드 */}
      <Card className="mb-8">
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <Avatar className="w-32 h-32">
              <AvatarImage src={member.avatar} alt={member.name} />
              <AvatarFallback>{member.name.substring(0,2 )}</AvatarFallback>
            </Avatar>
            <div className="text-center md:text-left flex-1">
              <h2 className="text-3xl font-bold mb-2">{member.name}</h2>
              <p className="text-xl text-muted-foreground mb-2">
                {member.role} / {member.position}
              </p>
              {member.website && (
                <a 
                  href={member.website} 
                  className="text-primary hover:underline inline-flex items-center gap-2" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Globe className="h-4 w-4" />
                  {member.website.replace(/(^\w+:|^)\/\//, '').replace('www.', '')}
                </a>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 gap-6">
        {/* 기본정보 카드 */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5 text-primary" />
              기본정보
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-3">
              <User className="h-4 w-4 text-muted-foreground" />
              <span className="font-medium text-muted-foreground min-w-[60px]">이름:</span>
              <span>{member.name}</span>
            </div>
            {member.phone && (
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span className="font-medium text-muted-foreground min-w-[60px]">연락처:</span>
                <span>{member.phone}</span>
              </div>
            )}
            {member.email && (
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="font-medium text-muted-foreground min-w-[60px]">이메일:</span>
                <span>{member.email}</span>
              </div>
            )}
          </CardContent>
        </Card>

        {/* 상세 소개 카드 */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              상세 소개
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground whitespace-pre-line leading-relaxed">
              {member.bio}
            </p>
          </CardContent>
        </Card>

        {/* 전문 분야 태그 */}
        {member.tags && member.tags.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                전문 분야
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {member.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-sm">
                    #{tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* 상세 프로필 정보 (hasProfile이 true인 경우) */}
        {member.hasProfile && (
          <>
            {/* 학력 카드 */}
            {educationData && educationData[0]?.items && educationData[0].items.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-primary" />
                    학력
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {educationData[0].items.map((item, idx) => (
                    <div key={idx}>
                      {idx > 0 && <Separator className="my-4" />}
                      <div className="border-l-4 border-green-500 pl-4">
                        <div className="font-semibold">{item.title}</div>
                        <Badge variant="outline" className="mt-1 mb-2">
                          {item.date}
                        </Badge>
                        <div className="text-sm text-muted-foreground">{item.subTitle}</div>
                        {item.description && (
                          <div className="text-sm text-muted-foreground mt-1">{item.description}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}

            {/* 경력 카드 */}
            {experienceData && experienceData[0]?.items && experienceData[0].items.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Briefcase className="h-5 w-5 text-primary" />
                    경력
                  </CardTitle>
                  <CardDescription>
                    총 {experienceData[0].items.length}개의 프로젝트 수행
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {experienceData[0].items.map((item, idx) => (
                    <div key={idx}>
                      {idx > 0 && <Separator className="my-4" />}
                      <div className="border-l-4 border-blue-500 pl-4">
                        <div className="font-semibold">{item.title}</div>
                        <div className="text-sm text-muted-foreground">{item.client}</div>
                        <div className="flex items-center gap-2 mt-1 mb-2">
                          <Badge variant="secondary">{item.year}. {item.month}</Badge>
                          <span className="text-sm text-muted-foreground">{item.subTitle}</span>
                        </div>
                        {item.description && (
                          <div className="text-sm text-muted-foreground">{item.description}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}

            {/* 보유기술 카드 */}
            {certificateData && certificateData[0]?.items && certificateData[0].items.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-primary" />
                    보유기술
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {certificateData[0].items.map((item, idx) => (
                    <div key={idx}>
                      {idx > 0 && <Separator className="my-4" />}
                      <div className="border-l-4 border-purple-500 pl-4">
                        <div className="font-semibold">{item.title}</div>
                        <div className="text-sm text-muted-foreground mt-1">{item.subTitle}</div>
                        {item.description && (
                          <div className="text-sm text-muted-foreground mt-1">{item.description}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}

            {/* 자격사항 카드 */}
            {certificateData && certificateData[1]?.items && certificateData[1].items.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary" />
                    자격사항
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {certificateData[1].items.map((item, idx) => (
                    <div key={idx}>
                      {idx > 0 && <Separator className="my-4" />}
                      <div className="border-l-4 border-green-500 pl-4">
                        <div className="font-semibold">{item.title}</div>
                        {item.level && (
                          <Badge variant="default" className="mt-1 mb-2">
                            {item.level}
                          </Badge>
                        )}
                        <div className="text-sm text-muted-foreground">{item.subTitle}</div>
                        {item.description && (
                          <div className="text-sm text-muted-foreground mt-1">{item.description}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}

            {/* 활동/수상 카드 */}
            {activityData && activityData.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-primary" />
                    활동 및 수상
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {activityData.map((section, idx) => (
                    <div key={idx}>
                      {section.items.map((item, i) => (
                        <div key={i}>
                          {i > 0 && <Separator className="my-4" />}
                          <div className="border-l-4 border-orange-500 pl-4">
                            <div className="font-medium">{item.title}</div>
                            <div className="flex flex-wrap items-center gap-2 mt-1 mb-2">
                              {item.subTitle && (
                                <Badge variant="outline">{item.subTitle}</Badge>
                              )}
                              {item.date && (
                                <span className="text-sm text-muted-foreground">{item.date}</span>
                              )}
                            </div>
                            {item.description && (
                              <div className="text-sm text-muted-foreground">{item.description}</div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}
          </>
        )}

        {/* 소셜네트워크 카드 */}
        {member.contacts && member.contacts.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-primary" />
                소셜네트워크
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {member.contacts.map((contact) => (
                <div key={contact.label} className="flex items-center gap-3">
                  {contact.label === 'Email' && <Mail className="h-4 w-4 text-muted-foreground" />}
                  {contact.label === 'Instagram' && <Instagram className="h-4 w-4 text-pink-500" />}
                  {contact.label === 'Youtube' && <Youtube className="h-4 w-4 text-red-500" />}
                  {contact.label === 'Blog' && <Bookmark className="h-4 w-4 text-green-600" />}
                  <span className="font-medium text-muted-foreground min-w-[80px]">{contact.label}:</span>
                  <a 
                    href={contact.href} 
                    className="text-primary hover:underline" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    {contact.value}
                  </a>
                </div>
              ))}
            </CardContent>
          </Card>
        )}
      </div>
    </main>
  );
}

