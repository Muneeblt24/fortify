import React, { useState } from 'react';
import './video.css';
import video from "./bg\ video\ -\ Trim.mp4";
import { FiPlay } from "react-icons/fi";

import VideoModal from '../../components/video_modal/video_modal';


const Video = () => {

    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <section id='video_section'>
                <div id="bg_video_div">
                    <video id='bg_video' autoPlay muted loop>
                        <source src={video} type="video/mp4" />
                        {/* Optional WebM source */}
                        {/* <source src={`${video.replace('.mp4', '.webm')}`} type="video/webm" /> */}
                    </video>
                </div>

                {/* Content div with corrected element type (div) */}
                <div id='video_content_div'>
                    <p id='video_txt'>INTERESTED TO KNOW MORE?</p>
                    <h1 id='video_hdng'> Unleash Your Business's True Potential With Fortify! </h1>
                </div>

                <button id='video_play_btn' onClick={handleOpenModal}><FiPlay id='play_icon' /></button>
            </section>


            {showModal && <VideoModal onClose={handleCloseModal} />}



        </>
    );
};

export default Video;
