// export a navigation component (use react-router-dom)
import React from "react";
import { colors } from "../theme/colors";
import { rem } from "polished";
import { NavLink } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

import styled from "styled-components";
import Home from "../pages/home/home";
import ReviewPage from "../pages/review/reviewPage";


const NavBar = styled.div`
  display: flex;
  justify-content: flex-end;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.20);

`;

const NavItem = styled(NavLink)`
  text-decoration: none;
  padding: ${rem(12)};
  box-sizing: border-box;
  color: ${colors.primary};
  font-size: ${rem(12)};

  &.active {
    background-color: ${colors.primary};
    color: black;
  }

  &:hover {
    background-color: ${colors.primary};
    color: black;
  }
`;

const NavHeading = styled(NavItem)`
  margin-right: auto;
  font-family: "avenir",serif;
`;

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  margin: 0;
  padding: 0;
  height: 100vh;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

function Navigation() {


  return (
      <div>
    <NavBar>
        <NavHeading to={`/`}>
            Home
        </NavHeading>
        <NavItem to="/review">
            Review
        </NavItem>
    </NavBar>
          <Container>
              <Content>
                  <Routes>
                      <Route path="review/"  element={<ReviewPage/>} />
                      <Route path="/"  element={<Home/>} />

                      <Route
                          path="*"
                          element={
                              <main style={{ padding: "1rem" }}>
                                  <p>There's nothing here!</p>
                              </main>
                          }
                      />
                  </Routes>
              </Content>
          </Container>
      </div>
  );
}

export default Navigation