"use client"

import type React from "react"
import { useRef } from "react"
import { cn } from "@/lib/utils"

type PremiumCardProps = {
  children: React.ReactNode
  className?: string
  as?: "div" | "article"
}

export function PremiumCard({ children, className, as = "div" }: PremiumCardProps) {
  const ref = useRef<HTMLDivElement>(null)

  const handlePointer = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`)
    el.style.setProperty("--my", `${e.clientY - rect.top}px`)
  }

  const Comp = as as any

  return (
    <Comp
      ref={ref}
      onPointerMove={handlePointer}
      onPointerDown={handlePointer}
      className={cn("premium-card p-6", className)}
    >
      {children}
    </Comp>
  )
}
