'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ScrollReveal, StaggerReveal, fadeUp, fadeLeft, fadeRight } from './AnimationHelpers';
import { ReactNode } from 'react';

interface QuickLink {
  label: string;
  href: string;
}

interface LegalLink {
  label: string;
  href: string;
}

interface SocialLink {
  label: string;
  href: string;
  icon: ReactNode;
}

const quickLinks: QuickLink[] = [
  { label: 'Services', href: '#services' },
  { label: 'How It Works', href: '#process' },
  { label: 'Programmes', href: '#programmes' },
  { label: 'Book a Call', href: '/booking' },
  { label: 'Courses', href: '/courses' },
];

const legal: LegalLink[] = [
  { label: 'Impressum', href: '/impressum' },
  { label: 'Privacy Policy', href: '/datenschutz' },
  { label: 'Terms of Use', href: '#' },
];

const socials: SocialLink[] = [
  {
    label: 'LinkedIn',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer style={{ background: '#0a1535' }} className="text-white relative overflow-hidden">
      {/* ── Big Footer CTA ────────────────────────────────────── */}
      <div className="section-pad relative z-10 border-b border-white/5">
        <div className="centered-content text-center">


          <ScrollReveal>
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className="w-8 h-[1px] bg-[#6b81c7]" />
              <span className="eyebrow" style={{ color: '#6b81c7' }}>Ready to Begin?</span>
              <span className="w-8 h-[1px] bg-[#6b81c7]" />
            </div>
          </ScrollReveal>
          <ScrollReveal custom={1}>
            <h2
              className="font-light text-white mb-8 mx-auto"
              style={{
                fontSize: 'clamp(2.2rem, 5vw, 4.5rem)',
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                maxWidth: '720px',
              }}
            >
              Ready to start your career in Germany?
            </h2>
          </ScrollReveal>
          <ScrollReveal custom={2} className="mb-4">
            <p className="text-white/50 text-lg font-light max-w-md mx-auto mb-12">
              Book a free 30-minute strategy session with Dr. Shoba Kapoor and leave with a concrete action plan.
            </p>
          </ScrollReveal>
          <ScrollReveal custom={3}>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/booking"
                className="btn-primary text-base px-8 py-4"
                style={{ background: '#fff', color: 'var(--c-navy)' }}
              >
                Book a Free Call
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
              <a
                href="mailto:Info@aydence.de"
                className="btn-outline text-base px-8 py-4"
                style={{ borderColor: 'rgba(255,255,255,0.2)', color: '#fff' }}
              >
                Contact Us
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* ── 4-column Footer ───────────────────────────────────── */}
      <div className="centered-content py-20 relative z-10">


        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">

          {/* Col 1: Brand */}
          <ScrollReveal variants={fadeLeft} className="md:col-span-4">
            <div className="flex flex-col gap-8">
              <Link href="/">
                <Image
                  src="/Aydence logo.png"
                  alt="Aydence"
                  width={160}
                  height={56}
                  className="h-12 w-auto object-contain brightness-0 invert"
                  priority
                />
              </Link>
              <p className="text-white/40 text-[18px] leading-[1.8] font-[400] max-w-sm">
                Aydence provides personalised career strategy and cultural integration guidance for 
                professionals and researchers transitioning to Germany.
              </p>

              {/* Socials */}
              <div className="flex gap-4">
                {socials.map((s) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    whileHover={{ y: -4, color: '#8aaaff' }}
                    className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center text-white/40 hover:border-white/30 transition-colors"
                  >
                    {s.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Col 2: Quick Links */}
          <ScrollReveal custom={1} className="md:col-span-2 md:col-start-6">
            <h4 className="text-xs font-semibold tracking-widest uppercase text-white/30 mb-8">Navigation</h4>
            <div className="flex flex-col gap-4">
              {quickLinks.map((link) => (
                <motion.div key={link.label} whileHover={{ x: 4 }} transition={{ duration: 0.15 }}>
                  <Link href={link.href} className="text-white/50 hover:text-white text-[18px] transition-colors font-[500]">
                    {link.label}
                  </Link>
                </motion.div>
              ))}

            </div>
          </ScrollReveal>

          {/* Col 3: Contact */}
          <ScrollReveal custom={2} className="md:col-span-3" id="contact">
            <h4 className="text-xs font-semibold tracking-widest uppercase text-white/30 mb-8">Contact</h4>
            <address className="not-italic flex flex-col gap-4">
              <p className="text-white text-[18px] font-semibold">Dr. rer. nat. Shoba Kapoor</p>
              <p className="text-white/50 text-[18px] font-[400]">Königsallee 10B</p>
              <p className="text-white/50 text-[18px] font-[400]">37081 Göttingen, Germany</p>
              <motion.a
                href="mailto:Info@aydence.de"
                whileHover={{ x: 3 }}
                className="text-[#6b9bff] text-[18px] font-[500] hover:text-[#90b8ff] transition-colors mt-4 flex items-center gap-4"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                Info@aydence.de
              </motion.a>
            </address>

          </ScrollReveal>

          {/* Col 4: Legal */}
          <ScrollReveal custom={3} className="md:col-span-2">
            <h4 className="text-xs font-semibold tracking-widest uppercase text-white/30 mb-8">Legal</h4>
            <div className="flex flex-col gap-4">
              {legal.map((link) => (
                <motion.div key={link.label} whileHover={{ x: 4 }} transition={{ duration: 0.15 }}>
                  <Link href={link.href} className="text-white/50 hover:text-white text-[16px] transition-colors font-[400]">
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Bottom bar */}
        <motion.div
          className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-white/25 text-xs font-light">
            © {new Date().getFullYear()} Aydence · Dr. rer. nat. Shoba Kapoor. All rights reserved.
          </p>
          <Link href="/datenschutz" className="text-white/25 hover:text-white/50 text-xs transition-colors font-light">
            Privacy Policy
          </Link>
        </motion.div>
      </div>
    </footer>
  );
}
