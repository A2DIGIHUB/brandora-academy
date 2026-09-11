import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/talent-pipeline")({
  head: () => ({
    meta: [
      { title: "Talent Pipeline & Employer Network — BrandoraX" },
      {
        name: "description",
        content:
          "The 7-stage BrandoraX talent engine: how we train, evaluate, benchmark, and deploy Africa's top digital graduates into forward-thinking teams.",
      },
      { property: "og:title", content: "Talent Pipeline & Employer Network — BrandoraX" },
      {
        property: "og:description",
        content:
          "From admission to live job deployment: pre-vetted digital talent with verified proof of work.",
      },
    ],
  }),
  component: TalentPipelinePage,
});

const pipelineStages = [
  {
    n: "01",
    title: "Aptitude Admission",
    subtitle: "Baseline Screening",
    desc: "Rigorous entry assessment evaluating analytical aptitude, commitment, and dedication to intensive project schedules.",
  },
  {
    n: "02",
    title: "Project-Based Training",
    subtitle: "3, 6 or 12 Months",
    desc: "Execution of industry-grade briefs with weekly practitioner code/design reviews and sprint deadlines.",
  },
  {
    n: "03",
    title: "Milestone Evaluation",
    subtitle: "Multi-Factor Rubric",
    desc: "Learners are graded across 4 pillars: technical execution, deadline discipline, communication, and problem-solving.",
  },
  {
    n: "04",
    title: "Benchmark Selection",
    subtitle: "Elite Placement Tier",
    desc: "Students meeting strict performance benchmarks earn verified proof-of-work badges and entry to our placement tier.",
  },
  {
    n: "05",
    title: "Portfolio Assembly",
    subtitle: "Audited Artifacts",
    desc: "Verified profiles compiled with public GitHub repositories, deployed apps, Figma design systems, and mentor notes.",
  },
  {
    n: "06",
    title: "Employer Matching",
    subtitle: "Stack Alignment",
    desc: "Direct matching to startup, SME, and enterprise partner technical requirements with zero recruiting friction.",
  },
  {
    n: "07",
    title: "Deployment & Retention",
    subtitle: "Alumni Trajectory",
    desc: "Placement into internships, contracts, or full-time roles with 90-day follow-up support to ensure retention.",
  },
];

const evaluationRubric = [
  {
    num: "01",
    weight: "40%",
    title: "Technical Execution",
    desc: "Code architecture, design systems fidelity, API schemas, database integrity, and production-ready performance.",
  },
  {
    num: "02",
    weight: "25%",
    title: "Deadline & Process Discipline",
    desc: "Timely delivery of sprint milestones, active GitHub pull requests, structured Figma components, and branch hygiene.",
  },
  {
    num: "03",
    weight: "20%",
    title: "Professional Communication",
    desc: "Clarity in documentation, constructive responses to code reviews, standup participation, and client presentation skills.",
  },
  {
    num: "04",
    weight: "15%",
    title: "Autonomous Problem Solving",
    desc: "Debugging persistence, research capability, documentation literacy, and independent architectural decision-making.",
  },
];

function TalentPipelinePage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ company: "", name: "", email: "", roles: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="pb-24">
        {/* HERO SECTION */}
        <section className="relative px-6 pt-20 pb-20 border-b border-border bg-[#EEF2F9]/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-xs font-mono text-[#0040E9] uppercase tracking-widest font-bold mb-3">
              Pillar II · Workforce Evaluation & Deployment
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[0.98] text-[#000F38] max-w-4xl mb-6">
              The 7-Stage Talent Quality Engine.
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-10">
              We replace cold resume filtering with verified proof of work. Our pipeline takes learners from foundational
              admission through rigorous practitioner evaluation to live workplace deployment.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#hire-form"
                className="bg-[#0040E9] text-white px-8 py-4 rounded text-xs font-bold uppercase tracking-wider hover:bg-[#0035C2] transition-colors inline-flex items-center gap-2"
              >
                Hire BrandoraX Talent
                <ArrowRight className="size-4" />
              </a>
              <Link
                to="/academy"
                className="border border-border bg-white text-[#000F38] px-8 py-4 rounded text-xs font-bold uppercase tracking-wider hover:bg-muted transition-colors"
              >
                Explore Training Tracks
              </Link>
            </div>
          </div>
        </section>

        {/* 7-STAGE PIPELINE GRID */}
        <section className="py-24 px-6 border-b border-border">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-2xl mb-16">
              <div className="text-xs font-mono text-[#0040E9] uppercase tracking-widest font-bold mb-2">
                Pipeline Architecture
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#000F38] tracking-tight">
                From enrollment to deployment.
              </h2>
              <p className="text-muted-foreground mt-3 text-base">
                Each stage filters and refines skills, ensuring employer partners interview only job-ready builders.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {pipelineStages.map((stage, idx) => (
                <div
                  key={stage.n}
                  className={`bg-white border rounded p-6 flex flex-col justify-between ${
                    idx === 3 ? "border-[#0040E9] bg-[#0040E9]/5" : "border-border"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs font-bold text-[#0040E9]">STAGE {stage.n}</span>
                      {idx === 3 && (
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#0040E9] font-mono bg-[#0040E9]/10 px-2 py-0.5 rounded">
                          Benchmark
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-bold text-[#000F38] mb-1">{stage.title}</h3>
                    <div className="text-xs font-mono text-muted-foreground mb-3">{stage.subtitle}</div>
                    <p className="text-xs text-muted-foreground leading-relaxed">{stage.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EVALUATION RUBRIC */}
        <section className="py-24 px-6 bg-[#EEF2F9]/50 border-b border-border">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="text-xs font-mono text-[#0040E9] uppercase tracking-widest font-bold mb-2">
                Evaluation Standards
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#000F38] tracking-tight">
                How we benchmark talent.
              </h2>
              <p className="text-muted-foreground mt-3 text-sm sm:text-base">
                Placement eligibility is earned through concrete performance milestones, not attendance alone.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {evaluationRubric.map((item) => (
                <div key={item.title} className="bg-white border border-border p-6 rounded">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-mono font-bold text-[#0040E9]">{item.num}</span>
                    <span className="text-xs font-mono font-bold bg-muted px-2.5 py-1 rounded text-[#000F38]">
                      {item.weight}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-[#000F38] mb-2">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EMPLOYER HIRING FORM */}
        <section id="hire-form" className="py-24 px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-6">
              <div className="text-xs font-mono text-[#0040E9] uppercase tracking-widest font-bold mb-2">
                Employer Partnership
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#000F38] tracking-tight mb-6">
                Hire skilled, pre-vetted tech talent.
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed mb-8">
                Whether you need contract designers, frontend engineers, data analysts, or full-time junior hires,
                our partnership lead connects you directly to vetted graduates with zero recruiter friction.
              </p>

              <div className="space-y-4 font-mono text-xs text-muted-foreground">
                <div className="p-4 bg-white border border-border rounded">
                  <div className="font-bold text-[#000F38] text-sm mb-1">Full Proof-of-Work Access</div>
                  <div>Inspect live URLs, design tokens, and Git commits before the first interview.</div>
                </div>
                <div className="p-4 bg-white border border-border rounded">
                  <div className="font-bold text-[#000F38] text-sm mb-1">Custom Brief Trials</div>
                  <div>Test candidates on a mini-project or trial sprint before permanent hire.</div>
                </div>
                <div className="p-4 bg-white border border-border rounded">
                  <div className="font-bold text-[#000F38] text-sm mb-1">Zero Placement Fees in Beta</div>
                  <div>Early employer partners receive prioritized talent matching at no upfront cost.</div>
                </div>
              </div>
            </div>

            {/* FORM CARD */}
            <div className="lg:col-span-6 bg-white border border-border p-8 lg:p-10 rounded shadow-sm">
              {submitted ? (
                <div className="text-center py-10">
                  <div className="text-2xl font-bold text-[#000F38] mb-2">Inquiry Received</div>
                  <p className="text-sm text-muted-foreground max-w-sm mx-auto mb-6">
                    Our Partnership Lead will reach out within 24 hours with candidate previews for your team.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-[#0040E9] font-bold uppercase tracking-wider hover:underline"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-xl font-bold text-[#000F38] mb-1">Request Talent or Partnership</h3>
                  <p className="text-xs text-muted-foreground mb-6">
                    Tell us what roles or project squads your company needs.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase font-bold text-muted-foreground mb-1">
                        Company Name
                      </label>
                      <input
                        type="text"
                        required
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        placeholder="Acme Tech"
                        className="w-full bg-background border border-border rounded px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#0040E9]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase font-bold text-muted-foreground mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Jane Doe"
                        className="w-full bg-background border border-border rounded px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#0040E9]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-bold text-muted-foreground mb-1">
                      Work Email
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="hiring@company.com"
                      className="w-full bg-background border border-border rounded px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#0040E9]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-bold text-muted-foreground mb-1">
                      Target Disciplines / Role Requirements
                    </label>
                    <input
                      type="text"
                      required
                      value={form.roles}
                      onChange={(e) => setForm({ ...form, roles: e.target.value })}
                      placeholder="e.g. React Developers, UI/UX Designers"
                      className="w-full bg-background border border-border rounded px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#0040E9]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-bold text-muted-foreground mb-1">
                      Additional Details (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Project timeline, remote requirements, or specific stack preferences..."
                      className="w-full bg-background border border-border rounded px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#0040E9] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#0040E9] text-white py-3.5 rounded text-xs font-bold uppercase tracking-wider hover:bg-[#0035C2] transition-colors inline-flex items-center justify-center gap-2 mt-2"
                  >
                    Submit Talent Inquiry
                    <ArrowRight className="size-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
