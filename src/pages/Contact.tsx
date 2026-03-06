import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
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
    document.title = "Contact — AT4";
  }, []);

  const onSubmit = (data: FormData) => {
    console.log(data);
    toast({ title: "Enquiry Sent!", description: "Thank you — our team will be in touch shortly." });
    reset();
  };

  const inputClass =
    "w-full border-0 border-b border-border bg-transparent px-0 py-3 font-body text-[14px] text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors";
  const labelClass = "font-body text-[11px] uppercase tracking-[0.2em] text-accent mb-1.5 block";
  const errorClass = "font-body text-xs text-destructive mt-1";

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
            Get in touch
          </motion.h1>
          <div className="h-px bg-border mt-8" />
        </div>
      </section>

      {/* INFO GRID */}
      <section className="bg-background py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <p className="font-body text-[10px] uppercase tracking-[0.2em] text-accent mb-3">Head Office</p>
              <p className="font-body text-[14px] text-foreground leading-[1.7]">
                H/No. 8B, Agbogba Road<br />
                (Ritz Junction to Agbogba Junction)<br />
                Accra, Ghana
              </p>
              <p className="font-body text-[14px] text-muted-foreground mt-3">
                P.O. Box 7, Wa, Upper West Region
              </p>
            </div>
            <div>
              <p className="font-body text-[10px] uppercase tracking-[0.2em] text-accent mb-3">Phone & Email</p>
              <div className="font-body text-[14px] text-foreground space-y-1">
                <p>+233-302-543080</p>
                <p>+233-208-150124</p>
                <p>+233-244-458706</p>
              </div>
              <a href="mailto:info@archteam4.com" className="font-body text-[14px] text-foreground hover:text-accent transition-colors block mt-2">
                info@archteam4.com
              </a>
            </div>
            <div>
              <p className="font-body text-[10px] uppercase tracking-[0.2em] text-accent mb-3">Office Hours</p>
              <p className="font-body text-[14px] text-foreground">Mon–Fri: 8:00am – 5:00pm GMT</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-6 max-w-2xl">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-8"
          >
            <div>
              <label className={labelClass}>Full Name</label>
              <input {...register("fullName", { required: "Full name is required" })} placeholder="Your full name" className={inputClass} />
              {errors.fullName && <p className={errorClass}>{errors.fullName.message}</p>}
            </div>
            <div>
              <label className={labelClass}>Email</label>
              <input {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email" } })} placeholder="your@email.com" type="email" className={inputClass} />
              {errors.email && <p className={errorClass}>{errors.email.message}</p>}
            </div>
            <div>
              <label className={labelClass}>Phone</label>
              <input {...register("phone")} placeholder="Phone number" type="tel" className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Project Type</label>
              <select {...register("projectType", { required: "Select a project type" })} className={inputClass} defaultValue="">
                <option value="" disabled>Select project type</option>
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
              <label className={labelClass}>Project Location</label>
              <input {...register("projectLocation")} placeholder="Location" className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Budget Range</label>
              <select {...register("budget")} className={inputClass} defaultValue="">
                <option value="" disabled>Select budget range</option>
                <option>Under GHS 100,000</option>
                <option>GHS 100K–500K</option>
                <option>GHS 500K–1M</option>
                <option>GHS 1M–5M</option>
                <option>Over GHS 5M</option>
                <option>Prefer not to say</option>
              </select>
            </div>
            <div>
              <label className={labelClass}>Project Description</label>
              <textarea
                {...register("description", { required: "Please describe your project" })}
                placeholder="Tell us about your project"
                rows={4}
                className={inputClass}
              />
              {errors.description && <p className={errorClass}>{errors.description.message}</p>}
            </div>
            <button
              type="submit"
              className="w-full bg-foreground text-primary-foreground font-body text-[13px] uppercase tracking-[0.1em] py-4 hover:bg-accent transition-colors duration-200"
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
