import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Hero = styled.section`
  background: linear-gradient(90deg, rgba(11,95,255,0.06), rgba(255,177,0,0.03));
  padding: 36px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const Title = styled.h1` margin:0 0 8px 0; `;
const Lead = styled.p` margin:0 0 16px 0; `;

const Grid = styled.div`
  display:grid;
  grid-template-columns: repeat(auto-fit, minmax(220px,1fr));
  gap:16px;
`;

const Card = styled.div`
  background: ${({theme}) => theme.colors.card};
  padding:16px;
  border-radius:10px;
  box-shadow: 0 6px 18px rgba(0,0,0,0.04);
`;

export default function Home(){
  return (
    <>
      <Hero>
        <Title>Mecânica do João — Confiança na estrada</Title>
        <Lead>Revisões, troca de óleo, ar condicionado e funilaria. Atendimento rápido e preço justo.</Lead>
        <Link to="/contato">Agende um orçamento →</Link>
      </Hero>

      <Grid>
        <Card>
          <h3>Serviços rápidos</h3>
          <p>Troca de óleo, filtros, pastilhas e alinhamento.</p>
        </Card>
        <Card>
          <h3>Revisões completas</h3>
          <p>Checklist completo para garantir segurança e performance.</p>
        </Card>
        <Card>
          <h3>Galeria</h3>
          <p>Projetos e restaurações — confira nossos trabalhos.</p>
          <Link to="/galeria">Ver galeria</Link>
        </Card>
      </Grid>
    </>
  );
}
