import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.div`
    background:#101522;
`;


export const FooterWrap = styled.div`
    padding:48px 20px;
    display:flex;
    flex-direction:column;
    justufy-content:center;
    align-items:center;
    max-width:1000px;
    margin:0px auto;

    `;


export const FooterLinkContainer = styled.div`
    display:flex;
    justify-content:center;

    @media screen and (max-width:900px){
        padding-top: 32px;
    }
`;


export const FooterLinkWrapper = styled.div`
display:flex;
    @media screen and (max-width:900px){
        flex-direction:column
    }
`;


export const FooterLinkItems = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    margin:16px;
    text-align:left;
    width:160px;
    color:#fff;
    box-sizing:border-box;

    @media screen and (max-width:480px){
        margin:0;
        padding:10px;
        width:100%;
    }
`;



export const FooterLinkTitle = styled.h1`
    font-size:14px;
    margin-bottom:18px;
`;

export const FooterLink = styled(Link)`
    color:#fff;
    text-decoration:none;
    margin-bottom:10px;
    font-size:14px;
    transition:all 300ms ease-in;

    &:hover{
        color:#f30;
    }

`;


export const WebsiteRights = styled.small`
color:#fff;
margin-bottm:10px;
`;