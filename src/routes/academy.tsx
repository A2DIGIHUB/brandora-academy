import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import uiuxImg from "@/assets/program-uiux.jpg";
import webImg from "@/assets/program-web.jpg";
import dataImg from "@/assets/program-data.jpg";

export const Route = createFileRoute("/academy")({
  head: () => ({
    meta: [
      { title: "Academy — BrandoraX Programs & Tracks" },
      { name: "description", content: "Six specializations across 3, 6 and 12-month tracks: UI/UX, graphic design, web development, software development, data analysis and cybersecurity." },
      { property: "og:title", content: "Academy — BrandoraX Programs & Tracks" },
      { property: "og:description", content: "Project-based training with portfolio development, career readiness and employer matching support." },
    ],
  }),
  component: Academy,
});

const specializations = [
  { title: "UI/UX Design", img: uiuxImg, desc: "Research, wireframing, prototyping and design systems for shipped products." },
  { title: "Web Development", img: webImg, desc: "Front-end and full-stack engineering with modern frameworks and deployment." },
  { title: "Data Analysis", img: dataImg, desc: "SQL, Python, analytics and dashboards that drive real business decisions." },
  { title: "Graphic Design", img: null, desc: "Brand identity, layout and visual systems for digital and print." },
  { title: "Software Development", img: null, desc: "Application architecture, APIs, testing and version control in team settings." },
  { title: "Cybersecurity", img: null, desc: "Security fundamentals, threat analysis, tooling and defensive practice." },
];

const tracks = [
  { name: "3-Month Intensive", tag: "Foundational", points: ["Foundational training", "Core skill development", "Mini projects", "Certification on completion"] },
  { name: "6-Month Professional", tag: "Intermediate", points: ["Intermediate specialization", "Team project development", "Portfolio development", "Internship eligibility"] },
  { name: "12-Month Advanced", tag: "Advanced", points: ["Advanced specialization", "Industry-level portfolio", "Real-world problem solving", "Elite pool eligibility"] },
];

const included = [
  "Project-based learning",
  "Portfolio development",
  "Career readiness training",
  "Employer matching support",
];

const admission = [
  "Complete your registration",
  "Choose a specialization",
  "Take a basic assessment test",
  "Commit to the program rules",
];

function Academy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <section className="pt-20 pb-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="font-mono text-primary text-xs uppercase tracking-[0.3em] mb-6">Pillar I</div>
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tighter leading-[0.95] max-w-4xl mb-8">
              LEARN THE SKILL. BUILD THE PROOF.
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mb-10">
              An outcome-based academy, not a certificate mill. Every track is built backwards from what employers actually hire for.
            </p>
            <Link to="/auth" className="inline-block bg-primary text-primary-foreground rounded-md px-8 py-4 text-sm font-bold uppercase tracking-widest hover:opacity-90 transition-opacity">
              Apply to a program
            </Link>
          </div>
        </section>

        <section className="px-6 pb-24">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-extrabold tracking-tighter mb-10">Specializations</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {specializations.map((s) => (
                <div key={s.title} className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary transition-colors">
                  {s.img ? (
                    <img src={s.img} alt={s.title} loading="lazy" width={1024} height={640} className="w-full aspect-[16/10] object-cover" />
                  ) : (
                    <div className="w-full aspect-[16/10] bg-primary/10 flex items-center justify-center">
                      <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">BrandoraX</span>
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-24 bg-secondary/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-extrabold tracking-tighter mb-10">Choose your track</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {tracks.map((t) => (
                <div key={t.name} className="bg-background border border-border rounded-lg p-8">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-accent mb-3">{t.tag}</div>
                  <h3 className="text-xl font-bold mb-6">{t.name}</h3>
                  <ul className="space-y-3">
                    {t.points.map((p) => (
                      <li key={p} className="text-sm text-muted-foreground flex gap-3"><span className="text-primary">—</span>{p}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-24">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tighter mb-8">Every program includes</h2>
              <ul className="space-y-4">
                {included.map((i) => (
                  <li key={i} className="flex items-center gap-4 text-base font-medium">
                    <span className="size-2 rounded-full bg-primary" />{i}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold tracking-tighter mb-8">How admission works</h2>
              <ol className="space-y-4">
                {admission.map((a, i) => (
                  <li key={a} className="flex gap-4 text-base">
                    <span className="font-mono text-primary text-sm pt-1">0{i + 1}</span>
                    <span className="text-muted-foreground">{a}</span>
                  </li>
                ))}
              </ol>
              <Link to="/auth" className="mt-10 inline-block bg-foreground text-background rounded-md px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-primary transition-colors">
                Start your application
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
