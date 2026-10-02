import { motion } from "framer-motion";
import {
  FiCode,
  FiDatabase,
  FiCpu,
  FiLayers,
  FiArrowUpRight,
  FiCheckCircle,
} from "react-icons/fi";

import { portfolioData } from "../data/portfolioData";

const focusAreas = [
  {
    icon: FiCode,
    title: "Software Development",
    text: "Building practical applications with clean and maintainable code.",
  },
  {
    icon: FiCpu,
    title: "AI & Data",
    text: "Exploring machine learning, analytics, and AI-powered solutions.",
  },
  {
    icon: FiDatabase,
    title: "Databases",
    text: "Working with structured data, SQL, and database-driven applications.",
  },
  {
    icon: FiLayers,
    title: "Problem Solving",
    text: "Strengthening algorithmic thinking through coding and DSA practice.",
  },
];

const tags = [
  "Web Development",
  "AI / Machine Learning",
  "Data Analytics",
];

export default function About() {
  const { personal } = portfolioData;

  return (
    <section
      id="about"
      className="relative overflow-hidden px-5 pb-12 pt-20 sm:px-8 sm:py-28 lg:px-12 lg:py-32"
    >
      {/* =========================================================
          ANIMATED BACKGROUND
      ========================================================= */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 35, 0],
            y: [0, -25, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[-10%] top-[20%] h-72 w-72 rounded-full bg-indigo-600/5 blur-[120px]"
        />

        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 25, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[5%] right-[-10%] h-80 w-80 rounded-full bg-violet-600/5 blur-[130px]"
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
          className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/5 blur-[100px]"
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* =======================================================
            SECTION HEADING
        ======================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {/* Label */}
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
              About Me
            </motion.span>
          </div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.15,
            }}
            className="max-w-4xl text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Turning curiosity into{" "}
            <motion.span
              animate={{
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-slate-500"
            >
              practical solutions.
            </motion.span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.3,
            }}
            className="mt-5 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg"
          >
            A look at my interests, technical focus, and approach to building
            useful software solutions.
          </motion.p>
        </motion.div>

        {/* =======================================================
            MAIN CONTENT
        ======================================================= */}
        <div className="mt-9 grid gap-5 sm:mt-12 sm:gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
          {/* =====================================================
              ABOUT CARD
          ===================================================== */}
          <motion.div
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{
              y: -4,
            }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-2xl shadow-black/10 backdrop-blur-xl transition duration-500 hover:border-indigo-400/20 hover:bg-white/[0.045] hover:shadow-indigo-950/20 sm:p-9 lg:p-10"
          >
            {/* Animated decorative glow */}
            <motion.div
              animate={{
                x: [0, 20, 0],
                y: [0, -15, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-indigo-500/5 blur-3xl transition duration-500 group-hover:bg-indigo-500/15"
            />

            {/* Subtle corner glow */}
            <div className="pointer-events-none absolute bottom-0 left-0 h-24 w-24 rounded-full bg-violet-500/5 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

            <div className="relative">
              {/* Card header */}
              <div className="flex items-start justify-between gap-6">
                <div>
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: 0.2,
                    }}
                    className="flex items-center gap-2"
                  >
                    <motion.span
                      animate={{
                        scale: [1, 1.15, 1],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <FiCheckCircle className="text-indigo-400" />
                    </motion.span>

                    <p className="text-sm font-medium text-indigo-300">
                      A little about me
                    </p>
                  </motion.div>

                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: 0.3,
                    }}
                    className="mt-3 text-2xl font-bold text-white sm:text-3xl"
                  >
                    Computer Science Student
                  </motion.h3>
                </div>

                {/* Animated icon */}
                <motion.div
                  whileHover={{
                    rotate: 8,
                    scale: 1.1,
                  }}
                  animate={{
                    y: [0, -4, 0],
                  }}
                  transition={{
                    y: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                  className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-indigo-400/20 bg-indigo-500/10 text-indigo-300 shadow-lg shadow-indigo-500/5 sm:flex"
                >
                  <FiCode size={21} />
                </motion.div>
              </div>

              {/* About text */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: 0.4,
                }}
                className="mt-6 text-base leading-8 text-slate-400 sm:mt-7"
              >
                {personal.about}
              </motion.p>

              {/* Focus tags */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.12,
                    },
                  },
                }}
                className="mt-7 flex flex-wrap gap-2.5 sm:mt-8"
              >
                {tags.map((tag) => (
                  <motion.span
                    key={tag}
                    variants={{
                      hidden: {
                        opacity: 0,
                        y: 10,
                        scale: 0.95,
                      },
                      visible: {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                      },
                    }}
                    whileHover={{
                      y: -3,
                      scale: 1.03,
                    }}
                    className="cursor-default rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-medium text-slate-300 shadow-sm transition duration-300 hover:border-indigo-400/30 hover:bg-indigo-500/10 hover:text-indigo-200"
                  >
                    {tag}
                  </motion.span>
                ))}
              </motion.div>

              {/* Animated bottom accent */}
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: "100%", opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: 0.6,
                }}
                className="mt-8 h-px bg-gradient-to-r from-indigo-400/30 via-white/10 to-transparent sm:mt-9"
              />
            </div>
          </motion.div>

          {/* =====================================================
              FOCUS AREAS
          ===================================================== */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.13,
                },
              },
            }}
            className="grid gap-3.5 sm:grid-cols-2 sm:gap-4 lg:grid-cols-1"
          >
            {focusAreas.map((area) => {
              const Icon = area.icon;

              return (
                <motion.div
                  key={area.title}
                  variants={{
                    hidden: {
                      opacity: 0,
                      x: 35,
                    },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: {
                        duration: 0.6,
                        ease: [0.22, 1, 0.36, 1],
                      },
                    },
                  }}
                  whileHover={{
                    y: -5,
                    scale: 1.015,
                  }}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition duration-300 hover:border-indigo-400/25 hover:bg-white/[0.05] hover:shadow-xl hover:shadow-indigo-950/20"
                >
                  {/* Hover glow */}
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.4, 0.7, 0.4],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-indigo-500/5 blur-2xl transition duration-300 group-hover:bg-indigo-500/15"
                  />

                  <div className="relative flex items-start gap-4">
                    {/* Icon */}
                    <motion.div
                      whileHover={{
                        rotate: -8,
                        scale: 1.12,
                      }}
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-indigo-400/10 bg-indigo-500/10 text-indigo-300 shadow-sm shadow-indigo-500/5 transition duration-300 group-hover:border-indigo-400/30 group-hover:bg-indigo-500/15"
                    >
                      <Icon size={20} />
                    </motion.div>

                    {/* Text */}
                    <div className="min-w-0">
                      <h4 className="font-semibold text-white transition-colors duration-300 group-hover:text-indigo-100">
                        {area.title}
                      </h4>

                      <p className="mt-1 text-sm leading-6 text-slate-500 transition-colors duration-300 group-hover:text-slate-400">
                        {area.text}
                      </p>
                    </div>

                    {/* Arrow */}
                    <motion.div
                      whileHover={{
                        x: 3,
                        y: -3,
                      }}
                      className="ml-auto shrink-0 text-slate-700 transition-colors duration-300 group-hover:text-indigo-300"
                    >
                      <FiArrowUpRight />
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}