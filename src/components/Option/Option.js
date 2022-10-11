import React from 'react';
import { ToastContainer } from 'react-toastify';
const Option = ({ option, handleTrueFalse }) => {
    return (
        <>
            <button id='test' onClick={() => handleTrueFalse(option)} className='border border-teal-500 w-full my-3 px-2 py-4 rounded-md'>
                <p className='text-teal-500'>{option}</p>
            </button>

            <ToastContainer position="top-center" theme="light" />
        </>
    );
};

export default Option;