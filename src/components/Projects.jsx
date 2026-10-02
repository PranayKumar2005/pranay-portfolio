import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaPlay,
  FaTimes,
  FaExpand,
  FaCode,
  FaExternalLinkAlt,
} from "react-icons/fa";

import { portfolioData } from "../data/portfolioData";

function Projects() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const projects = portfolioData.projects;

  return (
    <section
      id="projects"
      className="relative overflow-hidden px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-32"
    >
      {/* =========================================================
          ANIMATED BACKGROUND
      ========================================================= */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 45, 0],
            y: [0, -30, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 13,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[-15%] top-[10%] h-72 w-72 rounded-full bg-indigo-600/5 blur-[120px] sm:left-[-10%] sm:h-80 sm:w-80 sm:blur-[130px]"
        />

        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 35, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[-15%] top-[45%] h-80 w-80 rounded-full bg-violet-600/5 blur-[120px] sm:right-[-10%] sm:h-96 sm:w-96 sm:blur-[140px]"
        />

        <motion.div
          animate={{
            opacity: [0.15, 0.35, 0.15],
            scale: [1, 1.25, 1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[5%] left-[35%] h-60 w-60 rounded-full bg-blue-600/5 blur-[110px] sm:h-64 sm:w-64 sm:blur-[120px]"
        />
      </div>

      <div className="relative mx-auto w-full max-w-7xl">
        {/* =========================================================
            HEADING
        ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-4xl"
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
              className="text-[11px] font-semibold uppercase tracking-[0.25em] text-indigo-300 sm:text-xs sm:tracking-[0.3em]"
            >
              My Work
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
            className="text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Projects that turn
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
              {" "}
              ideas into software.
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
            className="mt-5 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base sm:leading-8 lg:text-lg"
          >
            A collection of completed projects built across web development,
            artificial intelligence, data analytics, and software engineering.
          </motion.p>
        </motion.div>

        {/* =========================================================
            PROJECT COUNT
        ========================================================= */}
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.25,
          }}
          className="mt-7 flex items-center gap-3 text-sm text-slate-500 sm:mt-8"
        >
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

          <span>{projects.length} completed projects</span>
        </motion.div>

        {/* =========================================================
            PROJECT LIST
        ========================================================= */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.14,
              },
            },
          }}
          className="mt-10 space-y-7 sm:mt-12 sm:space-y-8 lg:mt-14"
        >
          {projects.map((project, index) => {
            const projectImages =
              project.media?.images?.length > 0
                ? project.media.images
                : project.media?.image
                ? [project.media.image]
                : [];

            return (
              <motion.article
                key={project.title}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 55,
                    scale: 0.97,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      duration: 0.75,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  },
                }}
                whileHover={{
                  y: -5,
                }}
                className="group relative w-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] shadow-2xl shadow-black/10 backdrop-blur-xl transition duration-500 hover:border-indigo-400/25 hover:bg-white/[0.035] hover:shadow-indigo-950/20"
              >
                {/* =================================================
                    MOVING CARD GLOW
                ================================================= */}
                <motion.div
                  animate={{
                    x: [0, 25, 0],
                    y: [0, -20, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.4,
                  }}
                  className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-indigo-500/5 blur-[90px] transition duration-500 group-hover:bg-indigo-500/15"
                />

                <div className="relative grid lg:grid-cols-[0.95fr_1.05fr]">
                  {/* =================================================
                      MEDIA
                  ================================================= */}
                  <div className="relative overflow-hidden border-b border-white/10 lg:min-h-[520px] lg:border-b-0 lg:border-r">
                    {projectImages.length > 0 ? (
                      <div className="flex h-full min-h-[340px] flex-col lg:min-h-[520px]">
                        {/* Main image */}
                        <button
                          type="button"
                          onClick={() =>
                            setSelectedImage({
                              images: projectImages,
                              index: 0,
                              title: project.title,
                            })
                          }
                          className="group/media relative min-h-[280px] flex-1 cursor-pointer overflow-hidden bg-slate-950 text-left sm:min-h-[360px] lg:min-h-0"
                          aria-label={`View ${project.title} screenshots`}
                        >
                          <motion.img
                            whileHover={{
                              scale: 1.045,
                            }}
                            transition={{
                              duration: 0.7,
                              ease: "easeOut",
                            }}
                            src={projectImages[0]}
                            alt={`${project.title} screenshot 1`}
                            className="h-full min-h-[280px] w-full object-contain sm:min-h-[360px]"
                          />

                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                          {/* Image shine */}
                          <motion.div
                            initial={{ x: "-120%" }}
                            whileHover={{ x: "120%" }}
                            transition={{
                              duration: 0.8,
                              ease: "easeInOut",
                            }}
                            className="pointer-events-none absolute inset-y-0 w-1/3 skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/10 to-transparent"
                          />

                          {/* Desktop overlay */}
                          <div className="absolute inset-x-0 bottom-0 hidden items-center justify-between p-6 opacity-0 transition duration-300 group-hover/media:opacity-100 sm:flex">
                            <span className="flex items-center gap-2 text-sm font-semibold text-white">
                              <FaExpand />
                              View Screenshots
                            </span>

                            <span className="rounded-full border border-white/10 bg-black/50 px-3 py-1.5 text-xs text-slate-300 backdrop-blur-md">
                              Click to expand
                            </span>
                          </div>

                          {/* Mobile hint */}
                          <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full border border-white/10 bg-black/55 px-3 py-2 text-xs font-medium text-white backdrop-blur-md sm:hidden">
                            <FaExpand className="text-[10px]" />
                            Tap to view
                          </div>
                        </button>

                        {/* =================================================
                            THUMBNAILS
                        ================================================= */}
                        {projectImages.length > 1 && (
                          <div className="flex gap-2 overflow-x-auto border-t border-white/10 bg-slate-950/80 p-3 sm:gap-3 sm:p-4">
                            {projectImages.map((image, imageIndex) => (
                              <motion.button
                                key={image}
                                type="button"
                                whileHover={{
                                  y: -3,
                                  scale: 1.04,
                                }}
                                whileTap={{
                                  scale: 0.96,
                                }}
                                onClick={() =>
                                  setSelectedImage({
                                    images: projectImages,
                                    index: imageIndex,
                                    title: project.title,
                                  })
                                }
                                className="group/thumb relative h-16 w-24 shrink-0 overflow-hidden rounded-lg border border-white/10 bg-slate-900 transition hover:border-indigo-400/60 sm:h-20 sm:w-28"
                              >
                                <img
                                  src={image}
                                  alt={`${project.title} screenshot ${
                                    imageIndex + 1
                                  }`}
                                  className="h-full w-full object-cover transition duration-500 group-hover/thumb:scale-110"
                                />

                                <div className="absolute inset-0 bg-indigo-500/0 transition duration-300 group-hover/thumb:bg-indigo-500/10" />

                                <span className="absolute bottom-1 right-1 rounded bg-black/75 px-1.5 py-0.5 text-[9px] font-semibold text-white">
                                  {imageIndex + 1}
                                </span>
                              </motion.button>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <ProjectPlaceholder title={project.title} />
                    )}

                    {/* =================================================
                        CATEGORY
                    ================================================= */}
                    <motion.div
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: 0.2,
                      }}
                      whileHover={{
                        y: -2,
                        scale: 1.03,
                      }}
                      className="absolute left-4 top-4 max-w-[70%] rounded-full border border-white/10 bg-slate-950/80 px-3 py-1.5 text-[11px] font-semibold text-indigo-200 shadow-lg backdrop-blur-md sm:left-5 sm:top-5 sm:px-4 sm:py-2 sm:text-xs"
                    >
                      {project.category}
                    </motion.div>

                    {/* =================================================
                        PROJECT NUMBER
                    ================================================= */}
                    <motion.div
                      initial={{ opacity: 0, x: 15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: 0.3,
                      }}
                      className="absolute right-4 top-4 rounded-full border border-white/10 bg-slate-950/80 px-2.5 py-1.5 text-[11px] font-medium text-slate-400 backdrop-blur-md sm:right-5 sm:top-5 sm:px-3 sm:py-2 sm:text-xs"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </motion.div>

                    {/* =================================================
                        DEMO BUTTON
                    ================================================= */}
                    {project.media?.video && (
                      <motion.button
                        type="button"
                        whileHover={{
                          y: -4,
                          scale: 1.04,
                        }}
                        whileTap={{
                          scale: 0.96,
                        }}
                        onClick={() =>
                          setSelectedVideo({
                            src: project.media.video,
                            title: project.title,
                          })
                        }
                        className="absolute bottom-[76px] right-4 flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/90 px-3.5 py-2 text-xs font-semibold text-white shadow-xl backdrop-blur-md transition duration-300 hover:border-indigo-400/30 hover:bg-indigo-600 sm:bottom-[88px] sm:right-5 sm:px-4 sm:py-2.5 sm:text-sm"
                        aria-label={`Watch ${project.title} demo`}
                      >
                        <motion.span
                          animate={{
                            scale: [1, 1.15, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                          }}
                        >
                          <FaPlay className="text-[10px]" />
                        </motion.span>
                        Demo
                      </motion.button>
                    )}
                  </div>

                  {/* =================================================
                      CONTENT
                  ================================================= */}
                  <div className="flex min-w-0 flex-col p-6 sm:p-9 lg:p-10">
                    <motion.p
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                      }}
                      className="text-[11px] font-semibold uppercase tracking-[0.25em] text-indigo-400 sm:text-xs"
                    >
                      Project {String(index + 1).padStart(2, "0")}
                    </motion.p>

                    <motion.h3
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.6,
                        delay: 0.08,
                      }}
                      className="mt-3 break-words text-2xl font-bold leading-tight text-white transition-colors duration-300 group-hover:text-indigo-50 sm:text-3xl"
                    >
                      {project.title}
                    </motion.h3>

                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.7,
                        delay: 0.15,
                      }}
                      className="mt-4 text-sm leading-7 text-slate-400 sm:mt-5 sm:text-base"
                    >
                      {project.description}
                    </motion.p>

                    {/* =================================================
                        FEATURES
                    ================================================= */}
                    <div className="mt-7 sm:mt-8">
                      <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500 sm:text-xs">
                        Key Features
                      </p>

                      <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                          hidden: {},
                          visible: {
                            transition: {
                              staggerChildren: 0.06,
                            },
                          },
                        }}
                        className="grid gap-3 sm:grid-cols-2"
                      >
                        {project.features.slice(0, 6).map((feature) => (
                          <motion.div
                            key={feature}
                            variants={{
                              hidden: {
                                opacity: 0,
                                x: -10,
                              },
                              visible: {
                                opacity: 1,
                                x: 0,
                              },
                            }}
                            className="group/feature flex min-w-0 items-start gap-3"
                          >
                            <motion.span
                              whileHover={{
                                scale: 1.5,
                              }}
                              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400"
                            />

                            <span className="min-w-0 text-sm leading-6 text-slate-300 transition-colors duration-300 group-hover/feature:text-white">
                              {feature}
                            </span>
                          </motion.div>
                        ))}
                      </motion.div>
                    </div>

                    {/* =================================================
                        TECHNOLOGIES
                    ================================================= */}
                    <div className="mt-7 sm:mt-8">
                      <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500 sm:text-xs">
                        Technologies
                      </p>

                      <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                          hidden: {},
                          visible: {
                            transition: {
                              staggerChildren: 0.05,
                            },
                          },
                        }}
                        className="flex flex-wrap gap-2"
                      >
                        {project.technologies.map((technology) => (
                          <motion.span
                            key={technology}
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
                            className="cursor-default rounded-lg border border-white/10 bg-slate-950/60 px-2.5 py-1.5 text-[11px] font-medium text-slate-300 transition duration-300 hover:border-indigo-400/30 hover:bg-indigo-500/10 hover:text-indigo-200 sm:px-3 sm:py-2 sm:text-xs"
                          >
                            {technology}
                          </motion.span>
                        ))}
                      </motion.div>
                    </div>

                    {/* =================================================
                        ACTIONS
                    ================================================= */}
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.6,
                        delay: 0.25,
                      }}
                      className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap"
                    >
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{
                          y: -3,
                          scale: 1.02,
                        }}
                        whileTap={{
                          scale: 0.98,
                        }}
                        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-semibold text-slate-950 transition duration-300 hover:bg-slate-200 sm:w-auto"
                      >
                        <FaGithub />
                        View on GitHub
                        <FaExternalLinkAlt className="ml-1 text-[10px]" />
                      </motion.a>

                      {project.media?.video && (
                        <motion.button
                          type="button"
                          whileHover={{
                            y: -3,
                            scale: 1.02,
                          }}
                          whileTap={{
                            scale: 0.98,
                          }}
                          onClick={() =>
                            setSelectedVideo({
                              src: project.media.video,
                              title: project.title,
                            })
                          }
                          className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3.5 text-sm font-semibold text-white transition duration-300 hover:border-indigo-400/25 hover:bg-indigo-500/10 sm:w-auto"
                        >
                          <FaPlay className="text-xs" />
                          Watch Demo
                        </motion.button>
                      )}
                    </motion.div>
                  </div>
                </div>

                {/* Bottom animated accent */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "32%" }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1,
                    delay: 0.45,
                  }}
                  className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-indigo-400/50 via-violet-400/20 to-transparent"
                />
              </motion.article>
            );
          })}
        </motion.div>
      </div>

      {/* =========================================================
          IMAGE GALLERY MODAL
      ========================================================= */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-3 backdrop-blur-md sm:p-5"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              type="button"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.1 }}
              onClick={() => setSelectedImage(null)}
              className="absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white transition hover:bg-white/20 sm:right-5 sm:top-5 sm:h-11 sm:w-11"
              aria-label="Close image gallery"
            >
              <FaTimes />
            </motion.button>

            <motion.div
              initial={{
                scale: 0.88,
                opacity: 0,
                y: 20,
              }}
              animate={{
                scale: 1,
                opacity: 1,
                y: 0,
              }}
              exit={{
                scale: 0.92,
                opacity: 0,
                y: 15,
              }}
              transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative flex max-h-[92vh] max-w-6xl flex-col overflow-hidden rounded-xl border border-white/10 bg-slate-950 shadow-2xl sm:rounded-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              {/* Main image */}
              <div className="flex min-h-0 flex-1 items-center justify-center p-2 sm:p-4">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={selectedImage.images[selectedImage.index]}
                    initial={{
                      opacity: 0,
                      scale: 0.96,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.96,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                    src={selectedImage.images[selectedImage.index]}
                    alt={`${selectedImage.title} screenshot ${
                      selectedImage.index + 1
                    }`}
                    className="max-h-[72vh] max-w-[94vw] object-contain sm:max-h-[75vh] sm:max-w-[85vw]"
                  />
                </AnimatePresence>
              </div>

              {/* Gallery thumbnails */}
              {selectedImage.images.length > 1 && (
                <div className="flex w-full items-center justify-center gap-2 overflow-x-auto border-t border-white/10 bg-black/40 p-3 sm:gap-3">
                  {selectedImage.images.map((image, imageIndex) => (
                    <motion.button
                      key={image}
                      type="button"
                      whileHover={{
                        y: -2,
                      }}
                      whileTap={{
                        scale: 0.95,
                      }}
                      onClick={() =>
                        setSelectedImage({
                          ...selectedImage,
                          index: imageIndex,
                        })
                      }
                      className={`h-12 w-16 shrink-0 overflow-hidden rounded-lg border-2 transition sm:h-14 sm:w-20 ${
                        imageIndex === selectedImage.index
                          ? "border-indigo-400"
                          : "border-white/10 opacity-60 hover:opacity-100"
                      }`}
                    >
                      <img
                        src={image}
                        alt={`Screenshot ${imageIndex + 1}`}
                        className="h-full w-full object-cover"
                      />
                    </motion.button>
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =========================================================
          VIDEO MODAL
      ========================================================= */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-3 backdrop-blur-md sm:p-5"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.button
              type="button"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.1 }}
              onClick={() => setSelectedVideo(null)}
              className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white transition hover:bg-white/20 sm:right-5 sm:top-5 sm:h-11 sm:w-11"
              aria-label="Close video"
            >
              <FaTimes />
            </motion.button>

            <motion.div
              initial={{
                scale: 0.88,
                opacity: 0,
                y: 20,
              }}
              animate={{
                scale: 1,
                opacity: 1,
                y: 0,
              }}
              exit={{
                scale: 0.92,
                opacity: 0,
                y: 15,
              }}
              transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="w-full max-w-5xl overflow-hidden rounded-xl border border-white/10 bg-black shadow-2xl sm:rounded-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              <video
                src={selectedVideo.src}
                controls
                autoPlay
                playsInline
                className="max-h-[82vh] w-full object-contain"
              >
                Your browser does not support video playback.
              </video>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

/* =========================================================
   PROJECT PLACEHOLDER
========================================================= */

function ProjectPlaceholder({ title }) {
  return (
    <div className="flex min-h-[340px] h-full items-center justify-center bg-gradient-to-br from-slate-950 via-indigo-950/60 to-violet-950/60 p-6 sm:min-h-[360px] sm:p-8 lg:min-h-[520px]">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <motion.div
          animate={{
            y: [0, -6, 0],
            rotate: [0, 2, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-xl text-indigo-300 sm:h-16 sm:w-16 sm:text-2xl"
        >
          <FaCode />
        </motion.div>

        <p className="text-base font-semibold text-white sm:text-lg">
          {title}
        </p>

        <p className="mt-2 text-xs text-slate-400 sm:text-sm">
          Project screenshot will appear here
        </p>
      </motion.div>
    </div>
  );
}

export default Projects;