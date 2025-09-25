import React from 'react';
import styled from 'styled-components';


const Foot = styled.footer`
background:transparent;padding:18px 20px;text-align:center;color:${({theme})=>theme.colors.muted};font-size:0.9rem;border-top:1px solid rgba(255,255,255,0.03);
`;


export default function Footer(){
return (
<Foot>
© {new Date().getFullYear()} Mecânica Street • Rua Exemplo, 123 • (XX) XXXXX-XXXX
</Foot>
)
}