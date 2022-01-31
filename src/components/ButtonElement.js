import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
    border-radius:30px;
    white-space:nowrap;
    background:${({primary})=>(primary ? '#5b5b5b' : '#ee846d')};
    color:${({color})=>(color ? "#fff" : "#000")};
    padding: ${({big})=>(big ? " 14px 48px" : " 14px  30px")};
    font-size:${({fontBig})=>(fontBig ? "20px" : "16px")};
    outline:0;
    border:0px;
    cursor:pointer;
    display:flex;
    align-items:center;
    justify-content:center;
    transition:all 300ms ease-in-out;

    &:hover{
        background:${({primary})=>(primary ? '#ee846d' : '#5b5b5b')};
        color:${({color})=>(color ? "#000" : "#fff")};
    }

`;

