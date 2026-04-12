'use client';
import { useState, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState<boolean>(false);
  const [showControls, setShowControls] = useState<boolean>(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (playing) { videoRef.current.pause(); setPlaying(false); }
    else          { videoRef.current.play();  setPlaying(true);  }
  };

  interface StatItem {
    num: string;
    label: string;
  }

  interface ServiceChip {
    label: string;
    icon: string;
    href: string;
  }

  return (
    <section
      className="section-hero relative overflow-hidden flex items-center min-h-[90vh]"
      style={{
        paddingTop: 'clamp(12rem, 20vw, 18rem)',
        paddingBottom: 'clamp(10rem, 15vw, 14rem)',
        background: 'var(--bg-hero)',
      }}

    >
      <div className="centered-content relative z-10">

        {/* ── Headline ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <div className="flex flex-col gap-12">

            <div className="overflow-hidden">
              <motion.h1
                className="display-xl text-[--c-navy] leading-none drop-shadow-sm"
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              >
                Bridging the Gap<span style={{ color: 'var(--c-navy-mid)' }}>.</span>
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.p
                className="text-[18px] leading-[1.6] text-gray-600 max-w-xl"
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              >
                Dr. Shoba Kapoor guides researchers, professionals and students 
                from India to build thriving careers in Germany — with clarity, 
                confidence, and a concrete plan.
              </motion.p>
            </div>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
            >
              <Link href="/booking" className="btn-primary">
                Book a Free Call
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
              <a href="#services" className="btn-outline">
                Explore Services
              </a>
            </motion.div>

            {/* Stats strip */}
            <motion.div
              className="mt-16 flex gap-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              {([
                { num: '200+', label: 'Professionals Guided' },
                { num: '3', label: 'Core Programmes' },
                { num: '10+', label: 'Years Experience' },
              ] as StatItem[]).map((s) => (
                <div key={s.label}>
                  <p className="text-3xl font-semibold text-[--c-navy]" style={{ letterSpacing: '-0.03em' }}>{s.num}</p>
                  <p className="text-sm text-[--c-muted] mt-0.5">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right column: Video + Service cards ── */}
          <div className="flex flex-col gap-4">
            {/* Video Player */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
              className="relative rounded-[24px] overflow-hidden aspect-video shadow-2xl group cursor-pointer bg-[--c-navy]"
              style={{ boxShadow: '0 32px 80px rgba(26,46,107,0.2)' }}
              onMouseEnter={() => setShowControls(true)}
              onMouseLeave={() => setShowControls(false)}
              onClick={togglePlay}
            >
              <video
                ref={videoRef}
                src="/Video1.mp4"
                className="w-full h-full object-cover opacity-90"
                preload="metadata"
                playsInline
                onEnded={() => setPlaying(false)}
              />
              <AnimatePresence>
                {(!playing || showControls) && (
                  <motion.div
                    key="overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 flex items-center justify-center"
                    style={{ background: playing ? 'rgba(0,0,0,0.12)' : 'rgba(0,0,0,0.3)' }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.93 }}
                      className="w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl"
                    >
                      <AnimatePresence mode="wait">
                        {playing ? (
                          <motion.svg key="pause" initial={{ scale: 0.7, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.7, opacity: 0 }} className="w-5 h-5 text-[--c-navy]" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
                          </motion.svg>
                        ) : (
                          <motion.svg key="play" initial={{ scale: 0.7, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.7, opacity: 0 }} className="w-6 h-6 text-[--c-navy] ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </motion.svg>
                        )}
                      </AnimatePresence>
                    </motion.div>
                    {!playing && (
                      <span className="absolute bottom-4 left-5 text-white/60 text-xs font-medium tracking-wide">Introduction Video</span>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Service preview chips */}
            <motion.div
              className="grid grid-cols-3 gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
            >
              {([
                { label: 'Free Call', icon: '📞', href: '/booking' },
                { label: 'Webinars', icon: '🎓', href: '#services' },
                { label: 'Courses',  icon: '📚', href: '/courses' },
              ] as ServiceChip[]).map((item) => (
                <Link key={item.label} href={item.href}>
                  <motion.div
                    whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(26,46,107,0.12)' }}
                    className="card p-4 flex flex-col items-center gap-2 text-center cursor-pointer"
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-sm font-semibold text-[--c-navy]">{item.label}</span>
                  </motion.div>
                </Link>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
