import React from 'react';
import Option from '../Option/Option';
import { toast } from 'react-toastify';
import { EyeIcon } from '@heroicons/react/24/solid';
const Question = ({ q, index }) => {
    const { options, question, correctAnswer } = q;
    const handleTrueFalse = (selectedOption) => {
        if (selectedOption === correctAnswer) {
            toast.success('Correct Answer', { autoClose: 1000 })
        } else {
            toast.error('Wrong Answer', { autoClose: 1000 })
        }
    };
    const handleCorrectAns = (correctAns) => {
        toast.info(`Correct Answer: ${correctAns}`, { autoClose: 3000 });
    };
    return (
        <div className='max-w-[800px] md:mx-auto mx-5 shadow-lg px-7 pb-7 my-10 rounded-lg relative bg-[#f1f5f6]'>
            <p className='pt-10 text-center mb-3 text-2xl text-teal-500'>
                <span className='font-semibold'>Quiz: </span>
                <span className='mr-3 font-semibold'>{index === 0 ? 1 : index + 1}</span>
            </p>
            <p className='text-2xl font-medium sm:text-center pb-2 text-teal-500'>
                <span dangerouslySetInnerHTML={{ __html: question }}></span>
            </p>
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

/* 
const quizData = useLoaderData().data;
    let getData = [];
    for (const data of quizData) {
        const singleData = { name: data.name, total: data.total };
        getData.push(singleData);
    };

*/