import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-commerce Landing Page",
    description: "Responsive React landing page for a skincare brand with clean UI.",
    image: "/projects/Luminara(Ecom).png",
    tags: ["React", "CSS"],
    githubUrl: "https://github.com/anika57/Luminara",
    demoUrl: "https://anika57.github.io/Luminara/",
  },
  {
    id: 2,
    title: "Document Search Bot",
    description: "Upload and query documents using Gemini API integration.",
    image: "/projects/SearchBot.png",
    tags: ["Flask", "Python", "React", "CSS"],
    githubUrl: "https://github.com/anika57/Document_Search_Bot",
    demoUrl: "https://github.com/anika57/Document_Search_Bot/blob/master/Demo%20Recording.mp4",
  },
  {
    id: 3,
    title: "Social Media Dashboard",
    description: "Dashboard with dark mode showing social media stats.",
    image: "/projects/LighAndDark.png",
    tags: ["HTML", "CSS", "Javascript"],
    githubUrl: "https://github.com/anika57/light-and-dark-mode",
    demoUrl: "https://anika57.github.io/light-and-dark-mode/",
  },
  {
    id: 4,
    title: "Product Page",
    description: "Static product page with details, images, and options.",
    image: "/projects/ProductPage.png",
    tags: ["HTML", "CSS", "Javascript"],
    githubUrl: "https://github.com/anika57/Product-Page",
    demoUrl: "https://anika57.github.io/Product-Page/",
  },
  {
    id: 5,
    title: "Calorie Counter",
    description: "Form-based app for tracking daily calorie intake.",
    image: "/projects/CalorieCounter.png",
    tags: ["HTML", "CSS", "Javascript"],
    githubUrl: "https://github.com/anika57/Calorie-Counter",
    demoUrl: "https://anika57.github.io/Calorie-Counter/",
  },
  {
    id: 6,
    title: "RPG - Dragon Repeller",
    description: "Text-based RPG game built using HTML, CSS, and JS.",
    image: "/projects/Game.png",
    tags: ["HTML", "CSS", "Javascript"],
    githubUrl: "https://github.com/anika57/Game",
    demoUrl: "https://anika57.github.io/Game/",
  },
  {
    id: 7,
    title: "Random Quote Generator",
    description: "React app that generates and shares random quotes.",
    image: "/projects/QuoteGenerator.png",
    tags: ["React", "TypeScript", "Javascript", "CSS", "Vite"],
    githubUrl: "https://github.com/anika57/Random_Quotes",
    demoUrl: "https://random-quotes-machine1.netlify.app/",
  },
  {
    id: 8,
    title: "Markdown Previewer",
    description: "Live markdown previewer built using React.",
    image: "/projects/Preview.png",
    tags: ["React", "TypeScript", "Javascript", "CSS", "Vite"],
    githubUrl: "https://github.com/anika57/Random_Quotes",
    demoUrl: "https://sparkly-kataifi-b601f5.netlify.app/",
  },
  {
    id: 9,
    title: "FAQ Accordion",
    description: "An interactive FAQ section with collapsible answers built using HTML, CSS, and JavaScript.",
    image: "/projects/FAQ.png",
    tags: ["HTML", "CSS", "Javascript"],
    githubUrl: "https://github.com/anika57/faq-accordion-main",
    demoUrl: "https://anika57.github.io/faq-accordion-main/",
  },
];


export const Projects =()=>{
    return <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-center">Featured <span className="text-primary">Projects</span></h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            A collection of responsive and interactive web applications, including tools, dashboards, and landing pages—some built as part of coding challenges.
            Each project reflects a focus on clean design and user experience.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {projects.map((project)=>(
              <div key={project.id} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                <div className="h-48 overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                </div>
                <div className="p-5">
                  <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag)=>(
                        <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/10 text-secondary-foreground">
                          {tag}
                        </span>
                      ))}
                  </div>
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-3">{project.description}</p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a 
                    href={project.demoUrl} 
                    target="_blank"
                    className="text-foreground/70 hover:text-primary transition-colors duration-300">
                      <ExternalLink size={20}/>
                    </a>
                    <a 
                    href={project.githubUrl} 
                    target="_blank"
                    className="text-foreground/70 hover:text-primary transition-colors duration-300">
                      <Github size={20}/>
                    </a>
                  </div>
                </div>
              </div>
              </div>
             ))}
          </div>
          <div className="text-center mt-12">
            <a 
            href="https://github.com/anika57" 
            target="_blank"
            className="cosmic-button w-fit flex items-center mx-auto gap-2">
              Check My Github <ArrowRight size={20}/>
            </a>
          </div>
      </div>    
    </section>
}