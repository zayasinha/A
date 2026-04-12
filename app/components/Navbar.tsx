'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useSpring } from 'framer-motion';

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: 'Services',  href: '/#services' },
  { label: 'Process',   href: '/#process' },
  { label: 'Booking',   href: '/booking' },
  { label: 'Courses',   href: '/courses' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        style={{ scaleX, transformOrigin: 'left' }}
        className="fixed top-0 left-0 right-0 z-[60] h-[2px] bg-gradient-to-r from-[#1a2e6b] via-[#4a6abf] to-[#6b9bff]"
      />

      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? 'rgba(249,249,249,0.92)' : 'rgba(249,249,249,0.7)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: scrolled ? '1px solid rgba(0,0,0,0.06)' : '1px solid transparent',
          boxShadow: scrolled ? '0 2px 24px rgba(0,0,0,0.04)' : 'none',
        }}
      >
        <div className="max-w-[1400px] mx-auto px-[40px]">

          <div className="flex items-center justify-between h-[72px]">

            {/* Logo */}
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link href="/" className="flex items-center">
                <Image
                  src="/Aydence logo.png"
                  alt="Aydence Logo"
                  width={160}
                  height={56}
                  priority
                  className="h-20 w-auto object-contain scale-[1.8] translate-x-3"
                />
              </Link>
            </motion.div>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + i * 0.08, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    className="relative text-sm font-medium text-[--c-text] group"
                    style={{ color: 'var(--c-text)' }}
                  >
                    <span className="hover:text-[--c-navy] transition-colors duration-200">
                      {link.label}
                    </span>
                    <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-[--c-navy] rounded-full group-hover:w-full transition-all duration-300" />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Desktop CTA — removed "Book Now" per user request; contact link instead */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="hidden md:flex items-center gap-3"
            >
              <a href="mailto:Info@aydence.de" className="btn-outline text-sm px-5 py-2.5">
                Contact
              </a>
            </motion.div>

            {/* Mobile hamburger */}
            <motion.button
              id="menu-toggle"
              className="md:hidden flex flex-col gap-[5px] p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle menu"
            >
              {[0, 1, 2].map((bar) => (
                <motion.span
                  key={bar}
                  animate={
                    bar === 0 ? (menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 })
                  : bar === 1 ? (menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 })
                  : (menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 })
                  }
                  className="block w-5 h-[1.5px] bg-[--c-navy] rounded-full origin-center"
                  style={{ background: 'var(--c-navy)' }}
                  transition={{ duration: 0.25 }}
                />
              ))}
            </motion.button>
          </div>

          {/* Mobile menu */}
          <motion.div
            initial={false}
            animate={menuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden"
          >
            <div className="flex flex-col gap-2 pt-2 pb-6 border-t border-black/5">
              {navLinks.map((link, i) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm font-medium py-2.5 px-2"
                  style={{ color: 'var(--c-text)' }}
                >
                  <motion.span
                    initial={{ x: -16, opacity: 0 }}
                    animate={menuOpen ? { x: 0, opacity: 1 } : { x: -16, opacity: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.3 }}
                    className="block"
                  >
                    {link.label}
                  </motion.span>
                </Link>
              ))}
              <motion.div
                initial={{ x: -16, opacity: 0 }}
                animate={menuOpen ? { x: 0, opacity: 1 } : { x: -16, opacity: 0 }}
                transition={{ delay: 0.22, duration: 0.3 }}
                className="mt-3"
              >
                <Link href="/booking" onClick={() => setMenuOpen(false)} className="btn-primary block text-center w-full">
                  Book a Free Call
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.nav>
    </>
  );
}
