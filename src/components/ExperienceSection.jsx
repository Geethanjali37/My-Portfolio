import { Calendar, Building2 } from "lucide-react";

export const ExperienceSection = () => {
    const experiences = [
        {
            title: "ML Intern",
            company: "SAP, AICTE, INDIA",
            duration: "JANUARY 2025",
            responsibilities: [
                "Developed a Disease Prediction System using Machine Learning, which predicts whether an individual is diabetic, has heart disease, or is at risk for Parkinson's disease based on health-related inputs"
            ]
        },
        {
            title: "Co Lead",
            company: "GeeksForGeeks Student Chapter VIIT",
            duration: "March 2025 - Present",
            responsibilities: [
                "Organized weekly coding workshops and tech talks",
                "Mentored peers in web development and coding practices",
            ]
        }
    ];

    return (
        <section id="experience" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Experience
                </h2>

                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-border" />

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <div key={index} className="relative">
                                {/* Timeline Point */}
                                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background" />

                                <div className={`flex flex-col md:flex-row gap-8 ${
                                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                }`}>
                                    {/* Empty space for alignment */}
                                    <div className="hidden md:block md:w-1/2" />

                                    {/* Content */}
                                    <div className="w-full md:w-1/2 bg-card rounded-lg p-6 hover:shadow-xl transition-all duration-300 border border-border ml-6 md:ml-0 group hover:border-primary transform hover:-translate-y-1">
                                        <div className="flex flex-col gap-2">
                                            <h3 className="text-xl font-semibold text-primary group-hover:scale-105 transition-transform">
                                                {exp.title}
                                            </h3>
                                            <div className="flex items-center gap-2 text-muted-foreground group-hover:text-primary/80 transition-colors">
                                                <Building2 className="h-4 w-4" />
                                                <span>{exp.company}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-muted-foreground group-hover:text-primary/80 transition-colors">
                                                <Calendar className="h-4 w-4" />
                                                <span>{exp.duration}</span>
                                            </div>
                                        </div>

                                        <div className="mt-4">
                                            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                                                {exp.responsibilities.map((resp, respIndex) => (
                                                    <li key={respIndex} className="pl-2 group-hover:text-foreground transition-colors">{resp}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
