import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowRight } from "lucide-react";

const services = [
  {
    num: "01",
    name: "Architecture & Planning",
    desc: "We provide comprehensive architectural design services spanning the full project lifecycle — from initial feasibility and concept design through to detailed design, planning approvals and construction documentation. Our portfolio includes residential complexes, commercial office buildings, industrial facilities and major public/institutional buildings.",
    bullets: ["Concept & Schematic Design", "Planning Applications", "Construction Documentation", "Interior Space Planning", "Urban Design"],
  },
  {
    num: "02",
    name: "Structural Engineering",
    desc: "Our structural engineers design robust, efficient structural systems for all building types. We use the latest engineering software to analyse and optimise structures, ensuring safety, buildability and cost-efficiency.",
    bullets: ["Structural Analysis & Design", "Foundation Engineering", "Steel & Concrete Design", "Seismic Assessment", "Industrial Structures"],
  },
  {
    num: "03",
    name: "Electrical Engineering",
    desc: "From power distribution and lighting design to specialist systems, our electrical engineers deliver fully coordinated electrical designs that meet Ghana's codes and international best practice.",
    bullets: ["Power Distribution Design", "Lighting Design", "Fire Alarm Systems", "Security Systems", "Renewable Energy Integration"],
  },
  {
    num: "04",
    name: "Hydro/Water Engineering",
    desc: "Specialist water engineering for Ghana's unique hydrological context. We design water supply, drainage and wastewater treatment systems for municipal, industrial and residential projects.",
    bullets: ["Water Supply Systems", "Drainage Design", "Wastewater Treatment Plants", "Flood Risk Assessment", "Borehole Design"],
  },
  {
    num: "05",
    name: "Project Management & Cost Consultancy",
    desc: "Our project managers and quantity surveyors provide full cost and programme control from inception to completion, ensuring projects are delivered on time and within budget.",
    bullets: ["Bills of Quantities", "Cost Planning", "Tender Management", "Contract Administration", "Programme Management"],
  },
  {
    num: "06",
    name: "Geodetic Engineering & Surveying",
    desc: "Accurate surveying and geodetic engineering underpins every successful construction project. Our surveyors provide reliable data for design, planning and construction across all terrain types.",
    bullets: ["Topographic Survey", "Cadastral Survey", "Setting Out", "GPS/GIS Services", "As-built Documentation"],
  },
];

const Services = () => {
  useEffect(() => {
    document.title = "Services — Arch-Team 4 Consultancy";
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[50vh] flex items-center blueprint-grid">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        <div className="relative container mx-auto px-6 pt-32 pb-16">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="section-label">OUR SERVICES</motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-cream leading-tight"
          >
            Comprehensive AEC<br />Consultancy Services
          </motion.h1>
        </div>
      </section>

      {/* SERVICES */}
      {services.map((s, i) => (
        <section key={i} className={`section-padding ${i % 2 === 0 ? "bg-charcoal" : "bg-background"}`}>
          <div className="container mx-auto px-6">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-start ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}>
              {/* Gradient placeholder */}
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`relative aspect-[4/3] rounded-sm overflow-hidden ${i % 2 === 1 ? "lg:order-2" : ""}`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-charcoal-mid to-background" />
                <span className="absolute top-6 left-6 font-display text-[100px] text-gold/[0.08] font-bold leading-none">
                  {s.num}
                </span>
              </motion.div>

              {/* Text */}
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={i % 2 === 1 ? "lg:order-1" : ""}
              >
                <span className="font-display text-6xl text-gold/10 font-bold">{s.num}</span>
                <h2 className="font-display text-3xl md:text-[42px] text-cream mt-2 leading-tight">{s.name}</h2>
                <p className="font-body text-slate-custom leading-relaxed mt-6">{s.desc}</p>
                <ul className="mt-6 space-y-2">
                  {s.bullets.map((b, j) => (
                    <li key={j} className="font-body text-sm text-slate-custom flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 font-body text-sm bg-gold text-primary-foreground px-6 py-3 rounded-sm mt-8 hover:bg-gold-light transition-colors"
                >
                  Request This Service <ArrowRight size={16} />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default Services;
