import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaAward,
  FaCalendarAlt,
  FaBuilding,
  FaTimes,
  FaExpand,
} from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

import { portfolioData } from "../data/portfolioData";

function Certifications() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  return (
    <section
      id="certifications"
      className="relative overflow-hidden px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-32"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0">
        {/* Main animated glow */}
        <motion.div
          animate={{
            x: [0, 35, 0],
            y: [0, -25, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[-8%] top-[10%] h-80 w-80 rounded-full bg-blue-600/5 blur-[130px]"
        />

        {/* Secondary animated glow */}
        <motion.div
          animate={{
            x: [0, -35, 0],
            y: [0, 25, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 13,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[8%] right-[-8%] h-80 w-80 rounded-full bg-purple-600/5 blur-[130px]"
        />

        {/* Small ambient particles */}
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
          className="absolute left-[15%] top-[25%] h-1.5 w-1.5 rounded-full bg-blue-400/30"
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
          className="absolute right-[18%] top-[35%] h-2 w-2 rounded-full bg-purple-400/30"
        />

        <motion.div
          animate={{
            y: [0, -12, 0],
            opacity: [0.15, 0.35, 0.15],
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
            SECTION HEADER
        ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="mb-16 text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300 backdrop-blur-md"
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
              <FaAward />
            </motion.span>

            Certifications & Achievements
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.15,
            }}
            className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Learning,{" "}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
              Certifications & Growth
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.25,
            }}
            className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg"
          >
            A collection of professional certifications, workshops,
            competitions, and coding achievements that reflect my continuous
            learning journey.
          </motion.p>
        </motion.div>

        {/* =========================================================
            CERTIFICATES GRID
        ========================================================= */}

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {portfolioData.certifications.map((certificate, index) => (
            <motion.article
              key={certificate.title}
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
                amount: 0.15,
              }}
              transition={{
                duration: 0.65,
                delay: index * 0.08,
                ease: "easeOut",
              }}
              whileHover={{
                y: -8,
              }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] shadow-xl shadow-black/10 backdrop-blur-xl transition-colors duration-500 hover:border-blue-400/20 hover:bg-white/[0.05]"
            >
              {/* Card glow */}
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
                  delay: index * 0.08 + 0.2,
                }}
                className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-blue-500/5 blur-3xl transition duration-500 group-hover:bg-blue-500/10"
              />

              {/* =====================================================
                  CERTIFICATE IMAGE
              ===================================================== */}

              <button
                type="button"
                onClick={() => setSelectedCertificate(certificate)}
                className="relative block w-full overflow-hidden bg-slate-950 text-left"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <motion.img
                    src={certificate.image}
                    alt={certificate.title}
                    whileHover={{
                      scale: 1.07,
                    }}
                    transition={{
                      duration: 0.6,
                      ease: "easeOut",
                    }}
                    className="h-full w-full object-cover"
                  />

                  {/* Dark gradient */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-70" />

                  {/* Hover overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 flex items-center justify-center bg-black/45 backdrop-blur-[2px]"
                  >
                    <motion.div
                      initial={{
                        scale: 0.8,
                        opacity: 0,
                      }}
                      whileHover={{
                        scale: 1,
                        opacity: 1,
                      }}
                      className="flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-xl"
                    >
                      <FaExpand />
                      View Certificate
                    </motion.div>
                  </motion.div>

                  {/* Number */}
                  <div className="absolute right-4 top-4 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs font-semibold tracking-widest text-white/60 backdrop-blur-md">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>
              </button>

              {/* =====================================================
                  CERTIFICATE INFORMATION
              ===================================================== */}

              <div className="relative p-6">
                {/* Category + Date */}
                <div className="mb-5 flex items-start justify-between gap-3">
                  <motion.span
                    whileHover={{
                      scale: 1.04,
                    }}
                    className="rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1.5 text-xs font-medium text-blue-300"
                  >
                    {certificate.category}
                  </motion.span>

                  {certificate.date && (
                    <span className="flex items-center gap-1.5 text-right text-xs text-slate-500">
                      <FaCalendarAlt className="shrink-0" />
                      {certificate.date}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold leading-tight text-white transition-colors duration-300 group-hover:text-blue-300">
                  {certificate.title}
                </h3>

                {/* Issuer */}
                <div className="mt-3 flex items-center gap-2 text-sm text-slate-400">
                  <FaBuilding className="shrink-0 text-blue-400" />
                  <span>{certificate.issuer}</span>
                </div>

                {/* Description */}
                <p className="mt-4 text-sm leading-6 text-slate-400">
                  {certificate.description}
                </p>

                {/* Bottom action */}
                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                  <span className="text-xs font-medium uppercase tracking-[0.18em] text-slate-600">
                    View credential
                  </span>

                  <motion.div
                    whileHover={{
                      x: 4,
                      y: -4,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                    }}
                    className="text-slate-600 transition-colors duration-300 group-hover:text-blue-300"
                  >
                    <FiExternalLink />
                  </motion.div>
                </div>
              </div>

              {/* Animated bottom accent */}
              <motion.div
                initial={{
                  width: 0,
                }}
                whileInView={{
                  width: "35%",
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.08 + 0.35,
                }}
                className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-blue-400/70 to-transparent"
              />
            </motion.article>
          ))}
        </div>

        {/* =========================================================
            CODING ACHIEVEMENT
        ========================================================= */}

        {portfolioData.achievements?.length > 0 && (
          <div className="mt-20">
            {/* Heading */}
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
                duration: 0.6,
              }}
              className="mb-8"
            >
              <div className="mb-3 flex items-center gap-3">
                <motion.span
                  initial={{ width: 0 }}
                  whileInView={{ width: 32 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="h-px bg-blue-400"
                />

                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-300">
                  Milestones
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white sm:text-3xl">
                Coding Achievement
              </h3>

              <p className="mt-2 max-w-2xl text-slate-400">
                Milestones from my problem-solving and competitive programming
                journey.
              </p>
            </motion.div>

            {/* Achievement cards */}
            <div className="grid gap-6 md:grid-cols-2">
              {portfolioData.achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{
                    opacity: 0,
                    x: index % 2 === 0 ? -35 : 35,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.12,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    y: -5,
                  }}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-6 backdrop-blur-xl transition-colors duration-500 hover:border-blue-400/20"
                >
                  {/* Background glow */}
                  <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl transition duration-500 group-hover:bg-blue-500/15" />

                  <div className="relative flex gap-4">
                    {/* Icon */}
                    <motion.div
                      whileHover={{
                        scale: 1.08,
                        rotate: 5,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                      }}
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/15 text-xl text-blue-400"
                    >
                      <FaAward />
                    </motion.div>

                    <div>
                      <h4 className="text-lg font-bold text-white transition-colors duration-300 group-hover:text-blue-300">
                        {achievement.title}
                      </h4>

                      <p className="mt-2 text-sm leading-6 text-slate-400">
                        {achievement.description}
                      </p>
                    </div>
                  </div>

                  {/* Bottom accent */}
                  <motion.div
                    initial={{
                      width: 0,
                    }}
                    whileHover={{
                      width: "25%",
                    }}
                    transition={{
                      duration: 0.4,
                    }}
                    className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-blue-400/70 to-transparent"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* =========================================================
          FULLSCREEN CERTIFICATE VIEWER
      ========================================================= */}

      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.25,
            }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
            onClick={() => setSelectedCertificate(null)}
          >
            {/* Close Button */}
            <motion.button
              type="button"
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.8,
              }}
              whileHover={{
                scale: 1.08,
                rotate: 5,
              }}
              whileTap={{
                scale: 0.95,
              }}
              onClick={() => setSelectedCertificate(null)}
              className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white shadow-xl transition hover:bg-white/20"
              aria-label="Close certificate viewer"
            >
              <FaTimes />
            </motion.button>

            {/* Certificate container */}
            <motion.div
              initial={{
                scale: 0.88,
                y: 25,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                y: 0,
                opacity: 1,
              }}
              exit={{
                scale: 0.88,
                y: 25,
                opacity: 0,
              }}
              transition={{
                duration: 0.35,
                ease: "easeOut",
              }}
              className="relative max-h-[92vh] max-w-6xl overflow-hidden rounded-2xl border border-white/10 bg-slate-950 shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              {/* Top title bar */}
              <div className="flex items-center justify-between border-b border-white/10 bg-slate-950/90 px-4 py-3 backdrop-blur-md sm:px-5">
                <div className="min-w-0 pr-4">
                  <p className="truncate text-sm font-semibold text-white">
                    {selectedCertificate.title}
                  </p>

                  <p className="mt-0.5 text-xs text-slate-500">
                    {selectedCertificate.issuer}
                  </p>
                </div>

                <FaAward className="shrink-0 text-blue-400" />
              </div>

              {/* Certificate image */}
              <div className="flex max-h-[calc(92vh-65px)] items-center justify-center overflow-auto">
                <img
                  src={selectedCertificate.image}
                  alt={selectedCertificate.title}
                  className="max-h-[calc(92vh-65px)] max-w-full object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Certifications;