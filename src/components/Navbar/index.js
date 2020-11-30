import React, {useState, useEffect} from 'react';
import { FaBars } from 'react-icons/fa';
import {animateScroll as scroll }  from 'react-scroll';
import { Nav, 
    NavbarContainer,
     NavLogo,
    MobileIcon,
    NavMenu,
     NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink} from './NavbarElement';

const Navbar = ({ toggle }) => {

    const [scrolNav, setScrolNav] = useState(false);

    const changeNav = () => {
        if(window.scrollY >= 80){
            setScrolNav(true);
        }else{
            setScrolNav(false);
        }
    };

useEffect(() => {
    window.addEventListener('scroll', changeNav);
}, []);

const toggleHome = () => {
    scroll.scrollToTop();
}
    return (
      <>
        <Nav scrolNav={scrolNav}>
            <NavbarContainer>
                <NavLogo to='/' onClick={toggleHome}> dreck</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about" smooth={true} duration={500}
                            spy={true} exact='true' offset={-80} 
                            >About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="skills" smooth={true} duration={500}
                            spy={true} exact='true' offset={-80} >Skills</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="portfolio" smooth={true} duration={500}
                            spy={true} exact='true' offset={-80} >Portfolio</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="contact" smooth={true} duration={500}
                            spy={true} exact='true' offset={-80} >Contact</NavLinks>
                        </NavItem>
                        
                        
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/">
                            Message Me
                        </NavBtnLink>
                    </NavBtn>
            </NavbarContainer>
        </Nav>
      </>
    )
}

export default Navbar;
