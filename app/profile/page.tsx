import { generalData } from '@/data/general';
import { educationData } from '@/data/education';
import { certificateData } from '@/data/certificate';
import { experienceData } from '@/data/experience';
import { personalData } from '@/data/personal';
import { activityData } from '@/data/activity';

export default function ProfilePage() {
    return (
        <main className="max-w-2xl mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold mb-6">프로필</h1>
            <section className="mb-8 flex items-center gap-6">
                <img src={generalData.avatar} alt={generalData.name} className="w-24 h-24 rounded-full object-cover shadow" />
                <div>
                    <h2 className="text-2xl font-semibold mb-1">{generalData.name}</h2>
                    <p className="text-gray-700 dark:text-gray-300">{generalData.jobTitle} / {generalData.position}</p>
                    <p className="text-gray-500 text-sm mt-1">{generalData.website && (
                        <a href={generalData.website} className="underline text-blue-600" target="_blank" rel="noopener noreferrer">{generalData.website.replace(/(^\w+:|^)\/\//, '').replace('www.', '')}</a>
                    )}</p>
                </div>
            </section>
            {/* 기본정보 */}
            {personalData.map((section, idx) => (
                <section className="mb-8" key={idx}>
                    <h3 className="text-lg font-semibold mb-2">{section.title}</h3>
                    <ul className="text-gray-700 dark:text-gray-300">
                        {section.items.map((item, i) => (
                            <li key={i} className="mb-1">
                                <span className="font-medium">{item.label}:</span> {item.title} {item.subTitle && <span className="text-sm text-gray-500 ml-2">({item.subTitle})</span>}
                                {item.description && <div className="text-sm mt-1">{item.description}</div>}
                            </li>
                        ))}
                    </ul>
                </section>
            ))}
            <section className="mb-8">
                <h3 className="text-lg font-semibold mb-2">상세 소개</h3>
                <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">{generalData.about}</p>
            </section>
            <section className="mb-8">
                <h3 className="text-lg font-semibold mb-2">경력</h3>
                <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
                    {experienceData[0]?.items?.map((item, idx) => (
                        <li key={idx} className="mb-2">
                            <span className="font-medium">{item.title}</span> <span className="text-sm text-gray-500">({item.date})</span>
                            <div className="text-sm text-gray-500">{item.subTitle}</div>
                            {item.description && <div className="text-sm mt-1">{item.description}</div>}
                        </li>
                    ))}
                </ul>
            </section>
            <section className="mb-8">
                <h3 className="text-lg font-semibold mb-2">학력</h3>
                <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
                    {educationData[0]?.items?.map((item, idx) => (
                        <li key={idx} className="mb-2">
                            <span className="font-medium">{item.title}</span> <span className="text-sm text-gray-500">({item.date})</span>
                            <div className="text-sm text-gray-500">{item.subTitle}</div>
                            {item.description && <div className="text-sm mt-1">{item.description}</div>}
                        </li>
                    ))}
                </ul>
            </section>
            <section className="mb-8">
                <h3 className="text-lg font-semibold mb-2">자격증</h3>
                <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
                    {certificateData[0]?.items?.map((item, idx) => (
                        <li key={idx} className="mb-2">
                            <span className="font-medium">{item.title}</span> <span className="text-sm text-gray-500">{item.level && `(${item.level})`}</span>
                            <div className="text-sm text-gray-500">{item.subTitle}</div>
                            {item.description && <div className="text-sm mt-1">{item.description}</div>}
                        </li>
                    ))}
                </ul>
            </section>
            {/* 활동, 수상 */}
            {activityData.map((section, idx) => (
                <section className="mb-8" key={idx}>
                    <h3 className="text-lg font-semibold mb-2">{section.title}</h3>
                    <ul className="text-gray-700 dark:text-gray-300">
                        {section.items.map((item, i) => (
                            <li key={i} className="mb-2">
                                <span className="font-medium">{item.title}</span> <span className="text-sm text-gray-500">{item.subTitle && `(${item.subTitle})`} {item.date && `| ${item.date}`}</span>
                                {item.description && <div className="text-sm mt-1">{item.description}</div>}
                            </li>
                        ))}
                    </ul>
                </section>
            ))}
            <section className="mb-8">
                <h3 className="text-lg font-semibold mb-2">연락처</h3>
                <ul className="text-gray-700 dark:text-gray-300">
                    {generalData.contacts.map((contact) => (
                        <li key={contact.label} className="mb-1">
                            <span className="font-medium">{contact.label}:</span> <a href={contact.href} className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">{contact.value}</a>
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    );
} 