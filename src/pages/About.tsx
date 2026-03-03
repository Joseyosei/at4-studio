import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const values = [
  { num: "01", name: "Integrity", desc: "Transparent, ethical conduct in every engagement" },
  { num: "02", name: "Excellence", desc: "Technical mastery that consistently exceeds expectations" },
  { num: "03", name: "Collaboration", desc: "Multidisciplinary teamwork delivering integrated solutions" },
  { num: "04", name: "Innovation", desc: "Embracing the latest tools and methodologies in AEC" },
];

const team = [
  { name: "Eng. Kwame Asante", title: "Managing Director", yrs: 35 },
  { name: "Arch. Abena Mensah", title: "Lead Architect", yrs: 22 },
  { name: "Eng. Kofi Darko", title: "Chief Structural Engineer", yrs: 28 },
  { name: "Eng. Akua Boateng", title: "Head of Project Management", yrs: 18 },
];

const disciplines = [
  "Civil/Structural", "Electrical", "Hydro/Water", "Materials",
  "Geodetic", "Architecture & Planning", "Project Management", "Cost Consultancy",
];

const About = () => {
  useEffect(() => {
    document.title = "About — Arch-Team 4 Consultancy";
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[50vh] flex items-center blueprint-grid">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        <div className="relative container mx-auto px-6 pt-32 pb-16">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="section-label">ABOUT US</motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-cream leading-tight"
          >
            Built on Expertise.<br />Driven by Integrity.
          </motion.h1>
          <p className="font-body text-sm text-slate-custom mt-4">
            <Link to="/" className="hover:text-cream transition-colors">Home</Link> &gt; About
          </p>
        </div>
      </section>

      {/* COMPANY STORY */}
      <section className="section-padding bg-charcoal">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="section-label">OUR STORY</p>
            <h2 className="section-heading mb-8">From Vision to Legacy</h2>
            <div className="font-body text-slate-custom leading-relaxed space-y-4">
              <p>
                Arch-Team 4 Consultancy (AT4) was founded in 1993 as a consortium of professionals united by a shared vision: to elevate the standard of architectural and engineering practice in Ghana.
              </p>
              <p>
                Over three decades, we have grown from a small team of passionate technicians into one of Ghana's most respected multidisciplinary AEC consultancies. Our corporate members of the Ghana Institute of Engineers bring unmatched expertise across architecture, structural engineering, electrical engineering, hydro/water engineering, geodetic surveying, and project management.
              </p>
              <p>
                Headquartered in Accra with a branch office in Wa, Upper West Region, AT4 serves clients across every region of Ghana — from major government institutions and multinational corporations to private developers and community organisations.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative flex items-center justify-center min-h-[300px]"
          >
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gold/20" />
            <span className="font-display text-[140px] md:text-[180px] text-gold/[0.06] font-bold leading-none select-none">
              1993
            </span>
          </motion.div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section-padding bg-background blueprint-grid">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-heading text-center mb-16"
          >
            The Values That Guide Us
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-charcoal-mid p-8 rounded-sm border border-transparent hover:border-gold/30 transition-colors"
              >
                <span className="font-display text-3xl text-gold/30 font-bold">{v.num}</span>
                <h3 className="font-display text-[28px] text-gold mt-2">{v.name}</h3>
                <p className="font-body text-sm text-slate-custom mt-3 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="section-padding bg-charcoal">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-heading text-center mb-16"
          >
            Our Leadership Team
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-28 h-28 mx-auto rounded-full border-2 border-gold/40 bg-charcoal-mid flex items-center justify-center mb-4">
                  <span className="font-display text-2xl text-gold/40">
                    {t.name.split(" ").slice(-1)[0][0]}
                  </span>
                </div>
                <h3 className="font-display text-lg text-cream">{t.name}</h3>
                <p className="font-body text-sm text-slate-custom mt-1">{t.title}</p>
                <span className="inline-block mt-2 font-body text-[10px] uppercase tracking-[0.15em] text-gold bg-gold/10 px-3 py-1 rounded-full">
                  {t.yrs} yrs experience
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DISCIPLINES */}
      <section className="py-12 bg-gold overflow-hidden">
        <div className="flex gap-8 animate-[scroll_20s_linear_infinite] whitespace-nowrap">
          {[...disciplines, ...disciplines].map((d, i) => (
            <span key={i} className="font-body text-sm uppercase tracking-[0.15em] text-primary-foreground/80 shrink-0">
              {d} <span className="mx-4 text-primary-foreground/30">|</span>
            </span>
          ))}
        </div>
        <style>{`
          @keyframes scroll {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
        `}</style>
      </section>
    </>
  );
};

export default About;
