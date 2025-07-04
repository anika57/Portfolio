import { AboutMe } from "../components/AboutMe";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { Navbar } from "../components/Navbar";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";
import { StarBackground } from "../components/StarBackground";
import { ThemeToggle } from "../components/ThemeToggle";

export const Home = () =>{
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Theme toggle */} 
        <ThemeToggle/>
        {/* Background Effects */}
        <StarBackground/>
        {/* Navbar */}
        <Navbar/>
        {/* Main Content */}
        <main>
        <Hero/>
        <AboutMe/>
        <Skills/>  
        <Projects/>
        <Contact/>
        </main>
        {/* Footer */}
        <Footer/>
    </div>  
};