import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About BrandoraX — Vision, Mission & Structure" },
      { name: "description", content: "BrandoraX is an online-first digital workforce development company built on three pillars: Academy, Talent Pipeline and Community Empowerment." },
      { property: "og:title", content: "About BrandoraX — Vision, Mission & Structure" },
      { property: "og:description", content: "Outcome-based, not certificate-based. Meet the model, the values and the team structure behind BrandoraX." },
    ],
  }),
  component: About,
});

const values = [
  { title: "Outcomes over certificates", desc: "We measure ourselves on placements, not enrolments." },
  { title: "Proof of work", desc: "Every learner leaves with a portfolio built on real briefs." },
  { title: "Access", desc: "Online-first delivery so location is never the barrier." },
  { title: "Discipline", desc: "Deadlines, communication and collaboration are graded like code." },
  { title: "Partnership", desc: "Employers help shape the curriculum they hire from." },
  { title: "Longevity", desc: "We track alumni after placement, not just at graduation." },
];

const units = [
  { role: "Founder / CEO", desc: "Strategic direction and investment relations." },
  { role: "Program Director", desc: "Curriculum design, instructor supervision, learner performance." },
  { role: "Partnership Lead", desc: "Company outreach, placement agreements, employer relationships." },
  { role: "Product Lead", desc: "Platform, job marketplace and system optimisation." },
  { role: "Marketing & Growth Lead", desc: "Campaign strategy, lead generation, brand positioning." },
  { role: "Operations Manager", desc: "Onboarding, administration, reporting and compliance." },
];

function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <section className="pt-20 pb-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="font-mono text-primary text-xs uppercase tracking-[0.3em] mb-6">About</div>
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tighter leading-[0.95] max-w-4xl mb-8">
              AN OUTCOME-BASED INSTITUTION.
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              BrandoraX is an online-first digital workforce development company. We connect market-aligned training to practical projects, employer partnerships, placements and community initiatives.
            </p>
          </div>
        </section>

        <section className="px-6 pb-24">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-px bg-border">
            <div className="bg-background p-12">
              <div className="font-mono text-xs text-primary mb-6">Vision</div>
              <p className="text-2xl font-bold tracking-tight leading-snug">
                A generation of digitally skilled professionals who can compete and deliver anywhere in the world.
              </p>
            </div>
            <div className="bg-background p-12">
              <div className="font-mono text-xs text-accent mb-6">Mission</div>
              <p className="text-2xl font-bold tracking-tight leading-snug">
                To train, evaluate and place talent through structured programs, live projects and real employer partnerships.
              </p>
            </div>
          </div>
        </section>

        <section className="px-6 py-24 bg-secondary/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-extrabold tracking-tighter mb-12">Core values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((v) => (
                <div key={v.title} className="bg-background border border-border rounded-lg p-8">
                  <h3 className="text-lg font-bold mb-3">{v.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-24">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-extrabold tracking-tighter mb-4">The three-pillar model</h2>
            <p className="text-muted-foreground max-w-2xl mb-12">
              Each pillar feeds the next: the community brings people in, the academy trains them, the pipeline places them.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-20">
              {[
                { t: "Academy", d: "Six specializations across 3, 6 and 12-month tracks.", to: "/academy" as const },
                { t: "Talent Pipeline", d: "Seven stages from admission to job deployment.", to: "/talent-pipeline" as const },
                { t: "Community", d: "Free webinars, bootcamps and NGO programs.", to: "/community" as const },
              ].map((p) => (
                <Link key={p.t} to={p.to} className="group border border-border rounded-lg p-8 hover:border-primary transition-colors">
                  <h3 className="text-2xl font-bold mb-3">{p.t}</h3>
                  <p className="text-sm text-muted-foreground mb-6">{p.d}</p>
                  <span className="text-xs font-bold uppercase tracking-widest group-hover:text-primary transition-colors">Explore →</span>
                </Link>
              ))}
            </div>

            <h2 className="text-4xl font-extrabold tracking-tighter mb-12">Team structure</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
              {units.map((u) => (
                <div key={u.role} className="bg-background p-8">
                  <h3 className="font-bold mb-2">{u.role}</h3>
                  <p className="text-sm text-muted-foreground">{u.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
