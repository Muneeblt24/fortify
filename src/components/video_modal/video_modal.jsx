import React, { useState } from 'react';

import './video_modal.css';

const VideoModal = ({ onClose }) => {

    return (

        <div className="overlay">
            <div className="video-modal">
                <button onClick={onClose} className="close-btn">X</button> {/* Close button */}

                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/ud6e-_JfuWg?autoplay=1"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>


        </div>
    );
}

export default VideoModal;
