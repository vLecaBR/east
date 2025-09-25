import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


const HeaderWrap = styled.header`
position:sticky;top:0;z-index:80;
background: linear-gradient(180deg, rgba(0,0,0,0.45), rgba(0,0,0,0.2));
backdrop-filter: blur(6px);
border-bottom: 1px solid rgba(255,255,255,0.03);
`;
const Row = styled.div`
max-width:1200px;margin:0 auto;padding:14px 20px;display:flex;align-items:center;justify-content:space-between;
`;
const Logo = styled(NavLink)`
font-family: ${({theme}) => theme.fonts.heading};
font-weight:900;
letter-spacing:1px;
color:${({theme}) => theme.colors.primary};
text-transform:uppercase;
display:flex;gap:8px;align-items:center;
`;
const Graffiti = styled.span`
font-size:0.95rem;color:${({theme})=>theme.colors.accent};transform:translateY(-2px);
`;
const Nav = styled.nav`
display:flex;gap:14px;align-items:center;
@media(max-width:700px){ display:none }
`;
const NavItem = styled(NavLink)`
padding:8px 12px;border-radius:8px;color:${({theme})=>theme.colors.muted};
&.active{ color:${({theme})=>theme.colors.text}; background:rgba(255,255,255,0.03)}
`;
const MobileBtn = styled.button`
display:none;background:transparent;border:0;color:inherit;font-size:20px;
@media(max-width:700px){ display:block }
`;


export default function Header(){
const [open, setOpen] = useState(false);
return (
<HeaderWrap>
<Row>
<Logo to="/">Mecânica <Graffiti>STREET</Graffiti></Logo>
<Nav>
<NavItem to="/">Home</NavItem>
<NavItem to="/sobre">Sobre</NavItem>
<NavItem to="/servicos">Serviços</NavItem>
<NavItem to="/galeria">Galeria</NavItem>
<NavItem to="/contato">Contato</NavItem>
</Nav>
<MobileBtn aria-label="menu" onClick={() => setOpen(v => !v)}>☰</MobileBtn>
</Row>
{/* mobile drawer */}
{open && (
<div style={{padding:'10px 20px', display:'flex', flexDirection:'column', gap:10}}>
<NavItem to="/">Home</NavItem>
<NavItem to="/sobre">Sobre</NavItem>
<NavItem to="/servicos">Serviços</NavItem>
<NavItem to="/galeria">Galeria</NavItem>
<NavItem to="/contato">Contato</NavItem>
</div>
)}
</HeaderWrap>
)
}