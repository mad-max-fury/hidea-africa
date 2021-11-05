import React, { useState } from 'react'
import "./MailForm.css"
import { Button } from './Button'
import axios from 'axios'

export const MailForm = () => {
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState("Notify me")

    const handleChange = (e) => {
        setEmail(e.target.value)
        setSuccess("Notify me")
        setError("")
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (email.length === 0) {
            setError('Please enter your email')
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            setError('Please enter a valid email')
        } else {
            axios.post('https://hidea-backend-dev.herokuapp.com/api/waitlist', { email })
                .then(res => {
                    setEmail('')
                    setError('')
                    setSuccess(res.data.message)
                })
                .catch(err => {
                    setError('Something went wrong')
                })
        }
    }


    return (
        <form className="mail-form" onSubmit={handleSubmit} >
            <div className="form-group">
                <input type="email" className="form-control" id="exampleInputEmail1"
                    aria-describedby="SubcriptionEmail"
                    placeholder="Input your email address" value={email}
                    onChange={handleChange} />
                {error && <div className="error">{error}</div>}
            </div>
            <Button className="btn-primary" text={success} type="submit" />
        </form>
    )
}
