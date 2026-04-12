'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ScrollReveal, StaggerReveal, fadeUp, fadeLeft, fadeRight } from './AnimationHelpers';

interface Step {
  num: string;
  title: string;
  desc: string;
  icon: string;
}

interface ProgrammeItem {
  icon: string;
  title: string;
  desc: string;
}

interface Programme {
  number: string;
  tag: string;
  title: string;
  date: string;
  badge?: string;
  badgeType?: 'warm' | 'urgent';
  investment?: string;
  items?: ProgrammeItem[];
  faqs?: string[];
}

const steps: Step[] = [
  {
    num: '01',
    title: 'Free Strategy Call',
    desc: 'We start with a 30-minute call to understand your background, goals, and timeline. Dr. Kapoor maps out a tailored roadmap.',
    icon: '📞',
  },
  {
    num: '02',
    title: 'Programme Selection',
    desc: 'Choose the right combination of language training, webinars, and career modules based on your specific destination in Germany.',
    icon: '🗺️',
  },
  {
    num: '03',
    title: 'Active Coaching',
    desc: 'Attend structured sessions, get CV and application reviews, and receive cultural integration training — all led by experts.',
    icon: '🎓',
  },
  {
    num: '04',
    title: 'Placement & Integration',
    desc: 'Land your role, navigate bureaucracy with confidence, and settle into life in Germany with continued support from Aydence.',
    icon: '🏁',
  },
];

const programmes: Programme[] = [
  {
    number: '01',
    tag: 'Module One',
    title: 'The German Integration Matrix',
    date: 'April 15, 2026',
    badge: 'Limited Slots',
    badgeType: 'warm',
    items: [
      { icon: '🗣️', title: 'First German Lesson', desc: 'High-stakes professional introductions and linguistic survival skills.' },
      { icon: '⚠️', title: 'Cultural Integration Pitfalls', desc: 'Unspoken rules of the DACH region to avoid professional missteps.' },
      { icon: '🤝', title: 'Etiquette and Networking', desc: 'Sophisticated social protocols for high-level business networking.' },
    ],
  },
  {
    number: '02',
    tag: 'Module Two',
    title: 'Scientific Superiority & PhD Culture',
    date: 'May 12, 2026',
    investment: '€89.00',
    items: [
      { icon: '🔬', title: 'Research Environment', desc: 'Infrastructure and systems logic of German research institutes.' },
      { icon: '🎓', title: 'Professor Relationships', desc: 'The "Doktorvater" dynamic and power structures in academia.' },
      { icon: '💰', title: 'Funding & Grants', desc: 'Securing sustainable PhD funding and navigating stipends.' },
      { icon: '🏢', title: 'Employer Expectations', desc: 'What industrial partners demand from world-class researchers.' },
    ],
  },
  {
    number: '03',
    tag: 'Module Three',
    title: 'Career Architecture: Germany Unlocked',
    date: 'June 8, 2026',
    badge: '16 Seats Left',
    badgeType: 'urgent',
    faqs: [
      'Minimum Requirements for Entry',
      'Apprenticeship vs Job vs Study',
      'Government vs Private University',
      'Is German Language Compulsory?',
    ],
  },
];

export default function WebinarModules() {
  return (
    <>
      {/* ── The Process Section ──────────────────────────────────── */}
      <section className="section-pad section-process" id="process">
        <div className="centered-content">

          <ScrollReveal>
            <div className="flex items-center gap-3 mb-4">
              <span className="section-divider m-0" />
              <span className="eyebrow">How It Works</span>
            </div>
          </ScrollReveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-20">
            <ScrollReveal custom={1}>
              <h2 className="display-lg text-[--c-navy] max-w-sm">Your step-by-step path to Germany.</h2>
            </ScrollReveal>

            <ScrollReveal custom={2}>
              <Link href="/booking" className="btn-primary">Begin Your Journey</Link>
            </ScrollReveal>
          </div>

          {/* Steps — horizontal timeline */}
          <StaggerReveal className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* connector line — desktop only */}
            <div className="hidden lg:block absolute top-7 left-[12%] right-[12%] h-[1px] bg-gradient-to-r from-transparent via-[rgba(26,46,107,0.15)] to-transparent z-0" />
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                variants={fadeUp}
                custom={i}
                className="relative z-10"
              >
                <div className="card p-8 flex flex-col gap-6 h-full group" style={{ background: '#fff' }}>
                  <div className="flex items-center gap-3">
                    <span
                      className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold"
                      style={{ background: 'var(--c-navy)', color: '#fff' }}
                    >
                      {step.num}
                    </span>
                    <span className="text-2xl">{step.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-[--c-navy] text-lg mb-2 leading-snug">{step.title}</h3>
                    <p className="text-[17px] text-[--c-muted] leading-[1.6]">{step.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* ── Programmes Section ─────────────────────────────────── */}
      <section className="section-pad section-white" id="programmes">
        <div className="centered-content">



          <ScrollReveal>
            <div className="flex items-center gap-3 mb-4">
              <span className="section-divider m-0" />
              <span className="eyebrow">Webinar Series</span>
            </div>
          </ScrollReveal>
          <ScrollReveal custom={1} className="mb-20">
            <h2 className="display-lg text-[--c-navy] max-w-lg">Our structured programmes.</h2>
          </ScrollReveal>


          <div className="flex flex-col gap-32">

            {programmes.map((prog, idx) => (
              <div
                key={idx}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
              >
                {/* Text */}
                <ScrollReveal variants={idx % 2 === 1 ? fadeRight : fadeLeft} className={idx % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div>
                    <p className="eyebrow mb-3">{prog.tag}</p>
                    <h3 className="text-2xl lg:text-3xl font-semibold text-[--c-navy] mb-6 leading-tight">{prog.title}</h3>

                    {prog.items && (
                      <div className={`grid gap-8 mb-10 ${prog.items.length === 4 ? 'grid-cols-2' : 'grid-cols-1'}`}>
                        {prog.items.map((item) => (
                          <motion.div
                            key={item.title}
                            whileHover={{ x: 4 }}
                            className="flex gap-4"
                          >
                            <span className="text-2xl mt-0.5 shrink-0">{item.icon}</span>
                            <div>
                              <p className="font-semibold text-[20px] text-[--c-navy]">{item.title}</p>
                              <p className="text-[18px] text-[--c-muted] leading-relaxed mt-1 font-light">{item.desc}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    )}


                    {prog.faqs && (
                      <div className="flex flex-col gap-2 mb-8">
                        {prog.faqs.map((faq, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -16 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08 }}
                            whileHover={{ x: 5 }}
                            className="flex items-center justify-between py-3 px-4 rounded-xl border border-gray-100 group cursor-pointer hover:bg-[--bg-services] transition-colors"
                          >
                            <span className="flex items-center gap-3 text-sm font-medium text-[--c-text]">
                              <span className="text-xs font-mono text-[--c-navy-light]">{String(i + 1).padStart(2, '0')}</span>
                              {faq}
                            </span>
                            <span className="text-[--c-navy-light] group-hover:translate-x-1 transition-transform">→</span>
                          </motion.div>
                        ))}
                      </div>
                    )}

                    <Link href="/booking" className="btn-primary">
                      {prog.badge === 'Limited Slots' ? 'Book Now' : prog.badge ? 'Secure My Spot' : 'Book Now'}
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </Link>
                  </div>
                </ScrollReveal>

                {/* CTA Card */}
                <ScrollReveal variants={idx % 2 === 1 ? fadeLeft : fadeRight} className={idx % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <motion.div
                    whileHover={{ y: -6, boxShadow: '0 32px 80px rgba(26,46,107,0.12)' }}
                    className="card overflow-hidden"
                  >
                    {/* Thumbnail */}
                    <div className="aspect-video bg-gradient-to-br from-[#c5cde8] to-[#8aaacc] relative flex items-center justify-center group cursor-pointer overflow-hidden">
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full"
                        whileHover={{ translateX: '200%' }}
                        transition={{ duration: 0.8 }}
                      />
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-12 h-12 bg-white/80 rounded-full flex items-center justify-center shadow-lg z-10"
                      >
                        <svg className="w-5 h-5 text-[--c-navy] ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </motion.div>
                      <span className="absolute top-3 right-3 bg-[--c-navy] text-white text-xs font-semibold px-3 py-1 rounded-full">
                        {prog.date}
                      </span>
                    </div>

                    <div className="p-6 flex flex-col gap-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs text-[--c-subtle] uppercase tracking-wide mb-1">Webinar Date</p>
                          <p className="font-semibold text-[--c-navy]">{prog.date}</p>
                        </div>
                        {prog.badge && (
                          <motion.span
                            animate={prog.badgeType === 'urgent' ? { scale: [1, 1.04, 1] } : {}}
                            transition={{ duration: 1.8, repeat: Infinity }}
                            className={`text-xs font-semibold px-3 py-1 rounded-full ${
                              prog.badgeType === 'urgent'
                                ? 'bg-red-50 text-red-500 border border-red-200'
                                : 'bg-amber-50 text-amber-600 border border-amber-200'
                            }`}
                          >
                            {prog.badge}
                          </motion.span>
                        )}
                      </div>
                      {prog.investment && (
                        <div>
                          <p className="text-xs text-[--c-subtle] uppercase tracking-wide mb-1">Investment</p>
                          <p className="text-2xl font-semibold text-[--c-navy]">{prog.investment}</p>
                        </div>
                      )}
                      {prog.badgeType === 'urgent' && (
                        <div className="rounded-xl bg-red-50 border border-red-100 px-4 py-3">
                          <p className="text-red-600 text-xs font-semibold uppercase tracking-wide">⚠ Last Opportunity</p>
                          <p className="text-red-700 text-sm font-semibold mt-0.5">{prog.date}</p>
                        </div>
                      )}
                    </div>
                  </motion.div>
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
