import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";

export const Nav = styled.nav`
  // background-color:${({ changeNavBg }) =>
    changeNavBg ? `#ee846d` : "transparent"}  ;

  background-color: #ee846d;
  position: sticky;
  top: 0;
  z-index: 10;
  padding: 0px 24px;
`;
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  width: 100%;
  height: 80px;
`;

export const NavLogo = styled(LinkS)`
    color:#fff;
    cursor:pointer;
    justify-self:flex-start;
    displat:flex;
    font-size:1.5rem
    margin-left:24px;
    font-weight:bold;
    text-decoration:none;
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    // position:absolute;
    top: 0;
    right: 0;
    cursor: pointer;
    font-size: 1.8rem;
    color: #fff;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  // height:80px;
`;

export const NavLinks = styled(LinkS)`
  color: #fff;
  displat: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
  &.active {
    border-bottom: 3px solid red;
  }
`;

export const NavBtn = styled.nav`
  displat: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  font-size: 16px;
  color: #fff;
  border-radius: 30px;
  padding: 10px 20px;
  outline: none;
  cursor: pointer;
  border: 0px;
  text-decoration: none;
  transition: all 300ms ease-in;
  background-color: #6b6b6b;
  &:hover {
    background-color: #5b5b5b;
  }
`;
