"use client"

import Image from "next/image"
import { motion, useReducedMotion } from "framer-motion"
import { Mail, Globe } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons"

const socials = [
  { icon: GithubIcon, label: "GitHub", href: "https://github.com/PavieshKumar1234" },
  { icon: LinkedinIcon, label: "LinkedIn", href: "#connect" },
  { icon: Mail, label: "Email", href: "mailto:pavieshkumar8@gmail.com" },
  { icon: Globe, label: "Portfolio", href: "#about" },
]

export function Hero() {
  const reduce = useReducedMotion()

  const T = {
    atmosphere: 0.2,
    name: 0.6,
    hey: reduce ? 0.6 : 1.8,
    quote: reduce ? 0.6 : 2.2,
    robot: reduce ? 0.6 : 1.2,
    engineer: reduce ? 0.6 : 2.5,
    bottom: reduce ? 0.6 : 3.0,
  }

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#05070A] text-[#F8FAFC]">
      {/* Background gradient */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: T.atmosphere }}
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 70% 20%, #0B1220 0%, #05070A 60%)",
        }}
      />

      {/* Grid */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.45 }}
        transition={{ duration: 1.4, delay: T.atmosphere }}
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "62px 62px",
          maskImage:
            "radial-gradient(ellipse 85% 75% at 50% 40%, black 40%, transparent 100%)",
        }}
      />

      {/* Glow near robot */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6, delay: T.robot }}
        className="pointer-events-none absolute right-0 top-1/2 h-[85vh] w-[85vh] -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(34,211,238,0.14) 0%, transparent 62%)",
        }}
      />

      {/* Particles */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {particles.map((p, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, p.o, 0], y: [0, -18, 0] }}
            transition={{
              duration: p.d,
              delay: T.atmosphere + p.delay,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="absolute rounded-full bg-[#22D3EE]"
            style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.s, height: p.s }}
          />
        ))}
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#05070A] to-transparent"
      />

      {/* Top nav */}
      <motion.nav
        initial={{ opacity: 0, y: -14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: T.atmosphere + 0.2 }}
        className="relative z-30 mx-auto flex max-w-7xl items-center justify-between border-b border-white/10 px-6 py-6 md:px-10"
      >
        <span className="font-display text-sm font-bold tracking-[0.25em]">
          PAVIESH KUMAR
        </span>

        <span className="hidden text-xs font-medium tracking-[0.4em] text-white/55 md:block">
          MENU
        </span>

        <a
          href="#connect"
          className="rounded-full border border-white/20 px-5 py-2 text-xs font-semibold tracking-[0.15em] transition-colors hover:border-[#22D3EE] hover:text-[#22D3EE]"
        >
          LET&apos;S TALK!
        </a>
      </motion.nav>

      {/* Professional large background name */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-6 top-[48%] z-10 hidden max-w-[48vw] -translate-y-1/2 md:left-10 md:block lg:left-14"
      >
        <motion.h1
          initial={reduce ? { opacity: 0.18 } : { opacity: 0, x: -40, filter: "blur(10px)" }}
          animate={{ opacity: 0.18, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, delay: T.name, ease: [0.22, 1, 0.36, 1] }}
          className="select-none font-display text-[clamp(4.5rem,8vw,8rem)] font-extrabold uppercase leading-[0.88] tracking-[-0.05em] text-white"
          style={{
            textShadow: "0 10px 30px rgba(0,0,0,0.5)",
          }}
        >
          PAVIESH
          <br />
          KUMAR K
        </motion.h1>
      </div>

      {/* Robot */}
      <div className="pointer-events-none absolute inset-y-0 right-0 z-20 flex w-full items-center justify-center md:w-[58%] md:justify-end md:pr-4">
        <motion.div
          initial={reduce ? { opacity: 1 } : { opacity: 0, x: 60, filter: "blur(8px)" }}
          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.5, delay: T.robot, ease: [0.22, 1, 0.36, 1] }}
          className="anim-floaty relative h-[58vh] w-full max-w-2xl md:h-[85vh]"
        >
          <Image
            src="/images/hero-robot.png"
            alt="Realistic white and silver humanoid AI robot"
            fill
            priority
            className="object-contain object-bottom md:object-right-bottom"
          />
        </motion.div>
      </div>

      {/* Hero content */}
      <div className="relative z-20 mx-auto flex min-h-[calc(100vh-160px)] max-w-7xl flex-col justify-center px-6 md:px-10">
        <div className="max-w-xl">
          <motion.p
            initial={reduce ? { opacity: 1 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: T.hey, ease: [0.22, 1, 0.36, 1] }}
            className="font-script text-5xl text-[#F8FAFC] md:text-6xl"
          >
            Hey! I&apos;m
          </motion.p>

          {/* Mobile visible name */}
          <motion.h1
            initial={reduce ? { opacity: 1 } : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: T.name + 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-3 font-display text-4xl font-bold uppercase tracking-[-0.03em] text-white md:hidden"
          >
            Paviesh Kumar K
          </motion.h1>

          <motion.div
            initial={reduce ? { opacity: 1 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: T.engineer, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8"
          >
            <p className="font-display text-2xl font-bold tracking-[0.2em] text-[#F8FAFC] md:text-4xl">
              AI &amp; ML ENGINEER
            </p>

            <p className="mt-3 max-w-md text-sm leading-relaxed text-[#CBD5E1] md:text-base">
              Building intelligent web applications, AI tools, and real-world software projects.
            </p>
          </motion.div>

          {/* Quote moved to left side */}
          <motion.div
            initial={reduce ? { opacity: 1 } : { opacity: 0, y: 18, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: T.quote, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-lg rounded-2xl border border-white/10 bg-white/[0.06] p-5 shadow-[0_20px_50px_rgba(0,0,0,0.35)] backdrop-blur-md"
          >
            <p className="text-sm italic leading-relaxed text-[#E2E8F0] md:text-base">
              “Success comes from consistent effort, smart learning, and the courage to keep improving every day.”
            </p>
          </motion.div>
        </div>
      </div>

      {/* Bottom row */}
      <motion.div
        initial={reduce ? { opacity: 1 } : { opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: T.bottom, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-x-0 bottom-0 z-30 mx-auto max-w-7xl px-6 pb-6 md:px-10"
      >
        <div className="flex flex-col gap-6 border-t border-white/10 pt-5 md:flex-row md:items-end md:justify-between">
          <p className="max-w-xs text-xs leading-relaxed text-[#CBD5E1]/80">
            Second-year AI &amp; ML student from Coimbatore, building projects with Python, AI, and full-stack
            development.
          </p>

          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:border-[#22D3EE] hover:text-[#22D3EE]"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>

          <p className="max-w-xs text-xs leading-relaxed text-[#CBD5E1]/80 md:text-right">
            Open for internships, collaborations, and learning opportunities.
          </p>
        </div>
      </motion.div>
    </section>
  )
}

const particles = [
  { x: 12, y: 30, s: 3, o: 0.6, d: 5, delay: 0.2 },
  { x: 22, y: 60, s: 2, o: 0.4, d: 6, delay: 1.1 },
  { x: 35, y: 20, s: 2, o: 0.5, d: 7, delay: 0.6 },
  { x: 48, y: 75, s: 3, o: 0.35, d: 5.5, delay: 1.6 },
  { x: 63, y: 40, s: 2, o: 0.5, d: 6.5, delay: 0.9 },
  { x: 72, y: 68, s: 3, o: 0.45, d: 5, delay: 1.3 },
  { x: 82, y: 28, s: 2, o: 0.55, d: 7, delay: 0.4 },
  { x: 90, y: 55, s: 2, o: 0.4, d: 6, delay: 1.8 },
  { x: 55, y: 15, s: 2, o: 0.5, d: 5.5, delay: 2.1 },
]