'use client';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BookingCalendar from '../components/BookingCalendar';
import PageWrapper from '../components/PageWrapper';
import { motion } from 'framer-motion';
import { ScrollReveal, fadeUp, StaggerReveal } from '../components/AnimationHelpers';

interface SessionDetail {
  title: string;
  desc: string;
}

interface FAQ {
  q: string;
  a: string;
}

export default function BookingPage() {
  const sessionDetails: SessionDetail[] = [
    { title: 'Personalized Strategy', desc: 'Custom roadmaps tailored to your specific academic or professional background.' },
    { title: 'CV & Profile Review', desc: 'Direct feedback on how to optimize your documents for the German market.' },
    { title: 'Visa & Regulations', desc: 'Clarity on current immigration laws, work permits, and residency requirements.' },
    { title: 'Life in Germany', desc: 'Practical insights into housing, health insurance, and cultural integration.' },
  ];

  const faqs: FAQ[] = [
    { q: 'Is the first call really free?', a: 'Yes! The 15-minute introductory call is completely free. We discuss your goals and see if our programs are a good fit.' },
    { q: 'What do I need for the strategy session?', a: 'Please have your latest CV and a list of questions ready. If you have specific job offers or university programs in mind, keep those links handy.' },
    { q: 'Can I reschedule my booking?', a: 'Yes, you can reschedule up to 24 hours before the session using the link provided in your confirmation email.' },
  ];

  return (
    <PageWrapper>
      <Navbar />
      
      <main className="pt-[160px] pb-20 space-y-24">

        {/* Header Section */}
        <section>
          <div className="centered-content text-center">
            <ScrollReveal variants={fadeUp}>
              <span className="text-[#6b81c7] font-semibold text-sm tracking-widest uppercase">Take the first step</span>
            </ScrollReveal>
            <ScrollReveal variants={fadeUp} custom={1} className="mt-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-[#1a2e6b] leading-tight">
                Book Your Personal <br /> <span className="text-[#4a6abf]">Career Strategy Session</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal variants={fadeUp} custom={2} className="mt-6">
              <p className="text-gray-600 text-[18px] leading-[1.6] max-w-2xl mx-auto">
                Unlock your potential in Germany. Get direct guidance from Dr. Shoba Kapoor 
                and navigate the German professional landscape with a clear, actionable plan.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Information Stack: What's included & Preparation */}
        <section className="bg-[#f8f9ff] py-20">
          <div className="centered-content">
            <div className="flex flex-col gap-12">
              {/* Included Section */}
              <div className="space-y-8">
                <ScrollReveal variants={fadeUp}>
                  <h2 className="text-3xl font-bold text-[#1a2e6b]">What is included in the session?</h2>
                </ScrollReveal>
                <div className="flex flex-col gap-8">
                  {sessionDetails.map((item, idx) => (
                    <motion.div 
                      key={idx}
                      variants={fadeUp}
                      className="card flex flex-col sm:flex-row items-start sm:items-center gap-8 p-10"
                    >
                      <div className="w-12 h-12 rounded-full bg-[#1a2e6b] flex items-center justify-center text-white text-xl font-bold shrink-0 shadow-lg">
                        {idx + 1}
                      </div>
                      <div className="flex flex-col gap-2">
                        <h3 className="text-[#1a2e6b] font-bold text-xl">{item.title}</h3>
                        <p className="text-gray-600 text-[18px] leading-[1.6]">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Preparation Section */}
              <div className="space-y-8 pt-8 border-t border-gray-200">
                <ScrollReveal variants={fadeUp}>
                  <h2 className="text-3xl font-bold text-[#1a2e6b]">Preparation Checklist</h2>
                </ScrollReveal>
                <div className="bg-[#1a2e6b] rounded-2xl p-10 text-white shadow-xl">
                  <ul className="flex flex-col gap-6">
                    {[
                      'Updated CV (English or German)',
                      'Current Visa status information',
                      'Top 3 career goals for the next year',
                      'Specific job listings (optional)',
                      'Stable internet connection for video call'
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-4">
                        <span className="text-green-400 font-bold shrink-0">✓</span>
                        <span className="text-white/90 text-[18px] leading-[1.6]">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 pt-8 border-t border-white/10">
                    <p className="text-white/60 text-xs italic">
                      * All information shared is handled with utmost confidentiality according to German data protection standards (GDPR).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Calendar Section */}
        <div id="calendar-area">
          <BookingCalendar />
        </div>

        {/* FAQ Section */}
        <section className="py-12">
          <div className="centered-content">
            <ScrollReveal variants={fadeUp} className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#1a2e6b]">Frequently Asked Questions</h2>
            </ScrollReveal>
            <div className="flex flex-col gap-8">
              {faqs.map((faq, idx) => (
                <ScrollReveal key={idx} variants={fadeUp} custom={idx}>
                  <div className="card p-10 flex flex-col gap-4 group">
                    <h3 className="text-[#1a2e6b] font-bold text-xl flex items-center gap-4">
                      <span className="w-2 h-2 rounded-full bg-[#1a2e6b] group-hover:scale-150 transition-transform"></span>
                      {faq.q}
                    </h3>
                    <p className="text-gray-600 text-[18px] leading-relaxed pl-6">
                      {faq.a}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </PageWrapper>
  );
}
