import React, { useState } from 'react';
import { MDBIcon } from 'mdb-react-ui-kit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';

import "./carousel.css";

const Carousel = () => {

    const data = [
        {
            icon: <FontAwesomeIcon icon={faQuoteLeft} />,
            heading: "Muhammad Bilal",
            text: "The Lawtrack team was very professional and took care of my every interaction with a lawyer. They help me with property searching, agreement drafting, and registry."
        },
        {
            icon: <FontAwesomeIcon icon={faQuoteLeft} />,
            heading: "Azam Khan",
            text: "Lawtrack has a great panel of lawyers. I would recommend using this service."
        },
        {
            icon: <FontAwesomeIcon icon={faQuoteLeft} />,
            heading: "Muhammad Bilal",
            text: "The Lawtrack team was very professional and took care of my every interaction with a lawyer. They help me with property searching, agreement drafting, and registry."
        },
        {
            icon: <FontAwesomeIcon icon={faQuoteLeft} />,
            heading: "Azam Khan",
            text: "Lawtrack has a great panel of lawyers. I would recommend using this service."
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    };

    return (
        <>
            <div id='carousel_main_container'>


                <button id='backward_btn' onClick={handlePrev}><FontAwesomeIcon icon={faCaretUp} /></button>

                <div id='carousel_container'>
                    <div className='carousel_item side _1'>
                        {/* <h1> {data[(currentIndex - 1 + data.length) % data.length].icon} </h1>
                        <h1> {data[(currentIndex - 1 + data.length) % data.length].heading} </h1> */}
                        <p> {data[(currentIndex - 1 + data.length) % data.length].text} </p>
                    </div>
                    <div className='carousel_item center'>
                        <span> {data[currentIndex].icon} </span>
                        <h1>{data[currentIndex].heading}</h1>
                        <p> {data[currentIndex].text} </p>
                    </div>
                    <div className='carousel_item side _2'>
                        {/* <h1> {data[(currentIndex + 1) % data.length].icon} </h1>
                        <h1> {data[(currentIndex + 1) % data.length].heading} </h1> */}
                        <p> {data[(currentIndex + 1) % data.length].text} </p>
                    </div>
                </div>

                <button id='forward_btn' onClick={handleNext}><FontAwesomeIcon icon={faCaretDown} /></button>
            </div >
        </>
    );
};

export default Carousel;