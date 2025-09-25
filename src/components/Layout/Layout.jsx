import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styled from "styled-components";

const SiteWrap = styled.div`
  min-height: 100vh;
  display:flex;
  flex-direction:column;
`;

const Main = styled.main`
  flex:1;
  width: 100%;
  max-width: 1100px;
  margin: 24px auto;
  padding: 0 16px;
`;

export default function Layout() {
  return (
    <SiteWrap>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </SiteWrap>
  );
}
