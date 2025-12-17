import { generalData } from '@/data/general';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, Instagram, Youtube, FileText } from 'lucide-react';

export default function ContactPage() {
    return (
        <main className="max-w-lg mx-auto px-4 py-16">
            <h1 className="text-3xl font-bold mb-6 text-center">문의하기</h1>
            <div className="flex flex-col gap-6">
                {/* 연락처 카드 */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Phone className="h-5 w-5 text-primary" />
                            연락처
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-center gap-3">
                            <Phone className="h-5 w-5 text-muted-foreground" />
                            <span className="font-medium text-base">010-4790-6650</span>
                        </div>
                    </CardContent>
                </Card>

                {/* 이메일 카드 */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Mail className="h-5 w-5 text-primary" />
                            이메일
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-center gap-3">
                            <Mail className="h-5 w-5 text-muted-foreground" />
                            <a 
                                href="mailto:imdrone.site@gmail.com" 
                                className="text-primary hover:underline text-base font-medium"
                            >
                                imdrone.site@gmail.com
                            </a>
                        </div>
                    </CardContent>
                </Card>

                {/* 소셜네트워크 카드 */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <FileText className="h-5 w-5 text-primary" />
                            소셜네트워크
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        {generalData.contacts.map((contact) => (
                            <div key={contact.label} className="flex items-center gap-3">
                                {contact.label === 'Email' && <Mail className="h-4 w-4 text-muted-foreground" />}
                                {contact.label === 'Instagram' && <Instagram className="h-4 w-4 text-pink-500" />}
                                {contact.label === 'Youtube' && <Youtube className="h-4 w-4 text-red-500" />}
                                {contact.label === 'Blog' && <FileText className="h-4 w-4 text-green-600" />}
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

                <p className="text-xs text-muted-foreground mt-6 text-center">
                    ※ 문의는 이메일 또는 SNS로 연락해 주세요.
                </p>
            </div>
        </main>
    );
}
