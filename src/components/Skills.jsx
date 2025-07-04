import { useState } from "react"
import {cn} from "@/lib/utils";


const skills =[
    //Frontend
    {name:"HTML/CSS", level:95, category:"Frontend"},
    {name:"Javascript", level:90, category:"Frontend"},
    {name:"React", level:85, category:"Frontend"},
    {name:"Angular", level:75, category:"Frontend"},
    {name:"TypeScript", level:70, category:"Frontend"},
    {name:"Tailwind CSS", level:85, category:"Frontend"},
    {name: "Next.js", level: 75, category: "Frontend" },
    {name: "Redux", level: 70, category: "Frontend" },

    //Backend
    {name:"Java", level:80, category:"Backend"},
    {name:"MySQL", level:80, category:"Backend"},
    {name:"MongoDB", level:70, category:"Backend"},
    {name:"RESTful APIs", level:70, category:"Backend"},
    {name: "Node.js & Express.js", level: 70, category: "Backend" },
    {name: "GraphQL (basic)", level: 55, category: "Backend" },

    //Tools
    {name:"Git/GitHub", level:90, category:"Tools"},
    {name:"Figma", level:95, category:"Tools"},
    {name:"VS Code", level:95, category:"Tools"},
    {name:"Intellij IDEA", level:90, category:"Tools"},
    {name: "Postman", level: 85, category: "Tools" },
    {name: "CI/CD (GitHub Actions, Vercel)", level: 70, category: "Tools" },
    {name: "AWS (basic)", level: 60, category: "Tools" },

    //Design & Process
    {name: "UI/UX Process Knowledge", level: 80, category: "Design & Process" },
    {name: "Agile/Scrum Familiarity", level: 75, category: "Design & Process" },
    {name: "Color Theory & Typography", level: 85, category: "Design & Process" },
    {name: "Wireframing", level: 90, category: "Design & Process" },
    {name: "Prototyping", level: 90, category: "Design & Process" },
]

const categories =['All','Frontend','Backend','Tools','Design & Process']

export const Skills =()=>{
    const [activeCategory, setActiveCategory]=useState("All");
    const filteredSkills = skills.filter(
        (skill)=> activeCategory==="All" || skill.category===activeCategory
    );
    return <section id="skills" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-2xl md:text:3xl font-bold mb-12 text-center">
                My<span className="text-primary"> Skills</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category,key)=>(
                    <button 
                    key={key} 
                    onClick={()=>setActiveCategory(category)}
                    className={cn(
                        "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                        activeCategory===category ? "bg-primary text-primary-foreground":"bg-secondary/70 text-foreground hover:bg-secondary"
                        )}
                        >
                        {category}
                    </button>
                ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSkills.map((skills,key)=>(
                    <div key={key} className="bg-card p-6 rounded-large shadow-xs card-hover">
                        <div className="text-left mb-4">
                            <h3 className="font-semibold text-lg">
                                {skills.name}
                            </h3>
                        </div>
                        <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                            <div 
                                className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out" 
                                style={{width: skills.level +'%'}}
                            />
                        </div>
                        <div className="text-right mt-1">
                            <span className="text-sm text-muted-foreground">{skills.level}%</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
}