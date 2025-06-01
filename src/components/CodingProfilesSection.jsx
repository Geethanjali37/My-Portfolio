import { Code2, Trophy, Users } from "lucide-react";

export const CodingProfilesSection = () => {
    const profiles = [
        {
            platform: "LeetCode",
            username: "geethanjali_37",
            logo: "/leetcode-logo.png",
            rating: "1500+",
            solved: 390,
            maxSolved: 1500,
            link: "https://leetcode.com/geethanjali_37",
        },
        {
            platform: "CodeChef",
            username: "geethanjali_73",
            logo: "/codechef-logo.png",
            rating: "2⭐(1580)",
            solved: 150,
            maxSolved: 1000,
            link: "https://codechef.com/users/geethanjali_73",
        },
        {
            platform: "GeeksforGeeks",
            username: "geethanjali_37",
            logo: "/gfg-logo.png",
            rating: "1500+",
            solved: 200,
            maxSolved: 900,
            link: "https://www.geeksforgeeks.org/user/geethanjali_37/",
        }
    ];

    return (
        <section id="coding-profiles" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Coding Profiles
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {profiles.map((profile, index) => {
                        const percent = Math.min((profile.solved / profile.maxSolved) * 100, 100);
                        return (
                            <div
                                key={index}
                                className="bg-card rounded-lg p-6 hover:shadow-xl transition-all duration-300 border border-border h-full hover:border-primary flex flex-col items-center text-center glow-card-hover"
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    <img src={profile.logo} alt={profile.platform + ' logo'} className="h-10 w-10 object-contain" />
                                    <h3 className="text-lg font-semibold text-primary">
                                        {profile.platform}
                                    </h3>
                                </div>
                                <div className="text-sm text-muted-foreground mb-2">
                                    @{profile.username}
                                </div>
                                <div className="space-y-2 w-full">
                                    <div className="flex justify-between text-sm text-muted-foreground">
                                        <span>Problems Solved</span>
                                        <span className="text-primary font-medium">{profile.solved}</span>
                                    </div>
                                    <div className="w-full h-2 bg-border rounded-full overflow-hidden mb-2">
                                        <div
                                            className="h-full bg-primary transition-all duration-300"
                                            style={{ width: `${percent}%` }}
                                        />
                                    </div>
                                    <div className="flex justify-between text-sm text-muted-foreground">
                                        <span>Rating</span>
                                        <span className="text-primary font-medium">{profile.rating}</span>
                                    </div>
                                </div>
                                <a
                                    href={profile.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-6 px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors font-medium"
                                >
                                    Visit Profile
                                </a>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}; 
