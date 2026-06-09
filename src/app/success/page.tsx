"use client"

import Link from "next/link"
import styled, { keyframes } from "styled-components"

const pop = keyframes`
  0% { transform: scale(0); opacity: 0; }
  60% { transform: scale(1.2); }
  100% { transform: scale(1); opacity: 1; }
`

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`

const Page = styled.main`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  text-align: center;
`

const Card = styled.div`
  max-width: 480px;
  width: 100%;
  background: ${({ theme }) => theme.secondary};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 24px;
  padding: 3rem 2rem;
  animation: ${fadeUp} 0.5s ease forwards;

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: -1px;
    left: 10%;
    right: 10%;
    height: 2px;
    background: linear-gradient(90deg, transparent, ${({ theme }) => theme.primary}, transparent);
  }
  position: relative;
`

const Emoji = styled.div`
  font-size: 4rem;
  margin-bottom: 1.5rem;
  animation: ${pop} 0.6s ease 0.2s both;
`

const Title = styled.h1`
  font-size: 1.75rem;
  font-weight: 800;
  margin-bottom: 0.75rem;
`

const Description = styled.p`
  color: ${({ theme }) => theme.muted};
  line-height: 1.7;
  margin-bottom: 2rem;
`

const HomeLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 2rem;
  background: linear-gradient(135deg, ${({ theme }) => theme.primary}, #c026d3);
  color: white;
  border-radius: 12px;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px ${({ theme }) => theme.primary}55;
    color: white;
  }
`

export default function SuccessPage() {
  return (
    <Page>
      <Card>
        <Emoji>🎉</Emoji>
        <Title>¡Compra exitosa!</Title>
        <Description>
          Gracias por adquirir <strong>De cero a las tiendas</strong>. Recibirás un correo con el enlace de descarga en unos minutos. ¡Que disfrutes el aprendizaje!
        </Description>
        <HomeLink href="/">← Volver al inicio</HomeLink>
      </Card>
    </Page>
  )
}
