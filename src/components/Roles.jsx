import { motion } from "framer-motion";
import {
  FaUsers,
  FaRocket,
  FaHandsHelping,
  FaArrowRight,
} from "react-icons/fa";

import { portfolioData } from "../data/portfolioData";

function Roles() {
  const roleIcons = [FaUsers, FaRocket, FaHandsHelping];

  return (
    <section
      id="roles"
      className="relative overflow-hidden px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-32"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0">
        {/* Animated blue glow */}
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
          className="absolute left-[10%] top-[8%] h-72 w-72 rounded-full bg-blue-600/5 blur-[120px]"
        />

        {/* Animated purple glow */}
        <motion.div
          animate={{
            x: [0, -35, 0],
            y: [0, 25, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[8%] right-[10%] h-72 w-72 rounded-full bg-purple-600/5 blur-[120px]"
        />

        {/* Floating particles */}
        <motion.div
          animate={{
            y: [0, -18, 0],
            opacity: [0.15, 0.45, 0.15],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[22%] top-[30%] h-1.5 w-1.5 rounded-full bg-blue-400/30"
        />

        <motion.div
          animate={{
            y: [0, 15, 0],
            opacity: [0.15, 0.4, 0.15],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute right-[25%] top-[40%] h-2 w-2 rounded-full bg-purple-400/30"
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
          className="absolute bottom-[20%] left-[45%] h-1.5 w-1.5 rounded-full bg-blue-300/30"
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* =========================================================
            HEADING
        ========================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="mb-16 text-center"
        >
          {/* Section badge */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
              y: 10,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
            }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-500/10 px-4 py-2 text-sm text-purple-300 backdrop-blur-md"
          >
            <motion.span
              animate={{
                rotate: [0, 8, -8, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <FaUsers />
            </motion.span>

            Leadership & Roles
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{
              opacity: 0,
              y: 18,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
            className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Beyond{" "}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
              Coding
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{
              opacity: 0,
              y: 15,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
            className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg"
          >
            Experiences that have helped me develop leadership, collaboration,
            responsibility, and teamwork skills.
          </motion.p>
        </motion.div>

        {/* =========================================================
            ROLE CARDS
        ========================================================= */}

        <div className="grid gap-7 md:grid-cols-3">
          {portfolioData.roles.map((role, index) => {
            const Icon = roleIcons[index % roleIcons.length];

            return (
              <motion.div
                key={role}
                initial={{
                  opacity: 0,
                  y: 45,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.14,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -8,
                }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-7 shadow-xl shadow-black/10 backdrop-blur-xl transition-colors duration-500 hover:border-blue-400/20 hover:bg-white/[0.05] sm:p-8"
              >
                {/* =====================================================
                    CARD NUMBER
                ===================================================== */}

                <motion.div
                  initial={{
                    opacity: 0,
                    x: 10,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.14 + 0.2,
                  }}
                  className="absolute right-5 top-5 text-5xl font-black text-white/[0.035] transition-colors duration-500 group-hover:text-blue-400/[0.08]"
                >
                  0{index + 1}
                </motion.div>

                {/* =====================================================
                    ICON
                ===================================================== */}

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
                    duration: 0.5,
                    delay: index * 0.14 + 0.15,
                    type: "spring",
                    stiffness: 180,
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                  }}
                  className="relative mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 text-xl text-blue-400 transition-colors duration-300 group-hover:text-purple-300"
                >
                  {/* Icon pulse */}
                  <motion.div
                    animate={{
                      scale: [1, 1.25, 1],
                      opacity: [0.2, 0, 0.2],
                    }}
                    transition={{
                      duration: 2.8,
                      repeat: Infinity,
                      ease: "easeOut",
                      delay: index * 0.5,
                    }}
                    className="absolute inset-0 rounded-2xl border border-blue-400/20"
                  />

                  <Icon className="relative z-10" />
                </motion.div>

                {/* =====================================================
                    CONTENT
                ===================================================== */}

                <div className="relative">
                  <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-blue-300">
                    {role}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400 transition-colors duration-300 group-hover:text-slate-300">
                    Contributing through responsibility, collaboration, and
                    practical teamwork in academic and project environments.
                  </p>

                  {/* =====================================================
                      LEADERSHIP EXPERIENCE
                  ===================================================== */}

                  <motion.div
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
                      delay: index * 0.14 + 0.35,
                    }}
                    className="mt-7 flex items-center justify-between border-t border-white/10 pt-5"
                  >
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
                      Leadership Experience
                    </span>

                    <motion.div
                      whileHover={{
                        x: 5,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                      }}
                      className="text-blue-400 transition-colors duration-300 group-hover:text-purple-300"
                    >
                      <FaArrowRight />
                    </motion.div>
                  </motion.div>
                </div>

                {/* =====================================================
                    CARD SHINE
                ===================================================== */}

                <motion.div
                  initial={{
                    x: "-130%",
                  }}
                  whileHover={{
                    x: "130%",
                  }}
                  transition={{
                    duration: 0.8,
                    ease: "easeInOut",
                  }}
                  className="pointer-events-none absolute inset-y-0 w-24 -skew-x-12 bg-gradient-to-r from-transparent via-white/[0.035] to-transparent"
                />

                {/* =====================================================
                    HOVER GLOW
                ===================================================== */}

                <div className="pointer-events-none absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-blue-500/5 blur-3xl transition duration-500 group-hover:bg-purple-500/15" />

                {/* Bottom accent */}
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
                    delay: index * 0.14 + 0.4,
                  }}
                  className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-blue-400/70 to-transparent"
                />
              </motion.div>
            );
          })}
        </div>

        {/* =========================================================
            BOTTOM SUMMARY
        ========================================================= */}

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
          className="mt-14 flex justify-center"
        >
          <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.025] px-5 py-3 backdrop-blur-xl">
            <motion.div
              animate={{
                scale: [1, 1.08, 1],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="h-2 w-2 rounded-full bg-blue-400"
            />

            <span className="text-xs font-medium text-slate-500 sm:text-sm">
              Growing through collaboration and leadership
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Roles;