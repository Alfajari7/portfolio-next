'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

// GANTI FloatingParticles dengan ini:
function FloatingParticles() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; // ← JANGAN RENDER DI SERVER

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large gradient orbs */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            width: `${400 + i * 100}px`,
            height: `${400 + i * 100}px`,
            background: i === 0 
              ? 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)'
              : i === 1
              ? 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(236, 72, 153, 0.15) 0%, transparent 70%)',
            left: `${20 + i * 20}%`,
            top: `${10 + i * 25}%`,
          }}
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -80, 60, 0],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{
            duration: 20 + i * 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Small floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute rounded-full"
          style={{
            width: `${Math.random() * 6 + 2}px`,
            height: `${Math.random() * 6 + 2}px`,
            background: Math.random() > 0.5 
              ? 'rgba(59, 130, 246, 0.3)' 
              : 'rgba(139, 92, 246, 0.3)',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            filter: 'blur(1px)',
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

// 🔥 GRADIENT BORDER CARD
function GradientCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative p-0.5 rounded-2xl overflow-hidden group ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
      <div className="relative bg-black/50 backdrop-blur-sm rounded-2xl p-6">
        {children}
      </div>
    </div>
  );
}

// 🔥 ANIMATION COMPONENTS
function SectionAnimation({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
    >
      {children}
    </motion.div>
  );
}

function ItemAnimation({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
}

// 🔥 MAIN COMPONENT
export default function Home() {
  const [activeTab, setActiveTab] = useState('All');

  return (
    <main className="bg-gradient-to-br from-black via-gray-900 to-black text-white min-h-screen overflow-hidden relative">
      
      {/* BACKGROUND EFFECTS */}
      <FloatingParticles />
      
      {/* MAIN CONTENT */}
      <div className="relative z-10">
        
        {/* ================= HERO ================= */}
        <section className="min-h-screen flex items-center justify-center text-center px-4 md:px-8 relative">
          {/* Hero Background Glow */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
                filter: 'blur(100px)',
              }}
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
          
          <div className="relative z-20">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, type: "spring" }}
            >
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-6">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
                  PORTFOLIO
                </span>
              </h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <p className="text-2xl md:text-3xl text-gray-300 font-light mb-2">
                Bintang Alfajari
              </p>
              <p className="text-lg md:text-xl text-gray-400 max-w-md mx-auto">
                Digital Business Student & Creative Designer
              </p>
            </motion.div>
            
            {/* Animated scroll indicator */}
            <motion.div
              className="mt-20"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, delay: 1 }}
            >
              <div className="w-6 h-10 border-2 border-gray-400/30 rounded-full mx-auto">
                <div className="w-1 h-3 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full mx-auto mt-2"></div>
              </div>
              <p className="mt-2 text-sm text-gray-500">Scroll to explore</p>
            </motion.div>
          </div>
        </section>

        {/* ================= ABOUT ================= */}
        <SectionAnimation>
          <section className="px-4 md:px-8 lg:px-16 py-20 md:py-32">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-4xl md:text-5xl font-bold mb-4"
                >
                  About <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">Me</span>
                </motion.h2>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "6rem" }}
                  viewport={{ once: true }}
                  className="h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"
                />
              </div>

              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">
                {/* TEXT */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="lg:w-1/2 space-y-8"
                >
                  <div className="space-y-6">
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                      Saya mahasiswa S1 Bisnis Digital dengan latar belakang SMK Multimedia.
                      Memiliki minat besar pada desain grafis, media kreatif, dan konten digital.
                    </p>

                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                      Terbiasa mengerjakan desain untuk kebutuhan cetak, sosial media,
                      serta dokumentasi kegiatan organisasi dan event.
                    </p>
                  </div>

                  {/* Personal Info Card */}
                  <GradientCard>
                    <div className="space-y-4">
                      {[
                        { label: "Nama", value: "Bintang Alfajari", icon: "👤" },
                        { label: "Domisili", value: "Depok, Indonesia", icon: "📍" },
                        { label: "Email", value: "bintangalfajari1@gmail.com", icon: "✉️" },
                      ].map((item, index) => (
                        <div key={index} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-white/5 transition-colors">
                          <span className="text-2xl">{item.icon}</span>
                          <div>
                            <p className="text-sm text-gray-400">{item.label}</p>
                            <p className="text-white font-medium">{item.value}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </GradientCard>
                </motion.div>

                {/* FOTO */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="lg:w-1/2 relative group"
                >
                  <div className="relative overflow-hidden rounded-3xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 z-10"></div>
                    <Image
                      src="/foto1.png"
                      alt="Bintang Alfajari"
                      width={680}
                      height={900}
                      className="object-cover w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                      priority
                    />
                  </div>
                  {/* Glow effect */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </motion.div>
              </div>
            </div>
          </section>
        </SectionAnimation>

        {/* ================= EXPERIENCE ================= */}
        <SectionAnimation>
          <section className="px-4 md:px-8 lg:px-16 py-20 md:py-32 bg-gradient-to-b from-neutral-900/50 to-black/50">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-4xl md:text-5xl font-bold mb-4"
                >
                  Experience <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">&</span> Organization
                </motion.h2>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "6rem" }}
                  viewport={{ once: true }}
                  className="h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"
                />
              </div>

              <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                {/* TEXT */}
                <div className="space-y-8">
                  <ItemAnimation>
                    <GradientCard>
                      <h3 className="text-2xl font-semibold text-white mb-3">
                        Graphic Design & Finishing (PKL)
                      </h3>
                      <p className="italic text-gray-400 mb-4">Grand Depok Printing (GDP)</p>
                      <ul className="space-y-3 text-gray-300">
                        <li className="flex items-start">
                          <span className="text-blue-400 mr-3">•</span>
                          Mendesain banner dan stiker
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-400 mr-3">•</span>
                          Finishing cetak & penjilidan
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-400 mr-3">•</span>
                          Membantu proses produksi
                        </li>
                      </ul>
                    </GradientCard>
                  </ItemAnimation>

                  <ItemAnimation delay={0.1}>
                    <GradientCard>
                      <h3 className="text-2xl font-semibold text-white mb-3">
                        HIMABID – Divisi Humas
                      </h3>
                      <p className="italic text-gray-400 mb-4">Jakarta Global University</p>
                      <ul className="space-y-3 text-gray-300">
                        <li className="flex items-start">
                          <span className="text-purple-400 mr-3">•</span>
                          Desain poster dan konten sosial media
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-400 mr-3">•</span>
                          Media & dokumentasi acara
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-400 mr-3">•</span>
                          Publikasi program kerja
                        </li>
                      </ul>
                    </GradientCard>
                  </ItemAnimation>
                </div>

                {/* IMAGES */}
                <div className="space-y-8">
                  <ItemAnimation delay={0.2}>
                    <div className="group relative overflow-hidden rounded-3xl">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                      <img 
                        src="/pkl.jpg" 
                        alt="PKL Experience" 
                        className="w-full h-64 md:h-80 object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                        <p className="text-white text-xl font-semibold">PKL Experience</p>
                        <p className="text-gray-300">Grand Depok Printing</p>
                      </div>
                    </div>
                  </ItemAnimation>

                  <ItemAnimation delay={0.3}>
                    <div className="group relative overflow-hidden rounded-3xl">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                      <img 
                        src="/organisasi.jpg" 
                        alt="Organization" 
                        className="w-full h-64 md:h-80 object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                        <p className="text-white text-xl font-semibold">Organization</p>
                        <p className="text-gray-300">HIMABID - Humas Division</p>
                      </div>
                    </div>
                  </ItemAnimation>
                </div>
              </div>
            </div>
          </section>
        </SectionAnimation>

{/* ================= PROJECTS ================= */}
<SectionAnimation>
  <section className="min-h-screen px-4 md:px-8 lg:px-16 py-20 md:py-32">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Projects <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">&</span> Design Works
        </h2>
      </div>

      {/* UI / WEB */}
      <div className="mb-24">
        <h3 className="text-2xl mb-8">UI / Web Design</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {["/WEB1.png", "/mockup1.png"].map((src) => (
            <div key={src} className="group">
              <div className="overflow-hidden rounded-xl">
                <Image src={src} alt="" width={400} height={260}
                  className="w-full h-64 object-cover group-hover:scale-105 transition" />
              </div>
              <p className="mt-3 text-sm text-gray-400">UI / Web Design</p>
            </div>
          ))}
        </div>
      </div>

      {/* SOCIAL MEDIA */}
      <div className="mb-24">
        <h3 className="text-2xl mb-8">Social Media Design</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            "/sosial-media-zieffa.png",
            "/sosial-media-zieffa2.png",
            "/sosial-media-zieffa3.png",
          ].map((src) => (
            <div key={src} className="group">
              <div className="overflow-hidden rounded-xl">
                <Image src={src} alt="" width={400} height={260}
                  className="w-full h-64 object-cover group-hover:scale-105 transition" />
              </div>
              <p className="mt-3 text-sm text-gray-400">Social Media</p>
            </div>
          ))}
        </div>
      </div>

      {/* EVENT & BRANDING */}
      <div>
        <h3 className="text-2xl mb-8">Event & Branding</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            "/event1.jpg",
            "/event2.png",
            "/event3.jpg",
            "/clotingbrand1.png",
            "/donaru2.png",
          ].map((src) => (
            <div key={src} className="group">
              <div className="overflow-hidden rounded-xl">
                <Image src={src} alt="" width={400} height={260}
                  className="w-full h-64 object-cover group-hover:scale-105 transition" />
              </div>
              <p className="mt-3 text-sm text-gray-400">Event / Branding</p>
            </div>
          ))}
        </div>
      </div>


    </div>
  </section>
</SectionAnimation>

        {/* ================= CERTIFICATES ================= */}
        <SectionAnimation>
          <section className="px-4 md:px-8 lg:px-16 py-20 md:py-32 bg-gradient-to-b from-neutral-900/50 to-black/50">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-4xl md:text-5xl font-bold mb-4"
                >
                  Certificates
                </motion.h2>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "6rem" }}
                  viewport={{ once: true }}
                  className="h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"
                />
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  "/sertif1.png",
                  "/sertif2.jpg",
                  "/sertif3.png",
                  "/sertif4.jpg",
                  "/sertif5.jpg",
                  "sertif6.jpg",
                ].map((src, index) => (
                  <ItemAnimation key={index} delay={index * 0.1}>
                    <GradientCard>
                      <div className="relative h-48 overflow-hidden rounded-xl mb-6">
                        <Image
                          src={src}
                          alt={`Certificate ${index + 1}`}
                          width={400}
                          height={300}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="text-gray-400 text-center">Certificate</p>
                    </GradientCard>
                  </ItemAnimation>
                ))}
              </div>
            </div>
          </section>
        </SectionAnimation>

        {/* ================= FOOTER ================= */}
        <footer className="px-4 md:px-8 lg:px-16 py-12 border-t border-white/10 bg-black/50">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0">
                <p className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Bintang Alfajari
                </p>
                <p className="mt-2 text-gray-400">Digital Business Student & Graphic Designer</p>
              </div>
              
              <div className="text-center md:text-right">
                <p className="text-white font-semibold mb-2">Contact</p>
                <p className="text-gray-400 hover:text-white transition-colors">
                  bintangalfajari1@gmail.com
                </p>
              </div>
            </div>

          </div>
        </footer>
      </div>
    </main>
  );
}
