import React,{useState} from "react"
import InfoSection from "../components/InfoSection"
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import { homeObjOne, homeObjThree, homeObjTwo } from "../components/InfoSection/Data";
import { Services } from "../components/Services";
import Footer from "../components/Footer";
import icon1 from '../images/svg1.svg'


const Home = () => {

     const [isActive, setIsActive] = useState(false)

     const toggle = ()=>{
         setIsActive(!isActive)
     } 

    return (
        <>
            <Sidebar isActive={isActive}  toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection /> 
            <InfoSection icon1={icon1} { ...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <Services />
            <InfoSection {...homeObjThree} />
            <Footer />
        </>
    )
}

export default Home