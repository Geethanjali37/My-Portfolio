import { Github, ExternalLink } from "lucide-react";

export const ProjectsSection = () => {
    const projects = [
        {
            title: "Disease Prediction System",
            description: "A Disease Prediction System using Machine Learning, which predicts whether an individual is diabetic, has heart disease, or is at risk for Parkinson's disease based on health-related inputs",
            techStack: ["Python", "Machine Learning", "Streamlit","Data Analysis"],
            githubLink: "https://github.com/Geethanjali37/PREDICTION-OF-DISEASE-OUTBREAKS",
            demoLink: "https://nvs4thmv67633kwhmjmsxu.streamlit.app/",
            image: "/dp.png"
        },
        {
            title: "My Portfolio",
            description: "This project is a modern, responsive personal portfolio website built with React, TypeScript, and Tailwind CSS. It showcases my skills, projects, achievements, and experience as a Full Stack Developer and Competitive Programmer.",
            techStack: ["React(with Vite)","TypeScript","Tailwind CSS","React Context API"],
            githubLink: "https://github.com/Geethanjali37/My-Portfolio",
            demoLink: "https://geethanjalir-portfolio.netlify.app/",
            image: "/my-portfolio.png"
        },
        {
            title: "Tourist Compass",
            description: "Tourist Compass is a responsive, user-friendly travel guide website that helps users explore popular tourist destinations across India. Built using HTML, CSS, and JavaScript, this project presents a beautifully designed platform to browse through iconic locations categorized by region",
            techStack: ["HTML5","CSS3","Javascript"],
            githubLink: "https://github.com/Geethanjali37/Tourist-Compass",
            demoLink: "https://tourist-compass.netlify.app/",
            image: "/touristcompass.png"
        },
        {
            title: "Safe Streets",
            description: "SafeStreets is a modern, responsive transportation service website built with HTML, CSS, and JavaScript. This project provides a clean and functional platform that showcases essential travel-related services",
            techStack: ["HTML5","CSS3","Javascript"],
            githubLink: "https://github.com/Geethanjali37/SafeStreets",
            demoLink: "https://safestreets.netlify.app/",
            image: "/safestreets.png"
        },{
            title: "OptiStyle",
            description: "This project is a modern, responsive personal portfolio website built with React, TypeScript, and Tailwind CSS. It showcases my skills, projects, achievements, and experience as a Full Stack Developer and Competitive Programmer.",
            techStack: ["HTML5","CSS3","Javascript"],
            githubLink: "https://github.com/Geethanjali37/Optistyle",
            demoLink: "https://opti-style.netlify.app/",
            image: "/os.png"
        }
    ];

    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My Projects
                </h2>
                
                <div className="space-y-24">
                    {projects.map((project, index) => (
                        <div 
                            key={index}
                            className={`flex flex-col gap-8 items-center lg:flex-row ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                        >
                            {/* Project Image */}
                            <div className="w-full lg:w-1/2">
                                <div className="relative group">
                                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-primary/50 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                                    <div className="relative aspect-video rounded-lg overflow-hidden border border-border bg-white flex items-center justify-center">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Project Info */}
                            <div className="w-full lg:w-1/2 space-y-4 text-left">
                                <h3 className="text-2xl font-bold text-primary">
                                    {project.title}
                                </h3>
                                
                                <p className="text-muted-foreground text-left">
                                    {project.description}
                                </p>
                                
                                <div className="flex flex-wrap gap-2 py-2">
                                    {project.techStack.map((tech, techIndex) => (
                                        <span 
                                            key={techIndex}
                                            className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                
                                <div className="flex gap-4 pt-4">
                                    <a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="cosmic-button !px-6 !py-2 flex items-center gap-2"
                                    >
                                        <Github className="h-5 w-5" />
                                        Code
                                    </a>
                                    <a
                                        href={project.demoLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors flex items-center gap-2"
                                    >
                                        <ExternalLink className="h-5 w-5" />
                                        Live Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
