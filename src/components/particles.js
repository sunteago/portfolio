import React, { useEffect, useRef, useState } from "react"
import styled from "@emotion/styled"
import particlesConfig from "../config/particles.json"
import { useContext } from "react"
import pageOptionsContext from "../context/pageOptionsContext"
import ReactParticles from "react-particles-js"
import { navigatesFromMobile } from "../utils"

const Particles = () => {
  const { pageOptions } = useContext(pageOptionsContext)

  const [isMobile, setIsMobile] = useState(true)

  useEffect(() => {
    if (!navigatesFromMobile()) {
      setIsMobile(false)
    }
  }, [])

  let BackgroundComponent = () => React.createElement("div")

  if (!isMobile) {
    BackgroundComponent = ParticlesBackground
  }

  return (
    <BackgroundComponent
      params={{
        ...particlesConfig,
        particles: {
          ...particlesConfig.particles,
          color: pageOptions.darkMode ? "#f5d6ba" : "#2c2c54",
        },
      }}
    />
  )
}

export default React.memo(Particles, () => true)

const ParticlesBackground = styled(ReactParticles)`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
`
