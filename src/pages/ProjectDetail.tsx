import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

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
import imgTakoradiLibrary from "@/assets/projects/takoradi-library.png";
import imgTakoradiBusiness from "@/assets/projects/takoradi-business.png";
import imgSakomono1 from "@/assets/projects/sakomono-1.jpg";
import imgSakomono2 from "@/assets/projects/sakomono-2.jpg";
import imgSakomono3 from "@/assets/projects/sakomono-3.jpg";
import imgSakomono4 from "@/assets/projects/sakomono-4.jpg";
import imgSakomono5 from "@/assets/projects/sakomono-5.jpg";
import imgSakomono6 from "@/assets/projects/sakomono-6.png";

const projectData: Record<string, {
  name: string;
  loc: string;
  cat: string;
  year: string;
  description: string;
  images: string[];
  details: { label: string; value: string }[];
}> = {
  "accra-digital-centre": {
    name: "Accra Digital Centre",
    loc: "Greater Accra, Ghana",
    cat: "Architecture · Commercial",
    year: "2020",
    description: "A flagship commercial development in Accra, the Digital Centre represents AT4's commitment to modern architectural design that serves Ghana's growing technology and business sectors.",
    images: [imgDigitalFront, imgDigitalEntrance, imgDigitalAerial, imgDigitalStreet],
    details: [
      { label: "Client", value: "Government of Ghana" },
      { label: "Location", value: "Greater Accra, Ghana" },
      { label: "Status", value: "Completed" },
      { label: "Year", value: "2020" },
      { label: "Type", value: "Commercial · Technology Hub" },
      { label: "Services", value: "Architecture, Structural Engineering, Electrical Engineering" },
    ],
  },
  "ministry-roads": {
    name: "Ministry of Roads & Highways Office Building",
    loc: "Accra, Ghana",
    cat: "Architecture · Public Sector",
    year: "2017",
    description: "A landmark government office building designed to house the Ministry of Roads and Highways, emphasizing functionality, durability, and civic presence.",
    images: [imgMinistryRoads],
    details: [
      { label: "Client", value: "Ministry of Roads & Highways" },
      { label: "Location", value: "Accra, Ghana" },
      { label: "Status", value: "Completed" },
      { label: "Year", value: "2017" },
      { label: "Type", value: "Government · Office" },
      { label: "Services", value: "Architecture, Structural Engineering" },
    ],
  },
  "umat": {
    name: "University of Mines & Technology",
    loc: "Tarkwa, Western Region",
    cat: "Architecture · Institutional",
    year: "2018",
    description: "A comprehensive campus development at UMaT, featuring multiple academic blocks, teaching facilities, and administrative buildings designed to support the institution's teaching and research mission.",
    images: [imgUmat1, imgUmat2, imgUmat3, imgUmat4, imgUmat5],
    details: [
      { label: "Client", value: "University of Mines & Technology" },
      { label: "Location", value: "Tarkwa, Western Region" },
      { label: "Status", value: "Completed" },
      { label: "Year", value: "2018" },
      { label: "Type", value: "Institutional · Education" },
      { label: "Services", value: "Architecture, Structural Engineering, Electrical Engineering" },
    ],
  },
  "takoradi-tech": {
    name: "Takoradi Technical University",
    loc: "Takoradi, Western Region",
    cat: "Architecture · Institutional",
    year: "2016",
    description: "Two major building projects for Takoradi Technical University: a completed 3-storey Library Block Extension and a 4-storey School of Business Classroom Block at Butumagyebu, both designed to expand the university's academic infrastructure.",
    images: [imgTakoradiLibrary, imgTakoradiBusiness],
    details: [
      { label: "Client", value: "Takoradi Technical University" },
      { label: "Location", value: "Takoradi, Western Region" },
      { label: "Status", value: "Completed" },
      { label: "Year", value: "2016" },
      { label: "Type", value: "Institutional · Education" },
      { label: "Services", value: "Architecture, Structural Engineering, Electrical Engineering" },
    ],
  },
  "sakomono-flats": {
    name: "Block of Flats at Sakumono, Accra",
    loc: "Sakumono, Greater Accra",
    cat: "Architecture · Residential",
    year: "2022",
    description: "15 No. 4-Storey 16 No. Flats of 3-Bedrooms each (240 Apartments) at Sakumono SSNIT Estates for Trust F-Line Properties Ltd.",
    images: [imgSakomono1, imgSakomono2, imgSakomono3, imgSakomono4, imgSakomono5, imgSakomono6],
    details: [
      { label: "Client", value: "Trust F-Line Properties Ltd" },
      { label: "Location", value: "Sakumono SSNIT Estates, Accra" },
      { label: "Status", value: "Completed" },
      { label: "Year", value: "2022" },
      { label: "Type", value: "Residential · Apartments" },
      { label: "Scope", value: "15 No. 4-Storey Buildings, 240 Apartments" },
      { label: "Services", value: "Architecture, Structural Engineering, Electrical Engineering, Project Management" },
    ],
  },
};

const projectKeys = Object.keys(projectData);

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [activeImage, setActiveImage] = useState(0);
  const project = id ? projectData[id] : undefined;

  const currentIndex = id ? projectKeys.indexOf(id) : -1;
  const prevProject = currentIndex > 0 ? projectKeys[currentIndex - 1] : null;
  const nextProject = currentIndex < projectKeys.length - 1 ? projectKeys[currentIndex + 1] : null;

  useEffect(() => {
    if (project) {
      document.title = `${project.name} — AT4`;
    }
    setActiveImage(0);
  }, [project, id]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background pt-20">
        <div className="text-center">
          <h1 className="font-display text-4xl text-foreground mb-4">Project Not Found</h1>
          <Link to="/projects" className="font-body text-[13px] text-accent hover:text-foreground transition-colors">
            ← Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* BACK LINK */}
      <section className="bg-background pt-20 sm:pt-24 pb-4">
        <div className="container mx-auto px-4 sm:px-6">
          <Link to="/projects" className="font-body text-[13px] text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2">
            <ArrowLeft size={14} /> Back to Projects
          </Link>
        </div>
      </section>

      {/* HERO IMAGE */}
      <section className="bg-background pb-6 sm:pb-8">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="aspect-[16/9] md:aspect-[21/9] overflow-hidden"
          >
            <img
              src={project.images[activeImage]}
              alt={project.name}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* THUMBNAIL GALLERY */}
      {project.images.length > 1 && (
        <section className="bg-background pb-8 sm:pb-12">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex gap-2 overflow-x-auto pb-2">
              {project.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`flex-shrink-0 w-16 h-11 sm:w-20 sm:h-14 overflow-hidden border-2 transition-colors duration-200 ${
                    activeImage === i ? "border-foreground" : "border-transparent hover:border-border"
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* PROJECT INFO */}
      <section className="bg-background section-padding">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12 lg:gap-16">
            <div>
              <p className="font-body text-[11px] uppercase tracking-[0.2em] text-accent mb-4">{project.cat}</p>
              <h1 className="font-display text-3xl sm:text-4xl md:text-[56px] font-light text-foreground leading-[1.1] mb-6 sm:mb-8">
                {project.name}
              </h1>
              <p className="font-body text-[15px] sm:text-[16px] font-light text-muted-foreground leading-[1.8] max-w-[620px]">
                {project.description}
              </p>
            </div>

            <div className="border-t lg:border-t-0 lg:border-l border-border pt-8 lg:pt-0 lg:pl-8">
              {project.details.map((d, i) => (
                <div key={i} className={`py-4 ${i < project.details.length - 1 ? "border-b border-border" : ""}`}>
                  <p className="font-body text-[11px] uppercase tracking-[0.2em] text-accent mb-1">{d.label}</p>
                  <p className="font-body text-[14px] text-foreground">{d.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* NAVIGATION */}
          <div className="flex justify-between items-center mt-16 sm:mt-20 pt-8 border-t border-border">
            {prevProject ? (
              <Link to={`/projects/${prevProject}`} className="font-body text-[13px] text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2">
                <ArrowLeft size={14} /> Previous
              </Link>
            ) : <div />}
            {nextProject ? (
              <Link to={`/projects/${nextProject}`} className="font-body text-[13px] text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2">
                Next <ArrowRight size={14} />
              </Link>
            ) : <div />}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectDetail;
