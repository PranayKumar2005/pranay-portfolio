import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaPaperPlane,
  FaCheckCircle,
} from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

import { portfolioData } from "../data/portfolioData";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (submitted) {
      setSubmitted(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio Contact from ${formData.name}`
    );

    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:${portfolioData.personal.email}?subject=${subject}&body=${body}`;

    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-32"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0">
        {/* Blue glow */}
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

        {/* Purple glow */}
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
          className="absolute bottom-[5%] right-[-8%] h-80 w-80 rounded-full bg-purple-600/5 blur-[130px]"
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
          className="absolute left-[18%] top-[30%] h-1.5 w-1.5 rounded-full bg-blue-400/30"
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
          className="absolute right-[20%] top-[35%] h-2 w-2 rounded-full bg-purple-400/30"
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
          {/* Badge */}
          <motion.div
            initial={{
              opacity: 0,
              y: 10,
              scale: 0.95,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
            }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300 backdrop-blur-md"
          >
            <motion.span
              animate={{
                scale: [1, 1.12, 1],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <FaEnvelope />
            </motion.span>

            Get In Touch
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
            Let's{" "}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
              Connect
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
            Have a project idea, collaboration opportunity, or simply want to
            connect? Feel free to reach out.
          </motion.p>
        </motion.div>

        {/* =========================================================
            MAIN CONTACT GRID
        ========================================================= */}

        <div className="grid gap-7 lg:grid-cols-5">
          {/* =======================================================
              CONTACT INFORMATION
          ======================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -45,
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
              duration: 0.75,
              ease: "easeOut",
            }}
            className="lg:col-span-2"
          >
            <motion.div
              whileHover={{
                y: -5,
              }}
              className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-7 shadow-xl shadow-black/10 backdrop-blur-xl transition-colors duration-500 hover:border-blue-400/20 hover:bg-white/[0.05] sm:p-8"
            >
              {/* Card glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-blue-500/5 blur-3xl transition duration-500 group-hover:bg-blue-500/10" />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-white">
                    Contact Information
                  </h3>

                  <motion.div
                    animate={{
                      y: [0, -4, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400"
                  >
                    <FaEnvelope />
                  </motion.div>
                </div>

                <p className="mt-4 leading-7 text-slate-400">
                  I'm always open to discussing technology, projects,
                  internships, collaborations, and interesting ideas.
                </p>

                {/* =================================================
                    EMAIL
                ================================================= */}

                <motion.a
                  href={`mailto:${portfolioData.personal.email}`}
                  whileHover={{
                    x: 4,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                  }}
                  className="group/item mt-8 flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.03] p-4 transition-colors duration-300 hover:border-blue-400/30 hover:bg-blue-500/5"
                >
                  <motion.div
                    whileHover={{
                      scale: 1.08,
                      rotate: 5,
                    }}
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400"
                  >
                    <FaEnvelope />
                  </motion.div>

                  <div className="min-w-0 flex-1">
                    <p className="text-xs uppercase tracking-wider text-slate-500">
                      Email
                    </p>

                    <p className="mt-1 truncate text-sm text-slate-200">
                      {portfolioData.personal.email}
                    </p>
                  </div>

                  <FiArrowUpRight className="shrink-0 text-slate-600 transition duration-300 group-hover/item:-translate-y-1 group-hover/item:translate-x-1 group-hover/item:text-blue-300" />
                </motion.a>

                {/* =================================================
                    LOCATION
                ================================================= */}

                <motion.div
                  whileHover={{
                    x: 4,
                  }}
                  className="mt-4 flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.03] p-4 transition-colors duration-300 hover:border-purple-400/20 hover:bg-purple-500/5"
                >
                  <motion.div
                    animate={{
                      y: [0, -3, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400"
                  >
                    <FaMapMarkerAlt />
                  </motion.div>

                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-500">
                      Location
                    </p>

                    <p className="mt-1 text-sm text-slate-200">
                      {portfolioData.personal.location}
                    </p>
                  </div>
                </motion.div>

                {/* =================================================
                    SOCIAL LINKS
                ================================================= */}

                <div className="mt-8">
                  <p className="mb-4 text-sm font-medium text-slate-300">
                    Find me online
                  </p>

                  <div className="flex gap-3">
                    {/* GitHub */}
                    <motion.a
                      href={portfolioData.personal.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub"
                      whileHover={{
                        y: -5,
                        scale: 1.05,
                      }}
                      whileTap={{
                        scale: 0.95,
                      }}
                      className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-300 transition-colors duration-300 hover:border-white/20 hover:text-white"
                    >
                      <FaGithub />
                    </motion.a>

                    {/* LinkedIn */}
                    <motion.a
                      href={portfolioData.personal.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="LinkedIn"
                      whileHover={{
                        y: -5,
                        scale: 1.05,
                      }}
                      whileTap={{
                        scale: 0.95,
                      }}
                      className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-300 transition-colors duration-300 hover:border-blue-400/30 hover:text-blue-400"
                    >
                      <FaLinkedin />
                    </motion.a>
                  </div>
                </div>
              </div>

              {/* Bottom accent */}
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
                  delay: 0.4,
                }}
                className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-blue-400/70 to-transparent"
              />
            </motion.div>
          </motion.div>

          {/* =======================================================
              CONTACT FORM
          ======================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 45,
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
              duration: 0.75,
              ease: "easeOut",
            }}
            className="lg:col-span-3"
          >
            <motion.div
              whileHover={{
                y: -5,
              }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-7 shadow-xl shadow-black/10 backdrop-blur-xl transition-colors duration-500 hover:border-purple-400/20 hover:bg-white/[0.05] sm:p-10"
            >
              {/* Card glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-purple-500/5 blur-3xl transition duration-500 group-hover:bg-purple-500/10" />

              <div className="relative">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      Send Me a Message
                    </h3>

                    <p className="mt-2 text-slate-400">
                      Fill out the form below and your email application will
                      open with the message prepared.
                    </p>
                  </div>

                  <motion.div
                    animate={{
                      y: [0, -4, 0],
                      rotate: [0, 3, -3, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400 sm:flex"
                  >
                    <FaPaperPlane />
                  </motion.div>
                </div>

                {/* =================================================
                    FORM
                ================================================= */}

                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  {/* Name */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: 0.2,
                    }}
                  >
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-slate-300"
                    >
                      Your Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                      className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-white outline-none transition duration-300 placeholder:text-slate-600 focus:border-blue-400/50 focus:bg-blue-500/[0.03] focus:ring-2 focus:ring-blue-400/10"
                    />
                  </motion.div>

                  {/* Email */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: 0.3,
                    }}
                  >
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-slate-300"
                    >
                      Your Email
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                      className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-white outline-none transition duration-300 placeholder:text-slate-600 focus:border-blue-400/50 focus:bg-blue-500/[0.03] focus:ring-2 focus:ring-blue-400/10"
                    />
                  </motion.div>

                  {/* Message */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: 0.4,
                    }}
                  >
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium text-slate-300"
                    >
                      Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or idea..."
                      rows="6"
                      required
                      className="w-full resize-none rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-white outline-none transition duration-300 placeholder:text-slate-600 focus:border-purple-400/50 focus:bg-purple-500/[0.03] focus:ring-2 focus:ring-purple-400/10"
                    />
                  </motion.div>

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    whileHover={{
                      y: -3,
                      scale: 1.01,
                    }}
                    whileTap={{
                      scale: 0.98,
                    }}
                    className="group flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-4 font-semibold text-white shadow-lg shadow-blue-500/10 transition hover:shadow-blue-500/20"
                  >
                    <motion.span
                      animate={{
                        x: [0, 2, 0],
                      }}
                      transition={{
                        duration: 1.8,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <FaPaperPlane />
                    </motion.span>

                    Send Message

                    <FiArrowUpRight className="transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </motion.button>

                  {/* Submitted message */}
                  <AnimatePresence>
                    {submitted && (
                      <motion.div
                        initial={{
                          opacity: 0,
                          y: 10,
                          scale: 0.98,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                          scale: 1,
                        }}
                        exit={{
                          opacity: 0,
                          y: -5,
                        }}
                        className="flex items-center gap-2 rounded-xl border border-green-400/20 bg-green-500/10 p-4 text-sm text-green-300"
                      >
                        <FaCheckCircle />
                        Your email application should now be open.
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
              </div>

              {/* Bottom accent */}
              <motion.div
                initial={{
                  width: 0,
                }}
                whileInView={{
                  width: "40%",
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.9,
                  delay: 0.45,
                }}
                className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-purple-400/70 to-transparent"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* =========================================================
            BOTTOM CONTACT NOTE
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
            <motion.span
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="h-2 w-2 rounded-full bg-green-400"
            />

            <span className="text-xs font-medium text-slate-500 sm:text-sm">
              Open to meaningful conversations and opportunities
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;