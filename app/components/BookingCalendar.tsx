'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollReveal, fadeUp, scaleIn } from './AnimationHelpers';

const DAYS: string[] = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
const TIME_SLOTS: string[] = ['9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '1:30 PM'];

function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number): number {
  return new Date(year, month, 1).getDay();
}

export default function BookingCalendar() {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState<number>(today.getMonth());
  const [currentYear, setCurrentYear] = useState<number>(today.getFullYear());
  const [selectedDay, setSelectedDay] = useState<number>(today.getDate());
  const [selectedTime, setSelectedTime] = useState<string>('10:00 AM');
  const [confirmed, setConfirmed] = useState<boolean>(false);
  const [direction, setDirection] = useState<number>(1);

  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDay = getFirstDayOfMonth(currentYear, currentMonth);
  const monthName = new Date(currentYear, currentMonth).toLocaleString('en-US', { month: 'long' });
  const unavailable: number[] = [3, 7, 14, 21];

  const navigate = (dir: number): void => {
    setDirection(dir);
    if (dir === -1) {
      if (currentMonth === 0) { setCurrentMonth(11); setCurrentYear(y => y - 1); }
      else setCurrentMonth(m => m - 1);
    } else {
      if (currentMonth === 11) { setCurrentMonth(0); setCurrentYear(y => y + 1); }
      else setCurrentMonth(m => m + 1);
    }
  };

  // Clamp selected day if it exceeds the number of days in the new month
  const clampedDay = Math.min(selectedDay, daysInMonth);
  const selectedDateStr = new Date(currentYear, currentMonth, clampedDay).toLocaleDateString('en-US', {
    weekday: 'long', month: 'long', day: 'numeric',
  });

  const calendarKey = `${currentYear}-${currentMonth}`;

  return (
    <section className="py-24 px-6 lg:px-10 bg-[#f8f9ff] relative" id="bookings">
      <div className="centered-content relative z-10">

        {/* Header */}
        <div className="text-center mb-12">
          <ScrollReveal variants={fadeUp}>
            <span className="text-[#6b81c7] font-semibold text-sm tracking-widest uppercase">Book a Session</span>
          </ScrollReveal>
          <ScrollReveal variants={fadeUp} custom={1} className="mt-3">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1a2e6b]">Schedule Your Call</h2>
          </ScrollReveal>
          <ScrollReveal variants={fadeUp} custom={2} className="mt-3">
            <p className="text-gray-600 text-[18px] leading-[1.6]">30-minute strategy session with Dr. Shoba Kapoor</p>
          </ScrollReveal>
        </div>


        <AnimatePresence mode="wait">
          {confirmed ? (
            <motion.div
              key="confirmed"
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-lg mx-auto bg-white rounded-2xl p-10 shadow-xl text-center border border-green-100"
            >
              <motion.div
                initial={{ scale: 0, rotate: -90 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                className="text-5xl mb-4"
              >✅</motion.div>
              <h3 className="text-[#1a2e6b] font-bold text-2xl mb-2">Booking Confirmed!</h3>
              <p className="text-gray-600 mb-1">{selectedDateStr}</p>
              <p className="text-gray-600 mb-6">{selectedTime}</p>
              <p className="text-gray-500 text-sm">Web conferencing details will be sent to your email.</p>
              <motion.button
                onClick={() => setConfirmed(false)}
                whileHover={{ scale: 1.02 }}
                className="mt-6 text-[#1a2e6b] text-sm underline hover:no-underline"
              >
                Book another session
              </motion.button>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-6"
            >
              {/* Left: Profile Card */}
              <ScrollReveal variants={fadeUp} custom={0} className="flex flex-col gap-4">
                <motion.div
                  whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(26,46,107,0.1)' }}
                  className="bg-white rounded-[24px] p-6 shadow-md border border-gray-100"
                >
                  <motion.div
                    className="w-20 h-20 rounded-full bg-gradient-to-br from-[#4a6abf] to-[#1a2e6b] flex items-center justify-center text-white text-3xl font-bold mb-4"
                    whileHover={{ rotate: 5, scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    SK
                  </motion.div>
                  <h3 className="text-[#1a2e6b] font-bold text-xl">Dr. Shoba Kapoor</h3>
                  <p className="text-[#6b81c7] text-[16px] font-semibold uppercase tracking-widest mt-1 mb-3">Expert Career Strategy</p>
                  <p className="text-[16px] text-gray-500 font-[400] leading-[1.6]">Book a personal career planning session. Get immediate clarity on your prospects.</p>
                  <div className="mt-4 flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-gray-500 text-[16px]"><span>🕐</span> 30 min</div>
                    <div className="flex items-center gap-2 text-gray-500 text-[16px]"><span>💬</span> Web conferencing details provided upon confirmation</div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-[#1a2e6b] text-white rounded-[24px] p-6"
                >
                  <h4 className="font-bold text-base mb-2">Strategy Prep</h4>
                  <p className="text-white/80 text-[16px] leading-[1.6] font-[400]">
                    Please have your current CV and primary career goals ready to share during the call for maximum efficiency.
                  </p>
                </motion.div>
              </ScrollReveal>

              {/* Center: Calendar */}
              <ScrollReveal variants={fadeUp} custom={1}>
                <motion.div
                  whileHover={{ boxShadow: '0 20px 40px rgba(26,46,107,0.1)' }}
                  className="bg-white rounded-[24px] p-6 shadow-md border border-gray-100"
                >
                  <div className="flex items-center justify-between mb-6">
                    <motion.button
                      onClick={() => navigate(-1)}
                      whileHover={{ scale: 1.2, color: '#1a2e6b' }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 hover:bg-gray-50 rounded-lg transition-colors text-lg"
                    >←</motion.button>
                    <AnimatePresence mode="wait" custom={direction}>
                      <motion.h3
                        key={calendarKey}
                        custom={direction}
                        initial={{ opacity: 0, x: direction * 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: direction * -30 }}
                        transition={{ duration: 0.25 }}
                        className="text-[#1a2e6b] font-bold text-lg"
                      >
                        {monthName} {currentYear}
                      </motion.h3>
                    </AnimatePresence>
                    <motion.button
                      onClick={() => navigate(1)}
                      whileHover={{ scale: 1.2, color: '#1a2e6b' }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 hover:bg-gray-50 rounded-lg transition-colors text-lg"
                    >→</motion.button>
                  </div>

                  <div className="grid grid-cols-7 gap-1 mb-3">
                    {DAYS.map(d => (
                      <div key={d} className="text-center text-xs font-semibold text-gray-400 py-1">{d}</div>
                    ))}
                  </div>

                  <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                      key={calendarKey}
                      custom={direction}
                      initial={{ opacity: 0, x: direction * 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: direction * -40 }}
                      transition={{ duration: 0.3 }}
                      className="grid grid-cols-7 gap-1"
                    >
                      {Array(firstDay).fill(null).map((_, i) => <div key={`e-${i}`} />)}
                      {Array.from({ length: daysInMonth }, (_, i) => i + 1).map(day => {
                        const isUnavail = unavailable.includes(day);
                        const isSelected = day === selectedDay;
                        const isToday = day === today.getDate() && currentMonth === today.getMonth() && currentYear === today.getFullYear();
                        return (
                          <motion.button
                            key={day}
                            disabled={isUnavail}
                            onClick={() => setSelectedDay(day)}
                            whileHover={!isUnavail ? { scale: 1.15, backgroundColor: isSelected ? '#1a2e6b' : '#eef1fb' } : {}}
                            whileTap={!isUnavail ? { scale: 0.9 } : {}}
                            className={`
                              aspect-square rounded-full text-sm font-medium flex items-center justify-center transition-colors
                              ${isSelected ? 'bg-[#1a2e6b] text-white shadow-md' : ''}
                              ${isUnavail ? 'text-gray-200 cursor-not-allowed' : !isSelected ? 'text-gray-700 cursor-pointer' : ''}
                              ${isToday && !isSelected ? 'ring-2 ring-[#1a2e6b] ring-offset-1' : ''}
                            `}
                          >
                            {day}
                          </motion.button>
                        );
                      })}
                    </motion.div>
                  </AnimatePresence>

                  <div className="mt-4 flex items-center gap-4 text-xs text-gray-400">
                    <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#1a2e6b] inline-block" /> Available</span>
                    <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-gray-200 inline-block" /> Unavailable</span>
                  </div>
                </motion.div>
              </ScrollReveal>

              {/* Right: Time Slots */}
              <ScrollReveal variants={fadeUp} custom={2}>
                <motion.div
                  whileHover={{ boxShadow: '0 20px 40px rgba(26,46,107,0.1)' }}
                  className="bg-white rounded-2xl p-6 shadow-md border border-gray-100"
                >
                  <h3 className="text-[#1a2e6b] font-bold text-base mb-1">{selectedDateStr}</h3>
                  <p className="text-gray-400 text-sm mb-6">Select your preferred time slot</p>

                  <div className="flex flex-col gap-3">
                    {TIME_SLOTS.map((slot, i) => (
                      <motion.button
                        key={slot}
                        onClick={() => setSelectedTime(slot)}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.06, duration: 0.35 }}
                        whileHover={{ scale: 1.02, x: 2 }}
                        whileTap={{ scale: 0.97 }}
                        className={`py-3.5 px-4 rounded-xl text-sm font-semibold border-2 transition-all duration-150 ${
                          selectedTime === slot
                            ? 'bg-[#1a2e6b] border-[#1a2e6b] text-white shadow-md'
                            : 'border-gray-100 text-gray-700 hover:border-[#1a2e6b]/30'
                        }`}
                      >
                        {slot}
                      </motion.button>
                    ))}
                  </div>

                  <motion.button
                    onClick={() => setConfirmed(true)}
                    whileHover={{ scale: 1.03, boxShadow: '0 12px 35px rgba(26,46,107,0.35)' }}
                    whileTap={{ scale: 0.97 }}
                    className="mt-6 w-full bg-gradient-to-r from-[#1a2e6b] to-[#2a4abf] text-white font-bold py-4 rounded-xl shadow-lg"
                  >
                    Confirm Booking
                  </motion.button>
                </motion.div>
              </ScrollReveal>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
