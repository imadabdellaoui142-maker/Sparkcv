"use client";

import { useEffect, useState } from "react";

interface Experience {
  company: string;
  role: string;
  start: string;
  end: string;
  desc: string;
}

interface Education {
  school: string;
  degree: string;
  start: string;
  end: string;
}

interface CVData {
  name: string;
  email: string;
  phone: string;
  title: string;
  location: string;
  experiences: Experience[];
  educations: Education[];
  skills: string[];
}

const mock: CVData = {
  name: "Mohamed Amine",
  email: "m.amine@example.com",
  phone: "+213 555 12 34 56",
  title: "Développeur Full-Stack",
  location: "Alger, Algérie",
  experiences: [
    { company: "TechCorp DZ", role: "Développeur Full-Stack", start: "2023-01", end: "", desc: "Développement d'applications web avec React et Node.js. Optimisation des performances et déploiement continu." },
    { company: "StartupLab", role: "Stagiaire Développeur", start: "2022-06", end: "2022-12", desc: "Contribution à la refonte du dashboard client. Intégration d'API REST et tests unitaires." },
  ],
  educations: [
    { school: "Université des Sciences et de la Technologie", degree: "Master en Informatique", start: "2020-09", end: "2022-06" },
    { school: "École Supérieure d'Informatique", degree: "Licence en Informatique", start: "2017-09", end: "2020-06" },
  ],
  skills: ["React", "Node.js", "TypeScript", "Python", "PostgreSQL", "Docker", "Figma", "UI/UX"],
};

export default function Preview() {
  const [data, setData] = useState<CVData | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("sparkcv_data");
    if (saved) {
      try { setData(JSON.parse(saved)); return; } catch {}
    }
    setData(mock);
  }, []);

  const handlePrint = () => window.print();

  if (!data) return null;

  const formatDate = (d: string) => {
    if (!d) return "";
    const [y, m] = d.split("-");
    const months = ["Janv", "Fév", "Mars", "Avr", "Mai", "Juin", "Juil", "Août", "Sept", "Oct", "Nov", "Déc"];
    return `${months[parseInt(m) - 1]} ${y}`;
  };

  return (
    <main className="min-h-screen bg-[#E8E6E1] font-sans">
      {/* TOP BAR */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-3xl mx-auto px-4 h-14 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-[#0F1C2E] flex items-center justify-center">
              <svg className="w-3.5 h-3.5 text-[#C9A84C]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <span className="text-base font-bold tracking-tight text-slate-800">Spark<span className="text-[#C9A84C]">CV</span></span>
          </a>
          <div className="flex items-center gap-2">
            <a href="/create" className="h-9 px-4 rounded-lg border border-slate-200 text-xs font-semibold text-slate-500 flex items-center transition-colors hover:bg-slate-50">
              Modifier
            </a>
            <button onClick={handlePrint} className="h-9 px-4 rounded-lg bg-[#0F1C2E] text-white text-xs font-bold flex items-center gap-1.5 transition-all active:scale-[0.97]">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M5 18h14M5 8h14M5 4h14" /></svg>
              Télécharger PDF
            </button>
          </div>
        </div>
      </div>

      {/* A4 CARD */}
      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="cv-print mx-auto bg-white shadow-xl rounded-2xl overflow-hidden max-w-[210mm]">
          {/* Moderne Template */}
          <div className="flex flex-col sm:flex-row">
            {/* Sidebar */}
            <div className="bg-[#0F1C2E] text-white p-6 sm:w-[210px] shrink-0 space-y-6">
              <div>
                <div className="w-16 h-16 rounded-full bg-[#C9A84C]/20 border-2 border-[#C9A84C]/40 flex items-center justify-center text-[#C9A84C] font-bold text-xl">
                  {data.name.split(" ").map((n) => n[0]).slice(0, 2).join("") || "CV"}
                </div>
              </div>

              <div>
                <h3 className="text-xs font-bold text-[#C9A84C] uppercase tracking-widest mb-3">Contact</h3>
                <div className="space-y-2 text-[12px] text-white/60">
                  {data.email && (
                    <div className="flex items-start gap-2">
                      <svg className="w-3.5 h-3.5 text-[#C9A84C]/60 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                      <span>{data.email}</span>
                    </div>
                  )}
                  {data.phone && (
                    <div className="flex items-start gap-2">
                      <svg className="w-3.5 h-3.5 text-[#C9A84C]/60 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                      <span>{data.phone}</span>
                    </div>
                  )}
                  {data.location && (
                    <div className="flex items-start gap-2">
                      <svg className="w-3.5 h-3.5 text-[#C9A84C]/60 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                      <span>{data.location}</span>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <h3 className="text-xs font-bold text-[#C9A84C] uppercase tracking-widest mb-3">Compétences</h3>
                <div className="flex flex-wrap gap-1.5">
                  {data.skills.map((s) => (
                    <span key={s} className="px-2.5 py-1 rounded-md bg-white/10 text-[11px] text-white/70 font-medium">{s}</span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10">
                <p className="text-[9px] text-white/20 font-mono">sparkcv.dz</p>
              </div>
            </div>

            {/* Main */}
            <div className="flex-1 p-7">
              <div className="pb-4 border-b-2 border-[#0F1C2E]/10">
                <h1 className="text-2xl font-black text-slate-900">{data.name || "Ton Nom"}</h1>
                <p className="text-sm font-medium text-[#C9A84C] mt-1">{data.title || "Titre professionnel"}</p>
              </div>

              {data.experiences.length > 0 && (
                <div className="mt-5">
                  <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3">Expérience</h3>
                  <div className="space-y-4">
                    {data.experiences.map((e, i) => (
                      <div key={i}>
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="text-sm font-bold text-slate-800">{e.role}</p>
                            <p className="text-[12px] text-slate-500">{e.company}</p>
                          </div>
                          <span className="text-[11px] text-slate-400 shrink-0 ml-4 mt-0.5">
                            {e.start ? formatDate(e.start) : ""} – {e.end ? formatDate(e.end) : "auj."}
                          </span>
                        </div>
                        {e.desc && <p className="text-[12px] text-slate-600 mt-1.5 leading-relaxed">{e.desc}</p>}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {data.educations.length > 0 && (
                <div className="mt-5">
                  <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3">Formation</h3>
                  <div className="space-y-3">
                    {data.educations.map((e, i) => (
                      <div key={i}>
                        <p className="text-sm font-bold text-slate-800">{e.degree}</p>
                        <p className="text-[12px] text-slate-500">
                          {e.school} · {e.start ? formatDate(e.start) : ""} – {e.end ? formatDate(e.end) : "auj."}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {data.skills.length > 0 && (
                <div className="mt-5">
                  <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3">Compétences clés</h3>
                  <div className="flex flex-wrap gap-2">
                    {data.skills.map((s) => (
                      <span key={s} className="px-3 py-1 rounded-lg bg-slate-100 text-[11px] text-slate-600 font-medium">{s}</span>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-8 text-[9px] text-slate-300 text-center border-t border-slate-100 pt-4">
                CV généré avec SparkCV — sparkcv.dz
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
