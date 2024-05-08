import React, { useState, useEffect } from 'react'
import { MDBIcon } from 'mdb-react-ui-kit';

import "./backToTop.css";

const BackToTop = () => {

    const [isVisible, setIsVisible] = useState(false);


    const handleScroll = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        };
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };


    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            {isVisible && (
                <button id='btt' onClick={scrollToTop}>
                    <MDBIcon fas icon="angle-up" />
                </button>
            )}
        </>
    );
};

export default BackToTop;