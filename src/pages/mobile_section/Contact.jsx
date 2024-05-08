import React, { useState } from 'react';

import "./contact.css";

import components from "./client app.png";
import mobile from "./mobile.png";
import circle from "./circle.png";

const Mobile = () => {

    return (
        <section id='mobile_section'>
            <h1 id='mobile_hdng'>Mobile Application</h1>
            <p id='mobile_txt'>Through the customizable management app, the C level executives can have a bird-eye view over all operations</p>

            <div id='mobile_content_div'>

                <img id='circle_img' src={circle} alt="" />

                <img id='client_app_img' src={components} alt="" />

                <img id='mobile_img' src={mobile} alt="" />

            </div>

        </section>
    );
};

export default Mobile;
