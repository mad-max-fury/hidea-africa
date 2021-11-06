import React, { Fragment, useEffect } from 'react';
import Portal from './Portal';
import './Modal.css';

export const Modal = ({ handleHideModal }) => {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);
    return (
        <Fragment>
            <div onClick={handleHideModal} className="fixed inset-0 bg-black opacity-50" />
            <Portal>

                <div className="bg-black opacity-25 w-full h-full absolute z-10 inset-0" />
                <div className="modal bg-white rounded-lg md:max-w-md md:mx-auto p-4 fixed inset-x-0 bottom-0 z-50 mb-4 mx-4 ">
                    <div className="flex-col items-center text-center justify-center">
                        <div className="rounded-full border border-green-500 flex items-center justify-center w-16 h-16 flex-shrink-0 mx-auto">

                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 text-lg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <div className="mt-4 text-center md:text-center">
                            <p className="font-bold text-center">Success</p>
                            <p className="text-sm text-gray-700 mt-1">
                                Email submited successfully. You'll get a mail from us when we launch.
                            </p>
                        </div>
                    </div>
                    <div className="text-center md:text-center mt-4 md:flex md:justify-center">
                        <button
                            onClick={handleHideModal}
                            className="text-white block w-full md:inline-block px-4 py-3 bg-black rounded-md font-semibold text-sm mt-4 md:mt-0 md:order-1"
                        >Ok</button>

                    </div>
                </div>

            </Portal>
        </Fragment>
    );
}
