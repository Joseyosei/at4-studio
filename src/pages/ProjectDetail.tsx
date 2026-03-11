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
    name: "Accra Digital Centre — Front Entrance",
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
  "accra-digital-centre-entrance": {
    name: "Accra Digital Centre — Building Entrance",
    loc: "Greater Accra, Ghana",
    cat: "Architecture · Commercial",
    year: "2020",
    description: "The main entrance of the Accra Digital Centre showcases architectural detailing that balances aesthetic appeal with practical functionality.",
    images: [imgDigitalEntrance, imgDigitalFront, imgDigitalAerial, imgDigitalStreet],
    details: [
      { label: "Client", value: "Government of Ghana" },
      { label: "Location", value: "Greater Accra, Ghana" },
      { label: "Status", value: "Completed" },
      { label: "Year", value: "2020" },
    ],
  },
  "accra-digital-aerial": {
    name: "Accra Digital Centre — Aerial View",
    loc: "Greater Accra, Ghana",
    cat: "Architecture · Commercial",
    year: "2020",
    description: "An aerial perspective of the Accra Digital Centre revealing the full scale and urban context of this major development.",
    images: [imgDigitalAerial, imgDigitalFront, imgDigitalEntrance, imgDigitalStreet],
    details: [
      { label: "Client", value: "Government of Ghana" },
      { label: "Location", value: "Greater Accra, Ghana" },
      { label: "Status", value: "Completed" },
      { label: "Year", value: "2020" },
    ],
  },
  "accra-digital-street": {
    name: "Accra Digital Centre — Street View",
    loc: "Greater Accra, Ghana",
    cat: "Architecture · Commercial",
    year: "2020",
    description: "Street-level view of the Accra Digital Centre demonstrating how the building integrates with its urban surroundings.",
    images: [imgDigitalStreet, imgDigitalFront, imgDigitalEntrance, imgDigitalAerial],
    details: [
      { label: "Client", value: "Government of Ghana" },
      { label: "Location", value: "Greater Accra, Ghana" },
      { label: "Status", value: "Completed" },
      { label: "Year", value: "2020" },
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
  "umat-main": {
    name: "University of Mines & Technology — Main Block",
    loc: "Tarkwa, Western Region",
    cat: "Architecture · Institutional",
    year: "2018",
    description: "The main academic block at UMaT, designed to support the institution's teaching and research mission with modern, functional spaces.",
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
  "umat-academic": {
    name: "University of Mines & Technology — Academic Wing",
    loc: "Tarkwa, Western Region",
    cat: "Architecture · Institutional",
    year: "2018",
    description: "The academic wing extension at UMaT provides additional teaching and laboratory facilities.",
    images: [imgUmat2, imgUmat1, imgUmat3, imgUmat4, imgUmat5],
    details: [
      { label: "Client", value: "University of Mines & Technology" },
      { label: "Location", value: "Tarkwa, Western Region" },
      { label: "Status", value: "Completed" },
      { label: "Year", value: "2018" },
    ],
  },
  "umat-inauguration": {
    name: "University of Mines & Technology — Inauguration",
    loc: "Tarkwa, Western Region",
    cat: "Architecture · Institutional",
    year: "2018",
    description: "The inauguration ceremony marking the completion of a significant phase in UMaT's infrastructure expansion.",
    images: [imgUmat3, imgUmat1, imgUmat2, imgUmat4, imgUmat5],
    details: [
      { label: "Client", value: "University of Mines & Technology" },
      { label: "Location", value: "Tarkwa, Western Region" },
      { label: "Status", value: "Completed" },
      { label: "Year", value: "2018" },
    ],
  },
  "umat-campus": {
    name: "University of Mines & Technology — Campus Overview",
    loc: "Tarkwa, Western Region",
    cat: "Architecture · Institutional",
    year: "2018",
    description: "A comprehensive view of the UMaT campus showing the integrated design approach across multiple buildings.",
    images: [imgUmat4, imgUmat1, imgUmat2, imgUmat3, imgUmat5],
    details: [
      { label: "Client", value: "University of Mines & Technology" },
      { label: "Location", value: "Tarkwa, Western Region" },
      { label: "Status", value: "Completed" },
      { label: "Year", value: "2018" },
    ],
  },
  "umat-full": {
    name: "University of Mines & Technology — Full Campus",
    loc: "Tarkwa, Western Region",
    cat: "Architecture · Institutional",
    year: "2018",
    description: "The full campus view showcasing AT4's masterplanning capabilities across this major institutional development.",
    images: [imgUmat5, imgUmat1, imgUmat2, imgUmat3, imgUmat4],
    details: [
      { label: "Client", value: "University of Mines & Technology" },
      { label: "Location", value: "Tarkwa, Western Region" },
      { label: "Status", value: "Completed" },
      { label: "Year", value: "2018" },
    ],
  },
  "wa-municipal": {
    name: "Wa Municipal Council Headquarters",
    loc: "Wa, Upper West",
    cat: "Architecture · Public Sector",
    year: "2015",
    description: "A civic building designed to serve the Wa Municipal Assembly, combining functional office spaces with a dignified public presence.",
    images: [imgMinistryRoads],
    details: [
      { label: "Client", value: "Wa Municipal Assembly" },
      { label: "Location", value: "Wa, Upper West Region" },
      { label: "Status", value: "Completed" },
      { label: "Year", value: "2015" },
      { label: "Type", value: "Government · Civic" },
    ],
  },
  "kumasi-warehouse": {
    name: "Kumasi Industrial Warehouse Facility",
    loc: "Ashanti Region",
    cat: "Structural Engineering",
    year: "2019",
    description: "A large-scale industrial warehouse featuring optimised structural systems for maximum clear-span functionality.",
    images: [imgUmat4],
    details: [
      { label: "Location", value: "Kumasi, Ashanti Region" },
      { label: "Status", value: "Completed" },
      { label: "Year", value: "2019" },
      { label: "Type", value: "Industrial · Warehouse" },
      { label: "Services", value: "Structural Engineering" },
    ],
  },
  "gimpa-extension": {
    name: "Ghana Institute of Management Extension",
    loc: "Accra",
    cat: "Architecture · Institutional",
    year: "2021",
    description: "An extension to GIMPA campus, providing additional academic and administrative facilities.",
    images: [imgDigitalFront, imgDigitalAerial],
    details: [
      { label: "Client", value: "GIMPA" },
      { label: "Location", value: "Accra, Ghana" },
      { label: "Status", value: "Completed" },
      { label: "Year", value: "2021" },
      { label: "Type", value: "Institutional · Education" },
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
            {/* Left - Description */}
            <div>
              <p className="font-body text-[11px] uppercase tracking-[0.2em] text-accent mb-4">{project.cat}</p>
              <h1 className="font-display text-3xl sm:text-4xl md:text-[56px] font-light text-foreground leading-[1.1] mb-6 sm:mb-8">
                {project.name}
              </h1>
              <p className="font-body text-[15px] sm:text-[16px] font-light text-muted-foreground leading-[1.8] max-w-[620px]">
                {project.description}
              </p>
            </div>

            {/* Right - Details */}
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
