import { Link } from "react-router-dom";
import AT4Logo from "@/assets/AT4_Logo.png";

const Footer = () => {
  return (
    <footer className="bg-charcoal border-t-2 border-gold">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Col 1 - Logo */}
          <div>
            <div className="flex items-center gap-3">
              <img src={AT4Logo} alt="AT4 Logo" className="h-12 w-12 rounded-full" />
              <span className="font-display text-3xl font-bold text-gold">AT4</span>
            </div>
            <p className="font-body text-sm text-slate-custom mt-3 leading-relaxed">
              Building Ghana's Future Since 1993 🇬🇭
            </p>
            <p className="font-body text-xs text-slate-custom mt-2 leading-relaxed">
              A multidisciplinary consortium of Architects, Engineers, Planners, Socio-economists and Surveyors headquartered in Accra.
            </p>
          </div>

          {/* Col 2 - Quick Links */}
          <div>
            <h4 className="font-body text-xs uppercase tracking-[0.2em] text-gold mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {["Home", "About", "Services", "Projects", "Contact"].map((l) => (
                <Link
                  key={l}
                  to={l === "Home" ? "/" : `/${l.toLowerCase()}`}
                  className="font-body text-sm text-slate-custom hover:text-cream transition-colors"
                >
                  {l}
                </Link>
              ))}
            </nav>
          </div>

          {/* Col 3 - Services */}
          <div>
            <h4 className="font-body text-xs uppercase tracking-[0.2em] text-gold mb-4">Services</h4>
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
                  to="/services"
                  className="font-body text-sm text-slate-custom hover:text-cream transition-colors"
                >
                  {s}
                </Link>
              ))}
            </nav>
          </div>

          {/* Col 4 - Contact */}
          <div>
            <h4 className="font-body text-xs uppercase tracking-[0.2em] text-gold mb-4">Contact</h4>
            <div className="flex flex-col gap-3 font-body text-sm text-slate-custom">
              <p>H/No. 8B, Agbogba Road, Accra, Ghana</p>
              <p>+233-302-543080</p>
              <p>+233-208-150124</p>
              <a href="mailto:info@archteam4.com" className="hover:text-cream transition-colors">
                info@archteam4.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-primary/10 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="font-body text-xs text-slate-custom">
            © 2025 Arch-Team 4 Consultancy. All Rights Reserved. 🇬🇭
          </p>
          <p className="font-body text-xs text-slate-custom">
            Registered in Ghana
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
