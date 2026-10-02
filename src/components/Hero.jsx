import { motion } from "framer-motion";
import {
  FiArrowDown,
  FiArrowUpRight,
  FiGithub,
  FiLinkedin,
  FiMapPin,
  FiStar,
} from "react-icons/fi";

import { portfolioData } from "../data/portfolioData";
import profileImage from "../assets/images/profile.png";

export default function Hero() {
  const { personal } = portfolioData;

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const technologies = ["Java", "Python", "React", "SQL", "AI / ML"];

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-5 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-32 lg:px-12"
    >
      {/* =========================================================
          ANIMATED BACKGROUND
      ========================================================= */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Main glow */}
        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[5%] top-[10%] h-72 w-72 rounded-full bg-indigo-600/10 blur-[120px]"
        />

        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[5%] right-[2%] h-96 w-96 rounded-full bg-violet-600/10 blur-[140px]"
        />

        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.25, 0.45, 0.25],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/5 blur-[100px]"
        />

        {/* Floating ambient circles */}
        <motion.div
          animate={{
            y: [0, -25, 0],
            x: [0, 15, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[45%] top-[18%] h-2 w-2 rounded-full bg-indigo-400/40 blur-[1px]"
        />

        <motion.div
          animate={{
            y: [0, 30, 0],
            x: [0, -20, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[30%] top-[30%] h-1.5 w-1.5 rounded-full bg-violet-400/50"
        />

        <motion.div
          animate={{
            y: [0, -20, 0],
            x: [0, -15, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[25%] left-[38%] h-1.5 w-1.5 rounded-full bg-blue-400/40"
        />
      </div>

      {/* =========================================================
          ANIMATED GRID
      ========================================================= */}
      <motion.div
        animate={{
          backgroundPosition: ["0px 0px", "60px 60px"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* =========================================================
          MAIN HERO
      ========================================================= */}
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 sm:gap-16 lg:min-h-[calc(100vh-8rem)] lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        {/* =======================================================
            LEFT SIDE
        ======================================================= */}
        <div className="relative z-10">
          {/* Hello */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            className="mb-5 flex items-center gap-3 sm:mb-6"
          >
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: "2.5rem" }}
              transition={{
                duration: 0.8,
                delay: 0.2,
              }}
              className="h-px bg-indigo-400 sm:w-10"
            />

            <motion.span
              animate={{
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-[11px] font-semibold uppercase tracking-[0.25em] text-indigo-300 sm:text-xs sm:tracking-[0.3em]"
            >
              Hello, I'm
            </motion.span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
          >
            Pranay
            <br />

            <motion.span
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear",
              }}
              className="bg-gradient-to-r from-indigo-300 via-blue-300 to-violet-300 bg-[length:200%_200%] bg-clip-text text-transparent"
            >
              Kumar Gouru.
            </motion.span>
          </motion.h1>

          {/* Role + Intro */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.35,
            }}
            className="mt-6 sm:mt-7"
          >
            <motion.h2
              animate={{
                opacity: [0.85, 1, 0.85],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-lg font-semibold leading-7 text-slate-200 sm:text-2xl"
            >
              {personal.role}
            </motion.h2>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400 sm:mt-4 sm:text-lg sm:leading-8">
              {personal.shortIntro}
            </p>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.5,
            }}
            whileHover={{ x: 5 }}
            className="mt-5 flex w-fit items-center gap-2 text-sm text-slate-500 transition-colors hover:text-slate-300 sm:mt-6"
          >
            <motion.span
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="flex"
            >
              <FiMapPin className="text-indigo-400" />
            </motion.span>

            <span>{personal.location}</span>
          </motion.div>

          {/* =====================================================
              BUTTONS
          ===================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.6,
            }}
            className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap"
          >
            {/* View My Work */}
            <motion.button
              onClick={scrollToProjects}
              whileHover={{
                y: -4,
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-white px-5 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-white/5 transition sm:w-auto"
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-100/40 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.7 }}
              />

              <span className="relative">View My Work</span>

              <FiArrowUpRight className="relative transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </motion.button>

            {/* GitHub */}
            <motion.a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              whileHover={{
                y: -4,
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3.5 text-sm font-semibold text-slate-200 transition hover:border-indigo-400/30 hover:bg-indigo-500/[0.08] sm:w-auto"
            >
              <motion.span
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <FiGithub />
              </motion.span>
              GitHub
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              whileHover={{
                y: -4,
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3.5 text-sm font-semibold text-slate-200 transition hover:border-blue-400/30 hover:bg-blue-500/[0.08] sm:w-auto"
            >
              <motion.span
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <FiLinkedin />
              </motion.span>
              LinkedIn
            </motion.a>
          </motion.div>

          {/* =====================================================
              TECH STRIP
          ===================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.8,
            }}
            className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 border-t border-white/10 pt-5 sm:mt-12 sm:justify-start sm:gap-x-6 sm:pt-6"
          >
            {technologies.map((technology, index) => (
              <motion.span
                key={technology}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.9 + index * 0.1,
                }}
                whileHover={{
                  y: -3,
                  color: "#c7d2fe",
                }}
                className="cursor-default text-xs font-medium tracking-wide text-slate-500 transition-colors"
              >
                {technology}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* =======================================================
            RIGHT - PROFILE
        ======================================================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88, x: 40 }}
          animate={{
            opacity: 1,
            scale: 1,
            x: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mx-auto w-full max-w-md pb-12 sm:pb-14"
        >
          {/* Outer rotating ring */}
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -inset-4 rounded-[2.5rem] border border-dashed border-indigo-400/20 sm:-inset-5"
          />

          {/* Second rotating ring */}
          <motion.div
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -inset-8 rounded-[3rem] border border-dotted border-violet-400/10"
          />

          {/* Orbiting dot */}
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -inset-10 hidden sm:block"
          >
            <div className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-indigo-400 shadow-lg shadow-indigo-400/50" />
          </motion.div>

          {/* Profile Card floating */}
          <motion.div
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-2.5 shadow-2xl shadow-indigo-950/30 backdrop-blur-xl sm:p-3">
              <div className="relative overflow-hidden rounded-[1.5rem]">
                <motion.img
                  src={profileImage}
                  alt="Pranay Kumar Gouru"
                  whileHover={{
                    scale: 1.035,
                  }}
                  transition={{
                    duration: 0.6,
                  }}
                  className="h-[400px] w-full object-cover object-center sm:h-[500px] lg:h-[540px]"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                {/* Subtle animated shine */}
                <motion.div
                  animate={{
                    x: ["-120%", "120%"],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatDelay: 4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-y-0 w-1/3 skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/10 to-transparent"
                />

                {/* Image information */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 1.1,
                      duration: 0.5,
                    }}
                    className="text-[11px] font-medium uppercase tracking-[0.2em] text-indigo-300 sm:text-xs sm:tracking-[0.25em]"
                  >
                    Computer Science
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 1.2,
                      duration: 0.5,
                    }}
                    className="mt-2 text-lg font-bold text-white sm:text-xl"
                  >
                    Building. Learning. Creating.
                  </motion.p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* =====================================================
              FLOATING LEARNING CARD
          ===================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: [0, -8, 0],
            }}
            transition={{
              opacity: {
                duration: 0.7,
                delay: 1,
              },
              y: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            whileHover={{
              scale: 1.04,
              y: -4,
            }}
            className="absolute -bottom-1 right-2 rounded-2xl border border-white/10 bg-slate-950/95 px-4 py-3.5 shadow-2xl shadow-black/40 backdrop-blur-xl sm:right-6 sm:px-5 sm:py-4"
          >
            <div className="flex items-center gap-3">
              <motion.div
                animate={{
                  rotate: [0, -10, 10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 2,
                }}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-300 sm:h-10 sm:w-10"
              >
                <FiStar />
              </motion.div>

              <div>
                <p className="text-xs text-slate-500">Currently</p>

                <p className="text-sm font-semibold text-white">
                  Learning & Building
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* =========================================================
          SCROLL INDICATOR
      ========================================================= */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1.8,
          duration: 0.8,
        }}
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 sm:block"
      >
        <motion.div
          animate={{
            y: [0, 7, 0],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center gap-2 text-slate-600"
        >
          <span className="text-[9px] uppercase tracking-[0.3em]">
            Scroll
          </span>

          <FiArrowDown className="text-sm" />
        </motion.div>
      </motion.div>
    </section>
  );
}