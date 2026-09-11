import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import employerImg from "@/assets/employer.jpg";

export const Route = createFileRoute("/talent-pipeline")({
  head: () => ({
    meta: [
      { title: "Talent Pipeline — BrandoraX" },
      { name: "description", content: "The BrandoraX 7-stage pipeline moves learners from admission through evaluation and the elite talent pool into real employer placements." },
      { property: "og:title", content: "Talent Pipeline — BrandoraX" },
      { property: "og:description", content: "From admission to deployment: how BrandoraX turns training into employment for learners and pre-vetted talent for employers." },
    ],
  }),
  component: TalentPipeline,
});

const stages = [
  { n: "01", title: "Admission", desc: "Register, choose a specialization, agree to the program rules and take the entry assessment." },
  { n: "02", title: "Structured Training", desc: "3, 6 or 12-month tracks with mini projects, team builds and a capstone." },
  { n: "03", title: "Evaluation", desc: "Assessed on technical skill, project quality, professional discipline, problem solving and portfolio strength." },
  { n: "04", title: "Tier Ranking", desc: "Developing talent, industry-ready talent, or elite talent — the top 10–20%." },
  { n: "05", title: "Elite Talent Pool", desc: "Elite learners join a curated pool visible to partner companies." },
  { n: "06", title: "Employer Matching", desc: "Partner companies are matched to profiles that fit their role, stack and timeline." },
  { n: "07", title: "Job Deployment", desc: "Placement into internships, apprenticeships, freelance projects or full roles — tracked after the start date." },
];

const tiers = [
  { tier: "Tier 1", name: "Developing Talent", perks: ["Certification", "Career guidance", "Portfolio review support"], tone: "border-border" },
  { tier: "Tier 2", name: "Industry-Ready Talent", perks: ["Internship opportunities", "WorkLab live projects", "Employer visibility"], tone: "border-primary/40" },
  { tier: "Tier 3", name: "Elite Talent (Top 10–20%)", perks: ["Direct employer matching", "Partner company recruitment", "Premium job opportunities"], tone: "border-accent" },
];

const employerBenefits = [
  { title: "Pre-vetted candidates", desc: "Every profile has been evaluated on real project work, not just a certificate." },
  { title: "Internship & apprenticeship matching", desc: "Bring on emerging talent with structured supervision built in." },
  { title: "Project teams on demand", desc: "Allocate a freelance squad through WorkLab for defined deliverables." },
  { title: "Custom corporate training", desc: "Upskill your existing team on the same curriculum our learners run." },
];

function TalentPipeline() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <section className="pt-20 pb-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="font-mono text-primary text-xs uppercase tracking-[0.3em] mb-6">Pillar II</div>
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tighter leading-[0.95] max-w-4xl mb-8">
              TRAINING IS THE START. PLACEMENT IS THE POINT.
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mb-10">
              A seven-stage pipeline that carries a learner from their first day of class to a signed offer — and gives employers a shortlist that has already been tested.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/auth" className="bg-primary text-primary-foreground rounded-md px-8 py-4 text-sm font-bold uppercase tracking-widest hover:opacity-90 transition-opacity">
                Apply to a program
              </Link>
              <Link to="/contact" className="border border-foreground/20 rounded-md px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors">
                Partner with us
              </Link>
            </div>
          </div>
        </section>

        <section className="px-6 pb-24">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-extrabold tracking-tighter mb-12">The seven stages</h2>
            <ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
              {stages.map((s) => (
                <li key={s.n} className="bg-background p-8">
                  <div className="font-mono text-xs text-primary mb-4">{s.n}</div>
                  <h3 className="text-lg font-bold mb-3">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="px-6 py-24 bg-secondary/50">
          <div className="max-w-7xl mx-auto">
            <div className="font-mono text-primary text-xs uppercase tracking-[0.3em] mb-4">Evaluation</div>
            <h2 className="text-4xl font-extrabold tracking-tighter mb-12">Three tiers, earned not given.</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {tiers.map((t) => (
                <div key={t.tier} className={`bg-background border-2 ${t.tone} rounded-lg p-8`}>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-3">{t.tier}</div>
                  <h3 className="text-xl font-bold mb-6">{t.name}</h3>
                  <ul className="space-y-3">
                    {t.perks.map((p) => (
                      <li key={p} className="text-sm text-muted-foreground flex gap-3">
                        <span className="text-primary">—</span>{p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-24">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="font-mono text-accent text-xs uppercase tracking-[0.3em] mb-4">For Employers</div>
              <h2 className="text-4xl font-extrabold tracking-tighter mb-6">Hire from the pool, not the pile.</h2>
              <div className="space-y-6 mb-10">
                {employerBenefits.map((b) => (
                  <div key={b.title}>
                    <h3 className="font-bold mb-1">{b.title}</h3>
                    <p className="text-sm text-muted-foreground">{b.desc}</p>
                  </div>
                ))}
              </div>
              <Link to="/contact" className="inline-block bg-foreground text-background rounded-md px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-primary transition-colors">
                Request talent
              </Link>
            </div>
            <img src={employerImg} alt="An employer team reviewing candidate work" loading="lazy" width={1280} height={800} className="w-full aspect-[4/3] object-cover rounded-lg" />
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
