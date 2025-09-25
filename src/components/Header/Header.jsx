import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Wrap = styled.header`
  background: ${({theme}) => theme.colors.card};
  box-shadow: 0 2px 6px rgba(0,0,0,0.06);
  padding: 12px 16px;
  position: sticky;
  top:0;
  z-index: 50;
`;

const Row = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
  max-width:1100px;
  margin:0 auto;
`;

const Logo = styled(NavLink)`
  font-weight:700;
  font-size:1.15rem;
  color:${({theme}) => theme.colors.primary};
`;

const Nav = styled.nav`
  display:flex;
  gap:12px;
  align-items:center;

  @media (max-width: 700px) {
    display: ${props => (props.open ? "flex" : "none")};
    position: absolute;
    top:64px;
    right:16px;
    flex-direction:column;
    background: ${({theme}) => theme.colors.card};
    padding:12px;
    border-radius:8px;
    box-shadow:0 8px 20px rgba(0,0,0,0.08);
  }
`;

const StyledLink = styled(NavLink)`
  padding:8px 10px;
  border-radius:6px;
  &.active { background: ${({theme})=> theme.colors.primary}; color: white; }
`;

const Burger = styled.button`
  display:none;
  background:transparent;
  border:0;
  @media (max-width: 700px) { display:block; }
`;

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <Wrap>
      <Row>
        <Logo to="/">Mecânica<span style={{color: "#FF6B00"}}>+</span></Logo>
        <Nav open={open}>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/sobre">Sobre nós</StyledLink>
          <StyledLink to="/servicos">Serviços</StyledLink>
          <StyledLink to="/galeria">Galeria</StyledLink>
          <StyledLink to="/contato">Contato</StyledLink>
        </Nav>
        <Burger aria-label="menu" onClick={() => setOpen(o => !o)}>
          ☰
        </Burger>
      </Row>
    </Wrap>
  );
}
