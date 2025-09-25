import React from "react";
import styled from "styled-components";

const Wrap = styled.div` display:grid; gap:14px; `;

export default function About(){
  return (
    <Wrap>
      <h2>Sobre nós</h2>
      <p>
        Somos uma oficina familiar com X anos de experiência. Nosso foco: qualidade,
        transparência e entrega no prazo. Trabalhamos com carros leves e vans.
      </p>
      <p>
        Equipe: João (mecânico chefe), Maria (atendimento) e Equipe técnica.
      </p>
    </Wrap>
  );
}
