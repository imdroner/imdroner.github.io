import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function PrivacyPage() {
  const lastUpdated = '2025년 12월 19일';

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 to-slate-700">
        <div className="relative z-10 text-center px-4 py-20">
          <Badge variant="hero" className="mb-6 text-base px-6 py-2">
            Privacy Policy
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            개인정보처리방침
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            아이엠드론은 고객님의 개인정보를 소중히 여기며,<br />
            관련 법령을 준수하여 안전하게 보호하고 있습니다.
          </p>
          <p className="text-sm text-white/70 mt-4">
            최종 수정일: {lastUpdated}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <Card className="mb-8">
            <CardContent className="p-8">
              <div className="space-y-8">
                {/* 제1조 */}
                <div>
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <span className="text-primary">제1조</span>
                    개인정보의 처리 목적
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      아이엠드론(이하 "회사"라 함)은 다음의 목적을 위하여 개인정보를 처리합니다. 
                      처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 
                      이용 목적이 변경되는 경우에는 「개인정보 보호법」 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
                    </p>
                    <div className="ml-4 space-y-2">
                      <p><strong>1. 서비스 제공</strong></p>
                      <p className="ml-4">드론 촬영 및 관련 서비스 제공, 계약서 작성 및 이행, 요금 결제 및 정산</p>
                      
                      <p><strong>2. 고객 상담 및 문의 응대</strong></p>
                      <p className="ml-4">견적 문의, 기술 상담, 민원 처리, 고지사항 전달</p>
                      
                      <p><strong>3. 마케팅 및 광고 활용</strong></p>
                      <p className="ml-4">신규 서비스 안내, 이벤트 및 프로모션 정보 제공 (동의한 경우에 한함)</p>
                      
                      <p><strong>4. 서비스 개선</strong></p>
                      <p className="ml-4">서비스 이용 기록 분석을 통한 품질 개선</p>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* 제2조 */}
                <div>
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <span className="text-primary">제2조</span>
                    처리하는 개인정보의 항목
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>회사는 다음의 개인정보 항목을 처리하고 있습니다.</p>
                    <div className="ml-4 space-y-2">
                      <p><strong>1. 필수 항목</strong></p>
                      <p className="ml-4">• 성명, 연락처(전화번호, 이메일), 회사명(법인의 경우)</p>
                      
                      <p><strong>2. 선택 항목</strong></p>
                      <p className="ml-4">• 주소, 생년월일, 홈페이지 주소, SNS 계정</p>
                      
                      <p><strong>3. 자동 수집 항목</strong></p>
                      <p className="ml-4">• 서비스 이용 기록, 접속 로그, 쿠키, 접속 IP 정보, 기기 정보</p>
                      
                      <p><strong>4. 결제 정보</strong></p>
                      <p className="ml-4">• 은행 계좌 정보, 카드 정보 (결제 대행사를 통해 처리되며, 회사는 최소한의 정보만 보유)</p>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* 제3조 */}
                <div>
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <span className="text-primary">제3조</span>
                    개인정보의 처리 및 보유 기간
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      회사는 법령에 따른 개인정보 보유·이용 기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용 기간 내에서 개인정보를 처리·보유합니다.
                    </p>
                    <div className="ml-4 space-y-2">
                      <p><strong>1. 서비스 이용 계약</strong></p>
                      <p className="ml-4">• 계약 종료 후 5년 (전자상거래법에 따른 계약·청약철회 기록 보존)</p>
                      
                      <p><strong>2. 대금 결제 및 재화 공급 기록</strong></p>
                      <p className="ml-4">• 5년 (전자상거래법)</p>
                      
                      <p><strong>3. 소비자 불만 및 분쟁 처리 기록</strong></p>
                      <p className="ml-4">• 3년 (전자상거래법)</p>
                      
                      <p><strong>4. 세법에 따른 거래 기록</strong></p>
                      <p className="ml-4">• 5년 (국세기본법)</p>
                      
                      <p><strong>5. 마케팅 및 광고 동의 정보</strong></p>
                      <p className="ml-4">• 동의 철회 시 또는 목적 달성 시까지</p>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* 제4조 */}
                <div>
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <span className="text-primary">제4조</span>
                    개인정보의 제3자 제공
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      회사는 원칙적으로 정보주체의 개인정보를 제1조(개인정보의 처리 목적)에서 명시한 범위 내에서만 처리하며, 
                      정보주체의 동의, 법률의 특별한 규정 등 「개인정보 보호법」 제17조 및 제18조에 해당하는 경우에만 개인정보를 제3자에게 제공합니다.
                    </p>
                    <p className="font-semibold mt-4">현재 회사는 개인정보를 제3자에게 제공하고 있지 않습니다.</p>
                  </div>
                </div>

                <Separator />

                {/* 제5조 */}
                <div>
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <span className="text-primary">제5조</span>
                    개인정보 처리의 위탁
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>회사는 원활한 서비스 제공을 위해 다음과 같이 개인정보 처리 업무를 외부에 위탁하고 있습니다.</p>
                    <div className="ml-4 space-y-2">
                      <p><strong>1. 결제 처리 대행</strong></p>
                      <p className="ml-4">• 수탁자: 토스페이먼츠, 네이버페이 등</p>
                      <p className="ml-4">• 위탁 업무 내용: 결제 승인 및 정산</p>
                      
                      <p><strong>2. 웹 호스팅</strong></p>
                      <p className="ml-4">• 수탁자: Vercel, AWS 등</p>
                      <p className="ml-4">• 위탁 업무 내용: 웹사이트 운영 및 데이터 보관</p>
                    </div>
                    <p className="mt-4">
                      회사는 위탁 계약 체결 시 개인정보 보호법 제26조에 따라 위탁업무 수행 목적 외 개인정보 처리 금지, 
                      기술적·관리적 보호조치, 재위탁 제한, 수탁자에 대한 관리·감독, 손해배상 등 책임에 관한 사항을 계약서 등 문서에 명시하고, 
                      수탁자가 개인정보를 안전하게 처리하는지를 감독하고 있습니다.
                    </p>
                  </div>
                </div>

                <Separator />

                {/* 제6조 */}
                <div>
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <span className="text-primary">제6조</span>
                    정보주체의 권리·의무 및 행사 방법
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>정보주체는 회사에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다.</p>
                    <div className="ml-4 space-y-2">
                      <p>1. 개인정보 열람 요구</p>
                      <p>2. 오류 등이 있을 경우 정정 요구</p>
                      <p>3. 삭제 요구</p>
                      <p>4. 처리 정지 요구</p>
                    </div>
                    <p className="mt-4">
                      제1항에 따른 권리 행사는 회사에 대해 서면, 전화, 전자우편, 모사전송(FAX) 등을 통하여 하실 수 있으며 
                      회사는 이에 대해 지체 없이 조치하겠습니다.
                    </p>
                    <p>
                      정보주체가 개인정보의 오류 등에 대한 정정 또는 삭제를 요구한 경우에는 
                      회사는 정정 또는 삭제를 완료할 때까지 당해 개인정보를 이용하거나 제공하지 않습니다.
                    </p>
                  </div>
                </div>

                <Separator />

                {/* 제7조 */}
                <div>
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <span className="text-primary">제7조</span>
                    개인정보의 파기
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      회사는 개인정보 보유 기간의 경과, 처리 목적 달성 등 개인정보가 불필요하게 되었을 때에는 
                      지체 없이 해당 개인정보를 파기합니다.
                    </p>
                    <div className="ml-4 space-y-2">
                      <p><strong>파기 절차</strong></p>
                      <p className="ml-4">
                        이용자가 입력한 정보는 목적 달성 후 별도의 DB에 옮겨져(종이의 경우 별도의 서류) 
                        내부 방침 및 기타 관련 법령에 따라 일정기간 저장된 후 혹은 즉시 파기됩니다.
                      </p>
                      
                      <p><strong>파기 방법</strong></p>
                      <p className="ml-4">• 전자적 파일 형태: 복구 불가능한 방법으로 영구 삭제</p>
                      <p className="ml-4">• 종이 문서: 분쇄기로 분쇄하거나 소각</p>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* 제8조 */}
                <div>
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <span className="text-primary">제8조</span>
                    개인정보의 안전성 확보 조치
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>회사는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.</p>
                    <div className="ml-4 space-y-2">
                      <p>1. 관리적 조치: 내부관리계획 수립·시행, 정기적 직원 교육</p>
                      <p>2. 기술적 조치: 개인정보처리시스템 등의 접근 권한 관리, 접근 통제 시스템 설치, 고유 식별 정보 등의 암호화, 보안 프로그램 설치</p>
                      <p>3. 물리적 조치: 전산실, 자료 보관실 등의 접근 통제</p>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* 제9조 */}
                <div>
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <span className="text-primary">제9조</span>
                    개인정보 보호책임자
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 
                      개인정보 처리와 관련한 정보주체의 불만 처리 및 피해 구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
                    </p>
                    <Card className="mt-4 bg-muted/30">
                      <CardContent className="p-6">
                        <div className="space-y-2">
                          <p><strong>개인정보 보호책임자</strong></p>
                          <p>• 성명: 박영진</p>
                          <p>• 직책: 대표이사</p>
                          <p>• 연락처: 010-4790-6650</p>
                          <p>• 이메일: imdrone.site@gmail.com</p>
                        </div>
                      </CardContent>
                    </Card>
                    <p className="mt-4">
                      정보주체께서는 회사의 서비스를 이용하시면서 발생한 모든 개인정보 보호 관련 문의, 불만 처리, 피해 구제 등에 관한 사항을 
                      개인정보 보호책임자에게 문의하실 수 있습니다. 회사는 정보주체의 문의에 대해 지체 없이 답변 및 처리해드릴 것입니다.
                    </p>
                  </div>
                </div>

                <Separator />

                {/* 제10조 */}
                <div>
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <span className="text-primary">제10조</span>
                    권익침해 구제 방법
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      정보주체는 개인정보침해로 인한 구제를 받기 위하여 개인정보분쟁조정위원회, 
                      한국인터넷진흥원 개인정보침해신고센터 등에 분쟁 해결이나 상담 등을 신청할 수 있습니다.
                    </p>
                    <div className="ml-4 space-y-2">
                      <p><strong>개인정보분쟁조정위원회</strong></p>
                      <p className="ml-4">• 전화: 1833-6972</p>
                      <p className="ml-4">• 홈페이지: www.kopico.go.kr</p>
                      
                      <p><strong>개인정보침해신고센터</strong></p>
                      <p className="ml-4">• 전화: (국번없이) 118</p>
                      <p className="ml-4">• 홈페이지: privacy.kisa.or.kr</p>
                      
                      <p><strong>대검찰청 사이버범죄수사단</strong></p>
                      <p className="ml-4">• 전화: 1301</p>
                      <p className="ml-4">• 홈페이지: www.spo.go.kr</p>
                      
                      <p><strong>경찰청 사이버안전국</strong></p>
                      <p className="ml-4">• 전화: (국번없이) 182</p>
                      <p className="ml-4">• 홈페이지: cyberbureau.police.go.kr</p>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* 제11조 */}
                <div>
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <span className="text-primary">제11조</span>
                    개인정보 처리방침의 변경
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      이 개인정보 처리방침은 {lastUpdated}부터 적용되며, 
                      법령 및 방침에 따른 변경 내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 부칙 */}
          <Card className="bg-muted/30">
            <CardContent className="p-6">
              <div className="space-y-2 text-sm text-muted-foreground">
                <p className="font-bold text-foreground">부칙</p>
                <p>이 개인정보처리방침은 {lastUpdated}부터 시행됩니다.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}

