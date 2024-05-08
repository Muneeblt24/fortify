import React, { useEffect } from 'react';
// import Typical from 'react-typical';

import { MDBIcon } from 'mdb-react-ui-kit';
import { SlCalender } from "react-icons/sl";
import { GoLaw } from "react-icons/go";


import "./home.css";
import home_image from "./home3 (1).png";

const Home = () => {

    const sectionScrollHandler = (sectionId) => {
        const section = document.getElementById(sectionId);

        if (section) {
            window.scrollTo({
                top: section.offsetTop,
                behavior: "smooth"
            });
        };
    };

    const checkResponsive = () => {
        if (window.innerWidth < 450) {
            return true;
        }
        else if (window.innerWidth > 450) {
            return false;
        };
    };


    useEffect(() => {
        window.addEventListener('resize', checkResponsive);

        return () => {
            window.removeEventListener('resize', checkResponsive);
        };
    }, []);

    return (
        <>
            <section id='home_section'>
                <div id='text_section'>
                    <h3 className='main_heading'>Streamline <br />
                        Your <br />
                        <span id='typical'>Business Management</span>
                    </h3>
                    <p className='text'> <b id='bold_text'>All of these benefits and more, in your pocket, for better decision making!</b> Fortify is an asset management solution tailored to the needs of <span id='highlited_txt'>real estate builders and developers</span> , distributors, and mortgage firms.</p>
                </div>

                <div id='image_section'>
                    <img id='home_Image' src={home_image} alt="" />
                </div>

            </section>

        </>
    );
};

export default Home;