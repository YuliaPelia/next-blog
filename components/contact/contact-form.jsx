import { useState, useEffect } from 'react';
import Notification from '../ui/notification';

import classes from './contact-form.module.css';

async function sendContactData(contactDetails) {
    const response = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(contactDetails),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.message || 'Something went wrong!');
    }

    return data;
}

function ContactForm() {
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredName, setEnteredName] = useState('');
    const [enteredMessage, setEnteredMessage] = useState('');
    const [requestStatus, setRequestStatus] = useState();
    const [requestError, setRequestError] = useState();

    useEffect(() => {
        if (requestStatus === 'success' || requestStatus === 'error') {
            const timer = setTimeout(() => {
                setRequestStatus(null);
                setRequestError(null);
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [requestStatus]);


    async function sendMessageHandler(event) {
        event.preventDefault();
        setRequestStatus('pending');
        try {

            await sendContactData({
                email: enteredEmail,
                name: enteredName,
                message: enteredMessage
            })
            setRequestStatus('success');
            setEnteredEmail('');
            setEnteredName('');
            setEnteredMessage('');
        } catch (error) {
            setRequestStatus('error');
            setRequestError(error.message);
        }
    }

    let notification;

    if (requestStatus === 'pending') {
        notification = {
            status: 'pending',
            title: 'Sending message...',
            message: 'Your message is on its way!'
        }
    } 

    if (requestStatus === 'success') {
        notification = {
            status: 'success',
            title: 'Success!',
            message: 'Your message was sent successfully!'
        }
    }

    if (requestStatus === 'error') {
        notification = {
            status: 'error',
            title: 'Error!',
            message: requestError
        }
    }

    return (
        <section className={classes.contact}>
            <h1>How can I help you?</h1>
            <form className={classes.form} onSubmit={sendMessageHandler}>
                <div className={classes.controls}>
                    <div className={classes.control}>
                        <label className={classes.label} htmlFor="email">Your Email</label>
                        <input value={enteredEmail} onChange={(event) => setEnteredEmail(event.target.value)} type="email" id="email" required className={classes.input} />
                    </div>
                    <div className={classes.control}>
                        <label className={classes.label} htmlFor="name">Your Name</label>
                        <input value={enteredName} onChange={(event) => setEnteredName(event.target.value)} type="text" id="name" required className={classes.input} />
                    </div>

                </div>
                <div className={classes.control}>
                    <label className={classes.label} htmlFor="message">Your Message</label>
                    <textarea value={enteredMessage} onChange={(event) => setEnteredMessage(event.target.value)} id="message" rows="5" required className={classes.textarea}></textarea>
                </div>
                <div className={classes.actions}>
                    <button className={classes.button}>Send Message</button>
                </div>
            </form>
            {notification && <Notification title={notification.title} message={notification.message} status={notification.status} />}
        </section>
    )
}

export default ContactForm;