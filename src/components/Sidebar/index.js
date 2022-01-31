import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu,SidebarLink,SidebarBtnWrp,SidebarRoute} from './SidebarElement'


const Sidebar = ({isActive,toggle}) => {
    return (
        <>
        <SidebarContainer isActive={isActive} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about">About</SidebarLink>
                    <SidebarLink to="discover">Discover</SidebarLink>
                    <SidebarLink to="service">Services</SidebarLink>
                    <SidebarLink to="signin">Sign In</SidebarLink>
                </SidebarMenu>
                <SidebarBtnWrp>
                    <SidebarRoute to='/signup'>Sign up</SidebarRoute>
                </SidebarBtnWrp>
            </SidebarWrapper>
        </SidebarContainer>  
        </>
    )
}


export default Sidebar