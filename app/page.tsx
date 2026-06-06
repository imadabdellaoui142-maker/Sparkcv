export default function Home() {
  return (
    <main className="min-h-screen bg-navy text-cream font-sans overflow-x-hidden">

      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-navy/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-lg mx-auto px-5 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gold/20 border border-gold/30 flex items-center justify-center">
              <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <span className="text-lg font-bold tracking-tight">Spark<span className="text-gold">CV</span></span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-white/50">FR</span>
            <div className="w-6 h-6 rounded-full bg-gold/20 border border-gold/30 flex items-center justify-center">
              <svg className="w-3 h-3 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            </div>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-lg mx-auto px-5 pt-12 pb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-xs font-semibold text-gold mb-5">
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
          CV en français, anglais + arabe
        </div>

        <h1 className="text-[2rem] leading-[1.15] font-black tracking-tight">
          Ton CV professionnel,<br />
          <span className="text-gold">sans galère</span> و لا تعقيد
        </h1>

        <p className="mt-4 text-sm text-white/60 leading-relaxed max-w-sm">
          Construit un CV qui cartonne aux yeux des recruteurs algériens et internationaux — gratuitement. Template premium, export PDF, prêt à postuler.
        </p>

        <div className="mt-7 flex gap-3">
          <button className="pressable flex-1 h-12 rounded-xl bg-gold text-navy font-bold text-sm shadow-lg shadow-gold/20 active:scale-[0.97] transition-all duration-150">
            Commencer mon CV
          </button>
          <button className="pressable h-12 px-4 rounded-xl border border-white/10 text-white/80 text-sm font-semibold active:scale-[0.97] transition-all duration-150">
            Voir les modèles
          </button>
        </div>
      </section>

      {/* AD PLACEHOLDER 1 — Banner */}
      <section className="max-w-lg mx-auto px-5 py-3">
        <div className="h-16 rounded-xl border border-dashed border-white/10 bg-white/[0.02] flex items-center justify-center">
          <span className="text-[10px] text-white/20 font-mono">— espace publicitaire disponible —</span>
        </div>
      </section>

      {/* TEMPLATE CARDS */}
      <section className="max-w-lg mx-auto px-5 pb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-bold text-white/80">Nos templates</h2>
          <span className="text-[10px] text-gold font-semibold">Tout voir →</span>
        </div>

        <div className="flex gap-3 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-none">
          {[
            { name: "Modern", desc: "Propre, aéré, parfait pour les tech et les startups", accent: "border-gold/40" },
            { name: "Classic", desc: "Sobre et élégant, idéal pour l'administration", accent: "border-white/10" },
            { name: "Bold", desc: "Design qui impose, pour les profils créatifs", accent: "border-white/10" },
          ].map((tpl, i) => (
            <div key={i} className="snap-start shrink-0 w-[190px] rounded-2xl bg-navy-light border border-white/10 overflow-hidden shadow-xl hover:shadow-gold/5 transition-shadow duration-300">
              <div className="h-44 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-4 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex gap-1.5">
                    <div className={`w-3 h-3 rounded-full ${i === 0 ? 'bg-gold' : 'bg-gold/40'}`} />
                    <div className={`w-3 h-3 rounded-full ${i === 2 ? 'bg-gold' : 'bg-gold/40'}`} />
                    <div className={`w-3 h-3 rounded-full ${i === 1 ? 'bg-gold' : 'bg-gold/40'}`} />
                  </div>
                  <div className="space-y-1.5 pt-3">
                    <div className="h-1.5 bg-white/10 rounded w-3/4" />
                    <div className="h-1 bg-white/5 rounded w-1/2" />
                    <div className="h-1 bg-white/5 rounded w-2/3 mt-3" />
                    <div className="h-1 bg-white/5 rounded w-full" />
                    <div className="h-1 bg-white/5 rounded w-5/6" />
                    <div className="h-1 bg-white/5 rounded w-3/4 mt-3" />
                    <div className="h-1 bg-white/5 rounded w-1/2" />
                  </div>
                </div>
                <span className="text-[9px] text-white/20 font-mono">CV_{tpl.name.toUpperCase()}</span>
              </div>
              <div className="p-3.5">
                <h3 className="font-bold text-sm text-white">{tpl.name}</h3>
                <p className="text-[11px] text-white/40 mt-0.5">{tpl.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* AD PLACEHOLDER 2 — Native */}
      <section className="max-w-lg mx-auto px-5 py-2">
        <div className="h-14 rounded-xl border border-dashed border-white/10 bg-white/[0.02] flex items-center justify-center">
          <span className="text-[10px] text-white/20 font-mono">— espace publicitaire disponible —</span>
        </div>
      </section>

      {/* PRICING */}
      <section className="max-w-lg mx-auto px-5 pb-10 pt-4">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-navy-light to-navy p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-bold text-white/80">Gratuit vs Premium</h2>
            <span className="px-2.5 py-1 rounded-full bg-gold/15 border border-gold/20 text-[9px] font-bold text-gold uppercase tracking-wider">Promo</span>
          </div>

          <div className="space-y-3">
            {/* Free */}
            <div className="rounded-xl border border-white/10 p-4 bg-white/[0.02]">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-xs font-bold text-white/60">Free</span>
                  <p className="text-[11px] text-white/30 mt-0.5">Accès aux templates de base, export PDF</p>
                </div>
                <span className="text-sm font-black text-white/40">0 DA</span>
              </div>
            </div>

            {/* Premium */}
            <div className="rounded-xl border border-gold/30 p-4 bg-gold/[0.04]">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-xs font-bold text-gold">Premium</span>
                  <p className="text-[11px] text-white/40 mt-0.5">Tous les templates, pas de watermark, prioritaire</p>
                </div>
                <div className="text-right">
                  <span className="text-lg font-black text-gold">300 DA</span>
                  <span className="text-[10px] text-white/30 block">à vie</span>
                </div>
              </div>
              <button className="pressable mt-3 w-full h-10 rounded-xl bg-gold text-navy font-bold text-sm shadow-lg shadow-gold/15 active:scale-[0.97] transition-all duration-150">
                Passer au Premium
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* AD PLACEHOLDER 3 — Footer Banner */}
      <section className="max-w-lg mx-auto px-5 py-2">
        <div className="h-12 rounded-xl border border-dashed border-white/10 bg-white/[0.02] flex items-center justify-center">
          <span className="text-[10px] text-white/20 font-mono">— espace publicitaire disponible —</span>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="max-w-lg mx-auto px-5 py-8 border-t border-white/5 mt-2">
        <div className="flex items-center justify-between">
          <span className="text-[11px] text-white/20">SparkCV © 2026</span>
          <div className="flex gap-4 text-[11px] text-white/30">
            <span>Instagram</span>
            <span>TikTok</span>
            <span>Contact</span>
          </div>
        </div>
        <p className="text-[10px] text-white/10 mt-3 text-center">
          Fièrement conçu pour les étudiants algériens 🇩🇿
        </p>
      </footer>

    </main>
  );
}
