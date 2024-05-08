import React from 'react';

import "./footer.css";

import nic_logo from "./nic.svg";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { FaHome } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";



import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBIcon,
    MDBBtn
} from 'mdb-react-ui-kit';

const Footer = () => {

    const handleCall = () => {
        window.location.href = `tel:03322655141`
    };

    const handleMail = () => {
        window.location.href = `https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJZfSfXMzjVlTPQSkBFMnQdwSWrHmJFLdPNVjwDfSSSRdvPckTjZsTCKMmNqrTqtZWBHKsq`
    }

    return (
        <>

            <section id='footer_section'>

                <div id='info_div'>
                    <p className='text'> <b id='bold_text'>All of these benefits and more, in your pocket, for better decision making!</b> Fortify is an asset management solution tailored to the needs of <span id='highlited_txt'>real estate builders and developers</span> , distributors, and mortgage firms.</p>
                    <div id='footer_social_links'>
                        <button className='footer_social_btn' id='fb_btn'>
                            <FaFacebookF className='footer_social_icon' />
                        </button>
                        <button className='footer_social_btn' id='lnkdn_btn'>
                            <FaLinkedinIn className='footer_social_icon' />
                        </button>
                        <button className='footer_social_btn' id='insta_btn'>
                            <FaInstagram className='footer_social_icon' />
                        </button>
                        <button className='footer_social_btn' id='youtube_btn'>
                            <TfiYoutube className='footer_social_icon' />
                        </button>
                    </div>
                </div>
                {/* <div id='link_div'>
                    <h4 id='links_hdng'></h4>
                    <div id='links_div'>
                        <p id='home_link'>Home</p>
                        <p id='about_link'></p>
                        <p></p>
                        <p></p>
                        <p></p>
                    </div> */}
                {/* </div> */}
                <div id='contact_div'>
                    <h4 id='footer_contact_hdng'>Get In Touch</h4>

                    <div id='footer_contact_item'>
                        <div className='contact_item'>
                            <span className='contact_logo'><FaHome /></span>
                            <p>National Incubation Center, NED University, Karachi, 75270</p>
                        </div>
                        <div className='contact_item'>
                            <span className='contact_logo'><FaPhoneAlt /></span>
                            <p onClick={handleCall} style={{ cursor: 'pointer' }}>+92 307 4163830</p>
                        </div>
                        <div className='contact_item'>
                            <span className='contact_logo'><IoMdMail /></span>
                            <p onClick={handleMail} style={{ cursor: 'pointer' }}>contact@fortify.biz</p>
                        </div>
                    </div>

                </div>

            </section >

            {/* <MDBContainer className='p-4 pb-0'>
                    <section id='links_section' className='mb-4'>
                        <MDBBtn outline color="light" floating className='m-1' href='https://www.facebook.com/landtrack.pk' role='button'>
                            <MDBIcon fab icon='facebook-f' />
                        </MDBBtn>

                        <MDBBtn outline color="light" floating className='m-1' href='https://www.landtrack.pk/' role='button'>
                            <MDBIcon fas icon="globe" />
                        </MDBBtn>

                        <MDBBtn outline color="light" floating className='m-1' href='https://www.instagram.com/landtrackpk/' role='button'>
                            <MDBIcon fab icon='instagram' />
                        </MDBBtn>

                        <MDBBtn outline color="light" floating className='m-1' href='https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Aorganization%3A11518895&keywords=landtrack.pk&origin=RICH_QUERY_SUGGESTION&position=0&searchId=9fde1361-7d1a-4d48-bcfd-de4b080eabe0&sid=B*0' role='button'>
                            <MDBIcon fab icon='linkedin-in' />
                        </MDBBtn>

                    </section>
                </MDBContainer> */}

            <div id='copyright_div'>
                <h3 id='copyright_txt'>Copyright © 2024 Fortify. All Rights Reserved By
                    <a className='text-white' onClick={() => { window.location.reload() }}>
                        Fortify
                    </a>
                </h3>

                <img id='nic_logo' src={nic_logo} alt="" />
            </div >
        </>
    );
};


export default Footer;