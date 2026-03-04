import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

import imgMinistryRoads from "@/assets/projects/ministry-roads.png";
import imgDigitalAerial from "@/assets/projects/accra-digital-centre-aerial.jpg";
import imgDigitalStreet from "@/assets/projects/accra-digital-centre-street.jpg";
import imgDigitalFront from "@/assets/projects/accra-digital-centre-front.jpg";
import imgDigitalEntrance from "@/assets/projects/accra-digital-centre-entrance.png";
import imgUmat1 from "@/assets/projects/umat-1.jpg";
import imgUmat2 from "@/assets/projects/umat-2.jpeg";
import imgUmat3 from "@/assets/projects/umat-3.jpeg";
import imgUmat4 from "@/assets/projects/umat-4.png";
import imgUmat5 from "@/assets/projects/umat-5.jpeg";

const categories = ["All", "Architecture", "Institutional", "Public Sector", "Commercial"];

const allProjects = [
  { name: "Ministry of Roads & Highways Office Building", loc: "Accra", cats: ["Architecture", "Public Sector"], img: imgMinistryRoads },
  { name: "Accra Digital Centre — Aerial View", loc: "Greater Accra", cats: ["Architecture", "Commercial"], img: imgDigitalAerial },
  { name: "Accra Digital Centre — Street View", loc: "Greater Accra", cats: ["Architecture", "Commercial"], img: imgDigitalStreet },
  { name: "Accra Digital Centre — Front Entrance", loc: "Greater Accra", cats: ["Architecture", "Commercial"], img: imgDigitalFront },
  { name: "Accra Digital Centre — Building Entrance", loc: "Greater Accra", cats: ["Architecture", "Commercial"], img: imgDigitalEntrance },
  { name: "University of Mines & Technology — Main Block", loc: "Tarkwa, Western Region", cats: ["Architecture", "Institutional"], img: imgUmat1 },
  { name: "University of Mines & Technology — Academic Wing", loc: "Tarkwa, Western Region", cats: ["Architecture", "Institutional"], img: imgUmat2 },
  { name: "University of Mines & Technology — Inauguration", loc: "Tarkwa, Western Region", cats: ["Architecture", "Institutional"], img: imgUmat3 },
  { name: "University of Mines & Technology — Campus Overview", loc: "Tarkwa, Western Region", cats: ["Architecture", "Institutional"], img: imgUmat4 },
  { name: "University of Mines & Technology — Full Campus", loc: "Tarkwa, Western Region", cats: ["Architecture", "Institutional"], img: imgUmat5 },
];

const Projects = () => {
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    document.title = "Projects — Arch-Team 4 Consultancy";
  }, []);

  const filtered = filter === "All" ? allProjects : allProjects.filter((p) => p.cats.includes(filter));

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[50vh] flex items-center blueprint-grid">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        <div className="relative container mx-auto px-6 pt-32 pb-16">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="section-label">PORTFOLIO</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-cream leading-tight">
            Selected Works
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="font-body text-lg text-slate-custom mt-4 max-w-xl">
            A portfolio of architectural and engineering projects across Ghana since 1993
          </motion.p>
        </div>
      </section>

      {/* FILTER + GRID */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((c) => (
              <button key={c} onClick={() => setFilter(c)}
                className={`font-body text-sm px-5 py-2 rounded-full transition-colors duration-200 ${
                  filter === c
                    ? "bg-gold text-primary-foreground"
                    : "bg-charcoal-mid text-slate-custom hover:text-cream border border-primary/10"
                }`}>
                {c}
              </button>
            ))}
          </div>

          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((p) => (
                <motion.div key={p.name} layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ scale: 1.02 }}
                  className="group relative aspect-[4/5] rounded-sm overflow-hidden cursor-pointer">
                  <img src={p.img} alt={p.name} className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex flex-wrap gap-2 mb-2">
                      {p.cats.map((c) => (
                        <span key={c} className="font-body text-[10px] uppercase tracking-[0.15em] text-gold bg-gold/10 px-2 py-0.5 rounded-full">
                          {c}
                        </span>
                      ))}
                    </div>
                    <h3 className="font-display text-xl text-cream">{p.name}</h3>
                    <p className="font-body text-sm text-gold mt-1">{p.loc}</p>
                    <p className="font-body text-sm text-cream/60 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      View Details →
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Projects;
