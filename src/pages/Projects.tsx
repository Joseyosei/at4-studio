import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const categories = ["All", "Architecture", "Structural", "Hydro/Water", "Public Sector", "Commercial"];

const allProjects = [
  { name: "Labone Heights Residential Complex", loc: "Accra", cats: ["Architecture"], grad: "from-amber-900/40 to-stone-900" },
  { name: "Wa Municipal Council Headquarters", loc: "Wa", cats: ["Architecture", "Public Sector"], grad: "from-yellow-900/30 to-neutral-900" },
  { name: "Kumasi Industrial Warehouse Facility", loc: "Ashanti", cats: ["Structural"], grad: "from-orange-900/30 to-zinc-900" },
  { name: "Accra Metropolitan Authority HQ", loc: "Accra", cats: ["Architecture", "Public Sector"], grad: "from-rose-900/20 to-stone-900" },
  { name: "Tema Water Treatment Plant", loc: "Greater Accra", cats: ["Hydro/Water"], grad: "from-teal-900/30 to-neutral-900" },
  { name: "GIMPA University Extension Block", loc: "Accra", cats: ["Architecture", "Public Sector"], grad: "from-amber-800/30 to-zinc-900" },
  { name: "East Legon Mixed-Use Development", loc: "Accra", cats: ["Architecture", "Commercial"], grad: "from-stone-800/40 to-neutral-900" },
  { name: "Sunyani District Hospital Expansion", loc: "Brong-Ahafo", cats: ["Architecture", "Public Sector"], grad: "from-emerald-900/20 to-stone-900" },
  { name: "Takoradi Port Warehouse Complex", loc: "Western Region", cats: ["Structural", "Commercial"], grad: "from-cyan-900/20 to-zinc-900" },
  { name: "Tamale Polytechnic Teaching Block", loc: "Northern Region", cats: ["Architecture", "Public Sector"], grad: "from-violet-900/15 to-neutral-900" },
  { name: "Accra Ring Road Commercial Tower", loc: "Accra", cats: ["Architecture", "Commercial"], grad: "from-amber-900/30 to-stone-900" },
  { name: "Keta Sea Defence Monitoring Station", loc: "Volta Region", cats: ["Hydro/Water"], grad: "from-blue-900/25 to-zinc-900" },
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
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-cream leading-tight"
          >
            Selected Works
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-body text-lg text-slate-custom mt-4 max-w-xl"
          >
            A portfolio of architectural and engineering projects across Ghana since 1993
          </motion.p>
        </div>
      </section>

      {/* FILTER + GRID */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-6">
          {/* Filters */}
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`font-body text-sm px-5 py-2 rounded-full transition-colors duration-200 ${
                  filter === c
                    ? "bg-gold text-primary-foreground"
                    : "bg-charcoal-mid text-slate-custom hover:text-cream border border-primary/10"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((p) => (
                <motion.div
                  key={p.name}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ scale: 1.02 }}
                  className="group relative aspect-[4/5] rounded-sm overflow-hidden cursor-pointer"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${p.grad}`} />
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
