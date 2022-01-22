import React, { useState, useCallback, useEffect, } from 'react'
import "./MailForm.css"
import { Button } from './Button'
import axios from 'axios'
import { Modal } from './Modal'
import { Fragment } from 'react'

export const MailForm = (props) => {
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')
    const [modal, setModal] = useState(false)
    const [loading, setLoading] = useState(false)


    const handleShowModal = useCallback(() => {
        setModal(true)
    }, [])

    const handleHideModal = useCallback(() => {
        setModal(false)
    }, [])

    const handleChange = (e) => {
        setEmail(e.target.value)
        setError('')
    }

    const handleSubmit = useCallback(async (e) => {
        e.preventDefault()
        setLoading(true)
        if (email.length === 0) {
            setError('Email is required')
            setLoading(false)
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
            setError('Invalid email address')
            setLoading(false)
        } else {
            try {
                const res = await axios.post('https://hidea-backend-dev.herokuapp.com/api/waitlist', { email })
                if (res.data.success) {
                    setLoading(false)
                    setEmail('')
                    setError('')
                    handleShowModal()
                } else {
                    setError('Something went wrong')
                    setLoading(false)

                }
            } catch (err) {
                setError('Sorry, You can not submit the same email twice!')
                setLoading(false)
            }
        }

    }, [email, handleShowModal])

    useEffect(() => {
        setLoading(false)
    }, [])

    const loadingChecker = () => {
        switch (loading) {
            case true:
                return (
                    <div
                        className="loader
                        ease-linear
                        rounded-full
                        border-4 border-t-4 border-gray-200
                        h-6
                        w-6"
                    ></div>
                )
            case false:
                return (<p>Notify Me</p>)
            default:
                return (<p>Notify Me</p>)
        }
    }

    return (
        <Fragment>
            <form className="mail-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <input type="email" className="form-control" id="exampleInputEmail1"
                        aria-describedby="SubcriptionEmail" placeholder="Enter your email" value={email} onChange={handleChange} />
                    {error && <p className="text-red-500 text-sm italic">{error}</p>}
                </div>
                <Button type="submit"
                    className="btn-primary"
                    disabled={loading}
                    text={loadingChecker()}
                />
            </form>
            {modal && <Modal handleHideModal={handleHideModal} ref={props.modalRef} />}
        </Fragment>
    )
}

