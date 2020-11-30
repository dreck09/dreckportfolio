import styled from  'styled-components';
import { MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md';
import myimage from '../../images/profile.jpg';

export const HeroContainer = styled.div`
    background: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1; 
    
    :before{
        content:'';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%), 
    linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
        z-index: 2;
     }

`;

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;

`;
export const VideoBg = styled.video`
   
    width: 100%;
    height: 100%;
    -o-object-fit:cover;
    object-fit: cover;
    background: #ccffff;
`;

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items:center;
`;

export const HeroH1 = styled.div`


    // object-fit: cover;
    // border: 5px solid #555;
    // border-radius: 50%;
    // width: 300px;
    // height: 300px;

    background-image: url(${myimage});
    background-size: contain;
    background-size: cover;
    border-radius: 50%;
    border: 2px solid #2eb8b8;
    padding: 2px;
    width: 300px;
    height: 300px;
    
   

    @media screen and(max-width: 768px){
        width: 300px;
        height: 300px;
    }
    @media screen and(max-width: 480px){
        width: 200px;
        height: 200px;
    }
   
`;

export const HeroP = styled.p`
    margin-top: 30px;
    margin-bottom: 30px;
    color: #fff;
    font-size: 15px;
    text-align: center;
    max-width: 600px;

    @media screen and(max-width: 768px){
        font-size:24px;
    }
    @media screen and(max-width: 480px){
        font-size:18px;
    }

`;

export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;

`;

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`;

export const ArrowRight =styled(MdKeyboardArrowRight)`
margin-left: 8px;
font-size: 20px;
`;