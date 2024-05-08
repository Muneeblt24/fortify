import React, { useState, useEffect } from 'react';
import './form.css';  // Ensure the CSS path is correct

import {
    MDBInput,
    MDBCol,
    MDBRow,
    MDBCheckbox,
    MDBBtn,
    MDBIcon
} from 'mdb-react-ui-kit';

const Form = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [subscribe, setSubscribe] = useState(true);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const currentData = {
            firstName,
            lastName,
            email,
            contactNumber,
            subscribe
        };

        try {
            const response = await fetch('http://localhost:2000/form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ currentData })
            });

            const result = await response.json();
            console.log(result);

            // Optionally reset form or give user feedback
            if (response.ok) {
                alert('Form submitted successfully!');
                // Reset form if needed
                setFirstName('');
                setLastName('');
                setEmail('');
                setContactNumber('');
                setSubscribe(true);
            } else {
                throw new Error(result.error || 'Something went wrong');
            }
        } catch (error) {
            console.error('Submission error:', error);
            alert(error.message);
        }
    };

    return (
        <div id="form" style={{ overflowY: 'auto', maxHeight: '80vh' }}>
            <form onSubmit={handleSubmit}>
                <MDBRow className='mb-4'>
                    <MDBCol>
                        <MDBInput value={firstName} onChange={e => setFirstName(e.target.value)} id='form3Example1' label='First name' />
                    </MDBCol>
                    <MDBCol>
                        <MDBInput value={lastName} onChange={e => setLastName(e.target.value)} id='form3Example2' label='Last name' />
                    </MDBCol>
                </MDBRow>
                <MDBInput value={email} onChange={e => setEmail(e.target.value)} className='mb-4' type='email' id='form3Example3' label='Email address' />
                <MDBInput value={contactNumber} onChange={e => setContactNumber(e.target.value)} className='mb-4' type='number' id='form3Example4' label='Contact No.' />
                <MDBCheckbox
                    wrapperClass='d-flex justify-content-center mb-4'
                    id='form3Example5'
                    label='Subscribe to our newsletter'
                    checked={subscribe}
                    onChange={e => setSubscribe(e.target.checked)}
                    defaultChecked
                />
                <MDBBtn type='submit' className='mb-4 submit_btn' block>Submit</MDBBtn>
            </form>
        </div>
    );
};

export default Form;
