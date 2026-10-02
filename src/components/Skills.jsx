import { motion } from "framer-motion";
import {
  FiCode,
  FiGlobe,
  FiCpu,
  FiDatabase,
  FiMonitor,
  FiBookOpen,
  FiArrowUpRight,
} from "react-icons/fi";

import { portfolioData } from "../data/portfolioData";

const skillGroups = [
  {
    key: "programming",
    title: "Programming",
    icon: FiCode,
    description: "Languages I use for development and problem solving.",
  },
  {
    key: "webDevelopment",
    title: "Web Development",
    icon: FiGlobe,
    description: "Technologies for building modern web applications.",
  },
  {
    key: "dataAndAI",
    title: "Data & AI",
    icon: FiCpu,
    description: "Tools for analytics, machine learning, and AI projects.",
  },
  {
    key: "databasesAndTools",
    title: "Databases & Tools",
    icon: FiDatabase,
    description: "Development tools and technologies for working with data.",
  },
  {
    key: "operatingSystems",
    title: "Operating Systems",
    icon: FiMonitor,
    description: "Platforms and environments I work with.",
  },
  {
    key: "coursework",
    title: "Core Coursework",
    icon: FiBookOpen,
    description: "Computer science fundamentals and core subjects.",
  },
];

export default function Skills() {
  const { skills } = portfolioData;

  return (
    <section
      id="skills"
      className="relative overflow-hidden px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-32"
    >
      {/* =========================================================
          ANIMATED BACKGROUND
      ========================================================= */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -25, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[10%] top-[20%] h-72 w-72 rounded-full bg-blue-600/5 blur-[120px]"
        />

        <motion.div
          animate={{
            x: [0, -35, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[5%] right-[5%] h-80 w-80 rounded-full bg-indigo-600/5 blur-[130px]"
        />

        <motion.div
          animate={{
            opacity: [0.15, 0.35, 0.15],
            scale: [1, 1.25, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/5 blur-[110px]"
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* =======================================================
            HEADING
        ======================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-3xl"
        >
          <div className="mb-4 flex items-center gap-3">
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: "2.5rem" }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.15,
              }}
              className="h-px bg-indigo-400"
            />

            <motion.span
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.25,
              }}
              className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-300"
            >
              Skills
            </motion.span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.15,
            }}
            className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Tools I use to{" "}
            <motion.span
              animate={{
                opacity: [0.45, 0.8, 0.45],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-slate-500"
            >
              build things.
            </motion.span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.3,
            }}
            className="mt-5 max-w-2xl text-base leading-8 text-slate-500 sm:text-lg"
          >
            A growing toolkit shaped by academic learning, coding practice,
            and hands-on project development.
          </motion.p>
        </motion.div>

        {/* =======================================================
            SKILL CARDS
        ======================================================= */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
          className="mt-12 grid gap-5 md:grid-cols-2 lg:mt-14 lg:grid-cols-3"
        >
          {skillGroups.map((group, index) => {
            const Icon = group.icon;
            const groupSkills = skills[group.key] || [];

            return (
              <motion.div
                key={group.key}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 45,
                    scale: 0.96,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      duration: 0.65,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  },
                }}
                whileHover={{
                  y: -8,
                  scale: 1.015,
                }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-6 shadow-xl shadow-black/10 backdrop-blur-xl transition duration-500 hover:border-indigo-400/25 hover:bg-white/[0.045] hover:shadow-indigo-950/20"
              >
                {/* Animated glow */}
                <motion.div
                  animate={{
                    x: [0, 20, 0],
                    y: [0, -15, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.3,
                  }}
                  className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-indigo-500/5 blur-3xl transition duration-500 group-hover:bg-indigo-500/15"
                />

                {/* Secondary glow */}
                <div className="pointer-events-none absolute -bottom-20 -left-20 h-32 w-32 rounded-full bg-violet-500/5 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="relative">
                  {/* =================================================
                      TOP ROW
                  ================================================= */}
                  <div className="flex items-center justify-between">
                    {/* Icon */}
                    <motion.div
                      animate={{
                        y: [0, -3, 0],
                      }}
                      transition={{
                        duration: 3 + index * 0.2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      whileHover={{
                        rotate: -8,
                        scale: 1.12,
                      }}
                      className="flex h-12 w-12 items-center justify-center rounded-2xl border border-indigo-400/10 bg-indigo-500/10 text-indigo-300 shadow-lg shadow-indigo-500/5 transition duration-300 group-hover:border-indigo-400/30 group-hover:bg-indigo-500/15"
                    >
                      <Icon size={21} />
                    </motion.div>

                    {/* Number + arrow */}
                    <div className="flex items-center gap-2">
                      <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: index * 0.12 + 0.3,
                        }}
                        className="text-xs font-medium tracking-widest text-slate-700"
                      >
                        {String(index + 1).padStart(2, "0")}
                      </motion.span>

                      <motion.div
                        whileHover={{
                          x: 4,
                          y: -4,
                        }}
                        className="text-slate-700 transition-colors duration-300 group-hover:text-indigo-300"
                      >
                        <FiArrowUpRight />
                      </motion.div>
                    </div>
                  </div>

                  {/* =================================================
                      TITLE
                  ================================================= */}
                  <motion.h3
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.12 + 0.2,
                    }}
                    className="mt-6 text-lg font-bold text-white transition-colors duration-300 group-hover:text-indigo-100"
                  >
                    {group.title}
                  </motion.h3>

                  {/* Description */}
                  <p className="mt-2 min-h-[48px] text-sm leading-6 text-slate-500 transition-colors duration-300 group-hover:text-slate-400">
                    {group.description}
                  </p>

                  {/* Divider */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.12 + 0.35,
                    }}
                    className="mt-6 h-px origin-left bg-white/5"
                  />

                  {/* =================================================
                      SKILL PILLS
                  ================================================= */}
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                      hidden: {},
                      visible: {
                        transition: {
                          staggerChildren: 0.06,
                          delayChildren: 0.2,
                        },
                      },
                    }}
                    className="mt-5 flex flex-wrap gap-2"
                  >
                    {groupSkills.map((skill) => (
                      <motion.span
                        key={skill}
                        variants={{
                          hidden: {
                            opacity: 0,
                            y: 8,
                            scale: 0.9,
                          },
                          visible: {
                            opacity: 1,
                            y: 0,
                            scale: 1,
                          },
                        }}
                        whileHover={{
                          y: -3,
                          scale: 1.04,
                        }}
                        className="cursor-default rounded-lg border border-white/10 bg-slate-950/50 px-3 py-2 text-xs font-medium text-slate-300 shadow-sm transition duration-300 hover:border-indigo-400/30 hover:bg-indigo-500/10 hover:text-indigo-200"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>

                {/* Bottom animated accent */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "35%" }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.12 + 0.5,
                  }}
                  className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-indigo-400/40 to-transparent"
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* =======================================================
            BOTTOM SUMMARY
        ======================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
          }}
          whileHover={{
            y: -3,
          }}
          className="group relative mt-8 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] px-6 py-5 backdrop-blur-xl transition duration-300 hover:border-indigo-400/15 hover:bg-white/[0.035] sm:flex sm:items-center sm:justify-between"
        >
          {/* Moving glow */}
          <motion.div
            animate={{
              x: ["-100%", "200%"],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              repeatDelay: 2,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute inset-y-0 w-1/3 skew-x-[-20deg] bg-gradient-to-r from-transparent via-indigo-400/5 to-transparent"
          />

          <div className="relative">
            <p className="text-sm font-semibold text-white">
              Always learning. Always building.
            </p>

            <p className="mt-1 text-xs leading-5 text-slate-500">
              My toolkit continues to grow through projects, coursework, and
              coding practice.
            </p>
          </div>

          <div className="relative mt-4 flex items-center gap-2 text-xs font-medium text-indigo-300 sm:mt-0">
            <motion.span
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="h-2 w-2 rounded-full bg-indigo-400 shadow-lg shadow-indigo-400/40"
            />

            <span>Open to learning</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}