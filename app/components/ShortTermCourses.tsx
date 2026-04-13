'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ScrollReveal } from './AnimationHelpers';

export default function ShortTermCourses() {
  return (
    <section className="section-pad section-white" id="short-term-courses">
      <div className="centered-content">
        
        <ScrollReveal>
          <div className="flex items-center gap-6 mb-16">
            <h2 className="display-lg text-[#1a2e6b]">Short-Term Courses</h2>
            <span className="text-xs uppercase tracking-[0.3em] font-black bg-gray-100 px-4 py-2 rounded-lg text-gray-500">Intense</span>
          </div>
        </ScrollReveal>
        
        <div className="space-y-24">

          {/* Intro Course */}
          <ScrollReveal>
            <div className="bg-[#f8f9fc] rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row group border border-gray-100/50 shadow-sm">
              <div className="flex-1 p-10 md:p-14 flex flex-col justify-center">
                 <h3 className="text-[32px] font-bold text-[#1a2e6b] mb-6">Introduction to German</h3>
                 <p className="text-gray-600 text-[18px] mb-8 leading-[1.8] max-w-md">
                   A comprehensive entry point for absolute beginners focused on foundational grammar and immediate conversational utility.
                 </p>
                 <div className="space-y-4 mb-10">
                    <div className="flex items-center gap-4 text-sm font-semibold text-gray-600">
                       <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-[#1a2e6b] shadow-sm">⏱</span>
                       60 mins/session | Monday &amp; Wednesday
                    </div>
                    <div className="flex items-center gap-4 text-sm font-semibold text-gray-600">
                       <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-[#1a2e6b] shadow-sm">📚</span>
                       A1-B2 Full Course
                    </div>
                 </div>
                 <div className="flex flex-wrap items-center gap-8">
                    <button className="bg-[#4a6332] text-white px-10 py-4 rounded-xl font-bold transition-all hover:bg-[#5a783e]">
                       Book Now
                    </button>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Only 4 slots left</span>
                 </div>
              </div>
              <div className="md:w-5/12 h-[350px] md:h-auto relative bg-white overflow-hidden">
                <Image 
                  src="/course-german-intro.png" 
                  alt="German Intro" 
                  fill 
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-1000" 
                />
              </div>
            </div>
          </ScrollReveal>

          {/* B2 Speaking */}
          <ScrollReveal custom={1}>
            <div className="bg-[#111827] rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row-reverse group text-white shadow-lg">
              <div className="flex-1 p-10 md:p-14 flex flex-col justify-center">
                 <div className="flex flex-wrap items-center gap-3 mb-4">
                   <h3 className="text-[32px] font-bold text-white">B2/C1 Intense Speaking</h3>
                   <span className="text-[10px] bg-white/10 px-3 py-1 rounded-full font-bold uppercase tracking-widest text-white/50">Advanced</span>
                 </div>
                 <p className="text-gray-300 text-[18px] mb-8 leading-[1.8] max-w-md">
                   Native speakers&apos; designed sessions to bridge the gap between academic knowledge and professional fluency.
                 </p>
                 <div className="space-y-4 mb-10">
                    <div className="flex items-center gap-4 text-sm font-semibold text-gray-300">
                       <span className="text-xl">🎓</span>
                       Led by Native German Coaches
                    </div>
                    <div className="flex items-center gap-4 text-sm font-semibold text-gray-300">
                       <span className="text-xl">💬</span>
                       Live Interactive Group Sessions
                    </div>
                 </div>
                 <button className="w-fit bg-[#4a6332] text-white px-10 py-4 rounded-xl font-bold transition-all hover:bg-[#5a783e]">
                    Enroll Now
                 </button>
              </div>
              <div className="md:w-5/12 h-[350px] md:h-auto relative overflow-hidden bg-gray-800">
                <Image 
                  src="/course-b2-speaking.png" 
                  alt="B2 Speaking" 
                  fill 
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000" 
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
