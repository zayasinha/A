'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ScrollReveal, StaggerReveal, fadeUp, fadeLeft, fadeRight } from './AnimationHelpers';
import { MouseEvent } from 'react';


interface Reason {
  icon: string;
  title: string;
  desc: string;
}


const reasons: Reason[] = [
  { icon: '🏛️', title: 'World-Class Research', desc: 'Access Max Planck, Fraunhofer and top-tier universities.' },
  { icon: '💼', title: 'Strong Job Market', desc: 'High demand for skilled professionals in tech, healthcare and academia.' },
  { icon: '🎓', title: 'Subsidized Education', desc: 'Free public university tuition — even for international students.' },
  { icon: '🌍', title: 'EU Citizenship Path', desc: 'Clear PR and citizenship pathways to live across all of Europe.' },
];

export default function WhyGermany() {
  return (
    <>

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
