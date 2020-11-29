import React, {useState} from 'react';
import Video from '../../video/video.mp4';
import { Button } from '../ButtonElements';
import { HeroContainer, HeroBg, VideoBg,
        HeroContent,
        HeroH1,
        HeroP,
        ArrowForward,
        HeroBtnWrapper,
        ArrowRight
} from './HeroElement';

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>
                    
                </HeroH1>
                <HeroP>Zandric Cabalagan - Web Developer</HeroP>
                <HeroBtnWrapper>
                    <Button to="about" onMouseEnter={onHover}
                     onMouseLeave={onHover}
                    primary="true"
                    dark="true"
                     >
                        About me! {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
