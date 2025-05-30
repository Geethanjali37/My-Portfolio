import { Github, Heart, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    const socialLinks = [
        {
            name: "GitHub",
            url: "https://github.com/Geethanjali37",
            icon: <Github className="h-5 w-5" />
        },
        {
            name: "LinkedIn",
            url: "https://linkedin.com/in/geethanjali-rambarika",
            icon: <Linkedin className="h-5 w-5" />
        },
        {
            name: "Email",
            url: "mailto:geethanjalir.371@gmail.com",
            icon: <Mail className="h-5 w-5" />
        }
    ];

    return (
        <footer className="py-8 px-4 border-t border-border">
            <div className="container mx-auto max-w-5xl">
                <div className="flex flex-col items-center justify-center space-y-4">
                    <div className="flex items-center gap-2 text-muted-foreground">
                        <span>Crafted with</span>
                        <Heart className="h-4 w-4 text-red-500 fill-current" />
                        <span>and a passion for clean code</span>
                    </div>
                    
                    <div className="flex gap-6">
                        {socialLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary transition-colors"
                                aria-label={link.name}
                            >
                                {link.icon}
                            </a>
                        ))}
                    </div>

                    <div className="text-sm text-muted-foreground text-center">
                        <p>Turning coffee into code since 2022</p>
                        <p className="mt-1">© {currentYear} Geethanjali Rambarika. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}; 