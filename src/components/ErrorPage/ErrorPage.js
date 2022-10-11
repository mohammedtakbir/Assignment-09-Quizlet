import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    const navigate = useNavigate();
    const backToHome = () => {
        navigate('/')
    }
    return (
        <div className='text-center mt-10 text-3xl'>
            <p className='mb-5 text-red-500'>404 Not Found</p>
            <span>Back to the </span>
            <button className='underline text-teal-500' onClick={backToHome}>Home page </button>
        </div>
    );
};

export default ErrorPage;