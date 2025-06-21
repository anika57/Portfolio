import { Briefcase, Code, User } from "lucide-react"


export const AboutMe =()=>{
    return <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
               About <span className="text-primary">Me</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-xl font-semibold">Passionate Web Developer & Tech Creator</h3>
                    <p className="text-muted-foreground">
                        I’m a frontend developer with 2 years of experience building responsive and user-friendly web apps. 
                        I work mainly with React and have also built personal projects using Angular and TypeScript.
                    </p>
                    <p className="text-muted-foreground">
                        I design intuitive interfaces in Figma and enjoy handling both design and development. 
                        My goal is to create clean, functional, and visually appealing digital experiences.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="contact" className="cosmic-button">
                            Get In Touch
                        </a>
                        <a href="" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                            Download CV
                        </a>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary"/> {/*code*/}
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Web Development</h4>
                                <p className="text-muted-foreground">
                                    Creating responsive websites and web apps with modern frameworks, focused on performance and clean code.
                                </p>
                            </div>
                        </div> 
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <User className="h-6 w-6 text-primary"/> {/*ui-design*/}
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">UI/UX Design</h4>
                                <p className="text-muted-foreground">
                                    Designing user-friendly interfaces and experiences in Figma, from wireframes to final designs.
                                </p>
                            </div>
                        </div> 
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Briefcase className="h-6 w-6 text-primary"/> {/*work experience*/}
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">UI Developer</h4>
                                <p className="text-muted-foreground">
                                    Turned design mockups into responsive, interactive interfaces with attention to usability and detail.
                                </p>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    </section>
}