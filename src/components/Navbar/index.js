import React from 'react';
import { FaBars, FaToggleOff } from 'react-icons/fa';
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
    return (
      <>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'> dreck</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about">About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="contact">Contact</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="project">Projects</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="signup">Sign Up</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/messageme">
                            Message Me
                        </NavBtnLink>
                    </NavBtn>
            </NavbarContainer>
        </Nav>
      </>
    )
}

export default Navbar;
