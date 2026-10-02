import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";
import { FiArrowUpRight, FiBookOpen } from "react-icons/fi";

import { portfolioData } from "../data/portfolioData";

function Education() {
  return (
    <section
      id="education"
      className="relative overflow-hidden px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-32"
    >
      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute inset-0">
        {/* Main ambient glows */}
        <motion.div
          animate={{
            x: [0, 35, 0],
            y: [0, -25, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[-10%] top-[12%] h-80 w-80 rounded-full bg-indigo-600/5 blur-[130px]"
        />

        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 25, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[5%] right-[-10%] h-80 w-80 rounded-full bg-violet-600/5 blur-[130px]"
        />

        {/* Small floating particles */}
        <motion.div
          animate={{
            y: [0, -18, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[18%] top-[28%] h-1.5 w-1.5 rounded-full bg-indigo-400/30"
        />

        <motion.div
          animate={{
            y: [0, 15, 0],
            opacity: [0.15, 0.45, 0.15],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute right-[20%] top-[45%] h-2 w-2 rounded-full bg-violet-400/30"
        />

        <motion.div
          animate={{
            y: [0, -12, 0],
            opacity: [0.15, 0.4, 0.15],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-[18%] left-[42%] h-1.5 w-1.5 rounded-full bg-indigo-300/30"
        />
      </div>

      <div className="relative mx-auto max-w-6xl">
        {/* ================= HEADING ================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="max-w-3xl"
        >
          {/* Section label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-4 flex items-center gap-3"
          >
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: 40 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="h-px bg-indigo-400"
            />

            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-300">
              Academic Journey
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Education
            <span className="text-slate-500"> & learning.</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-5 max-w-2xl text-base leading-8 text-slate-500 sm:text-lg"
          >
            My academic journey and educational background.
          </motion.p>
        </motion.div>

        {/* ================= TIMELINE ================= */}

        <div className="relative mt-14">
          {/* Desktop timeline background */}
          <div className="absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 overflow-hidden bg-white/5 md:block">
            {/* Animated timeline glow */}
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 1.8,
                ease: "easeInOut",
              }}
              className="w-full bg-gradient-to-b from-indigo-400/70 via-violet-500/50 to-transparent"
            />
          </div>

          {/* Mobile timeline */}
          <div className="absolute bottom-0 left-5 top-0 w-px overflow-hidden bg-white/5 md:hidden">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 1.8,
                ease: "easeInOut",
              }}
              className="w-full bg-gradient-to-b from-indigo-400/70 via-violet-500/50 to-transparent"
            />
          </div>

          <div className="space-y-10 md:space-y-16">
            {portfolioData.education.map((education, index) => {
              const isRight = index % 2 === 0;

              return (
                <motion.div
                  key={`${education.institution}-${education.period}`}
                  initial={{
                    opacity: 0,
                    x: isRight ? 55 : -55,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.25,
                  }}
                  transition={{
                    duration: 0.75,
                    delay: index * 0.15,
                    ease: "easeOut",
                  }}
                  className="relative md:grid md:grid-cols-2 md:gap-16"
                >
                  {/* ================= TIMELINE NODE ================= */}

                  <motion.div
                    initial={{
                      scale: 0,
                      opacity: 0,
                    }}
                    whileInView={{
                      scale: 1,
                      opacity: 1,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.3,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.15 + 0.15,
                      type: "spring",
                      stiffness: 180,
                    }}
                    className="absolute left-5 top-7 z-10 flex h-10 w-10 -translate-x-1/2 items-center justify-center"
                  >
                    {/* Outer pulse */}
                    <motion.div
                      animate={{
                        scale: [1, 1.35, 1],
                        opacity: [0.25, 0, 0.25],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeOut",
                        delay: index * 0.4,
                      }}
                      className="absolute inset-0 rounded-full border border-indigo-400/30"
                    />

                    {/* Node */}
                    <motion.div
                      whileHover={{
                        scale: 1.12,
                        rotate: 5,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                      }}
                      className="relative flex h-10 w-10 items-center justify-center rounded-full border border-indigo-400/30 bg-[#050816] text-indigo-300 shadow-lg shadow-indigo-950/30"
                    >
                      <FaGraduationCap className="text-sm" />
                    </motion.div>
                  </motion.div>

                  {/* ================= EMPTY SIDE ================= */}

                  <div
                    className={`hidden md:block ${
                      isRight ? "order-1" : "order-2"
                    }`}
                  />

                  {/* ================= EDUCATION CARD ================= */}

                  <div
                    className={`ml-12 md:ml-0 ${
                      isRight ? "order-2" : "order-1"
                    }`}
                  >
                    <motion.div
                      whileHover={{
                        y: -7,
                        transition: {
                          duration: 0.25,
                        },
                      }}
                      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-7 shadow-xl shadow-black/10 backdrop-blur-xl transition-colors duration-500 hover:border-indigo-400/20 hover:bg-white/[0.045] sm:p-8"
                    >
                      {/* ================= CARD GLOW ================= */}

                      <motion.div
                        initial={{
                          opacity: 0,
                          scale: 0.7,
                        }}
                        whileInView={{
                          opacity: 1,
                          scale: 1,
                        }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.8,
                          delay: index * 0.15 + 0.25,
                        }}
                        className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-indigo-500/5 blur-3xl transition duration-500 group-hover:bg-indigo-500/10"
                      />

                      {/* Animated shine */}
                      <motion.div
                        initial={{
                          x: "-120%",
                        }}
                        whileHover={{
                          x: "120%",
                        }}
                        transition={{
                          duration: 0.8,
                          ease: "easeInOut",
                        }}
                        className="pointer-events-none absolute inset-y-0 w-24 -skew-x-12 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent"
                      />

                      <div className="relative">
                        {/* ================= TOP ROW ================= */}

                        <div className="flex items-center justify-between gap-4">
                          <motion.span
                            whileHover={{
                              scale: 1.04,
                            }}
                            className="inline-flex rounded-full border border-indigo-400/20 bg-indigo-500/10 px-3 py-1.5 text-xs font-semibold text-indigo-300"
                          >
                            {education.period}
                          </motion.span>

                          <span className="text-xs font-medium tracking-widest text-slate-700 transition-colors duration-300 group-hover:text-indigo-400/50">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                        </div>

                        {/* ================= QUALIFICATION ================= */}

                        <motion.h3
                          initial={{
                            opacity: 0,
                            y: 8,
                          }}
                          whileInView={{
                            opacity: 1,
                            y: 0,
                          }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.5,
                            delay: index * 0.15 + 0.3,
                          }}
                          className="mt-6 text-xl font-bold leading-tight text-white transition-colors duration-300 group-hover:text-indigo-50 sm:text-2xl"
                        >
                          {education.qualification}
                        </motion.h3>

                        {/* ================= INSTITUTION ================= */}

                        <p className="mt-3 max-w-md leading-7 text-slate-400 transition-colors duration-300 group-hover:text-slate-300">
                          {education.institution}
                        </p>

                        {/* ================= RESULT ================= */}

                        <div className="mt-7 flex items-end justify-between border-t border-white/10 pt-5">
                          <div>
                            <div className="flex items-center gap-2">
                              <FiBookOpen className="text-xs text-indigo-400/60" />

                              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">
                                Result
                              </span>
                            </div>

                            <motion.p
                              whileHover={{
                                x: 4,
                              }}
                              transition={{
                                duration: 0.2,
                              }}
                              className="mt-2 text-lg font-semibold text-indigo-300"
                            >
                              {education.result}
                            </motion.p>
                          </div>

                          <motion.div
                            whileHover={{
                              x: 4,
                              y: -4,
                              rotate: 4,
                            }}
                            transition={{
                              type: "spring",
                              stiffness: 300,
                            }}
                            className="text-slate-700 transition-colors duration-300 group-hover:text-indigo-300"
                          >
                            <FiArrowUpRight />
                          </motion.div>
                        </div>
                      </div>

                      {/* Bottom animated accent */}
                      <motion.div
                        initial={{
                          width: 0,
                        }}
                        whileInView={{
                          width: "30%",
                        }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.8,
                          delay: index * 0.15 + 0.4,
                        }}
                        className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-indigo-400/70 to-transparent"
                      />
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ================= BOTTOM SUMMARY ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          className="mt-16 flex items-center justify-center"
        >
          <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.025] px-5 py-3 backdrop-blur-xl">
            <motion.div
              animate={{
                rotate: [0, 8, -8, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500/10 text-indigo-300"
            >
              <FaGraduationCap className="text-sm" />
            </motion.div>

            <span className="text-xs font-medium text-slate-500 sm:text-sm">
              Building knowledge through continuous learning
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Education;