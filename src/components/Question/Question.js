import React from 'react';
import Option from '../Option/Option';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Question = ({q}) => {
    const {options, question, correctAnswer } = q;
    const handleTrueFalse = (selectedOption) => {
        if(selectedOption === correctAnswer){
            toast.success('true', {autoClose: 500})
        }else{
            toast.error('false', {autoClose: 500})
        }
    }
    return (
        <div className='max-w-[800px] mx-auto shadow-lg px-7 py-5 my-10 rounded-lg'>
            <p className='text-2xl font-medium text-center pb-5 pt-10 text-teal-500'>{question}</p>
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