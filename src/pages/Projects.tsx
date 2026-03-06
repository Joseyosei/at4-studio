import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Grid, List } from "lucide-react";

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

const typeFilters = ["All Types", "Architecture", "Structural", "Electrical", "Hydro/Water", "Project Management", "Geodetic"];
const locationFilters = ["All Locations", "Greater Accra", "Upper West", "Ashanti", "Western Region", "Northern Region"];

const allProjects = [
  { id: "accra-digital-centre", name: "Accra Digital Centre — Front Entrance", loc: "Greater Accra", region: "Greater Accra", cats: ["Architecture"], cat: "Architecture · Commercial", year: "2020", img: imgDigitalFront },
  { id: "accra-digital-centre-entrance", name: "Accra Digital Centre — Building Entrance", loc: "Greater Accra", region: "Greater Accra", cats: ["Architecture"], cat: "Architecture · Commercial", year: "2020", img: imgDigitalEntrance },
  { id: "accra-digital-aerial", name: "Accra Digital Centre — Aerial View", loc: "Greater Accra", region: "Greater Accra", cats: ["Architecture"], cat: "Architecture · Commercial", year: "2020", img: imgDigitalAerial },
  { id: "accra-digital-street", name: "Accra Digital Centre — Street View", loc: "Greater Accra", region: "Greater Accra", cats: ["Architecture"], cat: "Architecture · Commercial", year: "2020", img: imgDigitalStreet },
  { id: "ministry-roads", name: "Ministry of Roads & Highways Office Building", loc: "Accra", region: "Greater Accra", cats: ["Architecture"], cat: "Architecture · Public Sector", year: "2017", img: imgMinistryRoads },
  { id: "umat-main", name: "University of Mines & Technology — Main Block", loc: "Tarkwa, Western Region", region: "Western Region", cats: ["Architecture"], cat: "Architecture · Institutional", year: "2018", img: imgUmat1 },
  { id: "umat-academic", name: "University of Mines & Technology — Academic Wing", loc: "Tarkwa, Western Region", region: "Western Region", cats: ["Architecture"], cat: "Architecture · Institutional", year: "2018", img: imgUmat2 },
  { id: "umat-inauguration", name: "University of Mines & Technology — Inauguration", loc: "Tarkwa, Western Region", region: "Western Region", cats: ["Architecture"], cat: "Architecture · Institutional", year: "2018", img: imgUmat3 },
  { id: "umat-campus", name: "University of Mines & Technology — Campus Overview", loc: "Tarkwa, Western Region", region: "Western Region", cats: ["Architecture"], cat: "Architecture · Institutional", year: "2018", img: imgUmat4 },
  { id: "umat-full", name: "University of Mines & Technology — Full Campus", loc: "Tarkwa, Western Region", region: "Western Region", cats: ["Architecture"], cat: "Architecture · Institutional", year: "2018", img: imgUmat5 },
];

const Projects = () => {
  const [typeFilter, setTypeFilter] = useState("All Types");
  const [locFilter, setLocFilter] = useState("All Locations");
  const [view, setView] = useState<"list" | "grid">("list");

  useEffect(() => {
    document.title = "Projects — AT4";
  }, []);

  const filtered = allProjects.filter((p) => {
    const typeMatch = typeFilter === "All Types" || p.cats.includes(typeFilter);
    const locMatch = locFilter === "All Locations" || p.region === locFilter;
    return typeMatch && locMatch;
  });

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
            Projects
          </motion.h1>
          <p className="font-body text-[13px] text-muted-foreground mt-4">{filtered.length} Projects</p>
          <div className="h-px bg-border mt-6" />
        </div>
      </section>

      {/* FILTER BAR */}
      <section className="bg-background border-b border-border sticky top-[73px] z-40">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex flex-wrap gap-4">
              {typeFilters.map((f) => (
                <button key={f} onClick={() => setTypeFilter(f)}
                  className={`font-body text-[13px] pb-1 transition-colors duration-200 ${
                    typeFilter === f
                      ? "text-foreground border-b border-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}>
                  {f}
                </button>
              ))}
            </div>
            <div className="h-4 w-px bg-border hidden md:block" />
            <div className="flex flex-wrap gap-4">
              {locationFilters.map((f) => (
                <button key={f} onClick={() => setLocFilter(f)}
                  className={`font-body text-[13px] pb-1 transition-colors duration-200 ${
                    locFilter === f
                      ? "text-foreground border-b border-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}>
                  {f}
                </button>
              ))}
            </div>
            <div className="ml-auto flex gap-2">
              <button onClick={() => setView("list")} className={`p-1.5 ${view === "list" ? "text-foreground" : "text-muted-foreground"}`}>
                <List size={18} />
              </button>
              <button onClick={() => setView("grid")} className={`p-1.5 ${view === "grid" ? "text-foreground" : "text-muted-foreground"}`}>
                <Grid size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS DISPLAY */}
      <section className="bg-background section-padding">
        <div className="container mx-auto px-6">
          {view === "list" ? (
            <div>
              <AnimatePresence mode="popLayout">
                {filtered.map((p, i) => (
                  <motion.div key={p.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link to={`/projects/${p.id}`}
                      className="group grid grid-cols-[40px_1fr] md:grid-cols-[60px_1fr_220px_180px_80px_40px] items-center py-5 border-b border-border hover:bg-secondary transition-colors duration-200 px-2">
                      <span className="font-body text-[11px] text-muted-foreground">{String(i + 1).padStart(3, "0")}</span>
                      <span className="font-body text-[16px] font-normal text-foreground group-hover:text-accent transition-colors duration-200">
                        {p.name}
                      </span>
                      <span className="hidden md:block font-body text-[13px] text-accent">{p.loc}</span>
                      <span className="hidden md:block font-body text-[12px] uppercase text-muted-foreground">{p.cat}</span>
                      <span className="hidden md:block font-body text-[13px] text-muted-foreground">{p.year}</span>
                      <span className="hidden md:block font-body text-[13px] text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-200">→</span>
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          ) : (
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-1">
              <AnimatePresence mode="popLayout">
                {filtered.map((p) => (
                  <motion.div key={p.id} layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <Link to={`/projects/${p.id}`}
                      className="group relative aspect-[4/3] block overflow-hidden">
                      <img src={p.img} alt={p.name} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-300" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h3 className="font-body text-[16px] text-primary-foreground">{p.name}</h3>
                        <p className="font-body text-[13px] text-primary-foreground/70 mt-1">{p.loc}</p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
};

export default Projects;
