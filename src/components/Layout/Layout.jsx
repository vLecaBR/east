import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import styled from 'styled-components';


const Wrap = styled.div`
min-height:100vh;
display:flex;flex-direction:column;
`;
const Main = styled.main`
flex:1;
width:100%;
max-width:1200px;
margin: 28px auto;
padding: 0 20px;
`;


export default function Layout(){
return (
<Wrap>
<Header />
<Main>
<Outlet />
</Main>
<Footer />
</Wrap>
)
}