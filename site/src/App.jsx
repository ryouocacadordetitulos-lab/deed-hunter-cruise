import React from 'react';

const BASE = import.meta.env.BASE_URL;

function GoldDivider() {
  return (
    <div className="flex items-center gap-4 my-8">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-yellow-600 to-transparent opacity-60" />
      <svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 7 Q6 0 12 7 Q18 14 24 7" stroke="#C9A84C" strokeWidth="1.5" fill="none"/>
      </svg>
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-yellow-600 to-transparent opacity-60" />
    </div>
  );
}

function StarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="#C9A84C" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 0l1.8 5.5H16l-4.9 3.6 1.9 5.9L8 11.4l-5 3.6 1.9-5.9L0 5.5h6.2z"/>
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="10" cy="10" r="10" fill="#C9A84C" opacity="0.15"/>
      <path d="M5 10l4 4 6-7" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="10" cy="10" r="10" fill="#ef4444" opacity="0.15"/>
      <path d="M7 7l6 6M13 7l-6 6" stroke="#ef4444" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

function WaveOrnament() {
  return (
    <svg width="300" height="20" viewBox="0 0 300 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto opacity-50">
      <path d="M0 10 Q15 2 30 10 Q45 18 60 10 Q75 2 90 10 Q105 18 120 10 Q135 2 150 10 Q165 18 180 10 Q195 2 210 10 Q225 18 240 10 Q255 2 270 10 Q285 18 300 10" stroke="#C9A84C" strokeWidth="1.5" fill="none"/>
    </svg>
  );
}

export default function App() {
  return (
    <div
      className="min-h-screen text-white"
      style={{ backgroundColor: '#0B1537', fontFamily: "'Lato', sans-serif" }}
    >
      {/* ──────────────────────────────────────────────────────────
          SECTION 1: HERO
      ────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Background ship image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${BASE}assets/hero-bg.png)`,
            opacity: 0.35,
          }}
        />
        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1537]/80 via-[#0B1537]/40 to-[#0B1537]/90" />

        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 py-16 flex flex-col items-center text-center">
          {/* Logo */}
          <div className="mb-6">
            <img
              src={`${BASE}assets/logo-globe.png`}
              alt="The Deed Hunter Globe Logo"
              className="h-24 w-24 mx-auto drop-shadow-2xl"
            />
          </div>

          {/* Stars row */}
          <div className="flex gap-2 mb-4">
            {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
          </div>

          {/* Main title */}
          <h1
            className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-widest uppercase mb-2"
            style={{ fontFamily: "'Cinzel', serif", color: '#C9A84C' }}
          >
            CRUZEIRO
          </h1>
          <div className="flex items-center gap-3 mb-2">
            <div className="h-px w-12 bg-yellow-600 opacity-60" />
            <span className="text-xl" aria-label="anchor">⚓</span>
            <div className="h-px w-12 bg-yellow-600 opacity-60" />
          </div>
          <h2
            className="text-xl sm:text-2xl md:text-4xl font-bold tracking-widest uppercase leading-tight"
            style={{ fontFamily: "'Cinzel', serif", color: '#E8C86A' }}
          >
            THE DEED HUNTER
          </h2>
          <h3
            className="text-lg sm:text-xl md:text-3xl font-semibold tracking-wider uppercase mt-1"
            style={{ fontFamily: "'Cinzel', serif", color: '#C9A84C' }}
          >
            WORLD AT SEA
          </h3>

          <GoldDivider />

          {/* Hero person image */}
          <div className="relative mb-6">
            <img
              src={`${BASE}assets/hero-person.png`}
              alt="Marcos Jacober — Mastermind Advisor"
              className="mx-auto max-h-[480px] object-contain drop-shadow-2xl"
              style={{ filter: 'drop-shadow(0 0 40px rgba(201,168,76,0.3))' }}
            />
          </div>

          {/* Subheading */}
          <p
            className="text-sm sm:text-base tracking-[0.3em] uppercase"
            style={{ fontFamily: "'Cinzel', serif", color: '#C9A84C', opacity: 0.85 }}
          >
            A bordo no Utopia Ship
          </p>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          SECTION 2: EXCLUSIVO BADGE + MASTERMIND INFO
      ────────────────────────────────────────────────────────── */}
      <section className="relative py-12 px-4" style={{ backgroundColor: '#070E25' }}>
        <div className="max-w-3xl mx-auto text-center">
          {/* EXCLUSIVO badge */}
          <div className="inline-block mb-6">
            <div
              className="px-8 py-2 text-sm tracking-[0.4em] uppercase font-bold border"
              style={{
                fontFamily: "'Cinzel', serif",
                color: '#070E25',
                backgroundColor: '#C9A84C',
                borderColor: '#C9A84C',
                letterSpacing: '0.35em',
              }}
            >
              ✦ EXCLUSIVO ✦
            </div>
          </div>

          <p
            className="text-lg sm:text-xl tracking-widest uppercase mb-2"
            style={{ fontFamily: "'Cinzel', serif", color: '#E8C86A' }}
          >
            Mastermind com
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-wider"
            style={{ fontFamily: "'Cinzel', serif", color: '#C9A84C' }}
          >
            Marcos Jacober
          </h2>

          <GoldDivider />

          <p
            className="text-base sm:text-lg tracking-widest uppercase"
            style={{ fontFamily: "'Cinzel', serif", color: '#E8C86A', opacity: 0.8 }}
          >
            A bordo no Utopia Ship — Royal Caribbean
          </p>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          SECTION 3: DATE
      ────────────────────────────────────────────────────────── */}
      <section className="py-16 px-4" style={{ backgroundColor: '#0B1537' }}>
        <div className="max-w-3xl mx-auto text-center">
          <p
            className="text-sm tracking-[0.4em] uppercase mb-4"
            style={{ fontFamily: "'Cinzel', serif", color: '#C9A84C', opacity: 0.7 }}
          >
            Data do Evento
          </p>
          <div
            className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-widest uppercase"
            style={{ fontFamily: "'Cinzel', serif", color: '#C9A84C' }}
          >
            AGOSTO
          </div>
          <div className="flex items-center justify-center gap-4 my-3">
            <div className="h-px flex-1 max-w-[100px] bg-yellow-700 opacity-50" />
            <span
              className="text-2xl sm:text-4xl md:text-6xl font-bold tracking-widest"
              style={{ fontFamily: "'Cinzel', serif", color: '#E8C86A' }}
            >
              10 A 14
            </span>
            <div className="h-px flex-1 max-w-[100px] bg-yellow-700 opacity-50" />
          </div>
          <div
            className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-widest uppercase"
            style={{ fontFamily: "'Cinzel', serif", color: '#C9A84C' }}
          >
            2026
          </div>

          <div className="mt-6 flex justify-center gap-2">
            {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          SECTION 4 & 5: PRICING CARD + CABIN
      ────────────────────────────────────────────────────────── */}
      <section className="py-16 px-4" style={{ backgroundColor: '#070E25' }}>
        <div className="max-w-2xl mx-auto">
          {/* Discount badge */}
          <div className="text-center mb-6">
            <span
              className="inline-block px-6 py-2 text-xs sm:text-sm tracking-widest uppercase font-bold"
              style={{
                fontFamily: "'Cinzel', serif",
                color: '#070E25',
                backgroundColor: '#C9A84C',
              }}
            >
              Desconto especial para Next Level e Partner's Club
            </span>
          </div>

          {/* Gold-bordered pricing card */}
          <div
            className="rounded-lg p-8 sm:p-10 text-center"
            style={{
              border: '1px solid #C9A84C',
              backgroundColor: '#0B1537',
              boxShadow: '0 0 40px rgba(201,168,76,0.15), inset 0 0 60px rgba(201,168,76,0.04)',
            }}
          >
            {/* Original price */}
            <p className="text-sm uppercase tracking-widest mb-2" style={{ color: '#C9A84C', opacity: 0.7, fontFamily: "'Cinzel', serif" }}>
              De:
            </p>
            <p className="text-xl sm:text-2xl font-light mb-1" style={{ color: '#aaa', textDecoration: 'line-through' }}>
              $2.997,00
            </p>

            {/* OFF badge */}
            <div className="inline-block my-3 px-5 py-2 rounded-full" style={{ backgroundColor: '#8B0000', border: '1px solid #ef4444' }}>
              <span className="text-lg sm:text-2xl font-bold text-white" style={{ fontFamily: "'Cinzel', serif" }}>
                $999,00 <span className="text-sm tracking-widest">OFF</span>
              </span>
            </div>

            <GoldDivider />

            {/* Final price */}
            <p className="text-sm uppercase tracking-widest mb-2" style={{ color: '#C9A84C', opacity: 0.7, fontFamily: "'Cinzel', serif" }}>
              Preço Final:
            </p>
            <div
              className="text-4xl sm:text-6xl font-bold my-2"
              style={{ fontFamily: "'Cinzel', serif", color: '#C9A84C' }}
            >
              $1.998,00
            </div>

            <GoldDivider />

            {/* Cabin info */}
            <div className="mt-4">
              <p
                className="text-lg sm:text-xl tracking-widest uppercase font-semibold"
                style={{ fontFamily: "'Cinzel', serif", color: '#E8C86A' }}
              >
                Cabine Interna
              </p>
              <p className="text-sm mt-1" style={{ color: '#C9A84C', opacity: 0.75 }}>
                Opção: Cabine Varanda
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          SECTION 6: INCLUDES / NOT INCLUDES
      ────────────────────────────────────────────────────────── */}
      <section className="py-16 px-4" style={{ backgroundColor: '#0B1537' }}>
        <div className="max-w-3xl mx-auto">
          <h3
            className="text-center text-xl sm:text-2xl uppercase tracking-widest mb-10"
            style={{ fontFamily: "'Cinzel', serif", color: '#C9A84C' }}
          >
            O que está incluído
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Inclui */}
            <div
              className="rounded-lg p-6"
              style={{ border: '1px solid rgba(201,168,76,0.3)', backgroundColor: 'rgba(201,168,76,0.04)' }}
            >
              <h4
                className="text-center text-sm tracking-[0.3em] uppercase mb-5 pb-3"
                style={{
                  fontFamily: "'Cinzel', serif",
                  color: '#C9A84C',
                  borderBottom: '1px solid rgba(201,168,76,0.3)',
                }}
              >
                ✓ Inclui
              </h4>
              <ul className="space-y-4">
                {['Masterclass', 'Impostos', 'Seguro viagem'].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckIcon />
                    <span className="text-base text-gray-200 font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Não inclui */}
            <div
              className="rounded-lg p-6"
              style={{ border: '1px solid rgba(239,68,68,0.3)', backgroundColor: 'rgba(239,68,68,0.04)' }}
            >
              <h4
                className="text-center text-sm tracking-[0.3em] uppercase mb-5 pb-3"
                style={{
                  fontFamily: "'Cinzel', serif",
                  color: '#ef4444',
                  borderBottom: '1px solid rgba(239,68,68,0.3)',
                }}
              >
                ✗ Não Inclui
              </h4>
              <ul className="space-y-4">
                {['Pacote de bebida', 'Internet', 'Passeios', 'Extra tip'].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CrossIcon />
                    <span className="text-base text-gray-400 font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          SECTION 7: CTA — WhatsApp
      ────────────────────────────────────────────────────────── */}
      <section className="py-20 px-4" style={{ backgroundColor: '#070E25' }}>
        <div className="max-w-2xl mx-auto text-center">
          <p
            className="text-sm tracking-[0.4em] uppercase mb-4"
            style={{ fontFamily: "'Cinzel', serif", color: '#C9A84C', opacity: 0.8 }}
          >
            Garanta sua vaga agora
          </p>
          <h3
            className="text-2xl sm:text-3xl font-bold uppercase tracking-widest mb-8"
            style={{ fontFamily: "'Cinzel', serif", color: '#E8C86A' }}
          >
            Entre em Contato
          </h3>

          <a
            href="https://wa.me/16892650838"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full text-white font-bold text-lg transition-transform hover:scale-105 active:scale-95"
            style={{ backgroundColor: '#25D366', boxShadow: '0 4px 30px rgba(37,211,102,0.4)' }}
          >
            {/* WhatsApp icon */}
            <svg width="26" height="26" viewBox="0 0 32 32" fill="white" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.002 2.4C8.48 2.4 2.4 8.48 2.4 16.002c0 2.395.63 4.732 1.826 6.79L2.4 29.6l7.026-1.804A13.538 13.538 0 0016.002 29.6C23.522 29.6 29.6 23.52 29.6 16.002 29.6 8.48 23.522 2.4 16.002 2.4zm0 24.64a11.095 11.095 0 01-5.652-1.543l-.404-.24-4.17 1.072 1.104-4.06-.263-.418A11.042 11.042 0 014.944 16C4.944 9.857 9.857 4.944 16 4.944c6.142 0 11.055 4.913 11.055 11.058 0 6.143-4.913 11.038-11.053 11.038zm6.073-8.273c-.333-.166-1.966-.97-2.272-1.08-.305-.11-.527-.166-.748.167-.222.333-.858 1.08-1.052 1.303-.194.222-.388.25-.721.083-.333-.166-1.406-.518-2.678-1.654-.99-.883-1.659-1.975-1.854-2.308-.193-.333-.02-.512.146-.678.15-.149.332-.389.499-.583.166-.194.222-.333.333-.555.11-.222.055-.416-.028-.583-.083-.166-.748-1.803-1.025-2.47-.27-.649-.547-.561-.748-.572l-.638-.012a1.222 1.222 0 00-.887.416c-.305.333-1.163 1.137-1.163 2.773 0 1.636 1.19 3.218 1.357 3.44.166.223 2.34 3.573 5.671 5.01.793.343 1.412.547 1.894.7.796.25 1.52.215 2.093.13.638-.094 1.966-.804 2.244-1.58.278-.776.278-1.44.194-1.58-.082-.138-.305-.222-.638-.388z"/>
            </svg>
            <span>WhatsApp: +1 (689) 265-0838</span>
          </a>

          <GoldDivider />

          <p className="text-sm" style={{ color: '#C9A84C', opacity: 0.6 }}>
            Clique para iniciar o contato no WhatsApp
          </p>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          SECTION 8: FOOTER
      ────────────────────────────────────────────────────────── */}
      <footer
        className="py-12 px-4 text-center"
        style={{ backgroundColor: '#070E25', borderTop: '1px solid rgba(201,168,76,0.2)' }}
      >
        <div className="max-w-2xl mx-auto">
          <WaveOrnament />

          <div className="mt-8 space-y-3">
            <p className="text-xs sm:text-sm" style={{ color: '#C9A84C', opacity: 0.65, lineHeight: '1.7' }}>
              ⚠️ Sua cabine só será garantida mediante ao Downpayment e parcelamento efetivo.
            </p>
            <p className="text-xs sm:text-sm" style={{ color: '#C9A84C', opacity: 0.65, lineHeight: '1.7' }}>
              📋 Preenchimento do Registro — todos os campos obrigatórios.
            </p>
          </div>

          <WaveOrnament />

          <p
            className="mt-8 text-xs tracking-widest uppercase"
            style={{ fontFamily: "'Cinzel', serif", color: '#C9A84C', opacity: 0.4 }}
          >
            © 2026 The Deed Hunter World At Sea — Marcos Jacober
          </p>
        </div>
      </footer>
    </div>
  );
}
