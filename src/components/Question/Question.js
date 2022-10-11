import React from 'react';
import Option from '../Option/Option';

const Question = ({q}) => {
    const {options, question} = q;
    return (
        <div className='max-w-[800px] mx-auto shadow-lg px-7 py-5 my-10 rounded-lg'>
            <p className='text-2xl font-medium text-center pb-5 pt-10 text-teal-500'>{question}</p>
            <div>
                {
                    options.map((option, index) => <Option
                        option={option}
                        key={index}
                        />)
                }
            </div>
        </div>
    );
};

export default Question;