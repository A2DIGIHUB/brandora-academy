import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import uiuxImg from "@/assets/program-uiux.jpg";
import webImg from "@/assets/program-web.jpg";
import dataImg from "@/assets/program-data.jpg";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/academy")({
  head: () => ({
    meta: [
      { title: "Academic Disciplines & Tracks — BrandoraX" },
      {
        name: "description",
        content:
          "Six specialized digital workforce tracks: UI/UX, Full-Stack Web Dev, Data Analysis, Cybersecurity, Graphic Design, and Software Engineering.",
      },
      { property: "og:title", content: "Academic Disciplines & Tracks — BrandoraX" },
      {
        property: "og:description",
        content:
          "Outcome-based digital workforce training with real project milestones, senior practitioner reviews, and portfolio development.",
      },
    ],
  }),
  component: AcademyPage,
});

const specializations = [
  {
    id: "uiux",
    title: "UI/UX & Product Design",
    category: "design",
    img: uiuxImg,
    duration: "3 – 6 Months",
    price: "₦80,000 – ₦150,000",
    desc: "Master user research, wireframing, high-fidelity prototypes, and scalable Figma design systems for shipped digital products.",
    tools: ["Figma", "Design Tokens", "Wireframing", "Usability Testing"],
  },
  {
    id: "web-dev",
    title: "Full-Stack Web Development",
    category: "engineering",
    img: webImg,
    duration: "3 – 6 Months",
    price: "₦80,000 – ₦150,000",
    desc: "Build modern web applications with React, TypeScript, database modeling, REST/GraphQL APIs, and live cloud deployment.",
    tools: ["React", "TypeScript", "Tailwind CSS", "Supabase", "Git"],
  },
  {
    id: "data-analysis",
    title: "Data Analysis & BI",
    category: "data",
    img: dataImg,
    duration: "6 – 12 Months",
    price: "₦150,000 – ₦250,000",
    desc: "Transform messy organizational data into interactive executive dashboards and statistical insights using SQL and Python.",
    tools: ["SQL", "Python", "Tableau", "PowerBI", "Pandas"],
  },
  {
    id: "graphic-design",
    title: "Graphic & Brand Design",
    category: "design",
    img: null,
    duration: "3 Months",
    price: "₦80,000",
    desc: "Craft comprehensive corporate brand identity systems, typography guidelines, vector graphics, and multi-channel campaign collateral.",
    tools: ["Adobe Illustrator", "Photoshop", "Typography", "Brand Systems"],
  },
  {
    id: "software-dev",
    title: "Software Systems Engineering",
    category: "engineering",
    img: null,
    duration: "6 – 12 Months",
    price: "₦150,000 – ₦250,000",
    desc: "Application architecture, backend API systems, database optimization, Redis caching, and containerized Docker deployments.",
    tools: ["Node.js", "PostgreSQL", "Docker", "REST & GraphQL", "CI/CD"],
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity Defense",
    category: "data",
    img: null,
    duration: "6 – 12 Months",
    price: "₦150,000 – ₦250,000",
    desc: "Learn threat detection, vulnerability analysis, network defense, penetration testing, and incident response playbooks.",
    tools: ["Wireshark", "Nmap", "Kali Linux", "Burp Suite", "Threat Modeling"],
  },
];

const trackTiers = [
  {
    name: "3-Month Intensive",
    level: "Foundational to Intermediate",
    price: "₦80,000",
    bestFor: "Fast-track skill building, fundamental project mastery, and rapid career entry.",
    features: [
      "2–3 Live classes per week",
      "Weekly mentor feedback & project reviews",
      "2 Core portfolio-grade projects",
      "Certificate of Program Completion",
      "Access to BrandoraX alumni Telegram community",
    ],
  },
  {
    name: "6-Month Professional",
    level: "Intermediate to Advanced",
    price: "₦150,000",
    popular: true,
    bestFor: "Deep technical immersion, team projects, and qualification for talent placement.",
    features: [
      "Everything in 3-Month Intensive",
      "Advanced industry specialization modules",
      "Team collaboration on live client briefs",
      "4 Comprehensive case studies / deployed apps",
      "Evaluation for BrandoraX Talent Pipeline & matching",
    ],
  },
  {
    name: "12-Month Mastery",
    level: "Advanced & Systems Specialization",
    price: "₦250,000",
    bestFor: "Complete end-to-end mastery, complex systems architecture, and elite job readiness.",
    features: [
      "Everything in 6-Month Professional",
      "Enterprise systems & architecture modules",
      "Dedicated 1-on-1 senior practitioner mentorship",
      "Production-level capstone project deployment",
      "Direct priority referral to corporate hiring partners",
    ],
  },
];

function AcademyPage() {
  const [filter, setFilter] = useState<"all" | "design" | "engineering" | "data">("all");

  const filtered = specializations.filter((s) => {
    if (filter === "all") return true;
    return s.category === filter;
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="pb-24">
        {/* HERO SECTION */}
        <section className="relative px-6 pt-20 pb-20 border-b border-border bg-[#EEF2F9]/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-xs font-mono text-[#0040E9] uppercase tracking-widest font-bold mb-3">
              Academic Curricula · Cohort 1 Enrollment Open
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[0.98] text-[#000F38] max-w-4xl mb-6">
              Disciplines Engineered for Employability.
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-10">
              We do not teach passive video theory. Every discipline is structured backwards from the exact skills,
              tools, and proof-of-work briefs required by top-tier tech teams.
            </p>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2 pt-4">
              {[
                { key: "all", label: "All Disciplines" },
                { key: "design", label: "Product & Graphic Design" },
                { key: "engineering", label: "Web & Software Engineering" },
                { key: "data", label: "Data Analytics & Security" },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setFilter(tab.key as any)}
                  className={`px-5 py-2.5 rounded text-xs font-mono font-bold uppercase tracking-wider transition-colors ${
                    filter === tab.key
                      ? "bg-[#000F38] text-white"
                      : "bg-white border border-border text-muted-foreground hover:text-[#000F38]"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* TRACKS GRID */}
        <section className="py-20 px-6 border-b border-border">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((s) => (
                <div
                  key={s.id}
                  className="bg-white border border-border rounded-lg overflow-hidden flex flex-col justify-between hover:border-[#0040E9] transition-colors group shadow-sm"
                >
                  <div>
                    {s.img ? (
                      <div className="aspect-[16/9] overflow-hidden bg-muted">
                        <img
                          src={s.img}
                          alt={s.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ) : (
                      <div className="aspect-[16/9] bg-[#000F38] p-6 flex flex-col justify-end">
                        <span className="text-xs font-mono uppercase text-[#FEC958] font-bold">{s.category}</span>
                        <h4 className="text-xl font-bold text-white mt-1">{s.title}</h4>
                      </div>
                    )}

                    <div className="p-6">
                      <div className="flex items-center justify-between text-xs font-mono text-muted-foreground mb-3">
                        <span className="font-bold text-[#0040E9] uppercase">{s.category}</span>
                        <span>{s.duration}</span>
                      </div>
                      <h3 className="text-xl font-bold text-[#000F38] mb-2">{s.title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed mb-6">{s.desc}</p>

                      <div className="border-t border-border pt-4">
                        <div className="text-[11px] font-mono uppercase text-muted-foreground mb-2">Core Tools:</div>
                        <div className="flex flex-wrap gap-1.5">
                          {s.tools.map((t) => (
                            <span
                              key={t}
                              className="text-xs font-mono bg-muted text-[#000F38] px-2.5 py-1 rounded"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-0 border-t border-border mt-4 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] font-mono uppercase text-muted-foreground">Tuition</div>
                      <div className="text-sm font-bold text-[#000F38]">{s.price}</div>
                    </div>
                    <div className="flex gap-2">
                      <Link
                        to="/academy/$trackId"
                        params={{ trackId: s.id }}
                        className="text-xs font-bold uppercase tracking-wider text-[#0040E9] inline-flex items-center gap-1 hover:underline"
                      >
                        Syllabus
                        <ArrowUpRight className="size-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TRANSPARENT PRICING & COHORT TIERS */}
        <section className="py-24 px-6 bg-[#EEF2F9]/50 border-b border-border">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="text-xs font-mono text-[#0040E9] uppercase tracking-widest font-bold mb-2">
                Transparent Tuition
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#000F38] tracking-tight">
                Choose your cohort depth.
              </h2>
              <p className="text-muted-foreground mt-3 text-sm sm:text-base">
                No hidden fees. All tracks include live mentorship, graded milestone reviews, and portfolio guidance.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 items-stretch">
              {trackTiers.map((tier) => (
                <div
                  key={tier.name}
                  className={`bg-white rounded-lg p-8 flex flex-col justify-between transition-all ${
                    tier.popular
                      ? "border-2 border-[#0040E9] shadow-lg relative"
                      : "border border-border"
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#0040E9] text-white text-[10px] font-mono font-bold uppercase tracking-widest px-3 py-1 rounded">
                      Most Recommended
                    </div>
                  )}
                  <div>
                    <div className="text-xs font-mono uppercase tracking-widest text-[#0040E9] font-bold mb-2">
                      {tier.level}
                    </div>
                    <h3 className="text-2xl font-bold text-[#000F38] mb-2">{tier.name}</h3>
                    <div className="text-3xl font-extrabold font-mono text-[#000F38] mb-4">{tier.price}</div>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-6">{tier.bestFor}</p>

                    <div className="space-y-3 border-t border-border pt-6 mb-8 font-mono text-xs text-muted-foreground">
                      {tier.features.map((feat) => (
                        <div key={feat} className="flex items-start gap-2">
                          <span className="text-[#0040E9] font-bold">✓</span>
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    to="/auth"
                    className={`w-full text-center block py-3.5 rounded text-xs font-bold uppercase tracking-wider transition-colors ${
                      tier.popular
                        ? "bg-[#0040E9] text-white hover:bg-[#0035C2]"
                        : "bg-[#000F38] text-white hover:bg-black"
                    }`}
                  >
                    Apply for this Track
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW ADMISSION WORKS */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-xs font-mono text-[#0040E9] uppercase tracking-widest font-bold mb-2">Admissions</div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#000F38] tracking-tight mb-6">
                Simple, accessible admission process.
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed mb-8">
                We believe that discipline and dedication matter more than formal credentials. Our admission process is
                designed to set you up for success from day one.
              </p>
              <div className="space-y-4">
                {[
                  { n: "01", t: "Submit Application", d: "Choose your preferred specialization and cohort length." },
                  { n: "02", t: "Diagnostic Orientation", d: "A brief self-assessment to confirm your initial baseline." },
                  { n: "03", t: "Tuition & Onboarding", d: "Complete payment and gain immediate access to the student dashboard and Telegram." },
                  { n: "04", t: "Start Live Classes", d: "Attend the Saturday induction and begin your Phase 1 project briefs." },
                ].map((step) => (
                  <div key={step.n} className="flex items-start gap-4 p-5 rounded bg-white border border-border">
                    <span className="font-mono text-xs font-bold text-[#0040E9] px-2 py-1 bg-[#0040E9]/10 rounded">
                      {step.n}
                    </span>
                    <div>
                      <div className="text-sm font-bold text-[#000F38]">{step.t}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">{step.d}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#000F38] text-white p-10 lg:p-14 rounded-lg text-center flex flex-col justify-center items-center">
              <div className="text-xs font-mono uppercase text-[#FEC958] font-bold tracking-widest mb-4">
                Admissions Status
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-4 text-white">
                Cohort 1 Admissions Active
              </h3>
              <p className="text-white/70 text-sm leading-relaxed max-w-sm mb-8">
                Applications for Cohort 1 close once mentor capacity is reached. Secure your seat today.
              </p>
              <Link
                to="/auth"
                className="bg-[#0040E9] text-white px-8 py-4 rounded text-xs font-bold uppercase tracking-wider hover:bg-[#0035C2] transition-colors"
              >
                Apply for Admission Now
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
