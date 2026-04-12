'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ScrollReveal, StaggerReveal, fadeUp, fadeLeft, fadeRight } from './AnimationHelpers';
import { MouseEvent } from 'react';

interface Service {
  icon: string;
  title: string;
  desc: string;
  cta: string;
  href: string;
}

interface Reason {
  icon: string;
  title: string;
  desc: string;
}

const services: Service[] = [
  {
    icon: '📞',
    title: 'Free Strategy Call',
    desc: 'A 30-minute consultation with Dr. Shoba Kapoor to map out your unique career path to Germany.',
    cta: 'Book a Call',
    href: '/booking',
  },
  {
    icon: '🎓',
    title: 'Career Webinars',
    desc: 'Deep-dive sessions on the German job market, PhD culture, academia, and integration essentials.',
    cta: 'View Webinars',
    href: '#programmes',
  },
  {
    icon: '🗣️',
    title: 'Language Courses',
    desc: 'A1 to C1 German courses taught by native speakers, built for professionals and researchers.',
    cta: 'See Courses',
    href: '/courses',
  },
  {
    icon: '📄',
    title: 'CV & Application',
    desc: 'Expert review of your CV, cover letter, and application strategy tailored to German employers.',
    cta: 'Get Started',
    href: '/booking',
  },
];

const reasons: Reason[] = [
  { icon: '🏛️', title: 'World-Class Research', desc: 'Access Max Planck, Fraunhofer and top-tier universities.' },
  { icon: '💼', title: 'Strong Job Market', desc: 'High demand for skilled professionals in tech, healthcare and academia.' },
  { icon: '🎓', title: 'Subsidized Education', desc: 'Free public university tuition — even for international students.' },
  { icon: '🌍', title: 'EU Citizenship Path', desc: 'Clear PR and citizenship pathways to live across all of Europe.' },
];

export default function WhyGermany() {
  return (
    <>
      {/* ── Services Grid Section ──────────────────────────────── */}
      <section className="section-pad section-services" id="services">
        <div className="centered-content">



          <ScrollReveal>
            <div className="flex items-center gap-4 mb-8">
              <span className="section-divider m-0" />
              <span className="eyebrow">What We Offer</span>
            </div>
          </ScrollReveal>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-24">
            <ScrollReveal custom={1}>
              <h2 className="display-lg text-[--c-navy] max-w-md">
                Everything you need to land in Germany.
              </h2>
            </ScrollReveal>

            <ScrollReveal custom={2}>
              <p className="text-[--c-muted] max-w-sm leading-relaxed font-light">
                From your first consultation to your first day at work — Dr. Kapoor guides every step.
              </p>
            </ScrollReveal>
          </div>

          {/* 2×2 card grid */}
          <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 gap-10">

            {services.map((svc, i) => (
              <motion.div
                key={svc.title}
                variants={fadeUp}
                custom={i}
                className="card p-10 flex flex-col gap-8 group"
                whileHover={{ y: -8, boxShadow: '0 32px 80px rgba(26,46,107,0.08)' }}
              >
                <div className="flex items-center gap-6">
                  <motion.div
                    className="w-12 h-12 rounded-2xl bg-[--bg-services] flex items-center justify-center text-2xl"
                    whileHover={{ rotate: [0, -8, 8, 0], transition: { duration: 0.4 } }}
                  >
                    {svc.icon}
                  </motion.div>
                  <h3 className="text-lg font-semibold text-[--c-navy] leading-tight">{svc.title}</h3>
                </div>
                <p className="text-[--c-muted] text-[20px] leading-[1.8] font-[400] flex-1">{svc.desc}</p>

                <Link href={svc.href} className="btn-outline self-start text-[16px] px-8 py-4 mt-8">
                  {svc.cta}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Link>
              </motion.div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* ── Why Germany Section ───────────────────────────────── */}
      <section className="section-pad section-white" id="about">
        <div className="centered-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">


            <div>
              <ScrollReveal variants={fadeLeft}>
                <div className="flex items-center gap-4 mb-6">
                  <span className="section-divider m-0" />
                  <span className="eyebrow">Why Germany?</span>
                </div>
              </ScrollReveal>
              <ScrollReveal variants={fadeLeft} custom={1} className="mb-8">
                <h2 className="display-lg text-[--c-navy]">
                  Unmatched opportunity awaits you.
                </h2>
              </ScrollReveal>
              <ScrollReveal variants={fadeLeft} custom={2} className="mb-12">
                <p className="text-[--c-muted] text-lg leading-relaxed font-light">
                  Germany offers a rare combination of world-class research, economic stability, and
                  an open path to permanent residency — but navigating the system alone is overwhelming.
                </p>
              </ScrollReveal>
              <ScrollReveal variants={fadeLeft} custom={3}>
                <div className="rounded-[24px] bg-[--c-navy] p-10 text-white">
                  <p className="text-xs font-semibold tracking-widest uppercase text-[#8aaaff] mb-4">About Dr. Shoba Kapoor</p>
                  <p className="text-white/80 text-sm leading-relaxed font-light mb-8">
                    Dr. rer. nat. Shoba Kapoor holds a doctorate from a leading German research institute 
                    and has personally guided hundreds of professionals through successful transitions. 
                    Based in Göttingen — Germany&apos;s university city — she provides insider knowledge 
                    no guidebook can offer.
                  </p>
                  <Link href="/booking" className="btn-outline" style={{ borderColor: 'rgba(255,255,255,0.25)', color: '#fff' }}
                    onMouseEnter={(e: MouseEvent<HTMLAnchorElement>) => { const target = e.currentTarget; target.style.background='rgba(255,255,255,0.12)'; target.style.borderColor='rgba(255,255,255,0.5)'; }}
                    onMouseLeave={(e: MouseEvent<HTMLAnchorElement>) => { const target = e.currentTarget; target.style.background='transparent'; target.style.borderColor='rgba(255,255,255,0.25)'; }}
                  >
                    Schedule a Strategy Call
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: 2×2 reasons */}
            <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 gap-10">

              {reasons.map((r, i) => (
                <motion.div
                  key={r.title}
                  variants={fadeUp}
                  custom={i}
                  whileHover={{ y: -8, boxShadow: '0 32px 80px rgba(26,46,107,0.08)' }}
                  className="card p-10 flex flex-col gap-8"
                >
                  <motion.div
                    className="text-4xl"
                    whileHover={{ rotate: [-5, 5, 0], transition: { duration: 0.35 } }}
                  >
                    {r.icon}
                  </motion.div>
                  <div className="flex flex-col gap-4">
                    <h3 className="font-semibold text-[--c-navy] text-xl">{r.title}</h3>
                    <p className="text-[18px] font-[400] text-[--c-muted] leading-[1.8]">{r.desc}</p>
                  </div>

                </motion.div>
              ))}
            </StaggerReveal>
          </div>
        </div>
      </section>
    </>
  );
}
