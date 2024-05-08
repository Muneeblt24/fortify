import React, { useState } from 'react';

import { FaRegCheckCircle } from "react-icons/fa";
import { IoReaderOutline } from "react-icons/io5";

import "./services.css";

import siteImg from "./home2.png";
import facilityImg from "./financial-management.svg";
import crmImg from "./crm.svg";

const Services = () => {

    const sectionScrollHandler = (sectionId) => {
        const section = document.getElementById(sectionId);

        if (section) {
            window.scrollTo({
                top: section.offsetTop,
                behavior: "smooth"
            });
        };
    };


    return (
        <section id='services_section'>

            <div id='site_mngmnt_section'>

                <div className='service_section_image_div'>
                    <img className='service_section_img' src={siteImg} alt="" />
                </div>

                <div className='service_section_content_div'>
                    <h2 className='service_section_hdng'>Site Management</h2>
                    <p className='service_section_txt'>Our site management software is an essential tool for any real estate business looking to streamline their site management operations. With a user-friendly dashboard, booking management system, and excel plugin for data upload, you can easily manage your site inventory, track site progress, generate reports, and automate booking processes.</p>
                    <div className='service_section_item_div'>
                        <div className='service_section_item'>
                            <FaRegCheckCircle className='icon' /> Dashboard
                        </div>
                        <div className='service_section_item'>
                            <FaRegCheckCircle className='icon' /> Installment Management
                        </div>
                        <div className='service_section_item'>
                            <FaRegCheckCircle className='icon' /> Site Inventory
                        </div>
                        <div className='service_section_item'>
                            <FaRegCheckCircle className='icon' /> Interactive Society Map
                        </div>
                        <div className='service_section_item'>
                            <FaRegCheckCircle className='icon' /> Booking Management
                        </div>
                        <div className='service_section_item'>
                            <FaRegCheckCircle className='icon' /> Collection & Recovery
                        </div>
                    </div>
                    <button className='service_section_btn' onClick={() => sectionScrollHandler('footer_section')}><IoReaderOutline /> Read More</button>
                </div>

            </div>


            <div id='facility_mngmnt_section'>

                <div className='service_section_image_div'>
                    <img className='service_section_img' src={facilityImg} alt="" />
                </div>

                <div className='service_section_content_div'>
                    <h2 className='service_section_hdng'>Facility Management</h2>
                    <p className='service_section_txt'>Our financial management solution is designed to help you streamline your financial operations and make informed decisions to grow your business. With a comprehensive suite of tools, our software includes the following features:</p>
                    <div className='service_section_item_div'>
                        <div className='service_section_item'>
                            <FaRegCheckCircle /> Chart of Accounts
                        </div>
                        <div className='service_section_item'>
                            <FaRegCheckCircle className='icon' /> Debt Collection
                        </div>
                        <div className='service_section_item'>
                            <FaRegCheckCircle className='icon' /> Invoice & Billing
                        </div>
                        <div className='service_section_item'>
                            <FaRegCheckCircle className='icon' /> Bank reconciliation
                        </div>
                        <div className='service_section_item'>
                            <FaRegCheckCircle /> BI Reports
                        </div>
                        <div className='service_section_item'>
                            <FaRegCheckCircle className='icon' /> Cash Flow Statement
                        </div>
                    </div>
                    <button className='service_section_btn' onClick={() => sectionScrollHandler('footer_section')}><IoReaderOutline /> Read More</button>
                </div>

            </div>


            <div id='crm_section'>

                <div className='service_section_content_div'>
                    <h2 className='service_section_hdng'>CRM And Administration</h2>
                    <p className='service_section_txt'>CRM and administration is a vital component of any business as it helps manage customer relationships and overall business administration. With our comprehensive CRM tools, you can streamline your business processes and increase productivity. Here are some points that make our CRM and administration solution stand out:</p>
                    <div className='service_section_item_div'>
                        <div className='service_section_item'>
                            <FaRegCheckCircle className='icon' /> Contacts Book
                        </div>
                        <div className='service_section_item'>
                            <FaRegCheckCircle className='icon' /> Whatsapp Integration
                        </div>
                        <div className='service_section_item'>
                            <FaRegCheckCircle className='icon' /> Lead Management
                        </div>
                        <div className='service_section_item'>
                            <FaRegCheckCircle className='icon' /> Integration With Social Media Leads
                        </div>
                        <div className='service_section_item'>
                            <FaRegCheckCircle className='icon' /> Client Document Management
                        </div>
                        <div className='service_section_item'>
                            <FaRegCheckCircle className='icon' /> Campaigning
                        </div>
                    </div>
                    <button className='service_section_btn' onClick={() => sectionScrollHandler('footer_section')}><IoReaderOutline /> Read More</button>
                </div>
                <div className='service_section_image_div'>
                    <img className='service_section_img' src={crmImg} alt="" />
                </div>

            </div>


            {/* 
            <div data-aos="zoom-out" data-aos-duration="1200" data-aos-delay="600" class="aos-init"><img src={mobileImg} alt="logo" /></div>
            <img src={rotateImg} class="rotateme circle-image" alt="image"></img> */}

        </section>
    );
};

export default Services;