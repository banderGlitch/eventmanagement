import Image from "next/image"
import { useRouter } from "next/router";
import { useRef, useState } from "react";
const SingleEvent = ({ data }) => {
    const inputEmail = useRef();
    const router = useRouter();
    const [message, setMessage] = useState('')
    const handleSubmit = async (e) => {
        console.log("button is clicked")
        e.preventDefault()
        const emailValue = inputEmail.current.value
        const eventId = router?.query.id
        console.log("eventId", eventId)
        const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (!emailValue.match(validRegex)) {
            setMessage('Please introduce a correct email address');
        }

        try {
            const response = await fetch('/api/email-registration', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: emailValue, eventId }),
            });
            if (!response.ok) throw new Error(`Error: ${response.status}`)
            const data = await response.json();
            console.log("data=========>", data)
            setMessage(data.message)
            inputEmail.current.value = '';
        } catch (e) {
            console.log('ERROR', e);
        }

    }
    return (
        <div className="event_single_page">
            <h1>Data</h1>
            <Image src={data.image} width={1000} height={500} alt={data.title} />
            <p>{data.description}</p>
            <form onSubmit={handleSubmit} className="email_registration">
                <label>Get Registered for this event!</label>
                <input
                    ref={inputEmail}
                    type="email"
                    id="email"
                    placeholder="Please insert your email here"
                />
                <button type="submit">Submit</button>
            </form>
            <p>{message}</p>
        </div>
    )
}

export default SingleEvent;