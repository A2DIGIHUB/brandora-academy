import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import heroImg from "@/assets/hero.jpg";
import uiuxImg from "@/assets/program-uiux.jpg";
import webImg from "@/assets/program-web.jpg";
import dataImg from "@/assets/program-data.jpg";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BrandoraX — Learn In-Demand Digital Skills & Build Real Proof" },
      {
        name: "description",
        content:
          "Outcome-based digital workforce academy. Master UI/UX, Web Dev, Data Analysis, Graphic Design, Software Engineering, and Cybersecurity through real projects.",
      },
      {
        property: "og:title",
        content: "BrandoraX — Learn In-Demand Digital Skills & Build Real Proof",
      },
      {
        property: "og:description",
        content:
          "Practical project-based learning, 1-on-1 mentorship, and proof-of-work portfolios designed for real-world careers.",
      },
    ],
  }),
  component: IndexPage,
});

const heroTrackPreviews = [
  {
    id: "web-dev",
    name: "Web Development",
    tag: "Engineering",
    duration: "3 – 6 Months",
    tuition: "₦80k – ₦150k",
    deliverable: "Production Full-Stack SaaS App with Live Database & Auth",
    stack: ["React", "TypeScript", "Tailwind", "Supabase", "Git"],
    img: webImg,
    syllabusLink: "/academy/web-dev",
  },
  {
    id: "uiux",
    name: "UI/UX Design",
    tag: "Product Design",
    duration: "3 – 6 Months",
    tuition: "₦80k – ₦150k",
    deliverable: "Multi-Platform Mobile Design System & Tested Figma Prototype",
    stack: ["Figma", "Design Tokens", "Wireframing", "User Testing"],
    img: uiuxImg,
    syllabusLink: "/academy/uiux",
  },
  {
    id: "data-analysis",
    name: "Data Analysis",
    tag: "Analytics & BI",
    duration: "6 – 12 Months",
    tuition: "₦150k – ₦250k",
    deliverable: "Automated ETL Pipeline & Executive PowerBI Dashboard",
    stack: ["SQL", "Python", "Tableau", "PowerBI", "Pandas"],
    img: dataImg,
    syllabusLink: "/academy/data-analysis",
  },
  {
    id: "cybersecurity",
    name: "Cybersecurity",
    tag: "SecOps & Defense",
    duration: "6 – 12 Months",
    tuition: "₦150k – ₦250k",
    deliverable: "Infrastructure Security Audit & Penetration Remediation Playbook",
    stack: ["Wireshark", "Kali Linux", "Nmap", "Burp Suite"],
    img: heroImg,
    syllabusLink: "/academy/cybersecurity",
  },
];

const learningSteps = [
  {
    step: "01",
    title: "Diagnostic & Track Selection",
    desc: "Undergo an initial aptitude orientation to identify whether your strengths align with Engineering, Design, or Analytics.",
  },
  {
    step: "02",
    title: "Live Sprints & Briefs",
    desc: "Execute industry-grade projects that mirror actual workplace challenges rather than copying passive video lectures.",
  },
  {
    step: "03",
    title: "Practitioner Code & Design Reviews",
    desc: "Receive weekly detailed critiques on code architecture, user experience, and delivery speed from working industry professionals.",
  },
  {
    step: "04",
    title: "Verified Proof of Work",
    desc: "Graduate with an indisputable portfolio of live deployed products, GitHub repos, and Figma prototypes ready for employer scrutiny.",
  },
];

const tracks = [
  {
    id: "uiux",
    title: "UI/UX & Product Design",
    duration: "3 – 6 Months",
    tuition: "₦80,000 – ₦150,000",
    img: uiuxImg,
    category: "Design",
    desc: "User research, wireframing, high-fidelity prototypes, and scalable Figma design systems for shipped digital products.",
    tools: ["Figma", "Design Tokens", "Wireframing", "Usability Testing"],
  },
  {
    id: "web-dev",
    title: "Full-Stack Web Development",
    duration: "3 – 6 Months",
    tuition: "₦80,000 – ₦150,000",
    img: webImg,
    category: "Engineering",
    desc: "Build modern web applications with React, TypeScript, database modeling, APIs, and live cloud deployment.",
    tools: ["React", "TypeScript", "Tailwind CSS", "Supabase", "Git"],
  },
  {
    id: "data-analysis",
    title: "Data Analysis & BI",
    duration: "6 – 12 Months",
    tuition: "₦150,000 – ₦250,000",
    img: dataImg,
    category: "Analytics",
    desc: "Transform messy organizational data into interactive executive dashboards and statistical insights using SQL and Python.",
    tools: ["SQL", "Python", "Tableau", "PowerBI", "Pandas"],
  },
  {
    id: "graphic-design",
    title: "Graphic & Brand Design",
    duration: "3 Months",
    tuition: "₦80,000",
    img: null,
    category: "Design",
    desc: "Craft comprehensive corporate brand identity systems, typography guidelines, vector graphics, and digital assets.",
    tools: ["Adobe Illustrator", "Photoshop", "Typography", "Brand Systems"],
  },
  {
    id: "software-dev",
    title: "Software Systems Engineering",
    duration: "6 – 12 Months",
    tuition: "₦150,000 – ₦250,000",
    img: null,
    category: "Engineering",
    desc: "Application architecture, backend API systems, database optimization, Redis caching, and CI/CD pipelines.",
    tools: ["Node.js", "PostgreSQL", "Docker", "REST & GraphQL", "CI/CD"],
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity Defense",
    duration: "6 – 12 Months",
    tuition: "₦150,000 – ₦250,000",
    img: null,
    category: "Security",
    desc: "Learn threat detection, vulnerability analysis, network defense, penetration testing, and incident response playbooks.",
    tools: ["Wireshark", "Nmap", "Kali Linux", "Burp Suite", "Threat Modeling"],
  },
];

const portfolioShowcase = [
  {
    track: "Full-Stack Web Development",
    title: "Multi-Tenant SaaS Application",
    desc: "A production-grade application featuring secure Supabase authentication, PostgreSQL row-level security, optimistic UI updates with React, and automated Vercel deployment.",
    stack: "React · TypeScript · Supabase · Tailwind · Vercel",
    deliverable: "Live Production URL & Public GitHub Repository",
  },
  {
    track: "UI/UX & Product Design",
    title: "Fintech Mobile Design System",
    desc: "An end-to-end design system with 60+ atomic components, WCAG AAA accessibility contrast, interactive micro-animations, and a 24-screen tested prototype.",
    stack: "Figma · FigJam · Design Tokens · User Testing",
    deliverable: "Published Figma Community Kit & Case Study",
  },
  {
    track: "Data Analysis & BI",
    title: "Executive Revenue & Churn Dashboard",
    desc: "Automated ETL pipeline ingesting 100,000+ transaction records with Python and SQL, outputting real-time KPI metrics and cohort retention models in PowerBI.",
    stack: "Python · Pandas · SQL · PowerBI",
    deliverable: "Interactive BI Dashboard & Executive Brief",
  },
];

const institutionalPillars = [
  {
    num: "01",
    title: "Practitioner-Led Mentorship",
    desc: "Learn from working engineers and designers who share modern workflows, actual pull request reviews, and industry expectations.",
  },
  {
    num: "02",
    title: "Proof Over Paper",
    desc: "We do not issue participation certificates for watching videos. You graduate only when your projects meet verified production standards.",
  },
  {
    num: "03",
    title: "Workplace Discipline",
    desc: "Communication hygiene, Git commit etiquette, and deadline adherence are treated as essential professional grading criteria.",
  },
  {
    num: "04",
    title: "Employer-Aligned Pipeline",
    desc: "Curricula are continuously modernized in consultation with hiring partners across Nigeria, Africa, and global remote teams.",
  },
];

function IndexPage() {
  const [heroActiveTrack, setHeroActiveTrack] = useState(0);
  const [selectedShowcase, setSelectedShowcase] = useState(0);

  const activeTrack = heroTrackPreviews[heroActiveTrack];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        {/* HERO SECTION */}
        <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-24 px-6 border-b border-border bg-[#F8FAFC]">
          <div className="max-w-7xl mx-auto">
            {/* Top Status Banner */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-border/80">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#0040E9]">
                <span className="size-2 rounded-full bg-[#0040E9] animate-pulse" />
                Cohort 1 Admissions Open · Online-First Pan-African Academy
              </div>
              <div className="text-xs font-mono text-muted-foreground">
                Next Cohort Starts: <span className="font-bold text-[#000F38]">Rolling Weekend Induction</span>
              </div>
            </div>

            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Headline & Direct CTAs */}
              <div className="lg:col-span-6">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[0.96] text-[#000F38] mb-6">
                  LEARN THE SKILLS.
                  <br />
                  <span className="text-[#0040E9]">BUILD THE PROOF.</span>
                </h1>

                <p className="text-lg lg:text-xl text-[#000F38]/80 max-w-xl leading-relaxed mb-8">
                  No passive video lectures. BrandoraX pairs ambitious learners with working industry practitioners
                  to build and ship verified, client-grade projects in Web Engineering, UI/UX, Data, and Cybersecurity.
                </p>

                <div className="flex flex-wrap items-center gap-4 mb-8">
                  <Link
                    to="/auth"
                    className="bg-[#0040E9] text-white px-8 py-4 rounded font-bold text-xs uppercase tracking-wider hover:bg-[#0035C2] transition-colors inline-flex items-center gap-2 shadow-sm"
                  >
                    Apply for Admission
                    <ArrowRight className="size-4" />
                  </Link>
                  <Link
                    to="/academy"
                    className="border border-border bg-white text-[#000F38] px-8 py-4 rounded font-bold text-xs uppercase tracking-wider hover:bg-muted transition-colors inline-flex items-center gap-2"
                  >
                    Explore 6 Tracks
                  </Link>
                </div>

                <div className="text-xs font-mono text-muted-foreground flex flex-wrap items-center gap-y-2 gap-x-4">
                  <span>✓ 100% Project-Based</span>
                  <span>✓ Weekly 1-on-1 Mentor Reviews</span>
                  <span>✓ Flexible Installments</span>
                </div>
              </div>

              {/* Right Interactive Track Explorer Card */}
              <div className="lg:col-span-6">
                <div className="bg-white border border-border rounded-lg shadow-lg overflow-hidden">
                  {/* Track Tabs */}
                  <div className="grid grid-cols-4 border-b border-border bg-[#EEF2F9]/60 text-xs font-mono">
                    {heroTrackPreviews.map((track, idx) => (
                      <button
                        key={track.id}
                        onClick={() => setHeroActiveTrack(idx)}
                        className={`py-3 px-2 text-center font-bold transition-colors border-r last:border-r-0 border-border ${
                          heroActiveTrack === idx
                            ? "bg-white text-[#0040E9] border-b-2 border-b-[#0040E9]"
                            : "text-muted-foreground hover:text-[#000F38]"
                        }`}
                      >
                        {track.name.split(" ")[0]}
                      </button>
                    ))}
                  </div>

                  {/* Active Track Preview */}
                  <div className="p-6 sm:p-8">
                    <div className="flex items-center justify-between text-xs font-mono mb-3">
                      <span className="text-[#0040E9] font-bold uppercase">{activeTrack.tag}</span>
                      <span className="bg-muted text-[#000F38] px-2.5 py-0.5 rounded font-bold">
                        Tuition: {activeTrack.tuition}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-[#000F38] mb-2">{activeTrack.name}</h3>

                    <div className="aspect-[16/9] rounded overflow-hidden mb-5 bg-muted">
                      <img
                        src={activeTrack.img}
                        alt={activeTrack.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="bg-[#EEF2F9]/40 border border-border p-4 rounded mb-5">
                      <div className="text-[11px] font-mono uppercase text-muted-foreground mb-1">
                        Milestone Deliverable You Ship:
                      </div>
                      <div className="text-sm font-bold text-[#000F38] leading-snug">
                        {activeTrack.deliverable}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-border">
                      <div className="flex flex-wrap gap-1.5">
                        {activeTrack.stack.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="text-[11px] font-mono bg-muted text-[#000F38] px-2 py-0.5 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <Link
                        to={activeTrack.syllabusLink}
                        className="text-xs font-bold uppercase tracking-wider text-[#0040E9] inline-flex items-center gap-1 hover:underline"
                      >
                        View Syllabus
                        <ArrowRight className="size-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Proof Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-8 border-t border-border">
              <div>
                <div className="text-3xl font-extrabold text-[#000F38]">6 Tracks</div>
                <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground mt-1">
                  Engineered for Employment
                </div>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-[#000F38]">100%</div>
                <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground mt-1">
                  Verified Proof of Work
                </div>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-[#000F38]">₦80k+</div>
                <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground mt-1">
                  Transparent Tuition
                </div>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-[#000F38]">1-on-1</div>
                <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground mt-1">
                  Practitioner Code Reviews
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4-STEP LEARNING ROADMAP */}
        <section className="py-20 px-6 bg-[#EEF2F9]/50 border-b border-border">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-2xl mb-14">
              <div className="text-xs font-mono text-[#0040E9] uppercase tracking-widest font-bold mb-2">
                Learning Architecture
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#000F38] tracking-tight">
                How you grow from learner to practitioner.
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {learningSteps.map((s) => (
                <div key={s.step} className="bg-white border border-border rounded p-8 flex flex-col justify-between">
                  <div>
                    <div className="text-sm font-mono font-bold text-[#0040E9] mb-6">{s.step}</div>
                    <h3 className="text-lg font-bold text-[#000F38] mb-3">{s.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6 SPECIALIZED LEARNING TRACKS */}
        <section className="py-24 px-6 border-b border-border">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <div className="text-xs font-mono text-[#0040E9] uppercase tracking-widest font-bold mb-2">
                  Academic Disciplines
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#000F38] tracking-tight">
                  Six career-aligned disciplines.
                </h2>
                <p className="text-muted-foreground mt-3 text-base max-w-xl">
                  Curricula engineered backwards from real job descriptions, toolchains, and industry challenges.
                </p>
              </div>
              <Link
                to="/academy"
                className="text-xs font-bold uppercase tracking-wider text-[#0040E9] inline-flex items-center gap-1.5 hover:underline"
              >
                View Full Syllabi & Tuition Table
                <ArrowRight className="size-4" />
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tracks.map((t) => (
                <div
                  key={t.id}
                  className="bg-white border border-border rounded-lg overflow-hidden flex flex-col justify-between hover:border-[#0040E9] transition-colors group shadow-sm"
                >
                  <div>
                    {t.img ? (
                      <div className="aspect-[16/9] overflow-hidden bg-muted">
                        <img
                          src={t.img}
                          alt={t.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ) : (
                      <div className="aspect-[16/9] bg-[#000F38] p-6 flex flex-col justify-end">
                        <span className="text-xs font-mono uppercase text-[#FEC958] font-bold">{t.category}</span>
                        <h4 className="text-xl font-bold text-white mt-1">{t.title}</h4>
                      </div>
                    )}

                    <div className="p-6">
                      <div className="flex items-center justify-between text-xs font-mono text-muted-foreground mb-3">
                        <span className="font-bold text-[#0040E9] uppercase">{t.category}</span>
                        <span>{t.duration}</span>
                      </div>

                      <h3 className="text-xl font-bold text-[#000F38] mb-3">{t.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-6">{t.desc}</p>

                      <div className="border-t border-border pt-4">
                        <div className="text-[11px] font-mono uppercase text-muted-foreground mb-2">Core Tools:</div>
                        <div className="flex flex-wrap gap-1.5">
                          {t.tools.map((tool) => (
                            <span
                              key={tool}
                              className="text-xs font-mono bg-muted text-[#000F38] px-2.5 py-1 rounded"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-0 border-t border-border mt-4 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] font-mono uppercase text-muted-foreground">Tuition</div>
                      <div className="text-sm font-bold text-[#000F38]">{t.tuition}</div>
                    </div>
                    <Link
                      to="/academy/$trackId"
                      params={{ trackId: t.id }}
                      className="text-xs font-bold uppercase tracking-wider text-[#0040E9] inline-flex items-center gap-1 hover:underline"
                    >
                      Syllabus
                      <ArrowUpRight className="size-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROOF OF WORK SHOWCASE */}
        <section className="py-24 px-6 bg-[#000F38] text-white">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl mb-16">
              <div className="text-xs font-mono text-[#FEC958] uppercase tracking-widest font-bold mb-2">
                Proof of Work
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
                What you will actually build.
              </h2>
              <p className="text-white/70 mt-3 text-base">
                No mock quizzes. You build verified, industry-standard artifacts ready for technical interviews and client pitches.
              </p>
            </div>

            <div className="grid lg:grid-cols-12 gap-8 items-start">
              {/* Tab Selector */}
              <div className="lg:col-span-4 space-y-2">
                {portfolioShowcase.map((item, idx) => (
                  <button
                    key={item.title}
                    onClick={() => setSelectedShowcase(idx)}
                    className={`w-full text-left p-5 rounded border transition-colors ${
                      selectedShowcase === idx
                        ? "bg-white/10 border-[#0040E9] text-white"
                        : "bg-transparent border-white/10 text-white/60 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <div className="text-xs font-mono uppercase text-[#FEC958] mb-1">{item.track}</div>
                    <div className="text-base font-bold">{item.title}</div>
                  </button>
                ))}
              </div>

              {/* Showcase Detail */}
              <div className="lg:col-span-8 bg-white/5 border border-white/10 rounded p-8 lg:p-10">
                <div className="text-xs font-mono uppercase text-[#0040E9] bg-white px-3 py-1 rounded inline-block font-bold mb-4">
                  {portfolioShowcase[selectedShowcase].track}
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
                  {portfolioShowcase[selectedShowcase].title}
                </h3>
                <p className="text-white/80 text-base leading-relaxed mb-6">
                  {portfolioShowcase[selectedShowcase].desc}
                </p>

                <div className="grid sm:grid-cols-2 gap-6 pt-6 border-t border-white/10">
                  <div>
                    <div className="text-xs font-mono uppercase text-white/60 mb-1">Toolchain & Stack</div>
                    <div className="text-sm font-semibold text-white">
                      {portfolioShowcase[selectedShowcase].stack}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase text-white/60 mb-1">Final Deliverable</div>
                    <div className="text-sm font-semibold text-[#FEC958]">
                      {portfolioShowcase[selectedShowcase].deliverable}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHY BRANDORAX */}
        <section className="py-24 px-6 border-b border-border">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-2xl mb-16">
              <div className="text-xs font-mono text-[#0040E9] uppercase tracking-widest font-bold mb-2">
                The Institutional Model
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#000F38] tracking-tight">
                Engineered for serious career outcomes.
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {institutionalPillars.map((p) => (
                <div key={p.num} className="p-8 border border-border rounded bg-white">
                  <div className="text-sm font-mono font-bold text-[#0040E9] mb-4">{p.num}</div>
                  <h3 className="text-lg font-bold text-[#000F38] mb-3">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ADMISSION & TUITION OVERVIEW */}
        <section className="py-24 px-6 bg-[#EEF2F9]/50 border-b border-border">
          <div className="max-w-5xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="text-xs font-mono text-[#0040E9] uppercase tracking-widest font-bold mb-2">
                Clear & Transparent Pricing
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#000F38] tracking-tight">
                No hidden costs. Predictable tuition.
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white border border-border rounded-lg p-8 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono uppercase text-[#0040E9] font-bold mb-2">Track Tier 1</div>
                  <h3 className="text-2xl font-bold text-[#000F38] mb-1">3-Month Intensive</h3>
                  <div className="text-3xl font-extrabold text-[#000F38] mt-4 mb-6">
                    ₦80,000 <span className="text-xs font-normal text-muted-foreground">/ one-time tuition</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    Ideal for foundational skill building, weekly mentor critiques, and shipping 2 core portfolio projects.
                  </p>
                  <ul className="space-y-3 text-sm text-muted-foreground border-t border-border pt-6 font-mono text-xs">
                    <li>✓ 2–3 Live sessions per week</li>
                    <li>✓ Code & design reviews from practitioners</li>
                    <li>✓ 2 Core verified portfolio projects</li>
                    <li>✓ Telegram alumni community access</li>
                  </ul>
                </div>
                <div className="pt-8">
                  <Link
                    to="/auth"
                    className="w-full text-center block bg-[#0040E9] text-white py-3 rounded font-semibold text-xs uppercase tracking-wider hover:bg-[#0035C2] transition-colors"
                  >
                    Apply For 3-Month Track
                  </Link>
                </div>
              </div>

              <div className="bg-white border-2 border-[#0040E9] rounded-lg p-8 flex flex-col justify-between relative shadow-md">
                <div className="absolute top-4 right-4 bg-[#0040E9] text-white text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded">
                  Most Popular
                </div>
                <div>
                  <div className="text-xs font-mono uppercase text-[#0040E9] font-bold mb-2">Track Tier 2</div>
                  <h3 className="text-2xl font-bold text-[#000F38] mb-1">6-Month Professional</h3>
                  <div className="text-3xl font-extrabold text-[#000F38] mt-4 mb-6">
                    ₦150,000 <span className="text-xs font-normal text-muted-foreground">/ one-time tuition</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    Deep technical immersion, team collaboration on live briefs, and evaluation for employer placement.
                  </p>
                  <ul className="space-y-3 text-sm text-muted-foreground border-t border-border pt-6 font-mono text-xs">
                    <li>✓ Everything in 3-Month Intensive</li>
                    <li>✓ 4 Advanced case studies & full-stack apps</li>
                    <li>✓ Team collaboration on real client briefs</li>
                    <li>✓ Evaluation for BrandoraX Talent Pipeline</li>
                  </ul>
                </div>
                <div className="pt-8">
                  <Link
                    to="/auth"
                    className="w-full text-center block bg-[#000F38] text-white py-3 rounded font-semibold text-xs uppercase tracking-wider hover:bg-black transition-colors"
                  >
                    Apply For 6-Month Track
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA BANNER */}
        <section className="py-24 px-6 bg-[#0040E9] text-white text-center">
          <div className="max-w-3xl mx-auto">
            <div className="text-xs font-mono uppercase tracking-widest text-white/80 font-bold mb-3">
              Start Your Journey
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-6">
              Build the skills that speak for themselves.
            </h2>
            <p className="text-white/90 text-base sm:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Applications are reviewed continuously. Select your discipline, complete orientation, and start building your proof of work.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/auth"
                className="bg-white text-[#000F38] hover:bg-[#F5F8FF] px-8 py-4 rounded font-bold text-xs uppercase tracking-wider transition-colors shadow-lg"
              >
                Apply for Admission
              </Link>
              <Link
                to="/academy"
                className="border border-white/40 hover:bg-white/10 px-8 py-4 rounded font-bold text-xs uppercase tracking-wider transition-colors text-white"
              >
                Explore Curricula
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
