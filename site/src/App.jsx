import { useEffect, useRef } from 'react';

// ─── Scroll reveal hook ───────────────────────────────────────────────────────
function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.section-reveal');
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.12 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

// ─── GoldDivider ─────────────────────────────────────────────────────────────
function GoldDivider() {
  return (
    <div className="flex items-center justify-center my-6 gap-3">
      <div className="h-px flex-1 max-w-16 bg-gradient-to-r from-transparent to-gold-500/60" />
      <span className="text-gold-500 text-lg">⚓</span>
      <div className="h-px flex-1 max-w-16 bg-gradient-to-l from-transparent to-gold-500/60" />
    </div>
  );
}

// ─── Header ──────────────────────────────────────────────────────────────────
function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy-950/90 backdrop-blur-md border-b border-gold-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="/deed-hunter-cruise/assets/logo-globe.png"
            alt="The Deed Hunter Logo"
            className="h-10 w-10 object-contain"
          />
          <div className="hidden sm:block">
            <p className="text-gold-500 text-xs font-body tracking-widest uppercase font-semibold leading-tight">
              Cruzeiro ⚓
            </p>
            <p className="text-white text-sm font-display font-semibold leading-tight">
              The Deed Hunter
            </p>
          </div>
        </div>
        <a
          href="https://wa.me/16892650838"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white text-sm font-semibold px-4 py-2 rounded-full transition-all duration-200 hover:scale-105 shadow-lg"
        >
          <WhatsAppIcon />
          <span className="hidden xs:inline">WhatsApp</span>
        </a>
      </div>
    </header>
  );
}

// ─── Icons ───────────────────────────────────────────────────────────────────
function WhatsAppIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg className="w-5 h-5 text-red-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
    </svg>
  );
}

// ─── HeroSection ─────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url('/deed-hunter-cruise/assets/hero-bg.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950/80 via-navy-900/70 to-navy-950/95" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.08)_0%,transparent_70%)]" />

      {/* Ship image bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-64 sm:h-96 overflow-hidden">
        <img
          src="/deed-hunter-cruise/assets/hero-ship.png"
          alt="Navio de Cruzeiro"
          className="w-full h-full object-cover object-bottom opacity-50"
          style={{ maskImage: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 100%)' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-8 max-w-4xl mx-auto pt-20">
        {/* Top badge */}
        <div className="inline-flex items-center gap-2 border border-gold-500/50 bg-navy-800/60 backdrop-blur-sm rounded-full px-5 py-2 mb-6 animate-fade-in">
          <span className="text-gold-500 text-sm font-body font-semibold tracking-widest uppercase">
            CRUZEIRO ⚓
          </span>
        </div>

        {/* Main title */}
        <h1
          className="font-display text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-none tracking-tight mb-4 animate-fade-in-up"
          style={{ animationDelay: '0.2s', opacity: 0 }}
        >
          <span className="gold-gradient">THE DEED HUNTER</span>
          <br />
          <span className="text-white text-3xl sm:text-5xl lg:text-6xl xl:text-7xl">WORLD AT SEA</span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-gold-300/80 font-body text-lg sm:text-xl lg:text-2xl mb-6 tracking-wide animate-fade-in-up"
          style={{ animationDelay: '0.4s', opacity: 0 }}
        >
          A bordo no <span className="text-gold-400 font-semibold">Utopia Ship</span>
        </p>

        {/* Exclusive badge */}
        <div
          className="inline-block gold-border-gradient rounded-2xl px-6 py-3 mb-8 animate-fade-in-up"
          style={{ animationDelay: '0.5s', opacity: 0 }}
        >
          <span className="text-gold-500 text-xs font-body font-bold tracking-widest uppercase mr-2">[EXCLUSIVO]</span>
          <span className="text-white font-body font-semibold text-sm sm:text-base">
            Mastermind com <span className="text-gold-400">Marcos Jacober</span>
          </span>
        </div>

        {/* Date */}
        <div
          className="flex items-center justify-center gap-4 mb-10 animate-fade-in-up"
          style={{ animationDelay: '0.6s', opacity: 0 }}
        >
          <div className="text-center">
            <p className="text-gold-500 font-display text-2xl sm:text-3xl font-bold tracking-wider">AGOSTO</p>
            <p className="text-white/60 text-xs font-body tracking-widest uppercase">Mês</p>
          </div>
          <div className="h-10 w-px bg-gold-500/40" />
          <div className="text-center">
            <p className="text-gold-500 font-display text-2xl sm:text-3xl font-bold tracking-wider">10 A 14</p>
            <p className="text-white/60 text-xs font-body tracking-widest uppercase">Dias</p>
          </div>
          <div className="h-10 w-px bg-gold-500/40" />
          <div className="text-center">
            <p className="text-gold-500 font-display text-2xl sm:text-3xl font-bold tracking-wider">2026</p>
            <p className="text-white/60 text-xs font-body tracking-widest uppercase">Ano</p>
          </div>
        </div>

        {/* CTA */}
        <div
          className="animate-fade-in-up"
          style={{ animationDelay: '0.8s', opacity: 0 }}
        >
          <a
            href="https://wa.me/16892650838"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-500 text-white font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-[0_8px_32px_rgba(22,163,74,0.4)]"
          >
            <WhatsAppIcon size={24} />
            Garantir Minha Vaga
          </a>
          <p className="text-gold-300/60 text-sm mt-3 font-body">
            +1 (689) 265-0838
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-gold-500/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}

// ─── EventDetails ─────────────────────────────────────────────────────────────
function EventDetails() {
  const details = [
    {
      icon: '📅',
      title: 'Data do Evento',
      value: 'Agosto 10–14, 2026',
      sub: '5 dias a bordo',
    },
    {
      icon: '🚢',
      title: 'Embarcação',
      value: 'Utopia Ship',
      sub: 'Cruzeiro de luxo',
    },
    {
      icon: '🎯',
      title: 'Formato',
      value: 'Mastermind Exclusivo',
      sub: 'Com Marcos Jacober',
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-navy-800/50 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="text-center mb-12 section-reveal">
          <span className="text-gold-500 text-xs font-body tracking-widest uppercase font-semibold">O Evento</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-2">
            Uma experiência <span className="gold-gradient">única</span>
          </h2>
          <GoldDivider />
          <p className="text-white/60 max-w-2xl mx-auto font-body text-base sm:text-lg">
            Combine aprendizado de alto nível com a grandiosidade de um cruzeiro de luxo. Cinco dias de imersão, networking de elite e estratégias que transformam resultados.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {details.map((item, i) => (
            <div
              key={i}
              className="section-reveal gold-border-gradient rounded-2xl p-6 sm:p-8 text-center hover:bg-navy-700/40 transition-colors duration-300"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <span className="text-4xl mb-4 block">{item.icon}</span>
              <p className="text-gold-500/80 text-xs font-body tracking-widest uppercase mb-1">{item.title}</p>
              <p className="text-white font-display text-xl sm:text-2xl font-bold mb-1">{item.value}</p>
              <p className="text-white/50 font-body text-sm">{item.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── PricingSection ───────────────────────────────────────────────────────────
function PricingSection() {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      {/* BG glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.06)_0%,transparent_70%)]" />

      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        <div className="text-center mb-12 section-reveal">
          <span className="text-gold-500 text-xs font-body tracking-widest uppercase font-semibold">Investimento</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-2">
            Oferta <span className="gold-gradient">Especial</span>
          </h2>
          <GoldDivider />
        </div>

        {/* Pricing Card */}
        <div className="section-reveal gold-border-gradient rounded-3xl p-8 sm:p-12 relative overflow-hidden">
          {/* Corner glow */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl" />

          {/* Discount badge */}
          <div className="relative">
            <div className="inline-flex items-center gap-2 bg-gold-500/20 border border-gold-500/40 rounded-full px-4 py-1 mb-6">
              <span className="text-gold-400 text-xs font-body font-bold tracking-widest uppercase">
                Desconto especial para Next Level e Partner's Club
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
              {/* Strikethrough price */}
              <div>
                <p className="text-white/40 font-body text-sm mb-1">De:</p>
                <p className="text-white/40 font-display text-2xl sm:text-3xl line-through decoration-red-400/60">
                  $2,997.00
                </p>
              </div>

              <div className="text-3xl text-gold-500/60 hidden sm:block">→</div>

              {/* Discount */}
              <div className="flex items-center gap-3 bg-red-900/30 border border-red-500/30 rounded-2xl px-5 py-3">
                <span className="text-red-400 font-display text-2xl font-bold">$999.00</span>
                <span className="text-red-400/80 font-body text-lg font-semibold">OFF</span>
              </div>
            </div>

            {/* Final price */}
            <div className="border-t border-gold-500/20 pt-8">
              <p className="text-white/60 font-body text-sm tracking-widest uppercase mb-2">Final Price</p>
              <p className="font-display text-6xl sm:text-7xl font-black gold-gradient leading-none">
                $1,998.00
              </p>
              <p className="text-white/40 font-body text-sm mt-2">por pessoa (cabine interna)</p>
            </div>

            {/* Cabins */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <div className="flex-1 bg-navy-700/50 border border-gold-500/20 rounded-2xl p-4 text-center">
                <p className="text-gold-500 font-body text-xs tracking-widest uppercase font-semibold mb-1">Cabine Interna</p>
                <p className="text-white font-display text-xl font-bold">$1,998.00</p>
                <p className="text-white/40 text-xs mt-1">Preço final com desconto</p>
              </div>
              <div className="flex-1 bg-navy-700/50 border border-ocean-400/20 rounded-2xl p-4 text-center">
                <p className="text-ocean-400 font-body text-xs tracking-widest uppercase font-semibold mb-1">Cabine Varanda</p>
                <p className="text-white font-display text-xl font-bold">Consulte</p>
                <p className="text-white/40 text-xs mt-1">Opção com vista para o mar</p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 text-center">
              <a
                href="https://wa.me/16892650838"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-500 text-white font-bold text-lg px-10 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-[0_8px_32px_rgba(22,163,74,0.4)]"
              >
                <WhatsAppIcon size={22} />
                Reservar Agora
              </a>
              <p className="text-white/30 text-xs mt-4 font-body max-w-sm mx-auto">
                Sua cabine só será garantida mediante ao Downpayment e parcelamento efetivo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── IncludesSection ─────────────────────────────────────────────────────────
function IncludesSection() {
  const includes = ['Masterclass', 'Impostos', 'Seguro viagem'];
  const excludes = ['Pacote de bebida', 'Internet', 'Passeios', 'Extra tip'];

  return (
    <section className="py-20 sm:py-28 bg-navy-800/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        <div className="text-center mb-12 section-reveal">
          <span className="text-gold-500 text-xs font-body tracking-widest uppercase font-semibold">Detalhes do Pacote</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-2">
            O que <span className="gold-gradient">inclui</span>
          </h2>
          <GoldDivider />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Inclui */}
          <div className="section-reveal gold-border-gradient rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                <span className="text-green-400 text-lg">✅</span>
              </div>
              <h3 className="text-white font-display text-xl font-bold">INCLUI</h3>
            </div>
            <ul className="space-y-4">
              {includes.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckIcon />
                  <span className="text-white/90 font-body text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Não inclui */}
          <div className="section-reveal bg-navy-800/60 border border-red-500/20 rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center">
                <span className="text-red-400 text-lg">❌</span>
              </div>
              <h3 className="text-white font-display text-xl font-bold">NÃO INCLUI</h3>
            </div>
            <ul className="space-y-4">
              {excludes.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <XIcon />
                  <span className="text-white/70 font-body text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── AboutSection ─────────────────────────────────────────────────────────────
function AboutSection() {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,175,55,0.05)_0%,transparent_60%)]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="text-center mb-12 section-reveal">
          <span className="text-gold-500 text-xs font-body tracking-widest uppercase font-semibold">Seu Mentor</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-2">
            <span className="gold-gradient">Marcos Jacober</span>
          </h2>
          <GoldDivider />
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Photo */}
          <div className="section-reveal flex-shrink-0 w-56 sm:w-72 lg:w-80">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-gold-500/30 to-transparent rounded-2xl blur-xl scale-110" />
              <img
                src="/deed-hunter-cruise/assets/marcus-portrait.png"
                alt="Marcos Jacober"
                className="relative rounded-2xl w-full object-cover shadow-2xl gold-border-gradient"
                style={{ aspectRatio: '3/4' }}
              />
            </div>
          </div>

          {/* Content */}
          <div className="section-reveal flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 border border-gold-500/30 rounded-full px-4 py-1.5 mb-6">
              <span className="text-gold-500 text-xs font-body tracking-widest uppercase font-semibold">
                [EXCLUSIVO] Mastermind
              </span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">
              O Caçador de Títulos
            </h3>
            <p className="text-white/70 font-body text-base sm:text-lg leading-relaxed mb-6">
              Marcos Jacober é referência no mercado de tax deed e tax lien nos Estados Unidos. Com anos de experiência no setor imobiliário americano, ele já ajudou centenas de investidores a conquistarem resultados extraordinários através de estratégias únicas de aquisição de propriedades.
            </p>
            <p className="text-white/70 font-body text-base sm:text-lg leading-relaxed mb-8">
              Neste Mastermind exclusivo a bordo do Utopia Ship, você terá acesso direto ao Marcos e sua metodologia comprovada durante 5 dias de imersão completa no oceano.
            </p>
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              {['Estrategista', 'Investidor', 'Mentor', 'Palestrante'].map((tag) => (
                <span key={tag} className="bg-navy-700/60 border border-gold-500/20 rounded-full px-4 py-1.5 text-gold-400 text-sm font-body font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── CTASection ───────────────────────────────────────────────────────────────
function CTASection() {
  return (
    <section className="py-20 sm:py-28 bg-navy-800/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(22,163,74,0.08)_0%,transparent_70%)]" />

      <div className="max-w-3xl mx-auto px-4 sm:px-8 text-center section-reveal">
        <span className="text-gold-500 text-xs font-body tracking-widest uppercase font-semibold">Reserve sua vaga</span>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3 mb-4">
          Entre em contato pelo <span className="gold-gradient">WhatsApp</span>
        </h2>
        <GoldDivider />
        <p className="text-white/60 font-body text-base sm:text-lg mb-10">
          As vagas são limitadas. Entre em contato agora e garanta seu lugar nesta experiência única.
        </p>

        <div className="gold-border-gradient rounded-3xl p-8 sm:p-12 relative">
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 bg-green-600/20 rounded-full blur-2xl" />
          
          <p className="text-white/60 font-body text-sm tracking-widest uppercase mb-2">CONTATO WHATSAPP</p>
          <p className="font-display text-3xl sm:text-4xl font-bold text-white mb-8">
            +1 (689) 265-0838
          </p>

          <a
            href="https://wa.me/16892650838"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-500 text-white font-bold text-xl px-12 py-5 rounded-full transition-all duration-300 hover:scale-105 shadow-[0_8px_40px_rgba(22,163,74,0.5)]"
          >
            <WhatsAppIcon size={28} />
            Falar no WhatsApp
          </a>

          <p className="text-white/30 text-xs mt-6 font-body max-w-sm mx-auto">
            Preenchimento do Registro — todos os campos obrigatórios
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="py-12 bg-navy-950 border-t border-gold-500/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <img
            src="/deed-hunter-cruise/assets/logo-globe.png"
            alt="Logo"
            className="h-10 w-10 object-contain opacity-70"
          />
          <div>
            <p className="text-gold-500/80 text-xs font-body tracking-widest uppercase font-semibold">Cruzeiro ⚓</p>
            <p className="text-white/60 text-sm font-display font-semibold">The Deed Hunter World At Sea</p>
          </div>
        </div>
        
        <div className="border-t border-gold-500/10 pt-6 space-y-3">
          <p className="text-white/40 font-body text-xs sm:text-sm max-w-2xl mx-auto">
            Sua cabine só será garantida mediante ao Downpayment e parcelamento efetivo.
          </p>
          <p className="text-white/30 font-body text-xs max-w-2xl mx-auto">
            Preenchimento do Registro — todos os campos obrigatórios.
          </p>
          <p className="text-white/20 font-body text-xs mt-4">
            © 2026 The Deed Hunter · Marcos Jacober · Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-navy-900 font-body">
      <Header />
      <HeroSection />
      <EventDetails />
      <PricingSection />
      <IncludesSection />
      <AboutSection />
      <CTASection />
      <Footer />
    </div>
  );
}
