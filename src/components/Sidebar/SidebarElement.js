import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa';
import {Link as LinkS} from 'react-scroll';
import { Link as LinkR } from 'react-router-dom';

export const SidebarContainer = styled.aside`
    position:fixed;
    // top:0;
    left:0;
    transition:all 300ms ease-in;
    z-index:999;
    width:100%;
    height:100%;
    background-color:#ee846d;
    opacity:${({isActive})=>(isActive ? '100%' : '0')};
    top:${({isActive})=>(isActive ? '0' : '-100%')}
`;

export const CloseIcon = styled(FaTimes)`
color:#fff
`;

export const Icon = styled.div`
    position:absolute;
    top:1.2rem;
    right:1.25rem;
    background-color:transparent;
    outline:none;
    border:0;
    cursor:pointer;
    font-size:2rem;
`;

export const SidebarWrapper = styled.div`
color:#fff;
display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
`;
export const SidebarMenu = styled.ul`
list-style:none;
padding:0px;
 display:grid;
 grid-template-columns:1fr;
 grid-template-rows:repeat(6,80px);
 text-align:center;
`;

export const SidebarLink = styled(LinkS)`
display:flex;
align-items:center;
justify-content:center;
font-size:1.2rem;
text-decoration:none;
list-style:none;
transition:all 300ms ease-in-out;
color:#fff;
cursor:pinter;
&:hover{
    color:gray;
}
`;


export const SidebarBtnWrp = styled.div`
display:flex;
justify-content:center;
`;

export const SidebarRoute = styled(LinkR)`
border-radius:30px;
background:gray;
padding:16px 30px;
font-size:16px;
display:flex;
outline:none;
border:none;
cursor:pointer;
justify-content:center;
white-space:nowrap;
text-decoration:none;
transition:all 300ms ease-in-out;
&:hover{
    background-color:#fff;
}
`;