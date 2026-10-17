import React from 'react'

interface MountainDividerProps {
  fillColor?: string
  backgroundColor?: string
  inverted?: boolean
  className?: string
}

export const MountainDivider: React.FC<MountainDividerProps> = ({
  fillColor = '#0A0A0A',
  backgroundColor = 'transparent',
  inverted = false,
  className = ''
}) => {
  return (
    <div
      className={`relative w-full overflow-hidden leading-none pointer-events-none select-none ${className}`}
      style={{ backgroundColor }}
    >
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full h-5 sm:h-7 md:h-9 lg:h-10 block ${inverted ? 'rotate-180' : ''}`}
        preserveAspectRatio="none"
      >
        {/* Layer 1 - distant peak shadow */}
        <path
          d="M0,60 L120,25 L260,80 L380,10 L500,55 L650,20 L800,75 L920,15 L1080,70 L1240,30 L1360,65 L1440,35 L1440,120 L0,120 Z"
          fill={fillColor}
          fillOpacity="0.45"
        />
        {/* Layer 2 - foreground sharp jagged mountain ridge */}
        <path
          d="M0,85 L160,40 L290,95 L440,30 L590,80 L760,35 L900,90 L1040,25 L1200,80 L1340,45 L1440,75 L1440,120 L0,120 Z"
          fill={fillColor}
        />
      </svg>
    </div>
  )
}
