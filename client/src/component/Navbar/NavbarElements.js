import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  background: rgba(255, 255, 255, 0.1);
  /* overflow: hidden; */
  position: -webkit-sticky;
  position: sticky;
  /* z-index: 1; */
  backdrop-filter: blur(5px);
`;

export const Nav = styled.nav`
  flex: 2;
  justify-content: flex-start;
  position: sticky;

  width: 100%;
  left: 51px;
  margin-top: 1.5%;

  button {
    color: #e1b486;
    border:none;
    background-color:transparent;
    font-style: light;
    font-weight: normal;
    font-size: 0.8em;

    line-height: 2rem;
    align-items: left;
    text-decoration: none;
    cursor: pointer;
    padding-left: 2em;
    /* height: 25px; */
  }
`;

export const NavUser = styled.nav`
  flex: 1;
  justify-content: center;

  width: 100%;
  left: 51px;
  margin-top: 1.5%;
  margin-right: 1em;
`;

export const NavLogo = styled.nav`
  flex: 1;
  justify-content: left;

  position: sticky;
  margin-left: 0.5%;
  margin-top: 0.5%;
`;

export const NavLink = styled(Link)`
  color: #e1b486;

  font-style: light;
  font-weight: normal;
  font-size: 0.8em;

  line-height: 2rem;
  align-items: left;
  text-decoration: none;
  cursor: pointer;
  padding-left: 2em;
  height: 50px;

  

  @media screen and (max-width: 400px) {
    position: absolute;
    top: 10px;
    left: 25px;
  }
`;

export const logo = styled(Link)`
  position: sticky;
  width: 152px;
  height: 60.27px;
  left: 51px;
  top: 31.73px;
  cursor: pointer;
`;

export const IconCart = styled.i`
color: white;

`
