import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
const quizTopics = ({ quizTopic }) => {
    const { logo, name, total, id } = quizTopic;
    return (
        <div className='p-5 shadow-md rounded-md'>
            <img className='bg-[#ddd] rounded-md' src={logo} alt="" />
            <p className='text-2xl font-medium mt-4 mb-3'>{name}</p>
            <p className='font-medium'>Total Quiz: {total}</p>
            <Link to={`/quiz/${id}`}>
                <button className='bg-teal-400 py-2 px-5 text-white font-medium rounded-lg text-lg mt-4'>
                    <span>Start Practice</span>
                    <ArrowRightIcon className="h-5 w-5 text-white inline ml-1" />
                </button>
            </Link>
        </div>
    );
};

export default quizTopics;