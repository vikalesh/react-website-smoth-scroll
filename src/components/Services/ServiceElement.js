import styled from "styled-components";

export const ServiceContainer = styled.div`
    padding:10rem 0rem;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction: column;
    background:#010606;
`;


export const ServiceWrapper = styled.div`
        max-width:1000px;
        margin:0px auto;
    display:grid;
    grid-template-columns:1fr 1fr 1fr;
    align-items:center;
    grid-gap:16px;
    padding:0 50px;

    // @media screen and ( max-width:1000px){
    //     grid-template-columns:1fr 1fr ;
    // }
    @media screen and ( max-width:480px){
        grid-template-columns:1fr;
        grid-gap:0 20px;
    }
`;

export const ServiceCard = styled.div`
    
    display:flex;
    align-items:center;flex-direction: column;
    background:#fff;
    max-height:340px;
    border-radius:10px;
    padding:20px;
    box-shadow:0 1px 3px rgba(0,0,0,0.2);
    transition:all 300ms ease-in;
    margin-bottom:16px;

    &:hover{
        transform:scale(1.02);
        cursor:pointer;
    }

`;

export const ServiceIcon = styled.img`
    width:160px;
    height:160px;
    margin-bottom:10px;
`;

export const ServiceH1 = styled.h1`
   color:#fff;
   font-size:2.2rem;
    margin-bottom:60px;
    
    @media screen and ( max-width:480px){
        font-size:1.5rem;
    }
`;

export const ServiceH2 = styled.h2`
   font-size:1rem;
    margin-bottom:10px;
`;
export const ServiceP = styled.p`
   font-size:1rem;
   text-align:center; 
`;