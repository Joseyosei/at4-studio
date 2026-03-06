import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

import imgDigitalFront from "@/assets/projects/accra-digital-centre-front.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

const stats = [
  { num: 30, suffix: "+", label: "Years of Excellence" },
  { num: 500, suffix: "+", label: "Projects Completed" },
  { num: 6, suffix: "", label: "Disciplines" },
  { num: 2, suffix: "", label: "Offices" },
];

const projects = [
  { id: "accra-digital-centre", name: "Accra Digital Centre — Front Entrance", loc: "Greater Accra, Ghana", cat: "Architecture · Commercial", year: "2020" },
  { id: "accra-digital-centre-entrance", name: "Accra Digital Centre — Building Entrance", loc: "Greater Accra, Ghana", cat: "Architecture · Commercial", year: "2020" },
  { id: "umat-main", name: "University of Mines & Technology — Main Block", loc: "Tarkwa, Western Region", cat: "Architecture · Institutional", year: "2018" },
  { id: "wa-municipal", name: "Wa Municipal Council Headquarters", loc: "Wa, Upper West", cat: "Architecture · Public Sector", year: "2015" },
  { id: "kumasi-warehouse", name: "Kumasi Industrial Warehouse Facility", loc: "Ashanti Region", cat: "Structural Engineering", year: "2019" },
  { id: "gimpa-extension", name: "Ghana Institute of Management Extension", loc: "Accra", cat: "Architecture · Institutional", year: "2021" },
];

const expertiseItems = [
  { num: "01", name: "Architecture & Planning" },
  { num: "02", name: "Structural Engineering" },
  { num: "03", name: "Electrical Engineering" },
  { num: "04", name: "Hydro/Water Engineering" },
  { num: "05", name: "Project Management" },
  { num: "06", name: "Geodetic Engineering" },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1500;
          const step = Math.max(1, Math.floor(target / (duration / 16)));
          let current = 0;
          const interval = setInterval(() => {
            current += step;
            if (current >= target) {
              current = target;
              clearInterval(interval);
            }
            setCount(current);
          }, 16);
        }
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const Home = () => {
  useEffect(() => {
    document.title = "AT4 — Arch-Team 4 Consultancy";
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="min-h-screen flex items-center bg-background pt-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div className="lg:pl-4">
              <motion.p custom={0} variants={fadeUp} initial="hidden" animate="visible"
                className="font-body text-[10px] uppercase tracking-[0.3em] text-accent mb-8">
                Arch-Team 4 Consultancy
              </motion.p>
              <motion.h1 custom={1} variants={fadeUp} initial="hidden" animate="visible"
                className="font-display text-6xl sm:text-7xl lg:text-[80px] font-light text-foreground leading-[1.0] tracking-[-0.02em]">
                Engineering<br />Ghana's Built<br />Environment
              </motion.h1>
              <motion.p custom={2} variants={fadeUp} initial="hidden" animate="visible"
                className="font-body text-[17px] font-light text-muted-foreground max-w-sm mt-8 leading-[1.7]">
                A consortium of architects, engineers and planners delivering world-class AEC consultancy across Ghana since 1993.
              </motion.p>
              <motion.div custom={3} variants={fadeUp} initial="hidden" animate="visible" className="flex flex-wrap gap-6 mt-10">
                <Link to="/projects"
                  className="font-body text-[13px] text-foreground relative pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-foreground after:origin-left after:scale-x-100 hover:after:scale-x-0 after:transition-transform after:duration-300">
                  View Projects →
                </Link>
                <Link to="/expertise"
                  className="font-body text-[13px] text-accent relative pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-accent after:origin-left after:scale-x-100 hover:after:scale-x-0 after:transition-transform after:duration-300">
                  Our Expertise →
                </Link>
              </motion.div>
            </div>

            {/* Right - Hero Image */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden"
            >
              <img src={imgDigitalFront} alt="Accra Digital Centre" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-secondary border-t border-b border-border py-12">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <div key={i} className={`text-center py-4 ${i < 3 ? "md:border-r md:border-border" : ""}`}>
              <div className="font-display text-[52px] font-light text-foreground leading-none">
                <AnimatedCounter target={s.num} suffix={s.suffix} />
              </div>
              <p className="font-body text-[10px] uppercase tracking-[0.2em] text-accent mt-3">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED PROJECTS — F+P LIST STYLE */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-6">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="section-label">
            Selected Works
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="font-display text-6xl md:text-[72px] font-light text-foreground leading-[1.1] mb-4">
            Projects
          </motion.h2>
          <div className="h-px bg-border mb-2" />

          {projects.map((p, i) => (
            <Link to={`/projects/${p.id}`} key={i}
              className="group grid grid-cols-[40px_1fr] md:grid-cols-[40px_1fr_200px_160px_80px] items-center py-5 border-b border-border hover:bg-secondary transition-colors duration-200 px-2">
              <span className="font-body text-[11px] text-muted-foreground">{String(i + 1).padStart(3, "0")}</span>
              <span className="font-display text-[22px] font-normal text-foreground group-hover:text-accent transition-colors duration-200">
                {p.name}
              </span>
              <span className="hidden md:block font-body text-[13px] text-accent">{p.loc}</span>
              <span className="hidden md:block font-body text-[13px] uppercase text-muted-foreground">{p.cat}</span>
              <span className="hidden md:block font-body text-[13px] text-muted-foreground text-right group-hover:after:content-['→'] group-hover:after:ml-2">{p.year}</span>
            </Link>
          ))}

          <div className="mt-8">
            <Link to="/projects" className="font-body text-[13px] text-foreground hover:text-accent transition-colors">
              View All Projects →
            </Link>
          </div>
        </div>
      </section>

      {/* EXPERTISE STRIP */}
      <section className="py-16 bg-background border-t border-border">
        <div className="container mx-auto px-6">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="section-label">
            Our Expertise
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl font-light text-foreground mb-10">
            Six disciplines, one practice
          </motion.h2>
          <div className="flex flex-wrap md:flex-nowrap items-center gap-0">
            {expertiseItems.map((e, i) => (
              <div key={i} className={`flex items-center gap-3 py-3 px-4 ${i < expertiseItems.length - 1 ? "md:border-r md:border-border" : ""} flex-shrink-0`}>
                <span className="font-body text-[11px] text-muted-foreground">{e.num}</span>
                <span className="font-body text-[15px] text-foreground whitespace-nowrap">{e.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STUDIO STATEMENT */}
      <section className="py-24 md:py-32 bg-foreground">
        <div className="container mx-auto px-6 text-center">
          <motion.blockquote
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl md:text-[52px] font-light italic text-primary-foreground max-w-[900px] mx-auto leading-[1.2]"
          >
            "We are our clients' most trusted provider of Architecture, Engineering and Construction services — built on three decades of delivering excellence across Ghana."
          </motion.blockquote>
          <p className="font-body text-[12px] uppercase tracking-[0.2em] text-accent mt-8">
            — Arch-Team 4 Consultancy, Est. 1993
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-display text-5xl md:text-[64px] font-light text-foreground leading-[1.1]">
                Start a Project
              </h2>
              <p className="font-body text-[16px] font-light text-muted-foreground mt-6 max-w-md leading-[1.8]">
                From concept to completion — let AT4's expert team guide your next architectural or engineering project.
              </p>
              <Link to="/contact" className="inline-block font-body text-[13px] text-accent mt-6 hover:text-foreground transition-colors">
                Contact Us →
              </Link>
            </div>
            <div className="border-l border-border pl-8 md:pl-12 space-y-6">
              <div>
                <p className="font-body text-[11px] uppercase tracking-[0.2em] text-accent mb-2">Address</p>
                <p className="font-body text-[14px] text-muted-foreground">H/No. 8B, Agbogba Road, Accra, Ghana</p>
              </div>
              <div>
                <p className="font-body text-[11px] uppercase tracking-[0.2em] text-accent mb-2">Email</p>
                <a href="mailto:info@archteam4.com" className="font-body text-[14px] text-foreground hover:text-accent transition-colors">
                  info@archteam4.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
