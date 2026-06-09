'use client';

import {Projects} from '@/components/Projects';
import {PhotoGallery} from '@/components/PhotoGallery';
import {Footer} from '@/components/Footer';
import Link from 'next/link';
import styled from 'styled-components';
import {Logo} from '@/styles/header-styles';

const PortfolioHeader = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 50;
  padding: 1.25rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({theme}) => theme.background}ee;
  backdrop-filter: blur(12px);
  border-bottom: 1px solid ${({theme}) => theme.border};
`;

const LogoLink = styled(Link)`
  font-size: 1.25rem;
  font-weight: 800;
  color: ${({theme}) => theme.primary};
  text-decoration: none;
  letter-spacing: -0.02em;
`;

const BackLink = styled(Link)`
  font-size: 0.875rem;
  color: ${({theme}) => theme.muted};
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  transition: color 0.2s ease;

  &:hover {
    color: ${({theme}) => theme.primary};
  }
`;

const PortfolioHero = styled.div`
  padding: 10rem 2rem 4rem;
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
`;

const PortfolioTitle = styled.h1`
  font-size: 3rem;
  font-weight: 900;
  line-height: 1.1;
  letter-spacing: -0.03em;
  margin-bottom: 1rem;

  span {
    color: ${({theme}) => theme.primary};
  }

  @media (min-width: 768px) {
    font-size: 4rem;
  }
`;

const PortfolioSubtitle = styled.p`
  font-size: 1.125rem;
  color: ${({theme}) => theme.muted};
  line-height: 1.7;
`;

export default function PortfolioPage() {
  return (
    <main>
      <PortfolioHeader>
        <Link href="/#about" passHref>
          <Logo>
            La<span>Duquesa</span>Dev
          </Logo>
        </Link>
        <BackLink href="/#about">← Volver al inicio</BackLink>
      </PortfolioHeader>

      <PortfolioHero>
        <PortfolioTitle>
          Mis <span>proyectos</span>
        </PortfolioTitle>
        <PortfolioSubtitle>
          Una selección de proyectos personales y de clientes que reflejan mi
          manera de construir — con atención al detalle, buen código y foco en
          la experiencia de usuario.
        </PortfolioSubtitle>
      </PortfolioHero>

      <Projects />
      <Footer />
    </main>
  );
}
