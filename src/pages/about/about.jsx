import React, { useState, useEffect } from 'react';
import Form from '../../components/Form/Form';

import "./about.css";

const About = () => {

    const sectionScrollHandler = (sectionId) => {
        const section = document.getElementById(sectionId);

        if (section) {
            window.scrollTo({
                top: section.offsetTop,
                behavior: "smooth"
            });
        };
    };

    const [activeBtn, setActiveBtn] = useState('builder_btn');
    const [showForm, setShowForm] = useState(false);  // State to toggle form modal visibility


    const toggleFormModal = () => {
        setShowForm(!showForm);
    };

    const selectionData = {
        builder_btn: {
            goals: "Increase efficiency, streamline processes, manage inventory and orders, improve profitability, stay ahead of the competition, adopt new technologies, manage compliance and regulatory requirements.",
            pains: "Manual and paper-based processes, lack of real-time visibility into operations, outdated technology systems, difficulty in managing inventory and orders, high operational costs, limited resources for compliance and regulatory requirements.",
            how: "Fortify's platform offers real-time visibility into operations, streamlines processes and automates tasks, provides inventory management and order tracking, enables compliance and regulatory reporting, and offers scalable technology solutions that can help real estate builders manage their business operations more efficiently."
        },
        distributor_btn: {
            goals: "Increase sales and revenue, manage inventory and orders, improve customer engagement, adopt new technologies, improve distributor performance, reduce costs.",
            pains: "Difficulty in managing inventory and orders, lack of real-time visibility into sales and distributor performance, outdated technology systems, limited resources for training and development, high operational costs.",
            how: "Fortify's platform provides real-time inventory tracking and management, enables distributor performance tracking and analysis, offers a mobile app for easy access to the platform, provides training and development resources and offers scalable technology solutions that can help distributors improve their sales and customer engagement, ultimately leading to increased revenue and profitability."
        },
        mortgage_btn: {
            goals: "Increase loan origination volume, reduce processing time, improve loan quality and accuracy, manage compliance and regulatory requirements, improve customer experience, adopt new technologies.",
            pains: "Manual and paper-based processes, lack of real-time visibility into loan processing, outdated technology systems, difficulty in managing compliance and regulatory requirements, high operational costs, limited resources for customer experience.",
            how: "Fortify's platform streamlines loan origination processes, automates tasks and reduces processing time, provides compliance and regulatory reporting, offers real-time visibility into loan processing, enables seamless collaboration and communication with borrowers and third-party vendors, and provides scalable technology solutions that can help mortgage banks manage their business operations more efficiently, leading to improved loan quality, customer experience, and profitability."
        }
    }

    return (
        <section id='about_section'>

            <div id='about_content_div1'>
                <div id='about_txt_div'>
                    <h3 id='about_hdng'>100% Customizable Solution</h3>
                    <p id='about_txt'>Plug and play with existing softwares and start using it today.
                    </p>
                </div>
                <div id='about_btn_div'>
                    <button id='about_btn' onClick={() => sectionScrollHandler('footer_section')}>Contact Us</button>
                </div>
            </div>

            <div id='about_content_div2'>
                <div id='selections_div'>
                    <h3 id='selections_hdng'>ARE <br /> YOU?</h3>
                    <div id='selection_btns_div'>
                        <button className={`selection_btn ${activeBtn === 'builder_btn' ? 'selected' : ''}`} id='builder_btn' onClick={() => setActiveBtn('builder_btn')}>
                            Real Estate Builder
                        </button>
                        <button className={`selection_btn ${activeBtn === 'distributor_btn' ? 'selected' : ''}`} id='ditributor_btn' onClick={() => setActiveBtn('distributor_btn')}>
                            Real Estate Distributor
                        </button>
                        <button className={`selection_btn ${activeBtn === 'mortgage_btn' ? 'selected' : ''}`} id='mortgage_btn' onClick={() => setActiveBtn('mortgage_btn')}>
                            Mortgage Banks
                        </button>
                    </div>
                </div>
                <div id='selections_txt_div'>
                    <div id='goals_div'>
                        <h3 className='selection_text_hdng'>Goals And Challenges</h3>
                        <p className='selection_txt' id='goals_txt'>{selectionData[activeBtn].goals}</p>
                    </div>
                    <div id='pains_div'>
                        <h3 className='selection_text_hdng'>Pain Points</h3>
                        <p className='selection_txt' id='pains_txt'>{selectionData[activeBtn].pains}</p>
                    </div>
                    <div id='how_div'>
                        <h3 className='selection_text_hdng'>How Fortify Can Help</h3>
                        <p className='selection_txt' id='how_txt'>{selectionData[activeBtn].how}</p>
                    </div>
                </div>
            </div>

            {showForm && (
                <div id="modal_container">
                    <div id="form">
                        <Form />
                        <button className="close-form" onClick={toggleFormModal}>X</button>
                    </div>
                </div>
            )}

        </section>
    );
};

export default About;
