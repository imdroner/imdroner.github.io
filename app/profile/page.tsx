import { generalData } from '@/data/general';
import { educationData } from '@/data/education';
import { certificateData } from '@/data/certificate';
import { experienceData } from '@/data/experience';
import { personalData } from '@/data/personal';
import { activityData } from '@/data/activity';

export default function ProfilePage() {
    return (
        <main className="max-w-4xl mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold mb-8 text-center">프로필</h1>

            {/* 프로필 헤더 카드 */}
            <div className="bg-white dark:bg-neutral-900 rounded-xl shadow-lg p-8 mb-8">
                <div className="flex flex-col md:flex-row items-center gap-6">
                    <img src={generalData.avatar} alt={generalData.name} className="w-32 h-32 rounded-full object-cover shadow-lg" />
                    <div className="text-center md:text-left">
                        <h2 className="text-3xl font-bold mb-2">{generalData.name}</h2>
                        <p className="text-xl text-gray-700 dark:text-gray-300 mb-2">{generalData.jobTitle} / {generalData.position}</p>
                        {generalData.website && (
                            <a href={generalData.website} className="text-blue-600 hover:underline flex items-center justify-center md:justify-start gap-2" target="_blank" rel="noopener noreferrer">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                                </svg>
                                {generalData.website.replace(/(^\w+:|^)\/\//, '').replace('www.', '')}
                            </a>
                        )}
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
                {/* 기본정보 카드 */}
                <div className="bg-white dark:bg-neutral-900 rounded-xl shadow-lg p-6">
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        기본정보
                    </h3>
                    <div className="space-y-3">
                        {personalData[0]?.items?.map((item, i) => (
                            <div key={i} className="flex items-center gap-3">
                                {item.label === '이름' && (
                                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                )}
                                {item.label === '연락처' && (
                                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                )}
                                {item.label === '이메일' && (
                                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                )}
                                <span className="font-medium text-gray-700 dark:text-gray-300 min-w-[60px]">{item.label}:</span>
                                <span className="text-gray-700 dark:text-gray-300">{item.title}</span>
                                {item.subTitle && <span className="text-sm text-gray-500">({item.subTitle})</span>}
                            </div>
                        ))}
                    </div>
                </div>

                {/* 상세 소개 카드 */}
                <div className="bg-white dark:bg-neutral-900 rounded-xl shadow-lg p-6">
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        상세 소개
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line leading-relaxed">{generalData.about}</p>
                </div>

                {/* 학력 카드 */}
                <div className="bg-white dark:bg-neutral-900 rounded-xl shadow-lg p-6">
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        </svg>
                        학력
                    </h3>
                    <div className="space-y-4">
                        {educationData[0]?.items?.map((item, idx) => (
                            <div key={idx} className="border-l-4 border-green-500 pl-4">
                                <div className="font-semibold text-gray-800 dark:text-gray-200">{item.title}</div>
                                <div className="text-sm text-gray-500 mb-1">{item.date}</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">{item.subTitle}</div>
                                {item.description && <div className="text-sm text-gray-600 dark:text-gray-400">{item.description}</div>}
                            </div>
                        ))}
                    </div>
                </div>



                {/* 경력 카드 */}
                <div className="bg-white dark:bg-neutral-900 rounded-xl shadow-lg p-6">
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                        </svg>
                        경력
                    </h3>
                    <div className="space-y-4">
                        {experienceData[0]?.items?.map((item, idx) => (
                            <div key={idx} className="border-l-4 border-blue-500 pl-4">
                                <div className="font-semibold text-gray-800 dark:text-gray-200">{item.title}</div>
                                <div className="text-sm text-gray-500 mb-1">{item.date}</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">{item.subTitle}</div>
                                {item.description && <div className="text-sm text-gray-600 dark:text-gray-400">{item.description}</div>}
                            </div>
                        ))}
                    </div>
                </div>

                {/* 자격증 카드 */}
                <div className="bg-white dark:bg-neutral-900 rounded-xl shadow-lg p-6">
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                        자격증
                    </h3>
                    <div className="space-y-4">
                        {certificateData[0]?.items?.map((item, idx) => (
                            <div key={idx} className="border-l-4 border-purple-500 pl-4">
                                <div className="font-semibold text-gray-800 dark:text-gray-200">{item.title}</div>
                                {item.level && <div className="text-sm text-gray-500 mb-1">({item.level})</div>}
                                <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">{item.subTitle}</div>
                                {item.description && <div className="text-sm text-gray-600 dark:text-gray-400">{item.description}</div>}
                            </div>
                        ))}
                    </div>
                </div>

                {/* 활동/수상 카드 */}
                <div className="bg-white dark:bg-neutral-900 rounded-xl shadow-lg p-6">
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        활동 및 수상
                    </h3>
                    <div className="space-y-4">
                        {activityData.map((section, idx) => (
                            <div key={idx}>
                                <div className="space-y-3">
                                    {section.items.map((item, i) => (
                                        <div key={i} className="border-l-4 border-orange-500 pl-4">
                                            <div className="font-medium text-gray-800 dark:text-gray-200">{item.title}</div>
                                            <div className="text-sm text-gray-500 mb-1">
                                                {item.subTitle && `(${item.subTitle})`} {item.date && `| ${item.date}`}
                                            </div>
                                            {item.description && <div className="text-sm text-gray-600 dark:text-gray-400">{item.description}</div>}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 연락처 카드 */}
                <div className="bg-white dark:bg-neutral-900 rounded-xl shadow-lg p-6">
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        연락처
                    </h3>
                    <div className="space-y-3">
                        {generalData.contacts.map((contact) => (
                            <div key={contact.label} className="flex items-center gap-3">
                                {contact.label === 'Email' && (
                                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                )}
                                {contact.label === 'Instagram' && (
                                    <svg className="w-4 h-4 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.781c-.49 0-.928-.175-1.297-.49-.368-.315-.49-.753-.49-1.243 0-.49.122-.928.49-1.243.369-.315.807-.49 1.297-.49s.928.175 1.297.49c.368.315.49.753.49 1.243 0 .49-.122.928-.49 1.243-.369.315-.807.49-1.297.49zm-7.83 1.418c-.49 0-.928.175-1.297.49-.368-.315-.49-.753-.49-1.243s.122.928.49 1.243c.369.315.807.49 1.297.49s.928-.175 1.297-.49c.368-.315.49-.753.49-1.243s-.122-.928-.49-1.243c-.369-.315-.807-.49-1.297-.49z" />
                                    </svg>
                                )}
                                {contact.label === 'Youtube' && (
                                    <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                    </svg>
                                )}
                                <span className="font-medium text-gray-700 dark:text-gray-300 min-w-[80px]">{contact.label}:</span>
                                <a href={contact.href} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">{contact.value}</a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
} 