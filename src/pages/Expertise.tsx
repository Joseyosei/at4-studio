import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect } from "react";

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

const Expertise = () => {
  useEffect(() => {
    document.title = "Expertise — AT4";
  }, []);

  return (
    <>
      {/* PAGE HEADER */}
      <section className="bg-background pt-32 pb-8">
        <div className="container mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-7xl md:text-[96px] font-light text-foreground leading-none"
          >
            Expertise
          </motion.h1>
          <p className="font-body text-[16px] font-light text-muted-foreground mt-6 max-w-lg leading-[1.8]">
            Architecture, engineering and technical consultancy across six disciplines.
          </p>
          <div className="h-px bg-border mt-8" />
        </div>
      </section>

      {/* DISCIPLINES */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-16 border-b border-border relative"
            >
              {/* Background Number */}
              <span className="absolute top-8 left-0 font-display text-[120px] font-light text-secondary leading-none select-none pointer-events-none">
                {s.num}
              </span>

              {/* Content */}
              <div className="relative z-10 lg:pl-8">
                <h2 className="font-display text-[40px] font-normal text-foreground leading-tight">
                  {s.name}
                </h2>
                <p className="font-body text-[15px] font-light text-muted-foreground mt-6 max-w-lg leading-[1.8]">
                  {s.desc}
                </p>
              </div>

              <div className="relative z-10">
                <div className="space-y-2 mb-8">
                  {s.bullets.map((b, j) => (
                    <p key={j} className="font-body text-[13px] text-muted-foreground">
                      — {b}
                    </p>
                  ))}
                </div>
                <Link
                  to="/contact"
                  className="font-body text-[13px] text-accent hover:text-foreground transition-colors"
                >
                  Discuss this service →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Expertise;
