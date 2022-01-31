import React,{useState} from 'react'
import { HeroContainer, HeroBg,VideoBg,HeroContent,HeroH1,HeroP,HeroBtnWrapper,ArrowForword,ArrowRight } from './HeroElement';
import video from '../../video/video.mp4'
import { Button } from '../ButtonElement';

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHoverBtn = ()=>{
        setHover(!hover)
    }

    return (
        <>
            <HeroContainer>
                <HeroBg>
                    <VideoBg autoPlay loop muted src={video} type='video/mp4'  />
                </HeroBg>
                <HeroContent>
                    <HeroH1>Virtual banking Made Easy</HeroH1>
                    <HeroP>
                        lorem lorem lorem 
                    </HeroP>
                    <HeroBtnWrapper>
                        <Button to="signup" 
                        
                        onMouseEnter={onHoverBtn}  onMouseLeave={onHoverBtn}  >
                            Get Started {hover ? <ArrowForword /> : <ArrowRight />}
                        </Button>
                    </HeroBtnWrapper>
                </HeroContent>
            </HeroContainer>  
        </>
    )
}

export default HeroSection
