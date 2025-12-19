import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function TermsPage() {
  const lastUpdated = '2025년 12월 19일';

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 to-slate-700">
        <div className="relative z-10 text-center px-4 py-20">
          <Badge variant="hero" className="mb-6 text-base px-6 py-2">
            Terms of Service
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            서비스 이용약관
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            아이엠드론 서비스 이용을 위한<br />
            약관 및 규정을 안내합니다.
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
                    목적
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      본 약관은 아이엠드론(이하 "회사"라 함)이 제공하는 드론 촬영 및 관련 서비스(이하 "서비스"라 함)의 
                      이용과 관련하여 회사와 이용자의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.
                    </p>
                  </div>
                </div>

                <Separator />

                {/* 제2조 */}
                <div>
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <span className="text-primary">제2조</span>
                    정의
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>본 약관에서 사용하는 용어의 정의는 다음과 같습니다.</p>
                    <div className="ml-4 space-y-2">
                      <p>
                        <strong>1. "서비스"</strong>란 회사가 제공하는 드론 항공촬영, 영상 제작, 3D 모델링, 
                        건설·건축 모니터링, 에너지 설비 점검, 드론 관제, 스마트 농업 분석, 수소 연료전지 솔루션, 
                        홈페이지 및 디지털 콘텐츠 제작 등 모든 서비스를 의미합니다.
                      </p>
                      <p>
                        <strong>2. "이용자"</strong>란 본 약관에 따라 회사가 제공하는 서비스를 이용하는 개인 또는 법인을 말합니다.
                      </p>
                      <p>
                        <strong>3. "계약"</strong>이란 회사와 이용자 간에 체결되는 서비스 제공에 관한 개별 계약을 말합니다.
                      </p>
                      <p>
                        <strong>4. "결과물"</strong>이란 서비스 제공의 결과로 생성되는 사진, 영상, 3D 모델, 데이터, 
                        보고서 등 모든 형태의 산출물을 의미합니다.
                      </p>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* 제3조 */}
                <div>
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <span className="text-primary">제3조</span>
                    약관의 명시와 개정
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      ① 회사는 본 약관의 내용을 이용자가 쉽게 알 수 있도록 회사의 웹사이트에 게시합니다.
                    </p>
                    <p>
                      ② 회사는 필요한 경우 관련 법령을 위배하지 않는 범위에서 본 약관을 개정할 수 있습니다.
                    </p>
                    <p>
                      ③ 회사가 약관을 개정할 경우에는 적용일자 및 개정사유를 명시하여 
                      현행약관과 함께 회사의 웹사이트에 그 적용일자 7일 이전부터 적용일자 전일까지 공지합니다. 
                      다만, 이용자에게 불리한 약관의 개정인 경우에는 최소 30일 전에 공지하고 이메일 등으로 개별 통지합니다.
                    </p>
                    <p>
                      ④ 이용자가 개정약관의 적용에 동의하지 않는 경우, 
                      회사 또는 이용자는 서비스 이용계약을 해지할 수 있습니다.
                    </p>
                  </div>
                </div>

                <Separator />

                {/* 제4조 */}
                <div>
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <span className="text-primary">제4조</span>
                    서비스의 제공 및 변경
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>① 회사는 다음과 같은 서비스를 제공합니다.</p>
                    <div className="ml-4 space-y-2">
                      <p>1. 드론 항공촬영 및 프리미엄 영상 제작 서비스</p>
                      <p>2. 건설·건축 현장 모니터링 및 항공측량 서비스</p>
                      <p>3. 에너지 설비(태양광, 풍력 등) 드론 점검 서비스</p>
                      <p>4. 드론 관제 및 실시간 모니터링 서비스</p>
                      <p>5. 공공·해상안전관제 및 시설점검 서비스</p>
                      <p>6. 스마트 농업 및 NDVI 필드 분석 서비스</p>
                      <p>7. 수소 연료전지 공급 및 응용 솔루션</p>
                      <p>8. 홈페이지 및 디지털 미디어 콘텐츠 제작</p>
                      <p>9. 기타 회사가 추가 개발하거나 제휴 계약 등을 통해 이용자에게 제공하는 일체의 서비스</p>
                    </div>
                    <p>
                      ② 회사는 서비스의 내용을 변경할 경우, 변경 내용을 이용자에게 통지합니다.
                    </p>
                    <p>
                      ③ 회사는 천재지변, 기상 악화, 법령 변경, 기타 불가항력적 사유로 인하여 서비스를 제공할 수 없는 경우, 
                      서비스 제공에 관한 책임이 면제됩니다.
                    </p>
                  </div>
                </div>

                <Separator />

                {/* 제5조 */}
                <div>
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <span className="text-primary">제5조</span>
                    계약의 성립
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      ① 이용자는 전화, 이메일, 웹사이트 문의 양식 등을 통해 서비스 이용을 신청할 수 있습니다.
                    </p>
                    <p>
                      ② 회사는 이용자의 신청에 대해 견적서를 제공하며, 이용자가 견적서의 내용에 동의하고 
                      계약서에 서명(전자서명 포함)하는 경우 계약이 성립됩니다.
                    </p>
                    <p>
                      ③ 회사는 다음 각 호에 해당하는 경우 승낙을 유보하거나 거절할 수 있습니다.
                    </p>
                    <div className="ml-4 space-y-2">
                      <p>1. 신청 내용에 허위, 기재 누락, 오기가 있는 경우</p>
                      <p>2. 법령에 위배되거나 사회의 안녕질서 또는 미풍양속을 저해할 목적으로 신청한 경우</p>
                      <p>3. 기타 회사가 정한 이용 요건을 충족하지 못한 경우</p>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* 제6조 */}
                <div>
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <span className="text-primary">제6조</span>
                    서비스 이용 요금 및 결제
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      ① 서비스 이용 요금은 개별 계약에서 정한 금액으로 하며, 
                      프로젝트의 규모, 난이도, 기간, 장비 사용 등에 따라 차등 적용됩니다.
                    </p>
                    <p>
                      ② 이용자는 계약 체결 시 착수금(통상 계약 금액의 50%)을 선납하고, 
                      서비스 완료 및 결과물 인도 시 잔금을 지급합니다.
                    </p>
                    <p>
                      ③ 결제는 계좌 이체, 카드 결제, 현금 등의 방법으로 이루어지며, 
                      세금계산서 또는 현금영수증을 발행합니다.
                    </p>
                    <p>
                      ④ 다음 각 호의 경우 추가 비용이 발생할 수 있습니다.
                    </p>
                    <div className="ml-4 space-y-2">
                      <p>1. 원거리 출장에 따른 교통비 및 숙박비</p>
                      <p>2. 특수 장비 사용료</p>
                      <p>3. 긴급 프로젝트에 따른 추가 비용</p>
                      <p>4. 계약 범위를 초과하는 추가 편집 또는 재촬영</p>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* 제7조 */}
                <div>
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <span className="text-primary">제7조</span>
                    서비스 제공 절차
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>① 회사는 다음과 같은 절차로 서비스를 제공합니다.</p>
                    <div className="ml-4 space-y-2">
                      <p>1. 이용자 문의 및 상담</p>
                      <p>2. 현장 답사 및 사전 조사 (필요 시)</p>
                      <p>3. 견적서 제공 및 계약 체결</p>
                      <p>4. 착수금 입금 확인</p>
                      <p>5. 비행 승인 및 관련 허가 절차 진행</p>
                      <p>6. 현장 촬영 또는 작업 수행</p>
                      <p>7. 후반 작업 (편집, 모델링, 분석 등)</p>
                      <p>8. 결과물 전달 및 검수</p>
                      <p>9. 수정 작업 (계약 범위 내)</p>
                      <p>10. 최종 결과물 인도 및 잔금 정산</p>
                    </div>
                    <p>
                      ② 각 단계별 소요 기간은 프로젝트 특성에 따라 달라지며, 계약 시 명시됩니다.
                    </p>
                  </div>
                </div>

                <Separator />

                {/* 제8조 */}
                <div>
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <span className="text-primary">제8조</span>
                    회사의 의무
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>① 회사는 관련 법령과 본 약관이 정하는 권리의 행사와 의무의 이행을 신의에 따라 성실하게 준수합니다.</p>
                    <p>② 회사는 다음 각 호의 의무를 부담합니다.</p>
                    <div className="ml-4 space-y-2">
                      <p>1. 안전한 드론 운용을 위한 법적 자격 유지 (조종자 자격증, 사업자 등록 등)</p>
                      <p>2. 드론 배상책임보험 가입 유지</p>
                      <p>3. 비행 승인 등 필요한 법적 절차 이행</p>
                      <p>4. 계약서에 명시된 품질의 서비스 제공</p>
                      <p>5. 이용자의 개인정보 보호</p>
                      <p>6. 안전 관리 및 사고 예방 조치</p>
                    </div>
                    <p>
                      ③ 회사는 천재지변, 기상 악화, 비행 승인 불가 등 불가항력적 사유로 인해 
                      서비스 제공이 불가능한 경우 이용자에게 즉시 통지하고 일정을 조율합니다.
                    </p>
                  </div>
                </div>

                <Separator />

                {/* 제9조 */}
                <div>
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <span className="text-primary">제9조</span>
                    이용자의 의무
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>① 이용자는 다음 각 호의 행위를 하여서는 안 됩니다.</p>
                    <div className="ml-4 space-y-2">
                      <p>1. 신청 또는 변경 시 허위 내용의 등록</p>
                      <p>2. 회사의 서비스를 위법한 목적으로 이용하는 행위</p>
                      <p>3. 회사의 저작권, 제3자의 저작권 등 기타 권리를 침해하는 행위</p>
                      <p>4. 공공질서 및 미풍양속에 위반되는 내용의 정보, 문장, 도형, 음향, 동영상을 전송하는 행위</p>
                      <p>5. 회사의 동의 없이 결과물을 제3자에게 재판매하거나 라이선스를 부여하는 행위</p>
                    </div>
                    <p>
                      ② 이용자는 촬영 장소가 사유지인 경우 소유주의 동의를 얻어야 하며, 
                      필요한 정보(장애물 위치, 안전 사항 등)를 회사에 제공해야 합니다.
                    </p>
                    <p>
                      ③ 이용자는 계약에서 정한 대금 지급 의무를 성실히 이행해야 합니다.
                    </p>
                  </div>
                </div>

                <Separator />

                {/* 제10조 */}
                <div>
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <span className="text-primary">제10조</span>
                    결과물의 인도 및 검수
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      ① 회사는 계약에서 정한 기한 내에 결과물을 이용자에게 인도합니다.
                    </p>
                    <p>
                      ② 결과물의 형식, 해상도, 포맷 등은 계약서에 명시된 바에 따릅니다.
                    </p>
                    <p>
                      ③ 이용자는 결과물을 인도받은 후 7일 이내에 검수하고, 
                      수정이 필요한 경우 구체적인 수정 요청 사항을 회사에 통보해야 합니다.
                    </p>
                    <p>
                      ④ 회사는 계약에서 정한 범위 내(통상 1~2회)에서 무상으로 수정 작업을 제공합니다.
                    </p>
                    <p>
                      ⑤ 검수 기간 내에 이의 제기가 없는 경우, 이용자가 결과물을 승인한 것으로 간주합니다.
                    </p>
                  </div>
                </div>

                <Separator />

                {/* 제11조 */}
                <div>
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <span className="text-primary">제11조</span>
                    저작권 및 지식재산권
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      ① 회사가 제작한 결과물에 대한 저작권 및 지식재산권은 회사에 귀속됩니다.
                    </p>
                    <p>
                      ② 이용자는 계약에서 정한 목적 및 범위 내에서 결과물을 사용할 수 있는 권리를 부여받습니다.
                    </p>
                    <p>
                      ③ 이용자는 다음 각 호의 범위 내에서 결과물을 이용할 수 있습니다.
                    </p>
                    <div className="ml-4 space-y-2">
                      <p>1. 이용자의 웹사이트, SNS, 홍보물 등에 게시</p>
                      <p>2. 이용자의 내부 자료 또는 보고서로 활용</p>
                      <p>3. 제3자에게 이용자의 서비스를 홍보하기 위한 목적으로 사용</p>
                    </div>
                    <p>
                      ④ 저작권의 완전한 양도가 필요한 경우, 계약 체결 시 별도로 협의하여 정합니다.
                    </p>
                    <p>
                      ⑤ 회사는 포트폴리오, 홍보 등의 목적으로 결과물을 사용할 수 있으며, 
                      이용자가 특별히 요청하는 경우 비공개로 처리합니다.
                    </p>
                  </div>
                </div>

                <Separator />

                {/* 제12조 */}
                <div>
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <span className="text-primary">제12조</span>
                    계약의 해지 및 환불
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      ① 이용자는 서비스 착수 전까지 계약을 해지할 수 있으며, 
                      이 경우 착수금 전액을 환불받습니다.
                    </p>
                    <p>
                      ② 서비스 착수 후 이용자의 귀책사유로 계약을 해지하는 경우, 다음과 같이 처리합니다.
                    </p>
                    <div className="ml-4 space-y-2">
                      <p>• 작업 진행률 50% 미만: 착수금의 50% 환불</p>
                      <p>• 작업 진행률 50% 이상: 환불 불가</p>
                    </div>
                    <p>
                      ③ 회사의 귀책사유로 서비스 제공이 불가능한 경우, 
                      이용자는 계약을 해지하고 지급한 금액 전액을 환불받을 수 있습니다.
                    </p>
                    <p>
                      ④ 천재지변, 기상 악화 등 불가항력적 사유로 서비스 제공이 불가능한 경우, 
                      양 당사자는 협의하여 일정을 조정하거나 계약을 해지할 수 있습니다.
                    </p>
                  </div>
                </div>

                <Separator />

                {/* 제13조 */}
                <div>
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <span className="text-primary">제13조</span>
                    손해배상 및 면책
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      ① 회사는 고의 또는 과실로 이용자에게 손해를 입힌 경우 이를 배상할 책임이 있습니다.
                    </p>
                    <p>
                      ② 회사는 다음 각 호의 경우 책임을 지지 않습니다.
                    </p>
                    <div className="ml-4 space-y-2">
                      <p>1. 천재지변, 전쟁, 테러 등 불가항력적 사유로 인한 서비스 제공 불가</p>
                      <p>2. 이용자의 귀책사유로 인한 서비스 이용 장애</p>
                      <p>3. 이용자가 제공한 정보의 부정확성으로 인한 문제</p>
                      <p>4. 제3자의 불법 행위로 인한 손해</p>
                      <p>5. 기상 악화로 인한 촬영 연기 또는 취소</p>
                    </div>
                    <p>
                      ③ 회사의 배상 책임은 계약 금액을 한도로 합니다.
                    </p>
                    <p>
                      ④ 회사는 드론 배상책임보험에 가입하고 있으며, 
                      드론 사고로 인한 제3자 피해는 보험 범위 내에서 처리됩니다.
                    </p>
                  </div>
                </div>

                <Separator />

                {/* 제14조 */}
                <div>
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <span className="text-primary">제14조</span>
                    분쟁 해결
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      ① 회사와 이용자는 서비스와 관련하여 발생한 분쟁을 원만하게 해결하기 위하여 
                      필요한 모든 노력을 하여야 합니다.
                    </p>
                    <p>
                      ② 제1항의 노력에도 불구하고 분쟁이 해결되지 않을 경우, 
                      양 당사자는 민사조정법에 따른 조정 절차를 거칠 수 있습니다.
                    </p>
                    <p>
                      ③ 본 약관과 관련된 소송은 회사의 본사 소재지를 관할하는 법원을 관할법원으로 합니다.
                    </p>
                  </div>
                </div>

                <Separator />

                {/* 제15조 */}
                <div>
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <span className="text-primary">제15조</span>
                    기타
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      ① 본 약관에 명시되지 않은 사항은 관련 법령 및 상관례에 따릅니다.
                    </p>
                    <p>
                      ② 개별 계약의 내용이 본 약관과 상충하는 경우, 개별 계약의 내용이 우선합니다.
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
                <p>이 약관은 {lastUpdated}부터 시행됩니다.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}

