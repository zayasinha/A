import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung — Aydence',
  description: 'Datenschutzerklärung von Aydence gemäß DSGVO.',
};

export default function Datenschutz() {
  return (
    <>
      <Navbar />
      <main className="pt-[160px] pb-20 min-h-screen bg-[#f8f9ff]">

        <div className="centered-content">

          <Link href="/" className="text-[#6b81c7] text-sm hover:text-[#1a2e6b] flex items-center gap-2 mb-8">
            ← Zurück zur Startseite
          </Link>
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-10">
            <h1 className="text-3xl font-bold text-[#1a2e6b] mb-2">Datenschutzerklärung</h1>
            <p className="text-gray-400 text-sm mb-8">Gemäß DSGVO (EU) 2016/679</p>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-[#1a2e6b] mb-3">1. Verantwortlicher</h2>
              <address className="not-italic text-gray-700 leading-relaxed">
                <p className="font-semibold">Dr. rer. nat. Shoba Kapoor</p>
                <p>Aydence</p>
                <p>Königsallee 10B, 37081 Göttingen</p>
                <p>E-Mail:{' '}
                  <Link href="mailto:Info@aydence.de" className="text-[#2a4abf] hover:underline">
                    Info@aydence.de
                  </Link>
                </p>
              </address>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-[#1a2e6b] mb-3">2. Erhebung und Verwendung von Daten</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Wir erheben personenbezogene Daten nur, soweit dies für die Erbringung unserer Dienstleistungen
                erforderlich ist. Daten werden ausschließlich im Rahmen der gesetzlichen Vorschriften verarbeitet
                und nicht ohne Ihre ausdrückliche Einwilligung an Dritte weitergegeben.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-[#1a2e6b] mb-3">3. Nutzung von Kontaktformularen</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Wenn Sie uns über ein Kontaktformular oder per E-Mail kontaktieren, werden Ihre Angaben
                zur Bearbeitung der Anfrage und für den Fall, dass Anschlussfragen entstehen, bei uns
                gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-[#1a2e6b] mb-3">4. Ihre Rechte (DSGVO)</h2>
              <ul className="text-gray-600 text-sm leading-relaxed space-y-2 list-disc list-inside">
                <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
                <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
                <li>Recht auf Löschung (Art. 17 DSGVO)</li>
                <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
                <li>Widerspruchsrecht (Art. 21 DSGVO)</li>
              </ul>
              <p className="text-gray-600 text-sm mt-4">
                Zur Ausübung Ihrer Rechte wenden Sie sich bitte an:{' '}
                <Link href="mailto:Info@aydence.de" className="text-[#2a4abf] hover:underline">
                  Info@aydence.de
                </Link>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-[#1a2e6b] mb-3">5. Cookies</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Diese Website verwendet technisch notwendige Cookies, die für den Betrieb der Seite
                unbedingt erforderlich sind. Es werden keine Analyse- oder Tracking-Cookies ohne
                Ihre Zustimmung eingesetzt.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#1a2e6b] mb-3">6. Beschwerderecht</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung
                Ihrer personenbezogenen Daten durch uns zu beschweren. Die zuständige Aufsichtsbehörde
                in Niedersachsen ist die Landesbeauftragte für den Datenschutz Niedersachsen (LfD).
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
