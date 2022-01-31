import styled from 'styled-components'
import {MdKeyboardArrowRight,MdArrowForward} from 'react-icons/md'

export const HeroContainer = styled.div`
    background:#000;
    display:flex;
    align-items:center;
    justify-content:center;
    padding:0 30px;
    position:relative;
    z-index:1;
    height:100vh;

`;

export const HeroBg = styled.div`
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    width:100%;
    height:100%;
    overflow:hidden;

`;

export const VideoBg = styled.video`
    width:100%;
    height:100%;
    object-fit:cover;
    -o-object-fit:cover;
    background:red;
`;

 export const HeroContent = styled.div`
    display:flex;
    align-items:center;
    flex-direction:column;
    max-width:1200px;
    z-index:3;
    position:absolute;
 `;

 export const HeroH1 = styled.h1`
    color:#fff;
    font-size:2.4rem;
    text-align:center;
    @media screen and (max-width:768px){
        font-size:2.1rem;
    }
    @media screen and (max-width:480px){
        font-size:1.8rem;
    }
 
    `;

 export const HeroP = styled.p`
 margin-top:24px;
 color:#fff;
 font-size:24px;
 text-align:center;
max-width:600px;

@media screen and (max-width:768px){
    font-size:28px;
}
@media screen and (max-width:480px){
    font-size:18px;
}

`;

export const HeroBtnWrapper = styled.div`
margin-top:24px;
display:flex;
    align-items:center;
    flex-direction:column;
`;

export const ArrowForword = styled(MdArrowForward)`
    margin-left:8px;
    font-size:20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left:8px;
    font-size:20px;
`;