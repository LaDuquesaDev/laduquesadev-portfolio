"use client"

import { useEffect, useState } from "react"
import styled, { keyframes } from "styled-components"

const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`

const bob = keyframes`
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-6px); }
`

const wag = keyframes`
  0%, 100% { transform: rotate(-12deg); }
  50%       { transform: rotate(14deg); }
`

const FoxContainer = styled.div`
  position: fixed;
  right: 20px;
  bottom: 80px;
  z-index: 50;
  pointer-events: none;
  opacity: 0;
  animation:
    ${fadeIn} 0.6s ease-out forwards,
    ${bob} 3s ease-in-out 0.6s infinite;

  @media (max-width: 900px) {
    right: 12px;
    bottom: 64px;
  }

  @media (max-width: 640px) {
    display: none;
  }
`

const TailGroup = styled.g`
  transform-box: fill-box;
  transform-origin: 0% 100%;
  animation: ${wag} 0.85s ease-in-out infinite;
`

const FoxSVG = () => (
  <svg
    width="90"
    height="100"
    viewBox="0 0 90 100"
    xmlns="http://www.w3.org/2000/svg"
    shapeRendering="crispEdges"
  >
    {/* TAIL — drawn first so body/head sit on top */}
    <TailGroup>
      {/* Base segment — connects to body right side */}
      <rect x="50" y="60" width="18" height="14" fill="#3D1A00" />
      <rect x="52" y="62" width="14" height="10" fill="#9e5f28" />
      {/* Mid segment */}
      <rect x="58" y="50" width="18" height="14" fill="#3D1A00" />
      <rect x="60" y="52" width="14" height="10" fill="#9e5f28" />
      {/* Upper segment */}
      <rect x="64" y="40" width="20" height="14" fill="#3D1A00" />
      <rect x="66" y="42" width="16" height="10" fill="#9e5f28" />
      {/* Cream tip */}
      <rect x="70" y="40" width="12" height="10" fill="#F0DEC0" />
    </TailGroup>

    {/* LEFT EAR — prominent (closer in 3/4 view) */}
    <rect x="9"  y="0"  width="10" height="4"  fill="#3D1A00" />
    <rect x="7"  y="4"  width="4"  height="8"  fill="#3D1A00" />
    <rect x="11" y="4"  width="7"  height="8"  fill="#9e5f28" />
    <rect x="18" y="4"  width="4"  height="8"  fill="#3D1A00" />

    {/* RIGHT EAR — slightly smaller (further in 3/4 view) */}
    <rect x="44" y="2"  width="8"  height="4"  fill="#3D1A00" />
    <rect x="43" y="6"  width="4"  height="6"  fill="#3D1A00" />
    <rect x="47" y="6"  width="5"  height="6"  fill="#9e5f28" />
    <rect x="52" y="6"  width="4"  height="6"  fill="#3D1A00" />

    {/* HEAD — outline + orange fill */}
    <rect x="4"  y="12" width="56" height="4"  fill="#3D1A00" />
    <rect x="0"  y="16" width="4"  height="36" fill="#3D1A00" />
    <rect x="56" y="16" width="4"  height="36" fill="#3D1A00" />
    <rect x="4"  y="16" width="52" height="36" fill="#9e5f28" />

    {/* LEFT EYE — open and friendly, slightly bigger */}
    <rect x="8"  y="24" width="14" height="7"  fill="#1A0800" />
    <rect x="10" y="24" width="4"  height="3"  fill="#ffffff" />

    {/* RIGHT EYE — open and friendly, slightly smaller */}
    <rect x="36" y="24" width="12" height="7"  fill="#1A0800" />
    <rect x="38" y="24" width="4"  height="3"  fill="#ffffff" />

    {/* ROSY CHEEKS */}
    <rect x="5"  y="31" width="8"  height="3"  fill="#E07060" opacity="0.65" />
    <rect x="47" y="31" width="8"  height="3"  fill="#E07060" opacity="0.65" />

    {/* MUZZLE — shifted left for 3/4 feel */}
    <rect x="12" y="36" width="28" height="12" fill="#F0DEC0" />
    {/* Nose */}
    <rect x="20" y="36" width="10" height="6"  fill="#1A0800" />
    {/* Subtle smile hints */}
    <rect x="22" y="42" width="2"  height="2"  fill="#3D1A00" />
    <rect x="28" y="42" width="2"  height="2"  fill="#3D1A00" />

    {/* HEAD BOTTOM */}
    <rect x="0" y="52" width="60" height="4"  fill="#3D1A00" />

    {/* BODY */}
    <rect x="8"  y="56" width="4"  height="20" fill="#3D1A00" />
    <rect x="48" y="56" width="4"  height="20" fill="#3D1A00" />
    <rect x="12" y="56" width="36" height="20" fill="#9e5f28" />
    {/* Belly */}
    <rect x="18" y="58" width="24" height="16" fill="#F0DEC0" />

    {/* BODY BOTTOM */}
    <rect x="8" y="76" width="44" height="4"  fill="#3D1A00" />

    {/* LEFT LEG */}
    <rect x="8"  y="80" width="4"  height="10" fill="#3D1A00" />
    <rect x="12" y="80" width="12" height="10" fill="#9e5f28" />
    <rect x="24" y="80" width="4"  height="10" fill="#3D1A00" />

    {/* RIGHT LEG */}
    <rect x="32" y="80" width="4"  height="10" fill="#3D1A00" />
    <rect x="36" y="80" width="12" height="10" fill="#9e5f28" />
    <rect x="48" y="80" width="4"  height="10" fill="#3D1A00" />

    {/* FEET */}
    <rect x="8"  y="90" width="20" height="4"  fill="#3D1A00" />
    <rect x="32" y="90" width="20" height="4"  fill="#3D1A00" />
    <rect x="12" y="86" width="3"  height="4"  fill="#9e5f28" />
    <rect x="17" y="86" width="3"  height="4"  fill="#9e5f28" />
    <rect x="36" y="86" width="3"  height="4"  fill="#9e5f28" />
    <rect x="41" y="86" width="3"  height="4"  fill="#9e5f28" />
  </svg>
)

export const PixelFox = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const about = document.getElementById("about")
    if (!about) return

    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )

    observer.observe(about)
    return () => observer.disconnect()
  }, [])

  if (!visible) return null

  return (
    <FoxContainer>
      <FoxSVG />
    </FoxContainer>
  )
}
