import React from 'react';
import { SidebarContainer, 
    Icon, 
    CloseIcon, 
    SideBtnWrap, 
    SidebarMenu, 
    SidebarLink, 
    SidebarRoute, 
    SidebarWrapper } from './SidebarElement';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
                    <SidebarLink to="contact" onClick={toggle}>  Contact  </SidebarLink>
                    <SidebarLink to="projects" onClick={toggle}> Projects </SidebarLink>
                    <SidebarLink to="signup" onClick={toggle}>Sign Up</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/messagame"> Message Me </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
