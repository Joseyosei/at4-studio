import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useEffect } from "react";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  projectType: string;
  projectLocation: string;
  budget: string;
  description: string;
}

const Contact = () => {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  useEffect(() => {
    document.title = "Contact — Arch-Team 4 Consultancy";
  }, []);

  const onSubmit = (data: FormData) => {
    console.log(data);
    toast({ title: "Enquiry Sent!", description: "Thank you — our team will be in touch shortly." });
    reset();
  };

  const inputClass =
    "w-full bg-charcoal-mid border border-primary/10 rounded-sm px-4 py-3 font-body text-sm text-cream placeholder:text-slate-custom focus:outline-none focus:border-gold/50 transition-colors";
  const errorClass = "font-body text-xs text-gold mt-1";

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[40vh] flex items-center blueprint-grid">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        <div className="relative container mx-auto px-6 pt-32 pb-16">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="section-label">CONTACT</motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-cream leading-tight"
          >
            Let's Build Together
          </motion.h1>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="section-padding bg-charcoal">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-heading mb-6">Start a Conversation</h2>
            <p className="font-body text-slate-custom leading-relaxed mb-10">
              Whether you have an ongoing project or are just beginning to plan, our team is ready to discuss how AT4 can add value.
            </p>

            <div className="space-y-8">
              <div className="flex gap-4">
                <MapPin className="text-gold shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-body text-sm font-medium text-cream">Head Office</p>
                  <p className="font-body text-sm text-slate-custom">H/No. 8B, Agbogba Road (Ritz Junction to Agbogba Junction), Accra, Ghana</p>
                </div>
              </div>
              <div className="flex gap-4">
                <MapPin className="text-gold shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-body text-sm font-medium text-cream">Wa Office</p>
                  <p className="font-body text-sm text-slate-custom">P.O. Box 7, Wa, Upper West Region, Ghana</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone className="text-gold shrink-0 mt-1" size={20} />
                <div className="font-body text-sm text-slate-custom">
                  <p>+233-302-543080</p>
                  <p>+233-208-150124</p>
                  <p>+233-244-458706</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Mail className="text-gold shrink-0 mt-1" size={20} />
                <a href="mailto:info@archteam4.com" className="font-body text-sm text-cream hover:text-gold transition-colors">
                  info@archteam4.com
                </a>
              </div>
              <div className="flex gap-4">
                <Clock className="text-gold shrink-0 mt-1" size={20} />
                <p className="font-body text-sm text-slate-custom">Mon–Fri: 8:00am – 5:00pm GMT</p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT - FORM */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5"
          >
            <div>
              <input {...register("fullName", { required: "Full name is required" })} placeholder="Full Name *" className={inputClass} />
              {errors.fullName && <p className={errorClass}>{errors.fullName.message}</p>}
            </div>
            <div>
              <input {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email" } })} placeholder="Email Address *" type="email" className={inputClass} />
              {errors.email && <p className={errorClass}>{errors.email.message}</p>}
            </div>
            <div>
              <input {...register("phone")} placeholder="Phone Number" type="tel" className={inputClass} />
            </div>
            <div>
              <select {...register("projectType", { required: "Select a project type" })} className={inputClass} defaultValue="">
                <option value="" disabled>Project Type *</option>
                <option>Architecture & Planning</option>
                <option>Structural Engineering</option>
                <option>Electrical Engineering</option>
                <option>Hydro/Water Engineering</option>
                <option>Project Management</option>
                <option>Geodetic Surveying</option>
                <option>Other</option>
              </select>
              {errors.projectType && <p className={errorClass}>{errors.projectType.message}</p>}
            </div>
            <div>
              <input {...register("projectLocation")} placeholder="Project Location" className={inputClass} />
            </div>
            <div>
              <select {...register("budget")} className={inputClass} defaultValue="">
                <option value="" disabled>Estimated Budget Range</option>
                <option>Under GHS 100,000</option>
                <option>GHS 100K–500K</option>
                <option>GHS 500K–1M</option>
                <option>GHS 1M–5M</option>
                <option>Over GHS 5M</option>
                <option>Prefer not to say</option>
              </select>
            </div>
            <div>
              <textarea
                {...register("description", { required: "Please describe your project" })}
                placeholder="Project Description *"
                rows={4}
                className={inputClass}
              />
              {errors.description && <p className={errorClass}>{errors.description.message}</p>}
            </div>
            <button
              type="submit"
              className="w-full bg-gold text-primary-foreground font-body text-sm py-3.5 rounded-sm hover:bg-gold-light transition-colors"
            >
              Send Enquiry
            </button>
          </motion.form>
        </div>
      </section>
    </>
  );
};

export default Contact;
