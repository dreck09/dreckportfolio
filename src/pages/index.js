import React, {useState} from 'react';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection.js';
import { homeObjOne, homeObjthree, homeObjtwo } from '../components/InfoSection.js/Data';
import Navbar from '../components/Navbar';
import Services from '../components/Services';
import Sidebar from '../components/Sidebar';

const Home = () => {
    const [ isOpen, setIsOpen ] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjtwo}/>
            <Services />
            <InfoSection {...homeObjthree}/>
        </>
    );
};

export default Home
