import React from 'react';
import {animateScroll as scroll} from 'react-scroll';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';
import { FooterContainer, FooterWrap,
        SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIconLinks, SocialIcons } from './FooterElements';


const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
       <FooterContainer>
           <FooterWrap>
               {/* <FooterLinksContainer>
                   <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Me</FooterLinkTitle>
           
                                <FooterLink to="/signin">How It Works</FooterLink>
                                <FooterLink to="/signin">Testimonials</FooterLink>
                                <FooterLink to="/signin">Careers</FooterLink>
                                <FooterLink to="/signin">Terms of Service</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Me</FooterLinkTitle>
           
                                <FooterLink to="/signin">How It Works</FooterLink>
                                <FooterLink to="/signin">Testimonials</FooterLink>
                                <FooterLink to="/signin">Careers</FooterLink>
                                <FooterLink to="/signin">Terms of Service</FooterLink>
                        </FooterLinkItems>
                   </FooterLinksWrapper>
                   <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Me</FooterLinkTitle>
           
                                <FooterLink to="/signin">How It Works</FooterLink>
                                <FooterLink to="/signin">Testimonials</FooterLink>
                                <FooterLink to="/signin">Careers</FooterLink>
                                <FooterLink to="/signin">Terms of Service</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Me</FooterLinkTitle>
           
                                <FooterLink to="/signin">How It Works</FooterLink>
                                <FooterLink to="/signin">Testimonials</FooterLink>
                                <FooterLink to="/signin">Careers</FooterLink>
                                <FooterLink to="/signin">Terms of Service</FooterLink>
                        </FooterLinkItems>
                   </FooterLinksWrapper>
               </FooterLinksContainer> */}
               <SocialMedia>
                   <SocialMediaWrap>
                       <SocialLogo to='/' onClick={toggleHome}> dreck </SocialLogo>
    <WebsiteRights> dreck @ {new Date().getFullYear()} All Rights Reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLinks href="/" target="_blank" arial-label="Facebook">
                                <FaFacebook />
                            </SocialIconLinks>
                            <SocialIconLinks href="/" target="_blank" arial-label="Instagram">
                                <FaInstagram />
                            </SocialIconLinks>
                            <SocialIconLinks href="/" target="_blank" arial-label="Github">
                                <FaGithub />
                            </SocialIconLinks>
                            <SocialIconLinks href="/" target="_blank" arial-label="Youtube">
                                <FaYoutube />
                            </SocialIconLinks>
                            <SocialIconLinks href="/" target="_blank" arial-label="LinkedinIn">
                                <FaLinkedinIn />
                            </SocialIconLinks>
                            <SocialIconLinks href="/" target="_blank" arial-label="Twitter">
                                <FaTwitter />
                            </SocialIconLinks>
                        </SocialIcons>
                   </SocialMediaWrap>
               </SocialMedia>
           </FooterWrap>
       </FooterContainer>
    )
}

export default Footer
