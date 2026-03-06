import { motion } from "framer-motion";
import { useEffect } from "react";

const values = [
  { name: "Integrity", desc: "Transparent, ethical conduct in every engagement" },
  { name: "Excellence", desc: "Technical mastery that consistently exceeds expectations" },
  { name: "Collaboration", desc: "Multidisciplinary teamwork delivering integrated solutions" },
  { name: "Innovation", desc: "Embracing the latest tools and methodologies in AEC" },
];

const team = [
  { name: "Eng. Kwame Asante", title: "Managing Director" },
  { name: "Arch. Abena Mensah", title: "Lead Architect" },
  { name: "Eng. Kofi Darko", title: "Chief Structural Engineer" },
  { name: "Eng. Akua Boateng", title: "Head of Project Management" },
];

const Studio = () => {
  useEffect(() => {
    document.title = "Studio — AT4";
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
            Studio
          </motion.h1>
          <div className="h-px bg-border mt-8" />
        </div>
      </section>

      {/* STORY */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-[52px] font-light text-foreground leading-[1.1] mb-8">
              From Vision<br />to Legacy
            </h2>
            <div className="font-body text-[16px] font-light text-muted-foreground leading-[1.9] space-y-6 max-w-[620px]">
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
            className="flex items-center justify-center min-h-[300px]"
          >
            <span className="font-display text-[180px] md:text-[200px] font-light text-secondary leading-none select-none">
              1993
            </span>
          </motion.div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section-padding bg-background border-t border-border">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-[52px] font-light text-foreground mb-12"
          >
            Our Values
          </motion.h2>
          {values.map((v, i) => (
            <div key={i} className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-8 py-6 border-b border-border">
              <h3 className="font-display text-[28px] font-normal text-foreground">{v.name}</h3>
              <p className="font-body text-[14px] font-light text-muted-foreground max-w-xs leading-[1.7]">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section className="section-padding bg-background border-t border-border">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-[52px] font-light text-foreground mb-12"
          >
            Leadership
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="aspect-square bg-secondary mb-4" />
                <h3 className="font-body text-[15px] font-normal text-foreground">{t.name}</h3>
                <p className="font-body text-[13px] text-accent mt-1">{t.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Studio;
