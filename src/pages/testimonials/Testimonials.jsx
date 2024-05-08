import React from 'react';
import Carousel from './carousel/carousel';

import "./testimonial.css";

const Testimonials = () => {
    return (
        <section id='bg'>
            <div id='testimonial_section'>

                <div id='hdng_div'>
                    <h5 id='testimonial_subheading'> <hr id='hr_2' />Testimonials</h5>
                    <h1 id='testimonial_hdng'>WHAT OUR CLIENTS SAY</h1>
                    <h1 id='testimonial_hdng_mobile'>REVIEWS</h1>
                </div>


                <div id='carosel_div'>
                    <Carousel />
                </div>


            </div>

        </section>
    );
};

export default Testimonials;