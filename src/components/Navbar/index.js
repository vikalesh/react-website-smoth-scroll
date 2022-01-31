import React, { useState, useEffect } from 'react'
import { FaBars } from 'react-icons/fa';
import{Nav, NavbarContainer,NavLogo,MobileIcon, NavMenu, NavItem,NavLinks,NavBtn,NavBtnLink} from "./NavbarElement"

const Navbar = ({toggle}) => {
     const [changeNavBg,setChangeNavBg] =useState(false)

    const onscrollChange = ()=>{
        if(window.screenY >= 88){
            console.log()
            setChangeNavBg(true)
        }else{
            setChangeNavBg(false)
        }
    }  

    useEffect(() => {
        
        window.addEventListener('scroll', onscrollChange)
        // console.log('ss')
    }, [])


    return (
        <>
           <Nav >
                <NavbarContainer>
                    <NavLogo to="/">
                        Rupees
                    </NavLogo>

                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='about' >About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='discover' >Discover</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='service' >Service</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='signup' > Sign up</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>   
        </>
    )
}

export default Navbar