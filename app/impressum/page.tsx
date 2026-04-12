import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Impressum — Aydence',
  description: 'Impressum und rechtliche Informationen zu Aydence, Dr. rer. nat. Shoba Kapoor.',
};

export default function Impressum() {
  return (
    <>
      <Navbar />
      <main className="pt-[160px] pb-20 min-h-screen bg-[#f8f9ff]">

        <div className="centered-content">

          <Link href="/" className="text-[#6b81c7] text-sm hover:text-[#1a2e6b] flex items-center gap-2 mb-8">
            ← Zurück zur Startseite
          </Link>
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-10">
            <h1 className="text-3xl font-bold text-[#1a2e6b] mb-8">Impressum</h1>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-[#1a2e6b] mb-3">Angaben gemäß § 5 TMG</h2>
              <address className="not-italic text-gray-700 leading-relaxed">
                <p className="font-semibold text-gray-900">Dr. rer. nat. Shoba Kapoor</p>
                <p>Aydence</p>
                <p>Königsallee 10B</p>
                <p>37081 Göttingen</p>
                <p>Deutschland</p>
              </address>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-[#1a2e6b] mb-3">Kontakt</h2>
              <p className="text-gray-700">
                E-Mail:{' '}
                <Link href="mailto:Info@aydence.de" className="text-[#2a4abf] hover:underline">
                  Info@aydence.de
                </Link>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-[#1a2e6b] mb-3">
                Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
              </h2>
              <address className="not-italic text-gray-700 leading-relaxed">
                <p>Dr. rer. nat. Shoba Kapoor</p>
                <p>Königsallee 10B</p>
                <p>37081 Göttingen</p>
              </address>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-[#1a2e6b] mb-3">Haftungsausschluss</h2>
              <h3 className="font-semibold text-gray-800 mb-2">Haftung für Inhalte</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
                Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
                Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten
                nach den allgemeinen Gesetzen verantwortlich.
              </p>
              <h3 className="font-semibold text-gray-800 mb-2">Haftung für Links</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen
                Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
                Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
                der Seiten verantwortlich.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#1a2e6b] mb-3">Urheberrecht</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
                dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
                der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
                Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
