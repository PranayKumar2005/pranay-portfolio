import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Roles from "./components/Roles";
import Contact from "./components/Contact";
import PortfolioGame from "./components/PortfolioGame";

function App() {
  const [gameCompleted, setGameCompleted] = useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#050816] text-white">
      {!gameCompleted ? (
        /* =========================
           PORTFOLIO ENTRY GAME
           ========================= */
        <PortfolioGame
          onComplete={() => setGameCompleted(true)}
        />
      ) : (
        <>
          {/* Navigation */}
          <Navbar />

          {/* Main Portfolio Content */}
          <main>
            {/* Hero */}
            <Hero />

            {/* About */}
            <About />

            {/* Skills */}
            <Skills />

            {/* Projects */}
            <Projects />

            {/* Education */}
            <Education />

            {/* Certifications & Achievements */}
            <Certifications />

            {/* Leadership & Roles */}
            <Roles />

            {/* Contact */}
            <Contact />
          </main>

          {/* Footer */}
          <footer className="border-t border-white/10 bg-[#030611]">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-center sm:flex-row sm:text-left">
              <div>
                <p className="text-sm font-semibold text-white">
                  Pranay Kumar Gouru
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Computer Science Student & Developer
                </p>
              </div>

              <p className="text-xs text-slate-500">
                © {new Date().getFullYear()} Pranay Kumar Gouru. All rights reserved.
              </p>
            </div>
          </footer>
        </>
      )}
    </div>
  );
}

export default App;