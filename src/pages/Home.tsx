import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Building2, Layers, Zap, Droplets, ClipboardList, Map, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" as const },
  }),
};

const services = [
  { icon: Building2, name: "Architecture & Planning", desc: "Residential, commercial, industrial and institutional design" },
  { icon: Layers, name: "Structural Engineering", desc: "Civil & structural design for all building typologies" },
  { icon: Zap, name: "Electrical Engineering", desc: "Full electrical systems design and project oversight" },
  { icon: Droplets, name: "Hydro/Water Engineering", desc: "Water systems and wastewater treatment plant engineering" },
  { icon: ClipboardList, name: "Project Management", desc: "End-to-end cost consultancy and project coordination" },
  { icon: Map, name: "Geodetic Engineering", desc: "Land surveying, mapping and geodetic services" },
];

const stats = [
  { num: 30, suffix: "+", label: "Years of Excellence" },
  { num: 500, suffix: "+", label: "Projects Completed" },
  { num: 6, suffix: "", label: "Engineering Disciplines" },
  { num: 2, suffix: "", label: "Offices Nationwide" },
];

const projects = [
  { name: "Labone Heights Residential Complex", loc: "Accra", cat: "Architecture", grad: "from-amber-900/40 to-stone-900" },
  { name: "Wa Municipal Council Offices", loc: "Upper West Region", cat: "Architecture", grad: "from-yellow-900/30 to-neutral-900" },
  { name: "Kumasi Industrial Warehouse", loc: "Ashanti", cat: "Structural Engineering", grad: "from-orange-900/30 to-zinc-900" },
  { name: "Accra Metropolitan Authority HQ", loc: "Accra", cat: "Architecture & MEP", grad: "from-rose-900/20 to-stone-900" },
  { name: "Tema Water Treatment Plant", loc: "Greater Accra", cat: "Hydro Engineering", grad: "from-teal-900/30 to-neutral-900" },
  { name: "GIMPA University Extension Block", loc: "Accra", cat: "Architecture", grad: "from-amber-800/30 to-zinc-900" },
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

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

const Home = () => {
  useEffect(() => {
    document.title = "Arch-Team 4 Consultancy | Engineering Ghana's Built Environment";
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* BG layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#1A1205] to-[#111111]" />
        <div className="absolute inset-0 blueprint-grid opacity-[0.04]" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="font-display text-[30vw] font-bold text-gold opacity-[0.03] leading-none">AT4</span>
        </div>

        <div className="relative container mx-auto px-6 pt-32 pb-40">
          <div className="max-w-3xl">
            <motion.p
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="section-label"
            >
              EST. 1993 — ACCRA, GHANA 🇬🇭
            </motion.p>
            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="font-display text-5xl sm:text-6xl lg:text-[80px] font-light text-cream leading-[1.08] mt-4"
            >
              Engineering Ghana's Built Environment
            </motion.h1>
            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="font-body text-lg text-slate-custom max-w-xl mt-6 leading-relaxed"
            >
              A multidisciplinary consortium of Architects, Engineers and Planners delivering world-class AEC consultancy services across Ghana since 1993.
            </motion.p>
            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-4 mt-10"
            >
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 font-body text-sm bg-gold text-primary-foreground px-7 py-3 rounded-sm hover:bg-gold-light transition-colors"
              >
                Explore Our Work <ArrowRight size={16} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 font-body text-sm border border-cream/30 text-cream px-7 py-3 rounded-sm hover:border-cream hover:bg-cream/5 transition-colors"
              >
                Our Services <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-charcoal-mid border-t border-gold/20">
          <div className="container mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.1 }}
                className="text-center"
              >
                <div className="font-display text-4xl md:text-5xl text-gold font-semibold">
                  <AnimatedCounter target={s.num} suffix={s.suffix} />
                </div>
                <p className="font-body text-[11px] uppercase tracking-[0.15em] text-slate-custom mt-2">
                  {s.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="section-padding bg-background blueprint-grid">
        <div className="container mx-auto px-6">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="section-label"
          >
            WHAT WE DO
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-heading mb-16"
          >
            Six Disciplines, One Trusted Consultancy
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ scale: 1.02 }}
                className="group bg-charcoal-mid p-8 rounded-sm border border-transparent hover:border-gold/40 transition-all duration-300"
              >
                <s.icon className="text-gold mb-4" size={28} />
                <h3 className="font-display text-[22px] text-cream mb-2">{s.name}</h3>
                <p className="font-body text-sm text-slate-custom leading-relaxed">{s.desc}</p>
                <Link
                  to="/services"
                  className="inline-block mt-4 font-body text-sm text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  Learn more →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="section-padding bg-charcoal">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="section-label">ABOUT AT4</p>
              <h2 className="section-heading mb-6">Three Decades of Building Excellence in Ghana</h2>
              <p className="font-body text-slate-custom leading-relaxed mb-8">
                Founded in 1993, Arch-Team 4 Consultancy has grown from a small team of passionate technicians into one of Ghana's most respected multidisciplinary AEC consultancies. Our corporate members of the Ghana Institute of Engineers bring unmatched depth across six disciplines.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 font-body text-sm border border-gold text-gold px-6 py-3 rounded-sm hover:bg-gold hover:text-primary-foreground transition-colors"
              >
                Learn Our Story <ArrowRight size={16} />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-6"
            >
              <div className="bg-charcoal-mid p-8 rounded-sm border-l-2 border-gold">
                <h4 className="font-display text-lg text-gold mb-2">Our Mission</h4>
                <p className="font-body text-sm text-slate-custom leading-relaxed">
                  To be our clients' most trusted provider of AEC services by consistently exceeding expectations.
                </p>
              </div>
              <div className="bg-charcoal-mid p-8 rounded-sm border-l-2 border-gold">
                <h4 className="font-display text-lg text-gold mb-2">Our Vision</h4>
                <p className="font-body text-sm text-slate-custom leading-relaxed">
                  To earn the privilege of being the general consultancy of choice, in an ethical manner.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-6">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="section-label"
          >
            SELECTED WORKS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-heading mb-16"
          >
            Projects That Define Ghana's Landscape
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ scale: 1.02 }}
                className="group relative aspect-[4/5] rounded-sm overflow-hidden cursor-pointer"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${p.grad}`} />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="font-body text-[10px] uppercase tracking-[0.15em] text-gold">{p.cat}</span>
                  <h3 className="font-display text-xl text-cream mt-1">{p.name}</h3>
                  <p className="font-body text-sm text-slate-custom mt-1">{p.loc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 font-body text-sm bg-gold text-primary-foreground px-7 py-3 rounded-sm hover:bg-gold-light transition-colors"
            >
              View All Projects <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="section-padding bg-charcoal relative overflow-hidden">
        <div className="absolute top-8 left-8 md:left-16">
          <span className="font-display text-[120px] md:text-[200px] text-gold opacity-[0.06] leading-none select-none">"</span>
        </div>
        <div className="container mx-auto px-6 text-center relative">
          <motion.blockquote
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-display text-2xl md:text-4xl italic text-cream max-w-4xl mx-auto leading-relaxed"
          >
            "AT4's reputation for professionalism is the result of a conscientious and consistent policy to identify and maintain links with staff of the highest professional competence."
          </motion.blockquote>
          <p className="font-body text-sm text-slate-custom mt-8">— Arch-Team 4 Consultancy, Company Charter</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gold">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-primary-foreground mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="font-body text-lg text-primary-foreground/80 mb-8">
            From concept to completion — let AT4's expert team guide you.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 font-body text-sm bg-background text-cream px-8 py-3 rounded-sm hover:bg-charcoal-mid transition-colors"
          >
            Contact Us Today <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
