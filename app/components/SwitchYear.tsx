"use client"

import { useParamsUniversityStore } from "@/lib/store"
import { useRouter } from "next/navigation"
import { useState, useRef, useEffect } from "react"

type AcademicYear = {
  id: number
  name: string
}

export default function SwitchYear({ year }: { year: number }) {
  const { setAcademicYear } = useParamsUniversityStore()
  const router = useRouter()

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [hoverStyle, setHoverStyle] = useState({})
  const [activeStyle, setActiveStyle] = useState({ left: "0px", width: "0px" })
  const yearRefs = useRef<(HTMLDivElement | null)[]>([])

  const years: AcademicYear[] = [
    {
      id: 1,
      name: "1ère Année",
    },
    {
      id: 2,
      name: "2ème Année",
    },
    {
      id: 3,
      name: "3ème Année",
    },
  ]

  // Update hover indicator position
  useEffect(() => {
    if (hoveredIndex !== null) {
      const hoveredElement = yearRefs.current[hoveredIndex]
      if (hoveredElement) {
        const { offsetLeft, offsetWidth } = hoveredElement
        setHoverStyle({
          left: `${offsetLeft}px`,
          width: `${offsetWidth}px`,
        })
      }
    }
  }, [hoveredIndex])

  // Update active indicator position
  useEffect(() => {
    const activeIndex = years.findIndex((y) => y.id === year)
    if (activeIndex >= 0) {
      const activeElement = yearRefs.current[activeIndex]
      if (activeElement) {
        const { offsetLeft, offsetWidth } = activeElement
        setActiveStyle({
          left: `${offsetLeft}px`,
          width: `${offsetWidth}px`,
        })
      }
    }
  }, [year])

  // Initialize active indicator on first render
  useEffect(() => {
    requestAnimationFrame(() => {
      const activeIndex = years.findIndex((y) => y.id === year)
      if (activeIndex >= 0) {
        const activeElement = yearRefs.current[activeIndex]
        if (activeElement) {
          const { offsetLeft, offsetWidth } = activeElement
          setActiveStyle({
            left: `${offsetLeft}px`,
            width: `${offsetWidth}px`,
          })
        }
      }
    })
  }, [year])

  return (
    <div className="relative">
      {/* Hover Highlight */}
      <div
        className="absolute h-[30px] transition-all duration-300 ease-out bg-[#0e0f1114] dark:bg-[#ffffff1a] rounded-[6px] flex items-center"
        style={{
          ...hoverStyle,
          opacity: hoveredIndex !== null ? 1 : 0,
        }}
      />

      {/* Active Indicator */}
      <div
        className="absolute bottom-[-6px] h-[2px] bg-[#0e0f11] dark:bg-white transition-all duration-300 ease-out"
        style={activeStyle}
      />

      {/* Year Tabs */}
      <div className="relative flex space-x-[6px] items-center">
        {years.map((y, index) => (
          <div
            key={y.id}
            ref={(el) => {
              yearRefs.current[index] = el;
            }}
            className={`px-3 py-2 cursor-pointer transition-colors duration-300 h-[30px] ${
              year === y.id ? "text-[#0e0e10] dark:text-white" : "text-[#0e0f1199] dark:text-[#ffffff99]"
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => {
              setAcademicYear(y.id)
              router.refresh()
            }}
          >
            <div className="text-sm font-medium leading-5 whitespace-nowrap flex items-center justify-center h-full">
              {y.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

