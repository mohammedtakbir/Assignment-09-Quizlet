import React from 'react';
import Option from '../Option/Option';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { EyeIcon } from '@heroicons/react/24/solid';
const Question = ({ q }) => {
    const { options, question, correctAnswer } = q;

    const handleTrueFalse = (selectedOption) => {
        if (selectedOption === correctAnswer) {
            toast.success('Correct Answer', { autoClose: 500 })
        } else {
            toast.error('Wrong Answer', { autoClose: 500 })
        }
    };
    const handleCorrectAns = (correctAns) => {
        toast.info((correctAns), {autoClose: 2000});
    };
    return (
        <div className='max-w-[800px] mx-auto shadow-lg px-7 py-5 my-10 rounded-lg relative bg-[#f1f5f6]'>
                <p className='text-2xl font-medium sm:text-center pb-5 pt-10 text-teal-500'>{question}</p>
                <button onClick={() => handleCorrectAns(correctAnswer)} className='absolute top-[30px] right-[20px]'>
                    <EyeIcon className="h-5 w-5 text-black inline ml-1" />
                </button>
            <div>
                {
                    options.map((option, index) => <Option
                        option={option}
                        key={index}
                        handleTrueFalse={handleTrueFalse}
                    />)
                }
            </div>
        </div>
    );
};

export default Question;