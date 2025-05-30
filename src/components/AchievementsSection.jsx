import { Award ,StarIcon } from "lucide-react";

export const AchievementsSection = () => {
    const achievements = [
        {
            icon: <Award className="w-20 h-8 text-primary" />,
            title: "Co-Lead at Student Chapter",
            description: "Co-Lead at GeeksForGeeks Student Chapter VIIT"
        },
        {
            icon: <StarIcon className="w-20 h-8 text-primary" />,
            title: "2 Star Coder",
            description: "2 Star coder at CodeChef,max-rating 1580"
        }
    ];

    return (
        <section id="achievements" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Achievements
                </h2>

                <div className="flex flex-col md:flex-row gap-8 justify-center items-center w-full">
                    {achievements.map((achievement, index) => (
                        <div
                            key={index}
                            className="group relative bg-card rounded-lg p-6 w-full md:w-1/2 hover:shadow-xl transition-all duration-300 border border-border hover:border-primary max-w-md"
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 to-primary rounded-t-lg transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                            <div className="flex flex-col items-center text-center gap-4">
                                <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                                    {achievement.icon}
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-xl font-semibold text-primary">
                                        {achievement.title}
                                    </h3>
                                    <p className="text-muted-foreground">
                                        {achievement.description}
                                    </p>
                                </div>
                            </div>
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/50 rounded-b-lg transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
