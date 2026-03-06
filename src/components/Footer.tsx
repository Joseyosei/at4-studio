import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Col 1 - Logo */}
          <div>
            <span className="font-display text-[22px] font-normal text-foreground">AT4</span>
            <p className="font-body text-[13px] text-muted-foreground mt-1">
              Arch-Team 4 Consultancy
            </p>
            <p className="font-body text-[13px] text-muted-foreground mt-1">
              Est. 1993 · Accra, Ghana 🇬🇭
            </p>
          </div>

          {/* Col 2 - Navigation */}
          <div>
            <h4 className="font-body text-[11px] uppercase tracking-[0.2em] text-accent mb-4">Navigation</h4>
            <nav className="flex flex-col gap-2">
              {[
                { label: "Projects", path: "/projects" },
                { label: "Expertise", path: "/expertise" },
                { label: "Studio", path: "/studio" },
                { label: "Contact", path: "/contact" },
              ].map((l) => (
                <Link
                  key={l.path}
                  to={l.path}
                  className="font-body text-[13px] text-muted-foreground hover:text-foreground transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Col 3 - Services */}
          <div>
            <h4 className="font-body text-[11px] uppercase tracking-[0.2em] text-accent mb-4">Services</h4>
            <nav className="flex flex-col gap-2">
              {[
                "Architecture & Planning",
                "Structural Engineering",
                "Electrical Engineering",
                "Hydro/Water Engineering",
                "Project Management",
                "Geodetic Surveying",
              ].map((s) => (
                <Link
                  key={s}
                  to="/expertise"
                  className="font-body text-[13px] text-muted-foreground hover:text-foreground transition-colors"
                >
                  {s}
                </Link>
              ))}
            </nav>
          </div>

          {/* Col 4 - Contact */}
          <div>
            <h4 className="font-body text-[11px] uppercase tracking-[0.2em] text-accent mb-4">Contact</h4>
            <div className="flex flex-col gap-2 font-body text-[13px] text-muted-foreground">
              <p>H/No. 8B, Agbogba Road, Accra</p>
              <p>+233-302-543080</p>
              <p>+233-208-150124</p>
              <a href="mailto:info@archteam4.com" className="hover:text-foreground transition-colors">
                info@archteam4.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="font-body text-[11px] uppercase tracking-[0.05em] text-muted-foreground">
            © 2026 Arch-Team 4 Consultancy
          </p>
          <p className="font-body text-[11px] uppercase tracking-[0.05em] text-muted-foreground">
            archteam4.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
