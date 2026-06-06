"use client";

import React, { useState, useMemo } from "react";
import {
  Sparkles,
  Layers,
  Cpu,
  Shield,
  Share2,
  Globe,
  Download,
  CheckCircle2,
  ArrowRight,
  Search,
  Menu,
  X,
  Briefcase,
  Award,
  Zap,
  BarChart3,
  Target,
  Send,
  ChevronDown,
  Check,
  RefreshCw,
  Eye,
  Plus
} from "lucide-react";

// Types
interface BulletPair {
  before: string;
  after: string;
  impact: string;
}

export default function Home() {
  // Mobile Nav State
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Success Modal State
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [successModalConfig, setSuccessModalConfig] = useState({
    title: "",
    message: "",
    badge: ""
  });

  // Interactive CV Customizer State
  const [cvName, setCvName] = useState("Sarah Jenkins");
  const [cvTitle, setCvTitle] = useState("Senior Full-Stack Engineer");
  const [cvColor, setCvColor] = useState("indigo"); // indigo, emerald, rose, violet, amber
  const [cvTemplate, setCvTemplate] = useState("modern"); // modern, minimal, classic
  const [newSkill, setNewSkill] = useState("");
  const [cvSkills, setCvSkills] = useState(["React", "Node.js", "TypeScript", "AWS", "GraphQL"]);
  
  // Bullets AI improvement states
  const [isOptimizingBullets, setIsOptimizingBullets] = useState(false);
  const [bulletsOptimized, setBulletsOptimized] = useState(false);

  // Resume bullet points pairs
  const bulletPairs = useMemo<BulletPair[]>(() => [
    {
      before: "I worked on the frontend using React and fixed some bugs.",
      after: "Spearheaded the redesign of the core React dashboard, boosting user engagement by 32% and reducing customer support tickets by 15% through robust, error-tolerant form handling.",
      impact: "+32% Engagement"
    },
    {
      before: "I managed a team of developers and finished projects on time.",
      after: "Directly managed a cross-functional team of 6 engineers, standardizing agile workflows to accelerate feature delivery by 40% and consistently completing milestones under-budget.",
      impact: "+40% Delivery Speed"
    },
    {
      before: "I wrote APIs and did database stuff.",
      after: "Architected high-throughput REST & GraphQL APIs with optimized PostgreSQL indexing, reducing database query latencies by 250ms and ensuring seamless processing of 1M+ daily transactions.",
      impact: "-250ms Latency"
    }
  ], []);

  // ATS Scanner States
  const [selectedJob, setSelectedJob] = useState("software-engineer");
  const [customJobDesc, setCustomJobDesc] = useState("");
  const [atsScanState, setAtsScanState] = useState<"idle" | "scanning" | "completed">("idle");
  const [atsScore, setAtsScore] = useState(54);

  const jobPresets = {
    "software-engineer": {
      title: "Senior Software Engineer",
      keywords: ["React", "TypeScript", "AWS", "CI/CD", "PostgreSQL", "System Design"],
      missing: ["CI/CD", "System Design"],
      description: "We are looking for a Senior Software Engineer to build scalable cloud architectures, optimize system design, and spearhead modular UI development using React and TypeScript. Experience with CI/CD and AWS is highly required."
    },
    "product-manager": {
      title: "Lead Product Manager",
      keywords: ["Roadmapping", "Agile", "SQL", "A/B Testing", "Customer Discovery", "SaaS"],
      missing: ["A/B Testing", "Customer Discovery"],
      description: "Seeking a Lead Product Manager to drive product strategy, execute comprehensive roadmap schedules, analyze metrics using SQL, and run A/B testing cycles. Heavy focus on user research and SaaS scaling methodologies."
    },
    "data-analyst": {
      title: "Senior Data Analyst",
      keywords: ["Python", "SQL", "Tableau", "Statistical Modeling", "Pandas", "ETL Pipelines"],
      missing: ["Statistical Modeling", "ETL Pipelines"],
      description: "Join us as a Senior Data Analyst to lead our data intelligence team. Expert knowledge in complex SQL scripting, Python data manipulation (Pandas), ETL pipeline automation, and designing dashboard reports via Tableau is essential."
    }
  };

  // Pricing State
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("yearly");

  // FAQ Accordion State
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  // Newsletter State
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  // CV Color Classes Helper
  const getColorClasses = (color: string) => {
    switch (color) {
      case "emerald":
        return {
          primaryBg: "bg-emerald-600",
          text: "text-emerald-600",
          border: "border-emerald-500",
          accentBg: "bg-emerald-50 dark:bg-emerald-950/30",
          gradient: "from-emerald-500 to-teal-600",
          ring: "focus:ring-emerald-500",
          badge: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300"
        };
      case "rose":
        return {
          primaryBg: "bg-rose-600",
          text: "text-rose-600",
          border: "border-rose-500",
          accentBg: "bg-rose-50 dark:bg-rose-950/30",
          gradient: "from-rose-500 to-pink-600",
          ring: "focus:ring-rose-500",
          badge: "bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-300"
        };
      case "violet":
        return {
          primaryBg: "bg-violet-600",
          text: "text-violet-600",
          border: "border-violet-500",
          accentBg: "bg-violet-50 dark:bg-violet-950/30",
          gradient: "from-violet-500 to-purple-600",
          ring: "focus:ring-violet-500",
          badge: "bg-violet-100 text-violet-800 dark:bg-violet-900/30 dark:text-violet-300"
        };
      case "amber":
        return {
          primaryBg: "bg-amber-600",
          text: "text-amber-600",
          border: "border-amber-500",
          accentBg: "bg-amber-50 dark:bg-amber-950/30",
          gradient: "from-amber-500 to-orange-600",
          ring: "focus:ring-amber-500",
          badge: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300"
        };
      case "indigo":
      default:
        return {
          primaryBg: "bg-indigo-600",
          text: "text-indigo-600",
          border: "border-indigo-500",
          accentBg: "bg-indigo-50 dark:bg-indigo-950/30",
          gradient: "from-indigo-500 to-blue-600",
          ring: "focus:ring-indigo-500",
          badge: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300"
        };
    }
  };

  const activeColor = getColorClasses(cvColor);

  // Skill Handlers
  const handleAddSkill = (e: React.FormEvent) => {
    e.preventDefault();
    if (newSkill.trim() && !cvSkills.includes(newSkill.trim())) {
      setCvSkills([...cvSkills, newSkill.trim()]);
      setNewSkill("");
    }
  };

  const handleRemoveSkill = (skillToRemove: string) => {
    setCvSkills(cvSkills.filter((s) => s !== skillToRemove));
  };

  // Simulate AI Optimizations
  const triggerAIOptimization = () => {
    setIsOptimizingBullets(true);
    setTimeout(() => {
      setIsOptimizingBullets(false);
      setBulletsOptimized(true);
      
      // Trigger a mini toast/success modal action
      setSuccessModalConfig({
        badge: "AI Optimization",
        title: "Bullet Points Transformed!",
        message: "Your resume accomplishments were enhanced using action verbs, structural clarity, and quantified metrics to double recruitment impact."
      });
      setShowSuccessModal(true);
    }, 1500);
  };

  // Reset Optimizer
  const resetBullets = () => {
    setBulletsOptimized(false);
  };

  // Simulate ATS Scan Action
  const triggerAtsScan = () => {
    setAtsScanState("scanning");
    setAtsScore(45);
    const interval = setInterval(() => {
      setAtsScore((prev) => {
        if (prev >= 88) {
          clearInterval(interval);
          setAtsScanState("completed");
          return 88;
        }
        return prev + Math.floor(Math.random() * 8) + 4;
      });
    }, 150);
  };

  // Handle Newsletter Subscribe
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setNewsletterSubscribed(true);
      setTimeout(() => {
        setNewsletterEmail("");
      }, 3000);
    }
  };

  // Trigger Resume Download Simulation
  const triggerCvDownload = () => {
    setSuccessModalConfig({
      badge: "Export Initiated",
      title: "PDF Render Completed",
      message: `Successfully rendered your SparkCV profile as a print-perfect, single-page professional resume tailored to the "${cvTitle}" role.`
    });
    setShowSuccessModal(true);
  };

  // Trigger Share Simulation
  const triggerCvShare = () => {
    setSuccessModalConfig({
      badge: "Shareable Link Created",
      title: "Portfolio Published",
      message: `Your professional resume portfolio is now live at: https://sparkcv.com/p/${cvName.toLowerCase().replace(/\s+/g, "-")}. Link copied to clipboard!`
    });
    setShowSuccessModal(true);
    navigator.clipboard?.writeText(`https://sparkcv.com/p/${cvName.toLowerCase().replace(/\s+/g, "-")}`);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans transition-colors duration-300">
      
      {/* SUCCESS POPUP MODAL */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-md overflow-hidden rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl p-6 text-center animate-scale-up">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500"></div>
            
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 mb-4 mt-2">
              <CheckCircle2 className="h-6 w-6" />
            </div>

            <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-100 text-indigo-800 dark:bg-indigo-900/50 dark:text-indigo-300 mb-2">
              {successModalConfig.badge}
            </span>

            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-2">
              {successModalConfig.title}
            </h3>
            
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              {successModalConfig.message}
            </p>

            <button
              onClick={() => setShowSuccessModal(false)}
              className="w-full inline-flex justify-center items-center px-4 py-2.5 rounded-xl text-white bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200 font-semibold text-sm transition shadow-md"
            >
              Great, thanks!
            </button>
          </div>
        </div>
      )}

      {/* HEADER / NAVIGATION */}
      <header className="sticky top-0 z-40 w-full border-b border-slate-200/60 dark:border-slate-800/60 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="bg-gradient-to-tr from-indigo-600 to-violet-500 p-2 rounded-xl shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform">
              <Zap className="h-5 w-5 text-white fill-white/10" />
            </div>
            <span className="text-xl font-black tracking-tight bg-gradient-to-r from-slate-900 via-indigo-950 to-indigo-600 dark:from-white dark:via-indigo-100 dark:to-indigo-400 bg-clip-text text-transparent">
              Spark<span className="text-indigo-600 dark:text-indigo-400">CV</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-50">
            <a href="#features" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Features</a>
            <a href="#sandbox" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">CV Sandbox</a>
            <a href="#ats-scanner" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">ATS Scanner</a>
            <a href="#templates" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Templates</a>
            <a href="#pricing" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Pricing</a>
            <a href="#faqs" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">FAQs</a>
          </nav>

          {/* Call To Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#sandbox"
              className="text-sm font-semibold text-slate-700 hover:text-slate-950 dark:text-slate-300 dark:hover:text-slate-50 px-3.5 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900 transition"
            >
              Log In
            </a>
            <a
              href="#sandbox"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-md shadow-indigo-600/10 px-4 py-2.5 rounded-xl transition hover:-translate-y-0.5"
            >
              Get Started Free <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900 rounded-lg transition"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 py-4 px-6 space-y-4 shadow-lg animate-fade-in">
            <a
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-slate-700 dark:text-slate-300 hover:text-indigo-600"
            >
              Features
            </a>
            <a
              href="#sandbox"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-slate-700 dark:text-slate-300 hover:text-indigo-600"
            >
              CV Sandbox
            </a>
            <a
              href="#ats-scanner"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-slate-700 dark:text-slate-300 hover:text-indigo-600"
            >
              ATS Scanner
            </a>
            <a
              href="#templates"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-slate-700 dark:text-slate-300 hover:text-indigo-600"
            >
              Templates
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-slate-700 dark:text-slate-300 hover:text-indigo-600"
            >
              Pricing
            </a>
            <a
              href="#faqs"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-slate-700 dark:text-slate-300 hover:text-indigo-600"
            >
              FAQs
            </a>
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-3">
              <a
                href="#sandbox"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-semibold text-sm hover:bg-slate-100"
              >
                Log In
              </a>
              <a
                href="#sandbox"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 rounded-xl text-white bg-indigo-600 hover:bg-indigo-500 font-semibold text-sm block"
              >
                Get Started Free
              </a>
            </div>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 lg:pt-24 lg:pb-32 bg-slate-50 dark:bg-slate-950">
        
        {/* Decorative Grid and Ambient Lights */}
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1.5px,transparent_1.5px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-70"></div>
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -top-10 left-10 w-72 h-72 bg-violet-500/10 dark:bg-violet-500/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-fuchsia-500/10 dark:bg-fuchsia-500/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto flex flex-col items-center">
            
            {/* Announcement Badge */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-100 dark:border-indigo-900/30 text-xs font-semibold text-indigo-700 dark:text-indigo-300 mb-6 animate-pulse shadow-sm">
              <Sparkles className="h-3.5 w-3.5" />
              <span>SparkCV Premium Templates are now Live</span>
            </div>

            {/* Giant Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1] text-slate-950 dark:text-white">
              Spark Your Career with <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 dark:from-indigo-400 dark:via-purple-400 dark:to-fuchsia-400 bg-clip-text text-transparent">
                AI-Powered Resumes
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
              Transform your raw career history into a high-impact, ATS-optimized professional resume in minutes. Write smarter, design beautifully, and land 3x more interviews.
            </p>

            {/* Action Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <a
                href="#sandbox"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-white bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 font-bold text-base shadow-xl shadow-indigo-500/20 transition duration-150 hover:-translate-y-0.5"
              >
                <Zap className="h-5 w-5 fill-white/15" />
                Build Your Free Resume
              </a>
              <a
                href="#features"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-850 font-bold text-base transition duration-150"
              >
                <Eye className="h-5 w-5" />
                See Features
              </a>
            </div>

            {/* Brand Proof / Trust logos */}
            <div className="mt-16 w-full max-w-3xl">
              <p className="text-xs font-semibold tracking-wider uppercase text-slate-400 dark:text-slate-500 text-center">
                Empowering career leaps at world-class organizations
              </p>
              <div className="mt-5 flex flex-wrap items-center justify-center gap-8 md:gap-14 opacity-40 dark:opacity-30 grayscale hover:grayscale-0 transition-all">
                <span className="font-bold text-lg md:text-xl text-slate-950 dark:text-white">MICROSOFT</span>
                <span className="font-bold text-lg md:text-xl text-slate-950 dark:text-white">AMAZON</span>
                <span className="font-bold text-lg md:text-xl text-slate-950 dark:text-white">AIRBNB</span>
                <span className="font-bold text-lg md:text-xl text-slate-950 dark:text-white">STRIPE</span>
                <span className="font-bold text-lg md:text-xl text-slate-950 dark:text-white">UBER</span>
              </div>
            </div>

          </div>
        </div>

        {/* Floating CV Dashboard Mockup Image/Graphic */}
        <div className="max-w-6xl mx-auto mt-16 px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl border border-slate-200 dark:border-slate-800/80 bg-white/50 dark:bg-slate-900/50 p-2 sm:p-4 shadow-2xl backdrop-blur-md overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
            
            {/* Fake Dashboard Header */}
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200/50 dark:border-slate-800/50">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-rose-400"></div>
                <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                <span className="ml-2 text-[11px] font-medium text-slate-400 dark:text-slate-500 font-mono">sparkcv_dashboard_v2.tsx</span>
              </div>
              <div className="px-2 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950 text-[10px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest animate-pulse">
                Live Preview
              </div>
            </div>

            {/* Dashboard Mockup Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              
              {/* Left Side: Mockup AI Chat Assistant */}
              <div className="md:col-span-5 bg-slate-50 dark:bg-slate-950 rounded-xl p-4 border border-slate-200/60 dark:border-slate-800/60 flex flex-col justify-between h-[340px]">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="bg-indigo-100 dark:bg-indigo-900/50 p-1.5 rounded-lg text-indigo-600 dark:text-indigo-400">
                      <Cpu className="h-4 w-4" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">Spark AI Copilot</span>
                  </div>
                  
                  <div className="space-y-2.5">
                    <div className="rounded-xl p-2.5 bg-slate-200/50 dark:bg-slate-900 text-xs text-slate-600 dark:text-slate-400 max-w-[90%]">
                      Hey! Give me one of your resume bullet points. I will write it to maximize impact and add a dynamic achievement score.
                    </div>
                    <div className="rounded-xl p-2.5 bg-indigo-600 text-xs text-white max-w-[90%] ml-auto shadow-sm">
                      &quot;I coded features in React and fixed standard team bugs.&quot;
                    </div>
                    <div className="rounded-xl p-3 bg-white dark:bg-slate-900 border border-indigo-100 dark:border-indigo-950 text-xs max-w-[90%] shadow-md relative animate-pulse">
                      <div className="absolute -top-1.5 -left-1.5 bg-indigo-500 p-0.5 rounded-full text-white">
                        <Sparkles className="h-3 w-3" />
                      </div>
                      <span className="font-bold text-indigo-600 dark:text-indigo-400 block mb-1">Optimized by Spark AI:</span>
                      &quot;Spearheaded core feature development in React, accelerating dashboard rendering speed by 35% and streamlining client UX flow.&quot;
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-200/50 dark:border-slate-800/50 flex items-center gap-2">
                  <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-2 flex-1 text-left text-xs text-slate-400 flex items-center justify-between">
                    <span>Ask AI Copilot to align with a job post...</span>
                    <Send className="h-3.5 w-3.5 text-slate-300" />
                  </div>
                </div>
              </div>

              {/* Right Side: Mockup Live Resume template view */}
              <div className="md:col-span-7 bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-200/60 dark:border-slate-800/60 flex flex-col h-[340px] overflow-hidden">
                <div className="flex items-center gap-3 pb-3 border-b border-slate-100 dark:border-slate-800">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm">
                    SJ
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-800 dark:text-slate-100 leading-tight">Sarah Jenkins</h4>
                    <p className="text-[11px] text-indigo-600 dark:text-indigo-400 font-medium">Senior Full-Stack Engineer</p>
                  </div>
                  <div className="ml-auto flex gap-1.5">
                    <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-[9px] font-semibold text-slate-500 dark:text-slate-400">PDF Ready</span>
                    <span className="px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/60 text-[9px] font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span> 94% ATS
                    </span>
                  </div>
                </div>

                <div className="mt-4 flex-1 space-y-4 text-[11px]">
                  <div>
                    <h5 className="font-bold text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1.5">Key Experience</h5>
                    <div className="space-y-2">
                      <div>
                        <div className="flex justify-between font-bold text-slate-700 dark:text-slate-300">
                          <span>Senior Frontend Lead at TechVanguard</span>
                          <span className="font-normal text-slate-400 dark:text-slate-500">2023 - Present</span>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 mt-1 leading-relaxed pl-2 border-l border-slate-200 dark:border-slate-800">
                          Optimized application bundles by 42% utilizing code-splitting and responsive image assets.
                        </p>
                      </div>
                      <div>
                        <div className="flex justify-between font-bold text-slate-700 dark:text-slate-300">
                          <span>Software Developer at SparkLabs</span>
                          <span className="font-normal text-slate-400 dark:text-slate-500">2021 - 2023</span>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 mt-1 leading-relaxed pl-2 border-l border-slate-200 dark:border-slate-800">
                          Shipped 5 premium production React dashboards processing $12M in ARR.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-bold text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1">Expert Skills</h5>
                    <div className="flex flex-wrap gap-1">
                      {["React", "TypeScript", "Node.js", "GraphQL", "AWS Cloud", "TailwindCSS"].map((s, idx) => (
                        <span key={idx} className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 rounded text-slate-600 dark:text-slate-400 text-[10px]">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </section>

      {/* CORE FEATURES SECTION */}
      <section id="features" className="py-20 bg-white dark:bg-slate-900 border-t border-b border-slate-200/60 dark:border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-black tracking-widest uppercase text-indigo-600 dark:text-indigo-400">
              Why Choose SparkCV
            </h2>
            <p className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-950 dark:text-white tracking-tight">
              A Resume Builder engineered for modern recruiters
            </p>
            <p className="mt-4 text-base text-slate-600 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">
              Don&apos;t leave your dream role to chance. SparkCV bundles standard layout guidelines with artificial intelligence to bulletproof your application.
            </p>
          </div>

          {/* Grid of 6 Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Feature 1: AI Copywriting */}
            <div className="relative p-6 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200/50 dark:border-slate-800/40 hover:border-indigo-500/50 dark:hover:border-indigo-500/30 transition-all hover:shadow-xl group">
              <div className="p-3 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 rounded-xl w-fit group-hover:scale-110 transition-transform">
                <Cpu className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-slate-900 dark:text-white">AI-Powered Copilot</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Transform average bullets into striking, metric-backed accomplishments. Our trained algorithms understand recruiter psychology.
              </p>
            </div>

            {/* Feature 2: ATS Optimization */}
            <div className="relative p-6 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200/50 dark:border-slate-800/40 hover:border-indigo-500/50 dark:hover:border-indigo-500/30 transition-all hover:shadow-xl group">
              <div className="p-3 bg-violet-50 dark:bg-violet-950/40 text-violet-600 dark:text-violet-400 rounded-xl w-fit group-hover:scale-110 transition-transform">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-slate-900 dark:text-white">ATS Key Match Analysis</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Check your resume compatibility against specified job listings. Learn which critical keywords you&apos;re missing before you submit.
              </p>
            </div>

            {/* Feature 3: Handcrafted Templates */}
            <div className="relative p-6 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200/50 dark:border-slate-800/40 hover:border-indigo-500/50 dark:hover:border-indigo-500/30 transition-all hover:shadow-xl group">
              <div className="p-3 bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 rounded-xl w-fit group-hover:scale-110 transition-transform">
                <Layers className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-slate-900 dark:text-white">Premium Layout Designs</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Choose from minimalist, technical, or creative designs vetted by corporate recruiters. Perfect printing, margins, and hierarchy.
              </p>
            </div>

            {/* Feature 4: Hosted Portfolios */}
            <div className="relative p-6 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200/50 dark:border-slate-800/40 hover:border-indigo-500/50 dark:hover:border-indigo-500/30 transition-all hover:shadow-xl group">
              <div className="p-3 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 rounded-xl w-fit group-hover:scale-110 transition-transform">
                <Globe className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-slate-900 dark:text-white">One-Click Portfolios</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Instantly generate and host a fully responsive web portfolio linked directly to your CV. No coding, domain setup, or host fees needed.
              </p>
            </div>

            {/* Feature 5: Real-time Analytics */}
            <div className="relative p-6 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200/50 dark:border-slate-800/40 hover:border-indigo-500/50 dark:hover:border-indigo-500/30 transition-all hover:shadow-xl group">
              <div className="p-3 bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 rounded-xl w-fit group-hover:scale-110 transition-transform">
                <BarChart3 className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-slate-900 dark:text-white">Recruiter Visit Analytics</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Receive live alerts and analytics reporting. Know the exact moment a hiring manager opens your link or downloads your PDF profile.
              </p>
            </div>

            {/* Feature 6: Local First & Encrypted */}
            <div className="relative p-6 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200/50 dark:border-slate-800/40 hover:border-indigo-500/50 dark:hover:border-indigo-500/30 transition-all hover:shadow-xl group">
              <div className="p-3 bg-teal-50 dark:bg-teal-950/40 text-teal-600 dark:text-teal-400 rounded-xl w-fit group-hover:scale-110 transition-transform">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-slate-900 dark:text-white">Security & Privacy First</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                We value security. Your career data is strictly encrypted and will never be shared or used to train public language models.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* INTERACTIVE CV CUSTOMIZER (SANDBOX) SECTION */}
      <section id="sandbox" className="py-20 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Title */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/30 text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">
              Live Playground
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-950 dark:text-white tracking-tight">
              Test drive the SparkCV Sandbox
            </h2>
            <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
              Customize content, toggle themes, and optimize bullets in real-time. Experience the platform instantly.
            </p>
          </div>

          {/* Sandbox Workspace Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Input & Control Panel (5 Cols) */}
            <div className="lg:col-span-5 bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200/60 dark:border-slate-800/60 shadow-lg space-y-6">
              
              {/* Part 1: Identity Info */}
              <div>
                <h3 className="text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <span>1. Personnel Details</span>
                </h3>
                <div className="space-y-3">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Full Name</label>
                    <input
                      type="text"
                      value={cvName}
                      onChange={(e) => setCvName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Job Title</label>
                    <input
                      type="text"
                      value={cvTitle}
                      onChange={(e) => setCvTitle(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                </div>
              </div>

              {/* Part 2: Color and Template Theme Selector */}
              <div>
                <h3 className="text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <span>2. Layout & Colors</span>
                </h3>
                
                {/* Theme Palette Buttons */}
                <div className="mb-4">
                  <label className="block text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">Accent Color</label>
                  <div className="flex gap-2">
                    {["indigo", "emerald", "rose", "violet", "amber"].map((col) => {
                      const details = getColorClasses(col);
                      return (
                        <button
                          key={col}
                          onClick={() => setCvColor(col)}
                          className={`w-8 h-8 rounded-full ${details.primaryBg} border-2 transition ${
                            cvColor === col ? "ring-2 ring-offset-2 ring-slate-800 dark:ring-offset-slate-900" : "scale-90 hover:scale-100"
                          }`}
                          aria-label={`Select ${col} accent`}
                        />
                      );
                    })}
                  </div>
                </div>

                {/* Layout Presets Buttons */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">Template Layout</label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: "modern", name: "Modern" },
                      { id: "minimal", name: "Minimal" },
                      { id: "classic", name: "Classic" }
                    ].map((tpl) => (
                      <button
                        key={tpl.id}
                        onClick={() => setCvTemplate(tpl.id)}
                        className={`py-2 px-3 rounded-xl text-xs font-semibold border transition ${
                          cvTemplate === tpl.id
                            ? "bg-indigo-50 border-indigo-200 text-indigo-700 dark:bg-indigo-950/40 dark:border-indigo-900/60 dark:text-indigo-300"
                            : "border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-850"
                        }`}
                      >
                        {tpl.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Part 3: Skill Tags Creator */}
              <div>
                <h3 className="text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2.5 flex items-center justify-between">
                  <span>3. Skillsets</span>
                  <span className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">{cvSkills.length} Total</span>
                </h3>
                <form onSubmit={handleAddSkill} className="flex gap-2 mb-3">
                  <input
                    type="text"
                    placeholder="Add skill (e.g. Docker)..."
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    className="flex-1 px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white text-xs focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="p-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl transition"
                    aria-label="Add Skill"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </form>
                <div className="flex flex-wrap gap-1.5 max-h-[100px] overflow-y-auto">
                  {cvSkills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1 pl-2.5 pr-1.5 py-1 rounded-lg text-[10px] font-bold tracking-tight bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border border-slate-200/50 dark:border-slate-750"
                    >
                      {skill}
                      <button
                        onClick={() => handleRemoveSkill(skill)}
                        className="text-slate-400 hover:text-rose-500 p-0.5 rounded transition"
                        title={`Remove ${skill}`}
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </span>
                  ))}
                </div>
              </div>

              {/* Part 4: AI Optimize Trigger Button */}
              <div className="pt-4 border-t border-slate-200/50 dark:border-slate-800/50">
                <div className="bg-gradient-to-tr from-indigo-50 to-violet-50 dark:from-slate-950 dark:to-indigo-950/20 p-4 rounded-2xl border border-indigo-100/50 dark:border-indigo-950/50 mb-4">
                  <div className="flex items-start gap-2.5">
                    <Sparkles className="h-4 w-4 text-indigo-600 dark:text-indigo-400 mt-0.5 animate-spin-slow" />
                    <div>
                      <p className="text-xs font-bold text-indigo-950 dark:text-indigo-200">Simulate AI Bullet Improvements</p>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-normal mt-0.5">
                        Enhance resume bullet points to showcase actual metrics, leadership actions, and clear business outcomes.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={triggerAIOptimization}
                    disabled={isOptimizingBullets}
                    className="flex-1 inline-flex justify-center items-center gap-1.5 px-4 py-3 rounded-xl text-white bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 font-bold text-xs transition shadow-md"
                  >
                    {isOptimizingBullets ? (
                      <>
                        <RefreshCw className="h-3.5 w-3.5 animate-spin" />
                        Analyzing with AI...
                      </>
                    ) : bulletsOptimized ? (
                      <>
                        <Check className="h-3.5 w-3.5" />
                        AI Upgrade Successful!
                      </>
                    ) : (
                      <>
                        <Sparkles className="h-3.5 w-3.5" />
                        AI Enhance Bullet Points
                      </>
                    )}
                  </button>
                  {bulletsOptimized && (
                    <button
                      onClick={resetBullets}
                      className="px-3.5 py-3 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-850 transition text-slate-500 text-xs font-bold"
                      title="Reset resume bullet points"
                    >
                      Reset
                    </button>
                  )}
                </div>
              </div>

            </div>

            {/* Dynamic Rendering Canvas (7 Cols) */}
            <div className="lg:col-span-7 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-850 shadow-2xl p-6 md:p-8 flex flex-col justify-between min-h-[580px] relative overflow-hidden">
              
              {/* Fake PDF Header Panel */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-indigo-500 via-violet-500 to-rose-500"></div>
              
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-200 dark:border-slate-800">
                <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest font-mono">
                  SparkCV Document Engine v2.0
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={triggerCvDownload}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-750 text-slate-700 dark:text-slate-300 rounded-lg text-xs font-bold transition"
                  >
                    <Download className="h-3.5 w-3.5" /> Download PDF
                  </button>
                  <button
                    onClick={triggerCvShare}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-bold transition shadow-sm"
                  >
                    <Share2 className="h-3.5 w-3.5" /> Share Portfolio
                  </button>
                </div>
              </div>

              {/* Resume Body Canvas Layout switcher */}
              <div className="flex-1">
                
                {/* Modern Layout */}
                {cvTemplate === "modern" && (
                  <div className="space-y-6">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b-2 border-slate-100 dark:border-slate-800">
                      <div>
                        <h2 className="text-2xl font-black text-slate-900 dark:text-white leading-tight">
                          {cvName || "Your Name"}
                        </h2>
                        <p className={`text-sm font-semibold tracking-wide ${activeColor.text} mt-1`}>
                          {cvTitle || "Professional Title"}
                        </p>
                      </div>
                      <div className="text-left md:text-right text-[11px] text-slate-500 space-y-0.5">
                        <p>sjenkins@example.com</p>
                        <p>+1 (555) 234-5678</p>
                        <p>San Francisco, CA</p>
                      </div>
                    </div>

                    {/* Work Experiences */}
                    <div>
                      <h4 className="text-[10px] font-extrabold tracking-wider text-slate-400 dark:text-slate-500 uppercase mb-4 flex items-center gap-1.5">
                        <Briefcase className={`h-3.5 w-3.5 ${activeColor.text}`} /> Work Experience
                      </h4>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between text-xs font-bold text-slate-800 dark:text-slate-100">
                            <span>Senior Systems Engineer at Horizon Cloud Services</span>
                            <span className="font-normal text-slate-400">2023 - Present</span>
                          </div>
                          
                          {/* Live Bullet Switcher */}
                          <div className="mt-2 pl-3 border-l-2 border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 leading-relaxed space-y-2">
                            {bulletsOptimized ? (
                              <div className="space-y-2 animate-fade-in">
                                {bulletPairs.map((pair, idx) => (
                                  <div key={idx} className="relative group">
                                    <span className={`absolute -left-[16px] top-1 w-1.5 h-1.5 rounded-full ${activeColor.primaryBg}`}></span>
                                    <p className="pl-1.5">
                                      {pair.after}{" "}
                                      <span className={`inline-block px-1.5 py-0.2 rounded text-[10px] font-bold ${activeColor.badge} ml-1`}>
                                        {pair.impact}
                                      </span>
                                    </p>
                                  </div>
                                ))}
                              </div>
                            ) : (
                              <div className="space-y-2">
                                {bulletPairs.map((pair, idx) => (
                                  <div key={idx} className="relative">
                                    <span className="absolute -left-[16px] top-1.5 w-1 h-1 bg-slate-400 rounded-full"></span>
                                    <p className="pl-1.5 text-slate-500 dark:text-slate-450 italic">
                                      {pair.before}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Skills Grid */}
                    <div>
                      <h4 className="text-[10px] font-extrabold tracking-wider text-slate-400 dark:text-slate-500 uppercase mb-2 flex items-center gap-1.5">
                        <Award className={`h-3.5 w-3.5 ${activeColor.text}`} /> Key Skillsets
                      </h4>
                      <div className="flex flex-wrap gap-1.5 pl-1">
                        {cvSkills.map((s, idx) => (
                          <span
                            key={idx}
                            className={`px-2.5 py-1 text-[11px] font-semibold rounded-lg ${activeColor.badge}`}
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Minimal Layout */}
                {cvTemplate === "minimal" && (
                  <div className="space-y-6 font-mono text-xs">
                    <div className="text-center pb-4 border-b border-dashed border-slate-300 dark:border-slate-750">
                      <h2 className="text-xl font-bold uppercase tracking-tight text-slate-900 dark:text-white">
                        {cvName || "YOUR NAME"}
                      </h2>
                      <p className={`text-xs mt-1 font-bold ${activeColor.text}`}>
                        {cvTitle?.toUpperCase() || "TITLE"}
                      </p>
                      <p className="text-[10px] text-slate-400 mt-2">
                        EMAIL: sjenkins@example.com | TEL: +1 (555) 234-5678 | LOC: San Francisco, CA
                      </p>
                    </div>

                    <div>
                      <p className="font-bold uppercase tracking-widest text-slate-800 dark:text-slate-200 mb-2">
                        [EXPERIENCE]
                      </p>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between font-bold">
                            <span>Horizon Cloud Services // Senior Systems Engineer</span>
                            <span>2023-PRES</span>
                          </div>
                          <div className="mt-2 space-y-1.5 pl-2 text-slate-600 dark:text-slate-400 leading-relaxed">
                            {bulletsOptimized ? (
                              bulletPairs.map((pair, idx) => (
                                <p key={idx}>- {pair.after}</p>
                              ))
                            ) : (
                              bulletPairs.map((pair, idx) => (
                                <p key={idx} className="text-slate-400 italic">- {pair.before}</p>
                              ))
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <p className="font-bold uppercase tracking-widest text-slate-800 dark:text-slate-200 mb-1.5">
                        [TECHNICAL_SKILLS]
                      </p>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                        {cvSkills.join(" // ")}
                      </p>
                    </div>
                  </div>
                )}

                {/* Classic Layout */}
                {cvTemplate === "classic" && (
                  <div className="space-y-5 serif-font">
                    {/* Centered Traditional Header */}
                    <div className="text-center">
                      <h2 className="text-2xl font-serif text-slate-950 dark:text-white font-semibold">
                        {cvName || "Your Name"}
                      </h2>
                      <p className="text-xs text-slate-500 italic mt-0.5">
                        San Francisco, California • sjenkins@example.com • +1 (555) 234-5678
                      </p>
                      <p className={`text-xs uppercase tracking-widest font-bold ${activeColor.text} mt-2 pb-2 border-b border-slate-300 dark:border-slate-800`}>
                        {cvTitle}
                      </p>
                    </div>

                    {/* Classic Experience */}
                    <div>
                      <h4 className="text-xs uppercase font-bold tracking-wider text-slate-800 dark:text-slate-200 border-b border-slate-200 dark:border-slate-800 pb-1 mb-2">
                        Professional Experience
                      </h4>
                      <div>
                        <div className="flex justify-between text-xs font-bold text-slate-900 dark:text-slate-100">
                          <span>Horizon Cloud Services</span>
                          <span className="font-semibold italic">San Francisco, CA</span>
                        </div>
                        <div className="flex justify-between text-xs text-slate-600 dark:text-slate-400 italic">
                          <span>Senior Systems Engineer</span>
                          <span>2023 - Present</span>
                        </div>
                        
                        <ul className="mt-2 list-disc pl-5 text-xs text-slate-600 dark:text-slate-400 space-y-1.5 leading-relaxed">
                          {bulletsOptimized ? (
                            bulletPairs.map((pair, idx) => (
                              <li key={idx} className="pl-1">{pair.after}</li>
                            ))
                          ) : (
                            bulletPairs.map((pair, idx) => (
                              <li key={idx} className="pl-1 text-slate-400 italic">{pair.before}</li>
                            ))
                          )}
                        </ul>
                      </div>
                    </div>

                    {/* Classic Skills */}
                    <div>
                      <h4 className="text-xs uppercase font-bold tracking-wider text-slate-800 dark:text-slate-200 border-b border-slate-200 dark:border-slate-800 pb-1 mb-2">
                        Skills & Expertise
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                        <strong className="font-bold text-slate-800 dark:text-slate-200">Technical Skills:</strong> {cvSkills.join(", ")}
                      </p>
                    </div>
                  </div>
                )}

              </div>

              {/* Status footer bar */}
              <div className="mt-8 pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-400 font-medium">
                <div className="flex items-center gap-1">
                  <span className={`w-2 h-2 rounded-full ${bulletsOptimized ? "bg-emerald-500" : "bg-indigo-400"}`}></span>
                  <span>{bulletsOptimized ? "AI Optimized & Validated" : "Awaiting AI Enhancements"}</span>
                </div>
                <div>
                  <span>Page 1 of 1</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* DYNAMIC ATS KEYWORD SCANNER DEMO */}
      <section id="ats-scanner" className="py-20 bg-white dark:bg-slate-900 border-t border-b border-slate-200/60 dark:border-slate-800/60 relative overflow-hidden">
        
        {/* Subtle decorative circles */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[350px] h-[350px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Side: Interactive scanner card */}
            <div className="lg:col-span-6 bg-slate-50 dark:bg-slate-950 p-6 md:p-8 rounded-2xl border border-slate-200/50 dark:border-slate-800/40 shadow-xl">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="bg-rose-100 dark:bg-rose-950/40 p-1.5 rounded-lg text-rose-600 dark:text-rose-400">
                    <Target className="h-4 w-4" />
                  </div>
                  <span className="text-xs font-black uppercase tracking-wider text-slate-700 dark:text-slate-300">ATS Competency Engine</span>
                </div>
                <span className="text-[10px] font-bold text-slate-400 font-mono">MODEL_ATS_SECURE</span>
              </div>

              {/* Step 1: Select job role */}
              <div className="mb-4">
                <label className="block text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">Select Target Job Description</label>
                <div className="grid grid-cols-3 gap-2">
                  {Object.entries(jobPresets).map(([key, value]) => (
                    <button
                      key={key}
                      onClick={() => {
                        setSelectedJob(key);
                        setCustomJobDesc("");
                        setAtsScanState("idle");
                      }}
                      className={`px-2.5 py-2 rounded-xl text-center text-xs font-bold border transition ${
                        selectedJob === key && !customJobDesc
                          ? "bg-rose-50 border-rose-200 text-rose-700 dark:bg-rose-950/30 dark:border-rose-900/60 dark:text-rose-300"
                          : "border-slate-200 dark:border-slate-800 text-slate-500 hover:bg-slate-100"
                      }`}
                    >
                      {value.title.split(" ").slice(-2).join(" ")}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Show Job description preview or text input */}
              <div className="mb-5">
                <label className="block text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">Job Listing Description</label>
                <textarea
                  value={customJobDesc || jobPresets[selectedJob as keyof typeof jobPresets].description}
                  onChange={(e) => {
                    setCustomJobDesc(e.target.value);
                    setAtsScanState("idle");
                  }}
                  rows={4}
                  className="w-full p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-xs text-slate-600 dark:text-slate-350 focus:outline-none focus:ring-2 focus:ring-rose-500 leading-relaxed font-mono"
                  placeholder="Paste custom target job listing details here..."
                />
              </div>

              {/* Action scanner buttons */}
              <div className="space-y-4">
                <button
                  onClick={triggerAtsScan}
                  disabled={atsScanState === "scanning"}
                  className="w-full inline-flex justify-center items-center gap-2 px-6 py-3 rounded-xl text-white bg-slate-900 hover:bg-slate-850 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200 font-bold text-sm transition shadow-md"
                >
                  {atsScanState === "scanning" ? (
                    <>
                      <RefreshCw className="h-4 w-4 animate-spin" />
                      Scanning CV keywords... {atsScore}%
                    </>
                  ) : atsScanState === "completed" ? (
                    <>
                      <RefreshCw className="h-4 w-4" />
                      Run Analysis Again
                    </>
                  ) : (
                    <>
                      <Search className="h-4 w-4" />
                      Scan CV & Score Match
                    </>
                  )}
                </button>

                {/* Simulated scoring report output */}
                {atsScanState !== "idle" && (
                  <div className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-850 rounded-2xl animate-scale-up">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200">Keywords Matching Results</h4>
                        <p className="text-[10px] text-slate-400 mt-0.5">Scanned against current sandbox profile</p>
                      </div>
                      
                      {/* Circle score indicator */}
                      <div className="flex items-center gap-2">
                        <span className={`text-2xl font-black ${
                          atsScore > 80 ? "text-emerald-500" : atsScore > 60 ? "text-amber-500" : "text-rose-500"
                        }`}>{atsScore}</span>
                        <span className="text-xs text-slate-400">/ 100</span>
                      </div>
                    </div>

                    {/* List keywords */}
                    <div className="space-y-3 text-xs">
                      <div>
                        <span className="block text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                          <Check className="h-3 w-3" /> Matched Keywords (Found in Sandbox)
                        </span>
                        <div className="flex flex-wrap gap-1">
                          {jobPresets[selectedJob as keyof typeof jobPresets].keywords
                            .filter((kw) => !jobPresets[selectedJob as keyof typeof jobPresets].missing.includes(kw))
                            .map((kw, idx) => (
                              <span key={idx} className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-100 dark:bg-emerald-950/20 dark:border-emerald-900/40 dark:text-emerald-400 text-[10px] font-semibold">
                                {kw}
                              </span>
                            ))}
                        </div>
                      </div>

                      {atsScanState === "completed" && (
                        <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
                          <span className="block text-[10px] font-bold text-rose-500 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                            <X className="h-3 w-3" /> Missing Keywords (Critical Fixes)
                          </span>
                          <div className="flex flex-wrap gap-1">
                            {jobPresets[selectedJob as keyof typeof jobPresets].missing.map((kw, idx) => (
                              <span key={idx} className="px-2 py-0.5 rounded bg-rose-50 text-rose-700 border border-rose-100 dark:bg-rose-950/20 dark:border-rose-900/40 dark:text-rose-400 text-[10px] font-semibold">
                                {kw}
                              </span>
                            ))}
                          </div>
                          <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-2 italic leading-relaxed">
                            💡 Tip: Add the missing skills <strong>&quot;{jobPresets[selectedJob as keyof typeof jobPresets].missing.join(", ")}&quot;</strong> to your sandbox profile on the right to watch your ATS score improve past 85%!
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

            </div>

            {/* Right Side: Informative Copy (6 Cols) */}
            <div className="lg:col-span-6 space-y-6">
              <span className="px-3 py-1 rounded-full bg-rose-50 dark:bg-rose-950/40 border border-rose-100 dark:border-rose-900/30 text-xs font-bold text-rose-600 dark:text-rose-400 uppercase tracking-widest">
                ATS Optimizer
              </span>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-950 dark:text-white tracking-tight leading-tight">
                Beat the Applicant Tracking Systems
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
                Over 75% of resumes are discarded by automated parsing filters before a human ever reviews them. SparkCV uses advanced keyword-extraction algorithms to cross-reference your resume bullets against the exact requirements of job listings.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <div className="bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400 p-2 rounded-lg mt-0.5">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white">Smart Match Scoring</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      Get a real-time rating of your resume strength, focusing on phrasing syntax, keywords, and structural formats.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400 p-2 rounded-lg mt-0.5">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white">Missing Keyword Highlights</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      Identify exact professional skills, tooling requirements, and credentials that ATS systems expect based on target listings.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400 p-2 rounded-lg mt-0.5">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white">Formatting Error Scanner</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      Detect broken column layouts, non-standard text fonts, or invalid header nests that confuse automated CV scrapers.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href="#sandbox"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 transition"
                >
                  Create an optimized CV now <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* THREE LAYOUTS SHOWCASE SECTION */}
      <section id="templates" className="py-20 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="px-3 py-1 rounded-full bg-violet-50 dark:bg-violet-950/40 border border-violet-100 dark:border-violet-900/30 text-xs font-bold text-violet-600 dark:text-violet-400 uppercase tracking-widest">
              Design Gallery
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-950 dark:text-white tracking-tight">
              Handcrafted layouts for every industry
            </h2>
            <p className="mt-4 text-base text-slate-600 dark:text-slate-400">
              Tested extensively with human resources recruiters and built on optimal typography scale frameworks. Perfect alignment guarantees clean printing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Gallery Item 1: Modern Minimalist */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/60 dark:border-slate-800 shadow-md overflow-hidden group hover:shadow-xl transition-all">
              <div className="aspect-[3/4] bg-slate-100 dark:bg-slate-950 p-4 relative overflow-hidden flex flex-col justify-between">
                
                {/* Fake Resume Miniature */}
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-850 rounded-xl p-3 h-full space-y-2 text-[6px]">
                  <div className="flex justify-between items-center pb-2 border-b">
                    <div className="space-y-1">
                      <div className="h-2 w-12 bg-slate-400 dark:bg-slate-600 rounded"></div>
                      <div className="h-1 w-8 bg-indigo-500 rounded"></div>
                    </div>
                    <div className="h-2 w-8 bg-slate-200 dark:bg-slate-850 rounded"></div>
                  </div>
                  <div className="space-y-1.5">
                    <div className="h-1.5 w-16 bg-slate-300 dark:bg-slate-700 rounded"></div>
                    <div className="space-y-1">
                      <div className="h-1 w-full bg-slate-200 dark:bg-slate-850 rounded"></div>
                      <div className="h-1 w-5/6 bg-slate-200 dark:bg-slate-850 rounded"></div>
                    </div>
                  </div>
                  <div className="space-y-1.5 pt-1">
                    <div className="h-1.5 w-16 bg-slate-300 dark:bg-slate-700 rounded"></div>
                    <div className="flex gap-1">
                      <div className="h-2 w-6 bg-indigo-50 dark:bg-indigo-950 rounded"></div>
                      <div className="h-2 w-8 bg-indigo-50 dark:bg-indigo-950 rounded"></div>
                      <div className="h-2 w-6 bg-indigo-50 dark:bg-indigo-950 rounded"></div>
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={() => {
                      setCvTemplate("modern");
                      document.getElementById("sandbox")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="px-4 py-2 bg-white text-slate-900 font-bold text-xs rounded-xl shadow-lg transition transform translate-y-2 group-hover:translate-y-0"
                  >
                    Load in Sandbox
                  </button>
                </div>
              </div>
              <div className="p-5 border-t border-slate-100 dark:border-slate-850">
                <h4 className="font-bold text-base text-slate-900 dark:text-white">Modern Professional</h4>
                <p className="text-xs text-slate-500 mt-1">
                  Optimal for high-growth tech firms, software engineers, and digital marketing leaders. Bold headers, clean alignments.
                </p>
              </div>
            </div>

            {/* Gallery Item 2: Minimalist Monospaced */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/60 dark:border-slate-800 shadow-md overflow-hidden group hover:shadow-xl transition-all">
              <div className="aspect-[3/4] bg-slate-100 dark:bg-slate-950 p-4 relative overflow-hidden flex flex-col justify-between">
                
                {/* Fake Resume Miniature */}
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-850 rounded-xl p-3 h-full space-y-2 text-[6px] font-mono">
                  <div className="text-center pb-2 border-b border-dashed">
                    <div className="h-2 w-16 bg-slate-400 dark:bg-slate-600 rounded mx-auto"></div>
                    <div className="h-1 w-12 bg-slate-200 dark:bg-slate-850 rounded mx-auto mt-1"></div>
                  </div>
                  <div className="space-y-1 pt-1">
                    <div className="h-1.5 w-10 bg-slate-300 dark:bg-slate-700 rounded"></div>
                    <div className="h-1 w-full bg-slate-200 dark:bg-slate-850 rounded"></div>
                    <div className="h-1 w-full bg-slate-200 dark:bg-slate-850 rounded"></div>
                  </div>
                </div>

                <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={() => {
                      setCvTemplate("minimal");
                      document.getElementById("sandbox")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="px-4 py-2 bg-white text-slate-900 font-bold text-xs rounded-xl shadow-lg transition transform translate-y-2 group-hover:translate-y-0"
                  >
                    Load in Sandbox
                  </button>
                </div>
              </div>
              <div className="p-5 border-t border-slate-100 dark:border-slate-850">
                <h4 className="font-bold text-base text-slate-900 dark:text-white">Minimalist Monospaced</h4>
                <p className="text-xs text-slate-500 mt-1">
                  Ideal for research professionals, data scientists, backend developers, and terminal lovers. Ultra-clean typography focus.
                </p>
              </div>
            </div>

            {/* Gallery Item 3: Executive Serif */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/60 dark:border-slate-800 shadow-md overflow-hidden group hover:shadow-xl transition-all">
              <div className="aspect-[3/4] bg-slate-100 dark:bg-slate-950 p-4 relative overflow-hidden flex flex-col justify-between">
                
                {/* Fake Resume Miniature */}
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-850 rounded-xl p-3 h-full space-y-2 text-[6px]">
                  <div className="text-center pb-2 border-b">
                    <div className="h-2 w-14 bg-slate-400 dark:bg-slate-600 rounded mx-auto font-serif"></div>
                    <div className="h-1 w-20 bg-slate-200 dark:bg-slate-850 rounded mx-auto mt-1"></div>
                  </div>
                  <div className="space-y-1 pt-1">
                    <div className="h-1.5 w-12 bg-slate-300 dark:bg-slate-700 rounded"></div>
                    <div className="h-1 w-full bg-slate-200 dark:bg-slate-850 rounded"></div>
                    <div className="h-1 w-5/6 bg-slate-200 dark:bg-slate-850 rounded"></div>
                  </div>
                </div>

                <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={() => {
                      setCvTemplate("classic");
                      document.getElementById("sandbox")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="px-4 py-2 bg-white text-slate-900 font-bold text-xs rounded-xl shadow-lg transition transform translate-y-2 group-hover:translate-y-0"
                  >
                    Load in Sandbox
                  </button>
                </div>
              </div>
              <div className="p-5 border-t border-slate-100 dark:border-slate-850">
                <h4 className="font-bold text-base text-slate-900 dark:text-white">Executive Serif</h4>
                <p className="text-xs text-slate-500 mt-1">
                  Great for banking executives, operations management, academic faculty, and legal advisors. Classic formatting, refined margins.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* PRICING TIER SECTION */}
      <section id="pricing" className="py-20 bg-white dark:bg-slate-900 border-t border-b border-slate-200/60 dark:border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-900/30 text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
              Simple Billing
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-950 dark:text-white tracking-tight">
              Fair plans for everyone
            </h2>
            <p className="mt-4 text-base text-slate-600 dark:text-slate-400">
              Build your first resume completely on us. Upgrade anytime to unlock comprehensive ATS tracking and AI copilot rewriting.
            </p>

            {/* Monthly/Yearly toggle */}
            <div className="mt-8 flex items-center justify-center gap-3">
              <span className={`text-xs font-bold ${billingPeriod === "monthly" ? "text-slate-900 dark:text-white" : "text-slate-400"}`}>Monthly Billing</span>
              <button
                onClick={() => setBillingPeriod(billingPeriod === "monthly" ? "yearly" : "monthly")}
                className="relative inline-flex h-6 w-11 items-center rounded-full bg-indigo-600 transition focus:outline-none"
                aria-label="Toggle billing frequency"
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                    billingPeriod === "yearly" ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
              <span className={`text-xs font-bold ${billingPeriod === "yearly" ? "text-slate-900 dark:text-white" : "text-slate-400"} flex items-center gap-1`}>
                Annual Saver <span className="px-1.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-indigo-100 text-indigo-700 dark:bg-indigo-900/45 dark:text-indigo-300">Save 20%</span>
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-5xl mx-auto">
            
            {/* Plan 1: Free Starter */}
            <div className="bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-200/50 dark:border-slate-800/45 p-6 flex flex-col justify-between shadow-sm relative overflow-hidden">
              <div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white">Basic Spark</h4>
                <p className="text-xs text-slate-500 mt-1">Essential CV tools for job applicants</p>
                <div className="mt-6 mb-6 flex items-baseline">
                  <span className="text-3xl font-black text-slate-900 dark:text-white">$0</span>
                  <span className="text-xs text-slate-400 ml-1">forever free</span>
                </div>
                
                <ul className="space-y-3.5 border-t border-slate-200/60 dark:border-slate-800/50 pt-5 text-xs text-slate-600 dark:text-slate-400">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>Create 1 Premium Resume Profile</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>Access standard resume templates</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>Print-ready PDF document downloads</span>
                  </li>
                  <li className="flex items-center gap-2 text-slate-400 line-through">
                    <X className="h-4 w-4 text-slate-300 shrink-0" />
                    <span>AI Copilot copywriting enhancement</span>
                  </li>
                  <li className="flex items-center gap-2 text-slate-400 line-through">
                    <X className="h-4 w-4 text-slate-300 shrink-0" />
                    <span>Interactive ATS keyword analysis</span>
                  </li>
                </ul>
              </div>
              
              <button
                onClick={() => {
                  document.getElementById("sandbox")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full mt-8 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs hover:bg-slate-100 dark:hover:bg-slate-850 transition"
              >
                Start Free Sandbox
              </button>
            </div>

            {/* Plan 2: Pro Career (Best Seller) */}
            <div className="bg-slate-900 text-white rounded-2xl border-2 border-indigo-500 p-6 flex flex-col justify-between shadow-xl relative overflow-hidden transform md:-translate-y-2">
              <div className="absolute top-0 right-0 bg-indigo-500 text-white text-[9px] font-black uppercase tracking-wider px-3.5 py-1.5 rounded-bl-xl">
                Best Seller
              </div>
              
              <div>
                <h4 className="text-base font-bold text-white">Career Booster</h4>
                <p className="text-xs text-slate-400 mt-1">Unlock AI tools to bulletproof resumes</p>
                <div className="mt-6 mb-6 flex items-baseline">
                  <span className="text-3xl font-black text-white">
                    {billingPeriod === "yearly" ? "$12" : "$15"}
                  </span>
                  <span className="text-xs text-slate-400 ml-1">/ month</span>
                </div>
                
                <ul className="space-y-3.5 border-t border-slate-800 pt-5 text-xs text-slate-300">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-emerald-400 shrink-0" />
                    <span>Create Unlimited Resume Profiles</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-emerald-400 shrink-0" />
                    <span>Access all Modern, Minimal, Serif layout themes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-emerald-400 shrink-0" />
                    <span>Unlimited Spark AI Copilot bullet corrections</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-emerald-400 shrink-0" />
                    <span>Comprehensive ATS listing matches & scan reports</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-emerald-400 shrink-0" />
                    <span>Hosted Web Portfolio URL with dynamic views</span>
                  </li>
                </ul>
              </div>
              
              <button
                onClick={() => {
                  setSuccessModalConfig({
                    badge: "Pro Activated",
                    title: "Welcome to Pro Plan!",
                    message: "You have selected our standard Pro Plan simulation. Build your resumes, check your ATS matching, and download high-impact PDFs!"
                  });
                  setShowSuccessModal(true);
                }}
                className="w-full mt-8 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs transition shadow-md shadow-indigo-600/20"
              >
                Upgrade to Pro Plan
              </button>
            </div>

            {/* Plan 3: Corporate Team */}
            <div className="bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-200/50 dark:border-slate-800/45 p-6 flex flex-col justify-between shadow-sm relative overflow-hidden">
              <div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white">Expert Agency</h4>
                <p className="text-xs text-slate-500 mt-1">For staffing teams and career bureaus</p>
                <div className="mt-6 mb-6 flex items-baseline">
                  <span className="text-3xl font-black text-slate-900 dark:text-white">
                    {billingPeriod === "yearly" ? "$39" : "$49"}
                  </span>
                  <span className="text-xs text-slate-400 ml-1">/ month</span>
                </div>
                
                <ul className="space-y-3.5 border-t border-slate-200/60 dark:border-slate-800/50 pt-5 text-xs text-slate-600 dark:text-slate-400">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>Includes up to 10 team seats / accounts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>Add customized organization logos to exports</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>Batch import raw candidates (Excel or LinkedIN)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>High priority priority generation API streams</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>Dedicated success strategist & setup training</span>
                  </li>
                </ul>
              </div>
              
              <button
                onClick={() => {
                  setSuccessModalConfig({
                    badge: "Agency Setup",
                    title: "Agency Inquiry Captured",
                    message: "Thank you for checking out our corporate team setup. We would love to train your recruiters and accelerate placement rates."
                  });
                  setShowSuccessModal(true);
                }}
                className="w-full mt-8 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs hover:bg-slate-100 dark:hover:bg-slate-850 transition"
              >
                Contact Sales Team
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* DETAILED FAQ ACCORDION SECTION */}
      <section id="faqs" className="py-20 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          <div className="text-center mb-16">
            <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-widest">
              Have Questions?
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-slate-950 dark:text-white tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "What actually makes a resume 'ATS-optimized'?",
                a: "Applicant Tracking Systems read resumes as raw text documents. An ATS-friendly resume avoids floating graphical elements, ensures fonts are system-standard (like Arial or Times New Roman), structures text hierarchies under standard headers ('Experience', 'Education'), and integrates exactly matching keyword skills present in target job descriptions. SparkCV handles all of this automatically in our layouts."
              },
              {
                q: "Is my personal data safe with SparkCV?",
                a: "Absolutely. We build with strict local-first encryption protocols. Your data belongs entirely to you. We do not sell user analytics metrics, and we never utilize your experiences to train public large language models."
              },
              {
                q: "Can I export as Word Doc or only PDF?",
                a: "We currently support print-perfect, vector-rendered PDF exports which ensure your document layout remains identical on any computer or operating system. We also offer plain-text JSON resume schema exports and Markdown."
              },
              {
                q: "Do I need any credit card to build my resume?",
                a: "No credit card is required. You can utilize the sandbox, fill in personnel information, customize accent theme colors, experiment with templates, and download standard standard profiles for free."
              },
              {
                q: "How does the Hosted Portfolio work?",
                a: "Once you create a resume, clicking 'Publish Portfolio' creates a unique responsive web URL. Hiring managers can check your experiences, click contact links, and download your latest printed CV. Any updates you make on SparkCV sync instantly."
              }
            ].map((faq, idx) => {
              const isOpen = expandedFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => setExpandedFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-5 text-left font-bold text-sm sm:text-base text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-850/40 transition focus:outline-none"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`h-5 w-5 text-slate-400 transition-transform duration-200 shrink-0 ${isOpen ? "transform rotate-180" : ""}`} />
                  </button>
                  
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800 animate-fade-in">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* FINAL CALL TO ACTION (CTA) SECTION */}
      <section className="py-16 md:py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-tr from-indigo-950 via-slate-950 to-indigo-900 text-white px-6 py-12 md:p-16 text-center shadow-2xl">
            
            {/* Background glowing decorations */}
            <div className="absolute top-0 left-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[radial-gradient(#ffffff_0.5px,transparent_0.5px)] [background-size:20px_20px] opacity-10 pointer-events-none"></div>

            <div className="relative z-10 max-w-3xl mx-auto">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-semibold uppercase tracking-widest text-indigo-300 mb-6">
                <Zap className="h-3.5 w-3.5 fill-indigo-300/20" /> Spark Your Next Career
              </span>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
                Ready to land your dream job?
              </h2>
              
              <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl mx-auto">
                Join thousands of software engineers, designers, and operations managers who leveraged SparkCV to land interviews at Tier-1 companies.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                <button
                  onClick={() => {
                    document.getElementById("sandbox")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-slate-950 bg-white hover:bg-slate-100 font-bold text-base transition duration-150 transform hover:-translate-y-0.5 shadow-lg"
                >
                  <Sparkles className="h-5 w-5 text-indigo-600 fill-indigo-500/10 animate-spin-slow" />
                  Create Your Free CV Now
                </button>
              </div>

              {/* Trust Badge */}
              <p className="mt-6 text-[11px] text-slate-400 font-medium">
                No credit card required • Standard sandbox accessible instantly
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200/60 dark:border-slate-800/60 pt-16 pb-12 text-slate-600 dark:text-slate-400 text-xs sm:text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
            
            {/* Branding Column */}
            <div className="md:col-span-4 space-y-4">
              <a href="#" className="flex items-center gap-2 group">
                <div className="bg-gradient-to-tr from-indigo-600 to-violet-500 p-1.5 rounded-lg text-white">
                  <Zap className="h-4 w-4" />
                </div>
                <span className="text-lg font-extrabold tracking-tight text-slate-950 dark:text-white">
                  Spark<span className="text-indigo-600 dark:text-indigo-400">CV</span>
                </span>
              </a>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed max-w-sm">
                SparkCV utilizes modern design specifications and targeted keyword AI analysis to help ambitious professionals secure key recruitment checkpoints.
              </p>
              
              {/* Fake Social links */}
              <div className="flex gap-4 pt-1 opacity-65">
                <span className="hover:text-indigo-600 dark:hover:text-indigo-400 cursor-pointer font-bold">Twitter</span>
                <span className="hover:text-indigo-600 dark:hover:text-indigo-400 cursor-pointer font-bold">LinkedIn</span>
                <span className="hover:text-indigo-600 dark:hover:text-indigo-400 cursor-pointer font-bold">Github</span>
              </div>
            </div>

            {/* Links Columns */}
            <div className="md:col-span-2 space-y-3">
              <h5 className="font-extrabold text-[11px] tracking-wider uppercase text-slate-950 dark:text-white">Product</h5>
              <ul className="space-y-2 text-xs">
                <li><a href="#sandbox" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">CV Sandbox</a></li>
                <li><a href="#ats-scanner" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">ATS Keyword Scanner</a></li>
                <li><a href="#templates" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Premium Layouts</a></li>
                <li><a href="#pricing" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Plan Pricing</a></li>
              </ul>
            </div>

            <div className="md:col-span-2 space-y-3">
              <h5 className="font-extrabold text-[11px] tracking-wider uppercase text-slate-950 dark:text-white">Company</h5>
              <ul className="space-y-2 text-xs">
                <li><span className="hover:text-indigo-600 transition-colors cursor-pointer">About Us</span></li>
                <li><span className="hover:text-indigo-600 transition-colors cursor-pointer">Our Strategy</span></li>
                <li><span className="hover:text-indigo-600 transition-colors cursor-pointer">Recruiters network</span></li>
                <li><span className="hover:text-indigo-600 transition-colors cursor-pointer">Press Desk</span></li>
              </ul>
            </div>

            {/* Newsletter Column */}
            <div className="md:col-span-4 space-y-3">
              <h5 className="font-extrabold text-[11px] tracking-wider uppercase text-slate-950 dark:text-white">Stay Tuned</h5>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Subscribe to receive actionable resume tips, ATS compliance guidelines, and product release updates.
              </p>
              
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address..."
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="flex-1 px-3 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-indigo-500"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-slate-900 dark:bg-slate-100 dark:text-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl transition shrink-0"
                >
                  Join List
                </button>
              </form>

              {newsletterSubscribed && (
                <p className="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium animate-pulse mt-1">
                  ✓ Successfully joined the list! Check your inbox soon.
                </p>
              )}
            </div>

          </div>

          {/* Copyright and Legal lines */}
          <div className="pt-8 border-t border-slate-200/60 dark:border-slate-800/60 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400">
            <p>© {new Date().getFullYear()} SparkCV Inc. All rights reserved. Created for professional growth.</p>
            <div className="flex gap-4 mt-4 sm:mt-0">
              <span className="hover:underline cursor-pointer">Terms of Service</span>
              <span className="hover:underline cursor-pointer">Privacy Statement</span>
              <span className="hover:underline cursor-pointer">Cookie Preferences</span>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
