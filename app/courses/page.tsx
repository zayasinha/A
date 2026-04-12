'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageWrapper from '../components/PageWrapper';

interface Category {
  id: string;
  label: string;
}

export default function CoursesPage() {
  const categories: Category[] = [
    { id: 'short', label: 'Short-Term/Intense' },
    { id: 'semester', label: 'Full Semester' },
    { id: 'career', label: 'Career & Research' },
  ];

  return (
    <PageWrapper>
      <Navbar />
      
      <main className="pt-[160px] pb-20 bg-white min-h-screen">

        <div className="centered-content">
          
          {/* Hero Section */}
          <section className="mb-40 text-center">
            <div className="comfort-container">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="display-xl text-[#1a2e6b] mb-10"
              >
                Mastering the German Path
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-[20px] text-gray-600 leading-[1.8]"
              >
                Expert-led language courses and career modules designed for the Indian professional navigating the German academic and corporate landscape.
              </motion.p>
            </div>
          </section>

          {/* Filters */}
          <section className="mb-24 flex flex-wrap items-center justify-between gap-10 pb-8 border-b border-gray-100">
            <div className="flex bg-gray-50 p-2 rounded-2xl overflow-x-auto no-scrollbar">
              {categories.map((cat, i) => (
                <button 
                  key={cat.id}
                  className={`px-8 py-3.5 rounded-xl text-base font-semibold transition-all whitespace-nowrap ${i === 0 ? 'bg-white shadow-md text-[#1a2e6b]' : 'text-gray-400 hover:text-gray-600'}`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
            <div className="flex gap-10 text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
              <span className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-green-500" /> Available
              </span>
              <span className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400" /> Sold Out
              </span>
            </div>
          </section>

          {/* Short-Term Courses */}
          <section className="mb-[150px]">
            <div className="flex items-center gap-6 mb-16">
              <h2 className="display-lg text-[#1a2e6b]">Short-Term Courses</h2>
              <span className="text-xs uppercase tracking-[0.3em] font-black bg-gray-100 px-4 py-2 rounded-lg text-gray-500">Intense</span>
            </div>
            
            <div className="space-y-32">

              {/* Intro Course */}
              <div className="bg-[#f8f9fc] rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row group border border-gray-100/50">
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
                   <div className="flex items-center gap-8">
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
                    sizes="40vw" 
                    className="object-cover group-hover:scale-105 transition-transform duration-1000" 
                  />
                </div>
              </div>

              {/* B2 Speaking */}
              <div className="bg-[#111827] rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row-reverse group text-white">
                <div className="flex-1 p-10 md:p-14 flex flex-col justify-center">
                   <div className="flex items-center gap-3 mb-4">
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
                <div className="md:w-5/12 h-[350px] md:h-auto relative overflow-hidden">
                  <Image 
                    src="/course-b2-speaking.png" 
                    alt="B2 Speaking" 
                    fill 
                    sizes="40vw" 
                    className="object-cover group-hover:scale-105 transition-transform duration-1000" 
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Spacer between categories */}
          <div className="h-[100px]" aria-hidden="true" />

          {/* Career & Application Modules */}
          <section className="mb-[150px]">
            <div className="bg-[#f9faf5] rounded-[2.5rem] p-12 md:p-24 relative overflow-hidden">
               <div className="text-center mb-16 comfort-container">
                  <h2 className="display-lg text-[#1a2e6b] mb-6">Career Architecture</h2>
                  <p className="text-gray-600 text-lg leading-[1.8] font-light">Bridging the gap between Indian expertise and German expectations.</p>
               </div>
               
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {/* Text Side */}
                  <div className="bg-white p-10 md:p-14 rounded-[2rem] shadow-sm border border-gray-100">
                     <h3 className="text-[32px] font-bold text-[#1a2e6b] mb-6">Application Strategy</h3>
                     <p className="italic text-gray-500 mb-8 text-lg border-l-4 border-gray-100 pl-6 leading-relaxed">
                       &quot;Mastering the German Anschreiben and the architectural clarity of the CV.&quot;
                     </p>
                     <ul className="space-y-4 mb-10 text-[16px] text-gray-500 leading-relaxed">
                        <li className="flex gap-4">
                           <span className="w-5 h-5 rounded bg-green-50 text-green-600 flex items-center justify-center font-bold text-xs shrink-0 mt-1">✓</span>
                           <p>Strategic insights on prioritizing German job sectors.</p>
                        </li>
                        <li className="flex gap-4">
                           <span className="w-5 h-5 rounded bg-green-50 text-green-600 flex items-center justify-center font-bold text-xs shrink-0 mt-1">✓</span>
                           <p>Includes a 1-1 personalized CV &amp; Cover Letter audit.</p>
                        </li>
                     </ul>
                     <button className="w-full bg-[#1a2e6b] text-white py-5 rounded-2xl font-bold text-lg hover:shadow-xl transition-all">
                        Register for Updates
                     </button>
                  </div>
                  {/* Image Side - No text overlap */}
                  <div className="bg-[#0f172a] rounded-[2rem] relative overflow-hidden">
                     <Image 
                      src="/course-career-apply.png" 
                      alt="Career Success" 
                      fill 
                      sizes="40vw" 
                      className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000" 
                     />
                  </div>
               </div>
            </div>
          </section>

          {/* Academic Webinars */}
          <section className="mb-40">
            <div className="flex items-center justify-between mb-12">
               <h2 className="text-[32px] font-bold text-[#1a2e6b]">Academic Webinars</h2>
               <p className="text-gray-400 font-bold">Starting from <span className="text-[#1a2e6b] text-xl ml-2">€199 <span className="text-sm font-medium text-gray-400">/ session</span></span></p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
               <div className="group">
                  <div className="h-[300px] relative rounded-[2rem] overflow-hidden mb-6">
                     <Image src="/webinar-research.png" alt="Research" fill sizes="40vw" className="object-cover" />
                     <span className="absolute top-6 left-6 bg-white shadow-xl px-4 py-2 rounded-full text-[10px] font-extrabold uppercase tracking-widest text-[#1a2e6b]">PhD Special</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#1a2e6b] mb-3">Research &amp; PhD Culture</h3>
                  <p className="text-gray-500 mb-6 leading-[1.8]">Understanding the hierarchy, funding landscape, and social expectations of German academia.</p>
                  <button className="text-[#1a2e6b] font-bold text-sm border-b-2 border-[#1a2e6b]/10 hover:border-[#1a2e6b] transition-all">View Detail</button>
               </div>

               <div className="group">
                  <div className="h-[300px] relative rounded-[2rem] overflow-hidden mb-6">
                     <Image src="/webinar-roadmap.png" alt="Roadmap" fill sizes="40vw" className="object-cover" />
                     <span className="absolute top-6 left-6 bg-white shadow-xl px-4 py-2 rounded-full text-[10px] font-extrabold uppercase tracking-widest text-[#1a2e6b]">Career Prep</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#1a2e6b] mb-3">Your Options in Germany</h3>
                  <p className="text-gray-500 mb-6 leading-[1.8]">From Master&apos;s programs to direct vocational training (Ausbildung). A complete roadmap.</p>
                  <button className="bg-[#4a6332] text-white px-8 py-3 rounded-xl font-bold text-sm hover:shadow-lg transition-all">Book Now</button>
               </div>
            </div>
          </section>

          {/* Full Semester Courses */}
          <section className="pb-20">
            <div className="flex items-baseline gap-4 mb-16">
               <h2 className="display-lg text-[#1a2e6b]">Full Semester Courses</h2>
               <span className="text-xs uppercase tracking-[0.2em] font-extrabold bg-gray-100 px-3 py-1 rounded text-gray-400">Long-Term Programs</span>
            </div>
            
            <div className="space-y-40">
               {/* A1 Course */}
               <div className="flex flex-col md:flex-row items-stretch gap-10 md:gap-24">
                  <div className="flex-1 py-8">
                     <h3 className="text-[32px] font-bold text-[#1a2e6b] mb-4">German A1 (Standard Semester)</h3>
                     <p className="text-gray-500 text-[18px] leading-[1.8] mb-10">
                        Our core beginner program. We cover phonetics, basic syntax, and essential social interactions for a smooth landing.
                     </p>
                     <div className="grid grid-cols-2 gap-10 mb-12 border-t border-gray-100 pt-8">
                        <div>
                           <span className="text-[10px] uppercase font-black text-gray-300 tracking-widest block mb-2">Schedule</span>
                           <p className="text-[#1a2e6b] font-bold">Tue &amp; Fri Sessions</p>
                        </div>
                        <div>
                           <span className="text-[10px] uppercase font-black text-gray-300 tracking-widest block mb-2">Duration</span>
                           <p className="text-[#1a2e6b] font-bold">16 Week Program</p>
                        </div>
                     </div>
                     <button className="bg-[#4a6332] text-white px-12 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all">Enroll Now</button>
                  </div>
                  <div className="md:w-5/12 h-[450px] relative rounded-[2.5rem] overflow-hidden shadow-sm">
                     <Image src="/course-a1-semester.png" alt="A1" fill sizes="40vw" className="object-cover" />
                  </div>
               </div>

               {/* B2 Conversations */}
               <div className="flex flex-col md:flex-row-reverse items-stretch gap-10 md:gap-24">
                  <div className="flex-1 py-8">
                     <h3 className="text-[32px] font-bold text-[#1a2e6b] mb-4">B2/C1 Professional Conversations</h3>
                     <p className="text-gray-500 text-[18px] leading-[1.8] mb-10">
                        Focused exclusively on verbal communication, dialect nuance, and professional networking etiquette for senior-level roles.
                     </p>
                     <div className="flex gap-10 mb-12 border-t border-gray-100 pt-8">
                        <div className="flex items-center gap-3">
                           <span className="text-2xl">🎓</span>
                           <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Certification</span>
                        </div>
                        <div className="flex items-center gap-3">
                           <span className="text-2xl">👥</span>
                           <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Small Groups</span>
                        </div>
                     </div>
                     <button className="bg-[#4a6332] text-white px-12 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all">Enroll Now</button>
                  </div>
                  <div className="md:w-5/12 h-[450px] relative rounded-[2.5rem] overflow-hidden shadow-sm">
                     <Image src="/course-b2-conv.png" alt="B2 Fluency" fill sizes="40vw" className="object-cover" />
                  </div>
               </div>
            </div>
          </section>
        </div>
      </main>


      <Footer />
    </PageWrapper>
  );
}
