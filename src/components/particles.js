import React from "react"
import styled from "@emotion/styled"
import particlesConfig from "../config/particles.json"
import { useContext } from "react"
import pageOptionsContext from "../context/pageOptionsContext"
import ReactParticles from "react-particles-js"

const ParticlesBackground = styled(ReactParticles)`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
`

export default function Particles() {
  const { pageOptions } = useContext(pageOptionsContext)

  return (
    <ParticlesBackground
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
