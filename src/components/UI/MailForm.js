import React, { useState } from 'react'
import "./MailForm.css"
import { Button } from './Button'

export const MailForm = () => {
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')

    const handleChange = (e) => {
        setEmail(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (email.length === 0) {
            setError('Please enter your email')
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            setError('Please enter a valid email')
        } else {
            setError('')
        }
        setEmail('')
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
            <Button className="btn-primary" text="Notify me" type="submit" />
        </form>
    )
}
