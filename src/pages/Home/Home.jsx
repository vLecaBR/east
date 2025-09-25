import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';


const HeroGrid = styled.section`
display:grid;grid-template-columns: 1fr 420px;gap:20px;align-items:center;
@media(max-width:900px){ grid-template-columns:1fr; }
`;


const neon = keyframes`
0%{ text-shadow: 0 0 6px rgba(52,255,234,0.08), 0 0 12px rgba(255,59,59,0.02);} 50%{ text-shadow: 0 0 18px rgba(52,255,234,0.14);} 100%{ text-shadow: 0 0 6px rgba(52,255,234,0.08);}
`;


const HeroCard = styled.div`
background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
padding:28px;border-radius:14px;box-shadow:0 12px 40px rgba(0,0,0,0.6);
`;
const Title = styled.h1`
font-family:${({theme})=>theme.fonts.heading};font-size:2.1rem;margin:0 0 10px;color:${({theme})=>theme.colors.text};
span{ color:${({theme})=>theme.colors.neon}; animation: ${neon} 2.8s infinite; }
`;
const List = styled.div` display:grid;gap:12px;margin-top:18px;`;
const CTA = styled(Link)` display:inline-block;margin-top:16px;padding:10px 14px;border-radius:10px;background:${({theme})=>theme.colors.primary};color:white;font-weight:600;`;


const SideCard = styled.div`
background-image:url('/assets/graffiti-splash.png'); /* add a big graffiti PNG in public/assets */
background-size:cover;background-position:center;border-radius:12px;height:320px;display:flex;align-items:center;justify-content:center;color:black;font-weight:700;
`;


export default function Home(){
return (
<>
<HeroGrid>
<HeroCard>
<Title>Mecânica <span>STREET</span> — Restaura, fortalece, acelera</Title>
<p>Oficina especializada em custom, restauração e performance. Estilo, técnica e respeito pelo seu carro.</p>
<List>
<div>• Trocas & manutenções com peças selecionadas</div>
<div>• Restauração e pintura estilo custom</div>
<div>• Setup de performance e suspensão</div>
</List>
<CTA to="/contato">Agende uma avaliação</CTA>
</HeroCard>


<SideCard>
<div style={{background:'rgba(0,0,0,0.45)', padding:'8px 12px', borderRadius:8, color:'white'}}>Galeria de projetos</div>
</SideCard>
</HeroGrid>


<section style={{marginTop:22}}>
<h2>Serviços em destaque</h2>
<div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))', gap:16, marginTop:12}}>
<article style={{background:'rgba(255,255,255,0.02)', padding:14, borderRadius:12}}>
<h3>Builds custom</h3>
<p>Restauração com pegada streetwear: pintura, aerografia e detalhes únicos.</p>
</article>


<article style={{background:'rgba(255,255,255,0.02)', padding:14, borderRadius:12}}>
<h3>Performance</h3>
<p>Mapeamento, suspensão e upgrades com foco em dirigibilidade e segurança.</p>
</article>


<article style={{background:'rgba(255,255,255,0.02)', padding:14, borderRadius:12}}>
<h3>Reparos rápidos</h3>
<p>Troca de óleo, freios, alinhamento e diagnósticos rápidos pra você voltar à rua.</p>
</article>
</div>
</section>
</>
)
}