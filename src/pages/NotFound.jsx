import { StarBackground } from "../components/StarBackground";
import { ThemeToggle } from "../components/ThemeToggle";

export const NotFound = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground flex flex-col items-center justify-center px-6">
      <ThemeToggle />
      <StarBackground />

      <div className="z-10 flex flex-col md:flex-row items-center gap-12">
        {/* 404 Text Section */}
        <div className="text-center md:text-left max-w-md">
          <h1 className="text-6xl md:text-7xl font-bold mb-4">404</h1>
          <h3 className="text-xl md:text-2xl font-bold mb-4">Oops! You ran out of oxygen.</h3>
          <p className="text-lg md:text-xl mb-6">
            The page you are looking for doesn’t exist or has been moved.
          </p>
          <a
            href="/"
            className="inline-block px-6 py-3 border border-foreground rounded-md hover:bg-primary hover:text-primary-foreground transition duration-300"
          >
            ← Back to Home Page
          </a>
        </div>

        <img
          src="/projects/astronaut.png"
          alt="Astronaut bot"
          className="w-72 md:w-96 animate-float"
        />
      </div>
    </div>
  );
};
