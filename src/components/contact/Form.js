import React, { useState } from 'react';

const Form = () => {
    const [fname, setFName] = useState('');
    const [lname, setLName] = useState('');
    const [company, setCompany] = useState('');
    const [email, setEmail] = useState('');
    const [msg, setMsg] = useState('');
    const [error, setError] = useState('');
    const [clear, setClear] = useState(false);


    const onSubmit = async (e) => {
        e.preventDefault();
        
        if (clear) {
            clearInput();
            setError('');
            return setClear(false);
        }

        if (!isValidEmail()) {
            setError('Invalid email address');
        } else if (!isValidMsg()) {
            setError('Invalid message');
        } else {
            const fullname = fname + ' ' + lname;
            const success = await sendEmail(email, `From Portfolio, sent by ${fullname} from ${company}`, msg);
            if (success) clearInput();
        }
    }

    const sendEmail = async (emailTo, subject, text) => {
        let success = false;
        let response = await fetch('/api/email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                emailTo,
                subject,
                text
            })
        })

        if (response.status === 200) {
            setError('Sent successfully')
            success = true;
        } else {
            setError('Unable to send message');
            success = false;
        }

        return success;
    }

    const isValidEmail = () => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    const isValidMsg = () => {
        return msg !== '';
    }

    const clearInput = () => {
        setFName('');
        setLName('');
        setCompany('');
        setEmail('');
        setMsg('');
    }

    return (
        <>
            <form className="contact-form" onSubmit={onSubmit}>
                <p className="required-text">
                    <span className="required-text--red">*</span>required
                </p>
                {/* Empty tag needed for grid */}
                <span></span> 

                <label htmlFor="fname" className="form__title">First Name: </label>
                <input type="text" id="fname" /*name="name"*/ name="fname" className="form__input" value={fname}
                    onChange={(e) => setFName(e.target.value)} 
                />

                <label htmlFor="lname" className="form__title">Last Name: </label>
                <input type="text" id="lname" /*name="name"*/ name="lname" className="form__input" value={lname}
                    onChange={(e) => setLName(e.target.value)} 
                />

                <label htmlFor="company" className="form__title">Company: </label>
                <input type="text" id="company" /*name="name"*/ name="company" className="form__input" value={company} 
                    onChange={(e) => setCompany(e.target.value)} 
                />

                <label htmlFor="email" className="form__title">Email: 
                    <span className="form__title--red"> *</span>
                </label>
                <input type="email" id="email" /*name="name"*/ name="email" className="form__input" value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label htmlFor="msg" className="form__title">Message: 
                    <span className="form__title--red"> *</span>
                </label>
                <textarea type="text" id="msg" /*name="name"*/ name="msg" className="form__input form_input--height" value={msg} 
                    onChange={(e) => setMsg(e.target.value)}
                ></textarea>

                <button className="contact-form__btn" onClick={() => setClear(true)}>Clear</button>
                <button className="contact-form__btn">Send</button>

                {/* Empty tag needed for grid */}
                <span></span>
                {error && <p className="invalid-text">{error}</p>}
            </form>
        </>
    )
}

export default Form;