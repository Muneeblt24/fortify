import React, { useState, useEffect } from 'react';

import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBIcon,
    MDBCollapse,
    MDBNavbarLink
} from 'mdb-react-ui-kit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

import logo from "./logo1.png";


import "./navigation.css";

const Navigation = () => {

    const [showNavSecond, setShowNavSecond] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isToggeled, setIsToggeled] = useState(false);

    const checkResponsive = () => {
        if (window.innerWidth < 450) {
            return true;
        }
        else if (window.innerWidth > 450) {
            return false;
        };
    };

    const scrollHandler = () => {

        if (window.pageYOffset > 60) {
            setIsScrolled(true);
            setShowNavSecond(false);
        }
        else {
            setIsScrolled(false);
        };
    };

    const sectionScrollHandler = (sectionId) => {
        const section = document.getElementById(sectionId);

        if (section) {
            window.scrollTo({
                top: section.offsetTop,
                behavior: "smooth"
            });
        };
    };

    const handleCall = () => {
        window.location.href = `tel:03322655141`
    };

    const handleMail = () => {
        window.location.href = `https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJZfSfXMzjVlTPQSkBFMnQdwSWrHmJFLdPNVjwDfSSSRdvPckTjZsTCKMmNqrTqtZWBHKsq`
    }


    useEffect(() => {
        window.addEventListener('scroll', scrollHandler);
        // window.addEventListener('resize', checkResponsive);

        return () => {
            window.removeEventListener('scroll', scrollHandler);
            // window.removeEventListener('resize', checkResponsive);
        };
    }, []);

    useEffect(() => {
        if (showNavSecond) {
            setIsToggeled(true);
        }
        else {
            setIsToggeled(false);
        };
    }, [showNavSecond]);

    return (
        <>
            <MDBNavbar id='upper_navbar' expand='lg'>
                <MDBContainer fluid>
                    <MDBNavbarNav className='d-flex flex-row'>
                        <MDBNavbarItem className='nav_item'>
                            <button
                                id='upper_nav_btn'
                                onClick={() => handleCall()} >
                                <FaPhoneAlt />  +92 307 4163830
                            </button>
                        </MDBNavbarItem>
                        <MDBNavbarItem className='nav_item'>
                            <button
                                id='upper_nav_btn'
                                onClick={() => handleMail()} >
                                <IoMdMail />  contact@fortify.biz
                            </button>
                        </MDBNavbarItem>
                    </MDBNavbarNav>
                </MDBContainer>
            </MDBNavbar>



            <MDBNavbar expand='lg'
                className={`navbar_${isScrolled ? 'scrolled' : ''}`}
            /*id={`navbar_${isToggeled ? 'toggeled' : ''}`}  */
            >
                <MDBContainer id='navbar_main' fluid>

                    <MDBNavbarBrand id='logo_container'
                        onClick={() => window.location.reload()
                        }>

                        <img id='logo' src={logo} alt="" />

                    </MDBNavbarBrand>

                    <MDBNavbarBrand id='navbar_container'>

                        <MDBNavbarToggler
                            id='toggle_btn'
                            aria-expanded='false'
                            aria-label='Toggle navigation'
                            onClick={() => setShowNavSecond(!showNavSecond)}
                        >
                            {isToggeled ? <MDBIcon fas icon="times" /> : <MDBIcon className='bars_icon' icon='bars' fas />}
                        </MDBNavbarToggler>

                        {/* <MDBNavbarBrand id='contact_responsive' className='contact_container'>

                            <button className='contact'
                                onClick={handleCall}> <FontAwesomeIcon icon={faPhoneVolume} />
                            </button>

                        </MDBNavbarBrand> */}

                    </MDBNavbarBrand>

                    <MDBCollapse navbar show={showNavSecond}>
                        <MDBNavbarNav id='navbar_nav'>

                            {/* <MDBNavbarItem className='nav_item' >
                                <button
                                    className='nav_btn'
                                    onClick={() => sectionScrollHandler("home_section")}>
                                    Home
                                </button>
                            </MDBNavbarItem> */}

                            <MDBNavbarItem className='nav_item'>
                                <button
                                    className='nav_btn'
                                    onClick={() => sectionScrollHandler("about_section")} >
                                    About
                                </button>
                            </MDBNavbarItem>

                            <MDBNavbarItem className='nav_item'>
                                <button
                                    className='nav_btn'
                                    onClick={() => sectionScrollHandler("services_section")} >
                                    Services
                                </button>
                            </MDBNavbarItem>

                            <MDBNavbarItem className='nav_item'>
                                <button
                                    className='nav_btn'
                                    onClick={() => sectionScrollHandler("mobile_section")} >
                                    Features
                                </button>
                            </MDBNavbarItem>

                            <MDBNavbarItem className='nav_item'>
                                <button
                                    className='nav_btn'
                                    onClick={() => sectionScrollHandler("footer_section")} >
                                    Contact
                                </button>
                            </MDBNavbarItem>

                        </MDBNavbarNav>
                    </MDBCollapse>

                    {/* <MDBNavbarBrand id='contact_unresponsive'
                        className='contact_container'>

                        <button className='contact'
                            onClick={handleCall}> <FontAwesomeIcon icon={faPhoneVolume} /> +92 332 2655141
                        </button>

                    </MDBNavbarBrand> */}

                </MDBContainer>
            </MDBNavbar >
        </>
    );
};

export default Navigation;
