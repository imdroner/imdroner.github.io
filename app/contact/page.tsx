import { generalData } from '@/data/general';

export default function ContactPage() {
    return (
        <main className="max-w-lg mx-auto px-4 py-16">
            <h1 className="text-3xl font-bold mb-6 text-center">문의하기</h1>
            <div className="flex flex-col gap-6">
                {/* 연락처 카드 */}
                <div className="bg-white dark:bg-neutral-900 rounded-xl shadow p-6">
                    <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        연락처
                    </h2>
                    <div className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2 8.5C2 6.01472 4.01472 4 6.5 4h11C19.9853 4 22 6.01472 22 8.5v7c0 2.4853-2.0147 4.5-4.5 4.5h-11C4.01472 20 2 17.9853 2 15.5v-7z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 8h.01M6 12h.01M6 16h.01M10 8h4M10 12h4M10 16h4" />
                        </svg>
                        <a href="tel:010-4790-6650" className="text-blue-600 text-base font-medium">010-4790-6650</a>

                    </div>
                </div>
                {/* 이메일 카드 */}
                <div className="bg-white dark:bg-neutral-900 rounded-xl shadow p-6">
                    <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        이메일
                    </h2>
                    <div className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <a href="mailto:imdrone.site@gmail.com" className="text-blue-600 underline text-base font-medium">imdrone.site@gmail.com</a>
                    </div>
                </div>
                {/* 소셜네트워크 카드 */}
                <div className="bg-white dark:bg-neutral-900 rounded-xl shadow p-6">
                    <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 0c2.21 0 4 4.477 4 10s-1.79 10-4 10-4-4.477-4-10 1.79-10 4-10zm0 0v20" />
                        </svg>
                        소셜네트워크
                    </h2>
                    <ul className="space-y-3">
                        {generalData.contacts.filter(c => c.label !== 'Email').map((contact) => (
                            <li key={contact.label} className="flex items-center gap-3">
                                {contact.label === 'Youtube' && (
                                    <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                    </svg>
                                )}
                                {contact.label === 'Instagram' && (
                                    <svg className="w-5 h-5 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.781c-.49 0-.928-.175-1.297-.49-.368-.315-.49-.753-.49-1.243 0-.49.122-.928.49-1.243.369-.315.807-.49 1.297-.49s.928.175 1.297.49c.368.315.49.753.49 1.243 0 .49-.122.928-.49 1.243-.369.315-.807.49-1.297.49zm-7.83 1.418c-.49 0-.928.175-1.297.49-.368.315-.49.753-.49 1.243s.122.928.49 1.243c.369.315.807.49 1.297.49s.928-.175 1.297-.49c.368-.315.49-.753.49-1.243s-.122-.928-.49-1.243c-.369-.315-.807-.49-1.297-.49z" />
                                    </svg>
                                )}
                                {contact.label === 'Blog' && (
                                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 20h9" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.5a2.121 2.121 0 113 3L7 19l-4 1 1-4 12.5-12.5z" />
                                    </svg>
                                )}
                                <span className="font-medium text-gray-700 dark:text-gray-300">{contact.label}:</span>
                                <a href={contact.href} className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">{contact.value}</a>
                            </li>
                        ))}

                    </ul>
                </div>
                <p className="text-xs text-gray-400 mt-6 text-center">※ 문의는 이메일 또는 SNS로 연락해 주세요.</p>
            </div>
        </main>
    );
} 