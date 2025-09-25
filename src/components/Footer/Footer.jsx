import React from "react";
import styled from "styled-components";

const Foot = styled.footer`
  background: ${({theme}) => theme.colors.card};
  padding: 16px;
  text-align:center;
  font-size:0.95rem;
  border-top:1px solid rgba(0,0,0,0.03);
`;

export default function Footer(){
  return (
    <Foot>
      © {new Date().getFullYear()} Mecânica — Feito com carinho. | Telefone: (XX) XXXXX-XXXX
    </Foot>
  );
}
