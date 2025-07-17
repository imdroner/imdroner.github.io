import { generalData } from '@/data/general';

export default function ContactPage() {
    return (
        <main className="max-w-xl mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold mb-6">문의</h1>
            <div className="mb-6">
                <h2 className="text-lg font-semibold mb-2">연락처</h2>
                <ul className="text-gray-700">
                    {generalData.contacts.map((contact) => (
                        <li key={contact.label} className="mb-1">
                            <span className="font-medium">{contact.label}:</span> <a href={contact.href} className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">{contact.value}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <p>아래 이메일로 문의해 주세요.</p>
                <a href="mailto:imdrone.site@gmail.com" className="text-blue-600 underline">imdrone.site@gmail.com</a>
            </div>
        </main>
    );
} 