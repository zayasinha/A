'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ScrollReveal, fadeLeft, fadeRight } from './AnimationHelpers';

export default function AboutDoctor() {
  return (
    <section className="section-pad section-white" id="about-doctor">
      <div className="centered-content">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32 items-center">
          
          {/* Left: Image */}
          <div className="lg:col-span-4 order-2 lg:order-1 flex justify-center lg:justify-end">
            <ScrollReveal variants={fadeLeft}>
              <div className="relative aspect-[4/5] w-[280px] sm:w-[320px] rounded-[32px] overflow-hidden shadow-2xl group">
                <Image
                  src="/shoba-kapoor-headshot.png"
                  alt="Dr. Shoba Kapoor"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 30vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[--c-navy]/20 to-transparent pointer-events-none" />
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Bio Content */}
          <div className="lg:col-span-8 lg:pl-10 order-1 lg:order-2">
            <ScrollReveal variants={fadeRight}>
              <div className="flex items-center gap-4 mb-8">
                <span className="section-divider m-0" />
                <span className="eyebrow" style={{ color: 'var(--c-navy-light)' }}>Expert Faculty</span>
              </div>
            </ScrollReveal>

            <ScrollReveal variants={fadeRight} custom={1} className="mb-10">
              <h2 className="display-lg text-[--c-navy]">
                About Dr. Shoba Kapoor
              </h2>
            </ScrollReveal>

            <ScrollReveal variants={fadeRight} custom={2} className="mb-12">
              <div className="flex flex-col gap-8">
                <p className="text-[--c-navy] text-xl leading-relaxed font-normal">
                  Dr. rer. nat. Shoba Kapoor holds a doctorate from a leading German research institute 
                  and has personally guided hundreds of professionals through successful transitions.
                </p>
                <p className="text-[--c-muted] text-lg leading-relaxed font-light">
                  Based in Göttingen — Germany&apos;s university city — she provides insider knowledge 
                  no guidebook can offer. Her approach combines academic rigor with deep empathy for 
                  the challenges of international relocation.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal variants={fadeRight} custom={3}>
              <Link 
                href="mailto:Info@aydence.de" 
                className="btn-outline border-[--c-navy]/20 text-[--c-navy] hover:bg-[--c-navy]/5 px-10 py-4 inline-flex group"
              >
                Send a Message
                <svg 
                  className="ml-3 transition-transform group-hover:translate-x-1" 
                  width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </Link>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
