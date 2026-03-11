import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const values = [
  { name: "Integrity", desc: "Transparent, ethical conduct in every engagement" },
  { name: "Excellence", desc: "Technical mastery that consistently exceeds expectations" },
  { name: "Collaboration", desc: "Multidisciplinary teamwork delivering integrated solutions" },
  { name: "Innovation", desc: "Embracing the latest tools and methodologies in AEC" },
];

const milestones = [
  { year: "1993", event: "Founded in Accra as a multidisciplinary AEC consultancy" },
  { year: "2000", event: "Expanded to six engineering disciplines under one practice" },
  { year: "2010", event: "Opened branch office in Wa, Upper West Region" },
  { year: "2020", event: "Completed flagship Accra Digital Centre project" },
];

const disciplines = [
  "Architecture & Planning",
  "Structural Engineering",
  "Electrical Engineering",
  "Hydro/Water Engineering",
  "Project Management",
  "Geodetic Engineering",
];

const Studio = () => {
  useEffect(() => {
    document.title = "Studio — AT4";
  }, []);

  return (
    <>
      {/* PAGE HEADER */}
      <section className="bg-background pt-24 sm:pt-32 pb-6 sm:pb-8">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-5xl sm:text-7xl md:text-[96px] font-light text-foreground leading-none"
          >
            Studio
          </motion.h1>
          <div className="h-px bg-border mt-6 sm:mt-8" />
        </div>
      </section>

      {/* STORY */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-[36px] sm:text-[52px] font-light text-foreground leading-[1.1] mb-6 sm:mb-8">
              From Vision<br />to Legacy
            </h2>
            <div className="font-body text-[15px] sm:text-[16px] font-light text-muted-foreground leading-[1.9] space-y-5 sm:space-y-6 max-w-[620px]">
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
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center min-h-[200px] lg:min-h-[300px]"
          >
            <span className="font-display text-[100px] sm:text-[140px] md:text-[180px] font-light text-secondary leading-none select-none">
              1993
            </span>
          </motion.div>
        </div>
      </section>

      {/* MISSION / VISION */}
      <section className="py-12 sm:py-16 bg-background border-t border-border">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:pr-12 md:border-r md:border-border"
            >
              <p className="section-label">Mission</p>
              <h3 className="font-display text-[28px] sm:text-[36px] font-light text-foreground leading-tight mb-4">
                Building with purpose
              </h3>
              <p className="font-body text-[14px] sm:text-[15px] font-light text-muted-foreground leading-[1.8] max-w-md">
                To be Ghana's most trusted provider of integrated architecture, engineering and construction consultancy services — delivering projects that are safe, sustainable and built to the highest international standards.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="md:pl-12"
            >
              <p className="section-label">Vision</p>
              <h3 className="font-display text-[28px] sm:text-[36px] font-light text-foreground leading-tight mb-4">
                Shaping Ghana's future
              </h3>
              <p className="font-body text-[14px] sm:text-[15px] font-light text-muted-foreground leading-[1.8] max-w-md">
                To lead the transformation of Ghana's built environment through innovative design, engineering excellence and a deep commitment to the communities we serve.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-12 sm:py-16 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6">
          <p className="section-label">Milestones</p>
          <div className="mt-6 sm:mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6">
              {milestones.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="border-t border-border pt-4 sm:pt-6"
                >
                  <span className="font-display text-[36px] sm:text-[44px] font-light text-foreground leading-none">
                    {m.year}
                  </span>
                  <p className="font-body text-[13px] sm:text-[14px] text-muted-foreground mt-3 leading-[1.6]">
                    {m.event}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DISCIPLINES STRIP */}
      <section className="py-12 sm:py-16 bg-background border-t border-border">
        <div className="container mx-auto px-4 sm:px-6">
          <p className="section-label">Our Disciplines</p>
          <div className="flex flex-wrap md:flex-nowrap items-center gap-y-2 mt-6">
            {disciplines.map((d, i) => (
              <div key={i} className={`flex items-center gap-3 py-2 px-3 sm:px-4 ${i < disciplines.length - 1 ? "md:border-r md:border-border" : ""} flex-shrink-0`}>
                <span className="font-body text-[11px] text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                <span className="font-body text-[13px] sm:text-[15px] text-foreground whitespace-nowrap">{d}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section-padding bg-background border-t border-border">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-[36px] sm:text-[52px] font-light text-foreground mb-10 sm:mb-12"
          >
            Our Values
          </motion.h2>
          {values.map((v, i) => (
            <div key={i} className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-4 sm:gap-8 py-5 sm:py-6 border-b border-border">
              <h3 className="font-display text-[24px] sm:text-[28px] font-normal text-foreground">{v.name}</h3>
              <p className="font-body text-[13px] sm:text-[14px] font-light text-muted-foreground max-w-xs leading-[1.7]">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* START A PROJECT CTA */}
      <section className="py-16 sm:py-24 bg-foreground">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-display text-4xl sm:text-5xl md:text-[64px] font-light text-primary-foreground leading-[1.1] mb-6"
          >
            Start a Project
          </motion.h2>
          <p className="font-body text-[15px] sm:text-[16px] font-light text-primary-foreground/60 max-w-md mx-auto leading-[1.7] mb-8">
            Ready to build? Let's discuss your next architectural or engineering project.
          </p>
          <Link
            to="/contact"
            className="inline-block font-body text-[13px] text-accent hover:text-primary-foreground transition-colors"
          >
            Get In Touch →
          </Link>
        </div>
      </section>
    </>
  );
};

export default Studio;
