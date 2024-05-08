import React, { useEffect, useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { MDBIcon } from 'mdb-react-ui-kit';

import "./case.css";

const Case = () => {

    return (
        <>
            <section>

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
                        <button className='service_section_btn'><IoReaderOutline /> Read More</button>
                    </div>

                </div>

            </section>
        </>
    );
};

export default Case;

// import React, { useEffect, useState } from 'react';
// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
// import { MDBIcon } from 'mdb-react-ui-kit';

// import "./case.css";

// const Case = () => {
//     const [caseScript, setCaseScript] = useState("");
//     const [listening, setListening] = useState(false);

//     const handleChange = (event) => {
//         const value = event.target.value;
//         setCaseScript(value);
//         adjustTextareaHeight();
//     }

//     const adjustTextareaHeight = () => {
//         const textarea = document.getElementById('case_input');
//         if (textarea) {
//             textarea.style.height = 'auto';
//             const contentHeight = textarea.scrollHeight;
//             const lineHeight = parseFloat(window.getComputedStyle(textarea).lineHeight);
//             const maxRows = 17;
//             const maxContentHeight = lineHeight * maxRows;
//             textarea.style.height = Math.min(contentHeight, maxContentHeight) + 'px';
//         }
//     };

//     const startListening = () => {
//         resetTranscript();
//         SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
//         setListening(true);
//     };

//     const stopListening = () => {
//         SpeechRecognition.stopListening();
//         setListening(false);
//     };

//     const { transcript, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();

//     useEffect(() => {
//         setCaseScript(transcript);
//     }, [transcript]);

//     const isSubmitDisabled = caseScript.trim() === ""; // Check if input is empty or only contains whitespace

//     if (!browserSupportsSpeechRecognition) {
//         return null;
//     }

//     return (
//         <>
//             <div id='case_hdng_div'>
//                 <h5 id='case_subheading'> <hr id='hr_2' /> Tell Us</h5>
//                 <h1 id='case_hdng'>YOUR CASE</h1>
//             </div>

//             <div id='case_section'>
//                 <div id='case_content_div'>
//                     <p id='case_text'>Are you facing a legal matter and need expert advice? Look no further! Our platform connects you with a network of specialized lawyers ready to assist you. Whether it's family law, criminal defense, employment disputes, taxation issues, civil litigation, or immigration matters, we've got you covered. Don't navigate the complexities of the legal system alone. Trust our experienced attorneys to provide tailored solutions and guide you through every step. Get the legal representation you deserve today!</p>
//                 </div>

//                 <div id='transcript_div'>
//                     <button className={`listen_btn ${listening ? 'listening' : 'n_listening'}`}
//                         onClick={listening ? stopListening : startListening}>
//                         <MDBIcon fas icon="microphone" />
//                     </button>
//                     <textarea
//                         id='case_input'
//                         type="text"
//                         placeholder='Speak or Type your case...'
//                         value={caseScript}
//                         onChange={handleChange}
//                         rows={12}
//                     />
//                     <div id='btn_div'>
//                         <button className='submit_btn' id='submit_btn_case' disabled={isSubmitDisabled}>Submit</button>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Case;

