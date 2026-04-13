'use client';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageWrapper from '../components/PageWrapper';

export default function AGBPage() {
  return (
    <PageWrapper>
      <Navbar />
      
      <main className="pt-[160px] pb-32 bg-white min-h-screen">
        <div className="centered-content max-w-4xl mx-auto">
          
          <h1 className="display-lg text-[--c-navy] mb-16 pb-6 border-b border-gray-100">
            Aydence – Allgemeine Geschäftsbedingungen (AGB)
          </h1>
          
          <div className="text-gray-600 leading-relaxed space-y-12 text-[18px]">
            
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-[--c-navy]">1. Gegenstand des Programms</h2>
              <p>
                Aydence bietet ein strukturiertes Integrationsprogramm für eine Karriere in Deutschland. Dieses umfasst Sprachtraining, strategische Karriereplanung sowie Profil- und Bewerbungsentwicklung. Sprachunterricht ist dabei integraler Bestandteil eines Gesamtprozesses und kein isoliertes Produkt.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-[--c-navy]">2. Programmstruktur und Teilnahmeverpflichtung</h2>
              <p>
                Teilnehmer verpflichten sich zur aktiven Mitwirkung. Dazu gehören die Definition eines Karriereziels, Teilnahme an strategischen Einheiten sowie die Bearbeitung von Aufgaben (z. B. Lebenslauf, Bewerbungen). Bei mangelnder Mitwirkung kann der Zugang eingeschränkt oder beendet werden.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-[--c-navy]">3. Leistungen und Preise</h2>
              <ul className="list-disc pl-6 space-y-3">
                <li><strong className="text-gray-800">Webinare:</strong> 199–599 INR</li>
                <li><strong className="text-gray-800">4-Wochen-Programme:</strong> 4.800 INR (vollständig im Voraus)</li>
                <li><strong className="text-gray-800">Semesterprogramm:</strong> 24.999 INR (10.000 upfront nicht erstattbar, 10.000 nach 2 Monaten, 4.999 nach 4 Monaten)</li>
                <li><strong className="text-gray-800">Karriere-Strategieprogramm:</strong> 9.999 INR (3 intensive Sitzungen)</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-[--c-navy]">4. Zahlungsabwicklung</h2>
              <p>
                Zahlungen erfolgen über Razorpay (UPI). Zugang wird erst nach vollständigem Zahlungseingang gewährt.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-[--c-navy]">5. Zahlungsverzug</h2>
              <p>
                Bei ausbleibenden Zahlungen wird der Zugang sofort gesperrt. Erfolgt keine Zahlung innerhalb von 7 Tagen, wird der Vertrag beendet. Bereits geleistete Zahlungen werden nicht erstattet.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-[--c-navy]">6. Kein passiver Konsum</h2>
              <p>
                Aydence ist ein aktives Programm. Teilnehmer müssen sich beteiligen. Bei fehlender Aktivität kann der Zugang entzogen werden.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-[--c-navy]">7. Keine Erfolgsgarantie</h2>
              <p>
                Aydence garantiert keine Jobvermittlung, kein Visum und keine Zulassung. Der Erfolg hängt von individuellen Leistungen und externen Faktoren ab.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-[--c-navy]">8. Kündigung</h2>
              <p>
                Webinare und 4-Wochen-Kurse sind nicht erstattbar. Die erste Rate des Semesterprogramms ist nicht erstattbar.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-[--c-navy]">9. Urheberrecht</h2>
              <p>
                Alle Inhalte sind Eigentum von Aydence. Weitergabe oder Verkauf ist untersagt.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-[--c-navy]">10. Technische Voraussetzungen</h2>
              <p>
                Teilnehmer sind selbst für Internet und Geräte verantwortlich.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-[--c-navy]">11. Gerichtsstand</h2>
              <p>
                Es gilt deutsches Recht. Gerichtsstand ist Deutschland.
              </p>
            </section>

            <section className="space-y-4 bg-gray-50 p-8 rounded-2xl border border-gray-100">
              <h2 className="text-2xl font-bold text-[--c-navy]">12. Beispielhafter Kundenablauf (Customer Journey)</h2>
              <ol className="list-decimal pl-6 space-y-3 font-medium text-gray-800">
                <li>Teilnahme an einem Webinar</li>
                <li>Buchung eines 4-Wochen-Programms</li>
                <li>Einstieg ins Semesterprogramm</li>
                <li>Definition eines Karrierepfads</li>
                <li>Erstellung von Lebenslauf und Bewerbungen</li>
                <li>Durchführung von Bewerbungen und Vorbereitung auf Deutschland</li>
              </ol>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </PageWrapper>
  );
}
