import React from 'react'
import TechText from './TechText'

const Hero = () => {
  return (
    <div style={{ width: '100%', height: '320px', position: 'relative' }}>
    <TechText
        text="EARL"
        fontWeight={600}
        fontSize={300}
        reveal="letter"
        dashLength={4}
        dashGap={4}
        specks={15}
        fontFamily="jersey"
        color="#2b73fc"
        accentColor="#3B82F6"
        letterSpacing={-0.02}
        reach={200}
        softness={0.7}
        strokeWidth={1.5}
        speed={1}
        lineStyle="solid"
        selection
        labels
        draggable={false}
        sweep
    />
    </div>
  )
}

export default Hero
