import React from "react";
import styled from "styled-components";

const List = styled.ul`
  list-style:none;
  padding:0;
  display:grid;
  grid-template-columns: repeat(auto-fit, minmax(220px,1fr));
  gap:12px;
`;

const Item = styled.li`
  background: ${({theme}) => theme.colors.card};
  padding:14px;
  border-radius:10px;
  box-shadow: 0 6px 14px rgba(0,0,0,0.04);
`;

export default function Services(){
  const services = [
    {title: "Troca de óleo", desc: "Óleos sintéticos e semissintéticos, filtros originais."},
    {title: "Freios", desc: "Pastilhas, discos, sangria e manutenção do sistema."},
    {title: "Ar-condicionado", desc: "Recarga, limpeza e revisão do sistema."},
    {title: "Revisões gerais", desc: "Revisões preventivas por quilometragem."},
    {title: "Funilaria e pintura", desc: "Pequenos reparos e retoques."},
  ];

  return (
    <>
      <h2>Serviços</h2>
      <List>
        {services.map(s => (
          <Item key={s.title}>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </Item>
        ))}
      </List>
    </>
  );
}
