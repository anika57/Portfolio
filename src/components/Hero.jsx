import { ArrowDown } from "lucide-react"

export const Hero=()=>{
    return <section 
    id="hero" 
    className="relative min-h-screen flex flex-col items-center justify-center px-4">
        <div className="container max-w-4xl mx-auto text-center z-10">
            <div className="space-y-6">
                <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
                    <span className="opacity-0 animate-fade-in"> Hi,</span>
                    <span className="opacity-0 animate-fade-in-delay-1"> I'm</span>
                    <span className="text-primary ml-2 opacity-0 animate-fade-in-delay-2"> Anika</span>
                </h1>
                <p className="text-base med:text-lg text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-4">
                    I design and create user-focused web experiences,
                    bridging the space between visual design and frontend development—
                    turning raw ideas into stellar digital journeys.
                </p>
                <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                    <a href="#projects" className="cosmic-button">
                        View My Work
                    </a>
                </div>
            </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform-translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary"/>
        </div>
    </section>
}