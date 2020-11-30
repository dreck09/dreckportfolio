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
                    <SidebarLink to="portfolio" onClick={toggle}> Portfolio </SidebarLink>
                    <SidebarLink to="skills" onClick={toggle}>Skills</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/"> Message Me </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
