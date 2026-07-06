import CertificatesList from "@/components/certificates-list"
import ContactForm from "@/components/contact-form"
import { Reveal } from "@/components/reveal"
import { PremiumCard } from "@/components/premium-card"
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons"
import {
  Mail,
  ExternalLink,
  GraduationCap,
  Briefcase,
  Award,
  FileText,
  CheckCircle2,
} from "lucide-react"

const technical = [
  "Python",
  "Artificial Intelligence",
  "Machine Learning Basics",
  "Data Analysis",
  "HTML & CSS",
  "JavaScript",
  "React",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Streamlit",
  "GitHub",
]

const competencies = [
  "Problem Solving",
  "Teamwork",
  "Communication",
  "Time Management",
  "Creativity",
  "Continuous Learning",
]

const projects = [
  {
    name: "TaskFlow",
    subtitle: "Task Management App",
    desc: "A full-stack task management web application that allows users to create, update, delete, and track tasks efficiently with authentication, task status, priority, and due date management.",
    tech: ["React", "Node.js", "MongoDB"],
    live: "https://paviesh-taskflow.netlify.app/",
    github: "https://github.com/PavieshKumar1234/task-management-app",
  },
  {
    name: "CINEMAX",
    subtitle: "Movie Rating Dashboard",
    desc: "A Streamlit-based movie rating dashboard that allows users to analyze movie ratings, genres, and visual insights using Python data analysis libraries.",
    tech: ["Python", "Streamlit", "Pandas"],
    live: "https://cinemax-movie-dashboard-uvakjrtkxehckuh9wzxkwt.streamlit.app",
    github: "https://github.com/PavieshKumar1234/CINEMAX-",
  },
  {
    name: "AI Music Generator",
    subtitle: "Generative Audio",
    desc: "A music generation app that creates music using MIDI and CSV files with AI-based generation techniques.",
    tech: ["Python", "AI", "Streamlit"],
    live: "https://isai-ai-generator.streamlit.app",
    github: "https://github.com/PavieshKumar1234/isai-ai-generator",
  },
  {
    name: "LinguaWorld AI Translator",
    subtitle: "Language Tool",
    desc: "An AI-powered language translation tool with text translation, voice input, and text-to-speech features.",
    tech: ["Python", "Streamlit", "AI"],
    live: "https://linguaworldaitranslator.streamlit.app",
    github: "https://github.com/PavieshKumar1234/LinguaWorld_AI_Translator",
  },
  {
    name: "FAQ Robot Chatbot",
    subtitle: "Conversational AI",
    desc: "A smart FAQ chatbot that answers user questions using similarity matching and AI-based response logic.",
    tech: ["Python", "AI", "NLP"],
    live: "https://frequentlyaskedquestion-bot.streamlit.app",
    github: "https://github.com/PavieshKumar1234/faq-bot",
  },
  {
    name: "ShopEasy",
    subtitle: "E-Commerce App",
    desc: "A full-stack e-commerce web application with product listing, cart, checkout, user authentication, and admin product management.",
    tech: ["React", "Node.js", "MongoDB"],
    live: "https://paviesh-ecommerce.netlify.app/",
    github: "https://github.com/PavieshKumar1234/ecommerce-app",
  },
  {
    name: "OpenMind",
    subtitle: "Blog Platform",
    desc: "A full-stack blog platform with authentication, post creation, comments, profile features, and backend database connectivity.",
    tech: ["React", "Node.js", "MongoDB"],
    live: "https://openmind-lemon.vercel.app/",
    github: "https://github.com/PavieshKumar1234/openmind",
  },
]

const internships = [
  {
    company: "CodeAlpha",
    role: "AI Intern",
    status: "COMPLETED",
    desc: "Worked on AI-based application development projects including translator, chatbot, and music generation using Python and machine learning concepts.",
  },
  {
    company: "Thiranex",
    role: "Full Stack Intern",
    status: "COMPLETED",
    desc: "Built full-stack web applications using frontend, backend, database connectivity, responsive design, and deployment workflows.",
  },
  {
    company: "Infosys Springboard 7.0",
    role: "AI Intern",
    status: "IN PROGRESS",
    desc: "Currently undergoing the Infosys Springboard 7.0 Internship in the Artificial Intelligence domain, learning industry-relevant AI concepts and improving technical skills through professional modules.",
  },
]

const education = [
  {
    title: "B.E. CSE — AI & ML",
    place: "KPR Institute of Engineering and Technology, Coimbatore",
    meta: "CURRENT",
    desc: "Second Year Student. Focusing on programming, data science, artificial intelligence, machine learning, and real-world project development.",
    highlight: "First Year CGPA: 8.7",
  },
  {
    title: "Higher Secondary — HSC",
    place: "GRD - CPF MHSS",
    meta: "93.5%",
    desc: "Completed higher secondary education with strong academic focus on mathematics and core sciences.",
    button: "View 12th Certificate",
  },
  {
    title: "Secondary School — 10th",
    place: "GRD - CPF MHSS",
    meta: "92%",
    desc: "Completed secondary education with excellent academic standing.",
    button: "View 10th Certificate",
  },
]

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-12">
      <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#00BFE8]">
        {eyebrow}
      </span>
      <h2 className="mt-2 font-display text-3xl font-bold text-[#071A33] md:text-4xl">
        {title}
      </h2>
      <div className="mt-4 h-px w-full bg-[#DDE7F0]" />
    </div>
  )
}

function PrimaryButton({
  children,
  href,
}: {
  children: React.ReactNode
  href: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-full bg-[#00BFE8] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-[#009FC4] hover:shadow-[0_10px_24px_rgba(0,191,232,0.35)]"
    >
      {children}
    </a>
  )
}

function SecondaryButton({
  children,
  href,
}: {
  children: React.ReactNode
  href: string
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="inline-flex items-center gap-2 rounded-full border border-[#DDE7F0] bg-white px-5 py-2.5 text-sm font-semibold text-[#071A33] transition-all hover:-translate-y-0.5 hover:border-[#00BFE8] hover:bg-[#E0F7FF] hover:text-[#009FC4]"
    >
      {children}
    </a>
  )
}

export function Portfolio() {
  return (
    <main className="bg-[#F8FAFC] text-[#071A33]">
      <section id="about" className="mx-auto max-w-[1180px] px-6 py-24 md:px-10">
        <SectionHeading eyebrow="Introduction" title="About" />
        <Reveal>
          <PremiumCard className="p-8 md:p-10">
            <p className="text-lg leading-relaxed text-[#53657D]">
              I am a second-year B.E. Computer Science and Engineering student specializing in Artificial Intelligence
              and Machine Learning at <span className="font-semibold text-[#071A33]">KPRIET, Coimbatore</span>. I am
              passionate about AI, web development, data analysis, and building useful real-world projects. My goal is to
              grow into a skilled AI/ML engineer and contribute to innovative technology solutions.
            </p>
          </PremiumCard>
        </Reveal>
      </section>

      <section id="skills" className="mx-auto max-w-[1180px] px-6 py-24 md:px-10">
        <SectionHeading eyebrow="Expertise" title="Technical & Soft Skills" />
        <Reveal>
          <PremiumCard className="p-8 md:p-10">
            <div className="grid gap-10 md:grid-cols-2">
              <div>
                <h3 className="mb-5 font-display text-lg font-semibold text-[#071A33]">
                  Technical Arsenal
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {technical.map((s) => (
                    <span
                      key={s}
                      tabIndex={0}
                      className="chip cursor-default rounded-full border border-[#DDE7F0] bg-[#F8FAFC] px-4 py-2 text-sm font-medium text-[#071A33] outline-none"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-5 font-display text-lg font-semibold text-[#071A33]">
                  Core Competencies
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {competencies.map((s) => (
                    <span
                      key={s}
                      tabIndex={0}
                      className="chip cursor-default rounded-full border border-[#DDE7F0] bg-[#F8FAFC] px-4 py-2 text-sm font-medium text-[#071A33] outline-none"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </PremiumCard>
        </Reveal>
      </section>

      <section id="projects" className="mx-auto max-w-[1180px] px-6 py-24 md:px-10">
        <SectionHeading eyebrow="Work" title="My Projects" />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={(i % 3) * 0.08}>
              <PremiumCard as="article" className="flex h-full min-h-[410px] flex-col p-8">
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#00BFE8]">
                  {p.subtitle}
                </span>

                <h3 className="mt-1.5 font-display text-xl font-semibold text-[#071A33]">
                  {p.name}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-relaxed text-[#53657D]">
                  {p.desc}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-[#DDE7F0] bg-[#F8FAFC] px-3 py-1 text-xs font-medium text-[#53657D]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <PrimaryButton href={p.live}>
                    Live App
                    <ExternalLink className="h-4 w-4" />
                  </PrimaryButton>

                  <SecondaryButton href={p.github}>
                    <GithubIcon className="h-4 w-4" />
                    GitHub Repo
                  </SecondaryButton>
                </div>
              </PremiumCard>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-[1180px] px-6 py-24 md:px-10">
        <SectionHeading eyebrow="Experience" title="Internships & Experience" />

        <div className="grid gap-6 md:grid-cols-3">
          {internships.map((it, i) => (
            <Reveal key={it.company} delay={i * 0.08}>
              <PremiumCard className="flex h-full min-h-[300px] flex-col p-8">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E0F7FF] text-[#00BFE8] shadow-[0_10px_25px_rgba(0,191,232,0.16)]">
                    <Briefcase className="h-5 w-5" />
                  </span>

                  <span
                    className={
                      it.status === "IN PROGRESS"
                        ? "inline-flex items-center gap-1 rounded-full bg-[#E0F7FF] px-3 py-1 text-xs font-semibold text-[#009FC4]"
                        : "inline-flex items-center gap-1 rounded-full bg-[#E6F9F0] px-3 py-1 text-xs font-semibold text-[#0B9463]"
                    }
                  >
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    {it.status}
                  </span>
                </div>

                <h3 className="font-display text-xl font-semibold text-[#071A33]">
                  {it.company}
                </h3>

                <p className="mt-1 text-sm font-semibold text-[#00BFE8]">
                  {it.role}
                </p>

                <p className="mt-5 flex-1 text-sm leading-relaxed text-[#53657D]">
                  {it.desc}
                </p>
              </PremiumCard>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="education" className="mx-auto max-w-[1180px] px-6 py-24 md:px-10">
        <SectionHeading eyebrow="Academics" title="Education" />

        <div className="grid gap-6 md:grid-cols-3">
          {education.map((e, i) => (
            <Reveal key={e.title} delay={i * 0.08}>
              <PremiumCard className="flex h-full min-h-[300px] flex-col p-8">
                <div className="mb-4 flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E0F7FF] text-[#00BFE8]">
                    <GraduationCap className="h-5 w-5" />
                  </span>

                  <span className="rounded-full bg-[#071A33] px-3 py-1 text-xs font-semibold text-white">
                    {e.meta}
                  </span>
                </div>

                <h3 className="font-display text-lg font-semibold text-[#071A33]">
                  {e.title}
                </h3>

                <p className="mt-1 text-sm font-medium text-[#53657D]">
                  {e.place}
                </p>

                <p className="mt-3 flex-1 text-sm leading-relaxed text-[#53657D]">
                  {e.desc}
                </p>

                {e.highlight && (
                  <div className="mt-4 inline-flex items-center gap-2 self-start rounded-full border border-[#00BFE8]/40 bg-[#E0F7FF] px-4 py-2 text-sm font-semibold text-[#007EA3]">
                    <Award className="h-4 w-4" />
                    {e.highlight}
                  </div>
                )}

                {e.button && (
                  <div className="mt-5">
                    <SecondaryButton href="#certifications">
                      <FileText className="h-4 w-4" />
                      {e.button}
                    </SecondaryButton>
                  </div>
                )}
              </PremiumCard>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="certifications" className="mx-auto max-w-[1180px] px-6 py-24 md:px-10">
        <SectionHeading eyebrow="Recognition" title="Certifications & Achievements" />
        <CertificatesList />
      </section>

      <section id="connect" className="mx-auto max-w-[1180px] px-6 py-24 md:px-10">
        <SectionHeading eyebrow="Contact" title="Let's Connect" />

        <Reveal>
          <PremiumCard className="p-8 md:p-12">
            <p className="max-w-xl text-lg leading-relaxed text-[#53657D]">
              I am always open to discussing tech, AI, or new opportunities.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="flex items-center gap-3 rounded-2xl border border-[#DDE7F0] bg-[#F8FAFC] p-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#E0F7FF] text-[#00BFE8]">
                  <Mail className="h-5 w-5" />
                </span>

                <div>
                  <p className="text-xs font-medium text-[#53657D]">Email</p>
                  <p className="text-sm font-semibold text-[#071A33]">
                    pavieshkumar8@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-2xl border border-[#DDE7F0] bg-[#F8FAFC] p-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#E0F7FF] text-[#00BFE8]">
                  <GithubIcon className="h-5 w-5" />
                </span>

                <div>
                  <p className="text-xs font-medium text-[#53657D]">GitHub</p>
                  <p className="text-sm font-semibold text-[#071A33]">
                    @PavieshKumar1234
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <PrimaryButton href="mailto:pavieshkumar8@gmail.com">
                <Mail className="h-4 w-4" />
                Send an Email
              </PrimaryButton>

              <SecondaryButton href="https://www.linkedin.com/">
                <LinkedinIcon className="h-4 w-4" />
                Connect on LinkedIn
              </SecondaryButton>
            </div>

            <ContactForm />
          </PremiumCard>
        </Reveal>

        <p className="mt-12 text-center text-xs text-[#53657D]">
          © {new Date().getFullYear()} Paviesh Kumar K — AI & ML Engineer
        </p>
      </section>
    </main>
  )
}