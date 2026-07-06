"use client"

import { useEffect, useState } from "react"
import { Reveal } from "@/components/reveal"
import { PremiumCard } from "@/components/premium-card"
import { Award, FileText } from "lucide-react"

type Certificate = {
  _id: string
  title: string
  tag: string
  desc: string
  button: string
  fileUrl: string
}

function CertificateButton({
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
      className="inline-flex items-center gap-2 rounded-full border border-[#DDE7F0] bg-white px-5 py-2.5 text-sm font-semibold text-[#071A33] transition-all hover:-translate-y-0.5 hover:border-[#00BFE8] hover:bg-[#E0F7FF] hover:text-[#009FC4]"
    >
      {children}
    </a>
  )
}

export default function CertificatesList() {
  const [certificates, setCertificates] = useState<Certificate[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchCertificates() {
      try {
        const response = await fetch("/api/certificates")
        const data = await response.json()

        if (data.success) {
          setCertificates(data.certificates)
        }
      } catch (error) {
        console.error("Failed to fetch certificates:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchCertificates()
  }, [])

  if (loading) {
    return (
      <div className="rounded-2xl border border-[#DDE7F0] bg-white p-8 text-sm text-[#53657D] shadow-[0_12px_35px_rgba(7,26,51,0.08)]">
        Loading certificates...
      </div>
    )
  }

  if (certificates.length === 0) {
    return (
      <div className="rounded-2xl border border-[#DDE7F0] bg-white p-8 text-sm text-[#53657D] shadow-[0_12px_35px_rgba(7,26,51,0.08)]">
        No certificates added yet.
      </div>
    )
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {certificates.map((certificate, index) => (
        <Reveal key={certificate._id} delay={(index % 3) * 0.08}>
          <PremiumCard className="flex h-full min-h-[300px] flex-col p-8">
            <div className="mb-4 flex items-center justify-between gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E0F7FF] text-[#00BFE8]">
                <Award className="h-5 w-5" />
              </span>

              <span className="rounded-full border border-[#DDE7F0] px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-[#53657D]">
                {certificate.tag}
              </span>
            </div>

            <h3 className="font-display text-lg font-semibold text-[#071A33]">
              {certificate.title}
            </h3>

            <p className="mt-3 flex-1 text-sm leading-relaxed text-[#53657D]">
              {certificate.desc}
            </p>

            <div className="mt-5">
              <CertificateButton href={certificate.fileUrl}>
                <FileText className="h-4 w-4" />
                {certificate.button}
              </CertificateButton>
            </div>
          </PremiumCard>
        </Reveal>
      ))}
    </div>
  )
}