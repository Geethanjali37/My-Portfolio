import { Github, Linkedin, Mail } from "lucide-react";

export const ContactSection = () => {
    const contactLinks = [
        {
            name: "Email",
            url: "mailto:geethanjalir.371@gmail.com",
            icon: <Mail className="h-6 w-6" />,
            text: "geethanjalir.371@gmail.com"
        },
        {
            name: "GitHub",
            url: "https://github.com/Geethanjali37",
            icon: <Github className="h-6 w-6" />,
            text: "github.com/Geethanjali37"
        },
        {
            name: "LinkedIn",
            url: "https://linkedin.com/in/geethanjali-rambarika",
            icon: <Linkedin className="h-6 w-6" />,
            text: "linkedin.com/in/geethanjali-rambarika"
        }
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
    };

    return (
        <section id="contact" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Contact Me
                </h2>
                <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                    I'm always open to new opportunities and collaborations. Feel free to reach out!
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Links */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold text-primary mb-8">
                            Get in Touch
                        </h3>
                        <div className="bg-card rounded-lg p-8 border border-border space-y-6">
                            {contactLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
                                >
                                    <div className="p-4 rounded-xl border border-border group-hover:border-primary group-hover:bg-primary/10 transition-colors">
                                        {link.icon}
                                    </div>
                                    <div className="space-y-1">
                                        <div className="font-medium">{link.name}</div>
                                        <div className="text-sm">{link.text}</div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-card rounded-lg p-8 border border-border">
                        <form
                            action="https://api.web3forms.com/submit"
                            method="POST"
                            className="space-y-6"
                        >
                            <input type="hidden" name="access_key" value="a43f63e6-0712-44ea-8130-7a7ce1c28eaa" />

                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                                    placeholder="Your Name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                                    placeholder="yourmail@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                                    placeholder="Your message here..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full cosmic-button py-3 text-base"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
