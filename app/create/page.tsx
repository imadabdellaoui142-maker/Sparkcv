"use client";

import { useState, useRef } from "react";

type Step = 1 | 2 | 3 | 4 | 5;

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

export default function Create() {
  const [step, setStep] = useState<Step>(1);
  const printRef = useRef<HTMLDivElement>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");

  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [exp, setExp] = useState<Experience>({ company: "", role: "", start: "", end: "", desc: "" });

  const [educations, setEducations] = useState<Education[]>([]);
  const [edu, setEdu] = useState<Education>({ school: "", degree: "", start: "", end: "" });

  const [skills, setSkills] = useState<string[]>([]);
  const [skillInput, setSkillInput] = useState("");

  const steps: { num: Step; label: string }[] = [
    { num: 1, label: "Infos" },
    { num: 2, label: "Expérience" },
    { num: 3, label: "Formation" },
    { num: 4, label: "Compétences" },
    { num: 5, label: "Aperçu" },
  ];

  const addExperience = () => {
    if (!exp.company || !exp.role) return;
    setExperiences([...experiences, exp]);
    setExp({ company: "", role: "", start: "", end: "", desc: "" });
  };

  const addEducation = () => {
    if (!edu.school || !edu.degree) return;
    setEducations([...educations, edu]);
    setEdu({ school: "", degree: "", start: "", end: "" });
  };

  const addSkill = () => {
    const s = skillInput.trim();
    if (s && !skills.includes(s)) {
      setSkills([...skills, s]);
      setSkillInput("");
    }
  };

  const removeSkill = (s: string) => setSkills(skills.filter((x) => x !== s));

  const prev = () => setStep((s) => (s > 1 ? ((s - 1) as Step) : s));
  const next = () => setStep((s) => (s < 4 ? ((s + 1) as Step) : s));

  const canNext = () => {
    if (step === 1) return name && email;
    if (step === 2) return true;
    if (step === 3) return true;
    if (step === 4) return skills.length > 0;
    return true;
  };

  const formatDate = (d: string) => {
    if (!d) return "auj.";
    const [y, m] = d.split("-");
    const months = ["Janv", "Fév", "Mars", "Avr", "Mai", "Juin", "Juil", "Août", "Sept", "Oct", "Nov", "Déc"];
    return `${months[parseInt(m) - 1]} ${y}`;
  };

  const goToPreview = () => {
    const payload = { name, email, phone, title, location, experiences, educations, skills };
    localStorage.setItem("sparkcv_data", JSON.stringify(payload));
    setStep(5);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <main className="min-h-screen bg-navy text-cream font-sans">
      <header className="sticky top-0 z-50 bg-navy/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-lg mx-auto px-5 h-14 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-gold/20 border border-gold/30 flex items-center justify-center">
              <svg className="w-3.5 h-3.5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <span className="text-base font-bold tracking-tight">Spark<span className="text-gold">CV</span></span>
          </a>
        </div>
      </header>

      {step < 5 && (
        <div className="max-w-lg mx-auto px-5 pt-6 pb-2">
          <div className="flex items-center justify-between mb-3">
            {steps.slice(0, 4).map((s, i) => (
              <div key={s.num} className="flex items-center gap-0 flex-1">
                <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                  step >= s.num ? "bg-gold text-navy" : "bg-white/5 text-white/30"
                }`}>{s.num}</div>
                {i < 3 && <div className={`flex-1 h-0.5 mx-1.5 rounded transition-colors ${step > s.num ? "bg-gold/60" : "bg-white/10"}`} />}
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-white/30 font-medium">Étape {step} — {steps.find((s) => s.num === step)?.label}</p>
        </div>
      )}

      {/* FORM STEPS */}
      {step < 5 && (
        <div className="max-w-lg mx-auto px-5 pb-32 pt-4">
          {step === 1 && (
            <div className="space-y-4">
              <h2 className="text-lg font-black text-white">Qui es-tu ?</h2>
              <Field label="Nom complet" val={name} set={setName} placeholder="Mohamed Amine" />
              <Field label="Email" val={email} set={setEmail} placeholder="amine@email.com" type="email" />
              <Field label="Téléphone" val={phone} set={setPhone} placeholder="+213 5XX XX XX XX" type="tel" />
              <Field label="Titre professionnel" val={title} set={setTitle} placeholder="Développeur Full-Stack" />
              <Field label="Localisation" val={location} set={setLocation} placeholder="Alger, Algérie" />
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <h2 className="text-lg font-black text-white">Expérience professionnelle</h2>
              {experiences.map((e, i) => (
                <div key={i} className="rounded-xl border border-white/10 bg-white/[0.03] p-3.5">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-bold text-sm text-white">{e.role}</p>
                      <p className="text-xs text-white/40">{e.company} · {e.start ? formatDate(e.start) : ""}–{e.end ? formatDate(e.end) : "auj."}</p>
                    </div>
                    <button onClick={() => setExperiences(experiences.filter((_, j) => j !== i))} className="text-white/20 hover:text-red-400 text-xs">✕</button>
                  </div>
                </div>
              ))}
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 space-y-3">
                <input className="w-full h-10 px-3.5 rounded-lg bg-navy border border-white/10 text-sm text-cream placeholder:text-white/20 focus:outline-none focus:border-gold/50" placeholder="Entreprise" value={exp.company} onChange={(e) => setExp({ ...exp, company: e.target.value })} />
                <input className="w-full h-10 px-3.5 rounded-lg bg-navy border border-white/10 text-sm text-cream placeholder:text-white/20 focus:outline-none focus:border-gold/50" placeholder="Poste" value={exp.role} onChange={(e) => setExp({ ...exp, role: e.target.value })} />
                <div className="flex gap-2">
                  <input type="date" className="flex-1 h-10 px-3 rounded-lg bg-navy border border-white/10 text-xs text-white/60 focus:outline-none focus:border-gold/50" value={exp.start} onChange={(e) => setExp({ ...exp, start: e.target.value })} />
                  <input type="date" className="flex-1 h-10 px-3 rounded-lg bg-navy border border-white/10 text-xs text-white/60 focus:outline-none focus:border-gold/50" value={exp.end} onChange={(e) => setExp({ ...exp, end: e.target.value })} />
                </div>
                <textarea className="w-full h-20 px-3.5 py-2.5 rounded-lg bg-navy border border-white/10 text-sm text-cream placeholder:text-white/20 focus:outline-none focus:border-gold/50 resize-none" placeholder="Décris tes missions…" value={exp.desc} onChange={(e) => setExp({ ...exp, desc: e.target.value })} />
                <button onClick={addExperience} className="w-full h-10 rounded-lg border border-dashed border-white/20 text-xs font-semibold text-white/40 hover:text-gold hover:border-gold/40 transition-colors">+ Ajouter une expérience</button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <h2 className="text-lg font-black text-white">Formation</h2>
              {educations.map((e, i) => (
                <div key={i} className="rounded-xl border border-white/10 bg-white/[0.03] p-3.5">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-bold text-sm text-white">{e.degree}</p>
                      <p className="text-xs text-white/40">{e.school} · {e.start ? formatDate(e.start) : ""}–{e.end ? formatDate(e.end) : "auj."}</p>
                    </div>
                    <button onClick={() => setEducations(educations.filter((_, j) => j !== i))} className="text-white/20 hover:text-red-400 text-xs">✕</button>
                  </div>
                </div>
              ))}
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 space-y-3">
                <input className="w-full h-10 px-3.5 rounded-lg bg-navy border border-white/10 text-sm text-cream placeholder:text-white/20 focus:outline-none focus:border-gold/50" placeholder="Établissement" value={edu.school} onChange={(e) => setEdu({ ...edu, school: e.target.value })} />
                <input className="w-full h-10 px-3.5 rounded-lg bg-navy border border-white/10 text-sm text-cream placeholder:text-white/20 focus:outline-none focus:border-gold/50" placeholder="Diplôme / Filière" value={edu.degree} onChange={(e) => setEdu({ ...edu, degree: e.target.value })} />
                <div className="flex gap-2">
                  <input type="date" className="flex-1 h-10 px-3 rounded-lg bg-navy border border-white/10 text-xs text-white/60 focus:outline-none focus:border-gold/50" value={edu.start} onChange={(e) => setEdu({ ...edu, start: e.target.value })} />
                  <input type="date" className="flex-1 h-10 px-3 rounded-lg bg-navy border border-white/10 text-xs text-white/60 focus:outline-none focus:border-gold/50" value={edu.end} onChange={(e) => setEdu({ ...edu, end: e.target.value })} />
                </div>
                <button onClick={addEducation} className="w-full h-10 rounded-lg border border-dashed border-white/20 text-xs font-semibold text-white/40 hover:text-gold hover:border-gold/40 transition-colors">+ Ajouter une formation</button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-4">
              <h2 className="text-lg font-black text-white">Compétences</h2>
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 space-y-3">
                <div className="flex gap-2">
                  <input className="flex-1 h-10 px-3.5 rounded-lg bg-navy border border-white/10 text-sm text-cream placeholder:text-white/20 focus:outline-none focus:border-gold/50" placeholder="Ex: Python, Figma, UI Design…" value={skillInput} onChange={(e) => setSkillInput(e.target.value)} onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addSkill())} />
                  <button onClick={addSkill} className="h-10 px-4 rounded-lg bg-gold text-navy font-bold text-sm shrink-0">+</button>
                </div>
                {skills.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {skills.map((s) => (
                      <span key={s} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gold/10 border border-gold/20 text-xs font-medium text-gold">
                        {s}
                        <button onClick={() => removeSkill(s)} className="text-gold/50 hover:text-red-400">✕</button>
                      </span>
                    ))}
                  </div>
                )}
                {skills.length === 0 && (
                  <p className="text-xs text-white/20 text-center py-4">Ajoute au moins une compétence pour continuer</p>
                )}
              </div>
            </div>
          )}
        </div>
      )}

      {/* PREVIEW STEP 5 */}
      {step === 5 && (
        <>
          <div className="max-w-lg mx-auto px-5 pt-6 pb-4">
            <h2 className="text-lg font-black text-white">Ton CV est prêt !</h2>
            <p className="text-sm text-white/40 mt-1">Vérifie l&apos;aperçu et télécharge en PDF.</p>
            <a href="/preview" className="inline-flex items-center gap-1 text-xs text-gold/70 hover:text-gold mt-2 transition-colors">
              Ouvrir dans une nouvelle page →
            </a>
          </div>

          <div className="max-w-lg mx-auto px-5 pb-36">
            <div ref={printRef} className="cv-print rounded-2xl overflow-hidden shadow-2xl bg-white text-slate-900">
              {/* Moderne Template */}
              <div className="flex flex-col sm:flex-row min-h-[842px]">
                {/* Sidebar */}
                <div className="bg-[#0F1C2E] text-white p-6 sm:w-[200px] shrink-0 space-y-5">
                  <div>
                    <div className="w-14 h-14 rounded-full bg-gold/20 border-2 border-gold/40 flex items-center justify-center text-gold font-bold text-lg">
                      {name.split(" ").map((n) => n[0]).slice(0, 2).join("") || "CV"}
                    </div>
                    <h3 className="text-xs font-bold text-gold uppercase tracking-widest mt-3 mb-2">Contact</h3>
                    <div className="space-y-1.5 text-[11px] text-white/60">
                      {email && <p>{email}</p>}
                      {phone && <p>{phone}</p>}
                      {location && <p>{location}</p>}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-gold uppercase tracking-widest mb-2">Compétences</h3>
                    <div className="flex flex-wrap gap-1.5">
                      {skills.map((s) => (
                        <span key={s} className="px-2 py-0.5 rounded bg-white/10 text-[10px] text-white/70">{s}</span>
                      ))}
                    </div>
                  </div>
                  <div className="pt-4 border-t border-white/10">
                    <p className="text-[9px] text-white/20 font-mono">sparkcv.dz</p>
                  </div>
                </div>

                {/* Main */}
                <div className="flex-1 p-6">
                  <div className="pb-3 border-b border-slate-200">
                    <h1 className="text-xl font-black text-slate-900">{name || "Ton Nom"}</h1>
                    <p className="text-sm font-medium text-gold mt-0.5">{title || "Titre professionnel"}</p>
                  </div>

                  {/* Experience */}
                  {experiences.length > 0 && (
                    <div className="mt-4">
                      <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Expérience</h3>
                      <div className="space-y-3">
                        {experiences.map((e, i) => (
                          <div key={i}>
                            <div className="flex justify-between items-start">
                              <div>
                                <p className="text-xs font-bold text-slate-800">{e.role}</p>
                                <p className="text-[11px] text-slate-500">{e.company}</p>
                              </div>
                              <span className="text-[10px] text-slate-400 shrink-0 ml-2">{formatDate(e.start)} – {e.end ? formatDate(e.end) : "auj."}</span>
                            </div>
                            {e.desc && <p className="text-[11px] text-slate-600 mt-1 leading-relaxed">{e.desc}</p>}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Education */}
                  {educations.length > 0 && (
                    <div className="mt-4">
                      <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Formation</h3>
                      <div className="space-y-2">
                        {educations.map((e, i) => (
                          <div key={i}>
                            <p className="text-xs font-bold text-slate-800">{e.degree}</p>
                            <p className="text-[11px] text-slate-500">{e.school} · {formatDate(e.start)} – {e.end ? formatDate(e.end) : "auj."}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Skills inline on main */}
                  {skills.length > 0 && (
                    <div className="mt-4">
                      <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Compétences clés</h3>
                      <div className="flex flex-wrap gap-1.5">
                        {skills.map((s) => (
                          <span key={s} className="px-2 py-0.5 rounded bg-slate-100 text-[10px] text-slate-600 font-medium">{s}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* BOTTOM BAR */}
      <div className="fixed bottom-0 left-0 right-0 bg-navy/90 backdrop-blur-md border-t border-white/5">
        <div className="max-w-lg mx-auto px-5 h-16 flex items-center gap-3">
          <button onClick={step === 5 ? () => setStep(4) : prev} className={`h-11 px-5 rounded-xl border text-sm font-semibold transition-colors ${
            step === 1 ? "border-white/5 text-white/20" : "border-white/10 text-white/60"
          }`} disabled={step === 1}>
            {step === 5 ? "Modifier" : "Retour"}
          </button>
          {step < 4 ? (
            <button onClick={next} disabled={!canNext()} className={`flex-1 h-11 rounded-xl font-bold text-sm transition-all ${
              canNext() ? "bg-gold text-navy shadow-lg shadow-gold/15" : "bg-white/5 text-white/20"
            }`}>
              Suivant
            </button>
          ) : step === 4 ? (
            <button onClick={goToPreview} disabled={!canNext()} className={`flex-1 h-11 rounded-xl font-bold text-sm transition-all ${
              canNext() ? "bg-gold text-navy shadow-lg shadow-gold/15" : "bg-white/5 text-white/20"
            }`}>
              Voir l'aperçu
            </button>
          ) : (
            <button onClick={handlePrint} className="flex-1 h-11 rounded-xl bg-gold text-navy font-bold text-sm shadow-lg shadow-gold/15 transition-all active:scale-[0.97]">
              <span className="flex items-center justify-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                Télécharger le PDF
              </span>
            </button>
          )}
        </div>
      </div>
    </main>
  );
}

function Field({ label, val, set, placeholder, type }: {
  label: string;
  val: string;
  set: (v: string) => void;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <label className="block text-xs font-medium text-white/40 mb-1.5">{label}</label>
      <input type={type || "text"} value={val} onChange={(e) => set(e.target.value)} placeholder={placeholder}
        className="w-full h-11 px-4 rounded-xl bg-navy-light border border-white/10 text-sm text-cream placeholder:text-white/20 focus:outline-none focus:border-gold/50 transition-colors"
      />
    </div>
  );
}
