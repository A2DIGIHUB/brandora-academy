import { Link } from "@tanstack/react-router";
import { useAuth } from "@/lib/auth";
import { BrandLogo } from "@/components/BrandLogo";

const navLinks = [
  { to: "/academy", label: "Academy" },
  { to: "/talent-pipeline", label: "Talent Pipeline" },
  { to: "/community", label: "Community" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const { session } = useAuth();
  return (
    <nav className="sticky top-0 z-50 bg-background/85 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <Link to="/" className="flex items-center" aria-label="BrandoraX home">
            <BrandLogo className="h-7 w-auto" />
          </Link>
          <div className="hidden lg:flex gap-8 text-[13px] font-medium uppercase tracking-widest text-muted-foreground">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="hover:text-primary transition-colors"
                activeProps={{ className: "text-primary" }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-6">
          {session ? (
            <Link
              to="/dashboard"
              className="bg-primary text-primary-foreground px-6 py-3 rounded-md text-[13px] font-semibold uppercase tracking-widest hover:opacity-90 transition-opacity"
            >
              Dashboard
            </Link>
          ) : (
            <>
              <Link
                to="/auth"
                className="hidden sm:inline text-[13px] font-medium uppercase tracking-widest hover:text-primary transition-colors"
              >
                Sign in
              </Link>
              <Link
                to="/auth"
                className="bg-primary text-primary-foreground px-6 py-3 rounded-md text-[13px] font-semibold uppercase tracking-widest hover:opacity-90 transition-opacity"
              >
                Apply Now
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
