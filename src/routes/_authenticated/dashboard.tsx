import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useEffect, useId, useState } from "react";
import { toast } from "sonner";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { useAuth, type AppRole } from "@/lib/auth";
import { supabase } from "@/integrations/supabase/client";
import {
  CheckCircle2,
  Circle,
  Video,
  Send,
  BookOpen,
  FolderGit2,
  Calendar,
  Sparkles,
  ExternalLink,
  User,
  Shield,
  Layers,
} from "lucide-react";

export const Route = createFileRoute("/_authenticated/dashboard")({
  head: () => ({
    meta: [
      { title: "Student Dashboard — BrandoraX" },
      { name: "description", content: "Your BrandoraX learning hub, cohort progress, and classroom access." },
    ],
  }),
  component: DashboardPage,
});

export function DashboardPage() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [role, setRole] = useState<AppRole | null>(null);
  const [track, setTrack] = useState("Web Development");
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);
  const [joinedTelegram, setJoinedTelegram] = useState(false);

  useEffect(() => {
    if (!user) return;
    let cancelled = false;
    (async () => {
      const [{ data: profile }, { data: roles }] = await Promise.all([
        supabase.from("profiles").select("full_name").eq("id", user.id).maybeSingle(),
        supabase.from("user_roles").select("role").eq("user_id", user.id).limit(1).maybeSingle(),
      ]);
      if (cancelled) return;
      setFullName(profile?.full_name ?? "");
      setRole((roles?.role as AppRole) ?? null);
      setLoading(false);
    })();
    return () => {
      cancelled = true;
    };
  }, [user]);

  const onSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    setSaving(true);
    const { error } = await supabase.from("profiles").update({ full_name: fullName }).eq("id", user.id);
    setSaving(false);
    if (error) toast.error(error.message);
    else toast.success("Profile updated successfully");
  };

  const onSignOut = async () => {
    await signOut();
    navigate({ to: "/" });
  };

  const steps = [
    { title: "Account Created", desc: "User credentials registered", done: true },
    { title: "Email Verified", desc: "Security authentication confirmed", done: true },
    { title: "Track Enrollment Active", desc: `${track} (Cohort 1)`, done: true },
    {
      title: "Join Student Telegram Community",
      desc: "Connect for announcements and peer support",
      done: joinedTelegram,
      action: () => setJoinedTelegram(true),
    },
    { title: "Attend Live Induction", desc: "Scheduled Saturday 11:00 AM WAT", done: false },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="pb-24">
        {/* HEADER SECTION */}
        <section className="px-6 pt-16 pb-12 border-b border-border bg-secondary/20">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <div className="inline-flex items-center gap-2 font-mono text-primary text-xs uppercase tracking-[0.25em] mb-3">
                <Sparkles className="size-3.5" />
                Student Portal • Cohort 1
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tighter">
                {loading ? "Welcome…" : `Welcome, ${fullName ? fullName.split(" ")[0] : "Learner"}.`}
              </h1>
              <p className="mt-2 text-sm text-muted-foreground">
                Track your onboarding milestones, access upcoming live sessions, and collaborate with your cohort.
              </p>
            </div>
            <button
              onClick={onSignOut}
              className="border border-border bg-card hover:bg-destructive hover:text-destructive-foreground hover:border-destructive px-5 py-2.5 rounded-md text-xs font-bold uppercase tracking-wider transition-colors"
            >
              Sign Out
            </button>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-6 mt-12 grid lg:grid-cols-12 gap-10">
          {/* MAIN COLUMN (8 cols) */}
          <div className="lg:col-span-8 space-y-10">
            {/* ENROLLMENT PROGRESS CHECKLIST */}
            <div className="bg-card border border-border rounded-xl p-6 lg:p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-bold tracking-tight">Onboarding Progress</h2>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Complete these steps to fully activate your learning workspace.
                  </p>
                </div>
                <span className="font-mono text-xs font-bold px-3 py-1 bg-primary/10 text-primary rounded-full">
                  {steps.filter((s) => s.done).length} / {steps.length} Complete
                </span>
              </div>

              <div className="space-y-4">
                {steps.map((s, idx) => (
                  <div
                    key={s.title}
                    className={`flex items-start justify-between p-4 rounded-lg border transition-colors ${
                      s.done ? "bg-primary/5 border-primary/20" : "bg-background border-border"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      {s.done ? (
                        <CheckCircle2 className="size-5 text-primary shrink-0 mt-0.5" />
                      ) : (
                        <Circle className="size-5 text-muted-foreground shrink-0 mt-0.5" />
                      )}
                      <div>
                        <div className={`text-sm font-bold ${s.done ? "text-foreground" : "text-foreground/80"}`}>
                          {s.title}
                        </div>
                        <div className="text-xs text-muted-foreground mt-0.5">{s.desc}</div>
                      </div>
                    </div>
                    {s.action && !s.done && (
                      <button
                        onClick={s.action}
                        className="text-xs font-bold uppercase tracking-wider text-primary hover:underline shrink-0 ml-4"
                      >
                        Mark as Done
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* LIVE CLASSROOM & COMMUNITY GRID */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* GOOGLE MEET CLASSROOM CARD */}
              <div className="bg-card border border-border rounded-xl p-6 flex flex-col justify-between">
                <div>
                  <div className="size-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                    <Video className="size-5" />
                  </div>
                  <div className="text-xs font-mono uppercase tracking-wider text-primary mb-1">
                    Live Session Schedule
                  </div>
                  <h3 className="text-lg font-bold mb-2">Classroom Induction</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-6">
                    Interactive orientation on curriculum expectations, submitting proof-of-work briefs, and mentor
                    reviews.
                  </p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground bg-secondary/50 p-2.5 rounded-md mb-6">
                    <Calendar className="size-4 text-primary" />
                    <span>Saturdays • 11:00 AM WAT</span>
                  </div>
                </div>

                <a
                  href="https://meet.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center bg-primary text-primary-foreground py-3 rounded-md text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2"
                >
                  Join Google Meet
                  <ExternalLink className="size-3.5" />
                </a>
              </div>

              {/* TELEGRAM COMMUNITY CARD */}
              <div className="bg-card border border-border rounded-xl p-6 flex flex-col justify-between">
                <div>
                  <div className="size-10 rounded-lg bg-sky-500/10 text-sky-500 flex items-center justify-center mb-4">
                    <Send className="size-5" />
                  </div>
                  <div className="text-xs font-mono uppercase tracking-wider text-sky-500 mb-1">
                    Student Community
                  </div>
                  <h3 className="text-lg font-bold mb-2">Telegram Cohort Channel</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-6">
                    Daily asynchronous standups, direct mentor Q&A, peer study groups, and official cohort
                    announcements.
                  </p>
                  <div className="text-xs text-muted-foreground bg-secondary/50 p-2.5 rounded-md mb-6">
                    ⚡ 50+ peers actively collaborating
                  </div>
                </div>

                <a
                  href="https://t.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setJoinedTelegram(true)}
                  className="w-full text-center bg-[#229ED9] text-white py-3 rounded-md text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2"
                >
                  Open Telegram Group
                  <ExternalLink className="size-3.5" />
                </a>
              </div>
            </div>

            {/* LMS MODULE SCAFFOLD (PHASE 2 PREVIEW) */}
            <div className="bg-card border border-border rounded-xl p-6 lg:p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-bold tracking-tight">Curriculum Modules & Briefs</h2>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Your track modules will unlock as the live cohort begins.
                  </p>
                </div>
                <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                  Phase 1 Beta
                </span>
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-lg bg-background border border-border opacity-80">
                  <BookOpen className="size-5 text-primary mb-2" />
                  <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Module 01</div>
                  <div className="text-sm font-bold mt-1">Foundations & Setup</div>
                  <div className="text-[11px] text-muted-foreground mt-2">Week 1 – 2 • Live</div>
                </div>
                <div className="p-4 rounded-lg bg-background border border-border opacity-60">
                  <Layers className="size-5 text-muted-foreground mb-2" />
                  <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Module 02</div>
                  <div className="text-sm font-bold mt-1">Core Project Briefs</div>
                  <div className="text-[11px] text-muted-foreground mt-2">Week 3 – 8 • Locked</div>
                </div>
                <div className="p-4 rounded-lg bg-background border border-border opacity-60">
                  <FolderGit2 className="size-5 text-muted-foreground mb-2" />
                  <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Module 03</div>
                  <div className="text-sm font-bold mt-1">Capstone & Portfolio</div>
                  <div className="text-[11px] text-muted-foreground mt-2">Week 9 – 12 • Locked</div>
                </div>
              </div>
            </div>
          </div>

          {/* SIDEBAR COLUMN (4 cols) */}
          <div className="lg:col-span-4 space-y-8">
            {/* STUDENT PROFILE CARD */}
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="size-14 rounded-full bg-primary/10 text-primary flex items-center justify-center font-extrabold text-xl">
                  {fullName ? fullName.charAt(0).toUpperCase() : <User className="size-6" />}
                </div>
                <div>
                  <div className="font-bold text-base">{fullName || "Student"}</div>
                  <div className="text-xs text-muted-foreground break-all">{user?.email}</div>
                  <div className="inline-block mt-1 px-2 py-0.5 bg-primary/10 text-primary font-mono text-[10px] font-bold uppercase rounded">
                    {role || "Student"}
                  </div>
                </div>
              </div>

              <form onSubmit={onSave} className="space-y-4 border-t border-border pt-6">
                <FullNameField value={fullName} onChange={setFullName} />
                <button
                  type="submit"
                  disabled={saving}
                  className="w-full bg-primary text-primary-foreground py-2.5 rounded-md text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  {saving ? "Saving…" : "Update Profile Name"}
                </button>
              </form>
            </div>

            {/* TRACK DETAILS */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-sm font-bold uppercase tracking-wider mb-4 text-muted-foreground">
                Your Enrollment
              </h3>
              <div className="space-y-3 text-xs">
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">Specialization:</span>
                  <span className="font-bold">{track}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">Cohort:</span>
                  <span className="font-bold">Cohort 1 (Active)</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">Format:</span>
                  <span className="font-bold">Online + Weekly Reviews</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-muted-foreground">Status:</span>
                  <span className="text-primary font-bold">Good Standing</span>
                </div>
              </div>
              <Link
                to="/academy"
                className="mt-6 block text-center text-xs text-primary font-bold uppercase tracking-wider hover:underline"
              >
                Browse Other Disciplines →
              </Link>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

function FullNameField({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const id = useId();
  return (
    <div>
      <label htmlFor={id} className="block text-xs uppercase tracking-wider font-bold text-muted-foreground mb-1.5">
        Full Name
      </label>
      <input
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Enter your name"
        className="w-full bg-background border border-border rounded-md px-3.5 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
      />
    </div>
  );
}
