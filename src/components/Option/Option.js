import React from 'react';
const Option = ({ option, handleTrueFalse }) => {
    return (
        <>
            <button onClick={() => handleTrueFalse(option)} className='border border-teal-500 w-full my-3 px-2 py-4 rounded-md'>
                <p className='text-teal-500 font-medium'>{option}</p>
            </button>
        </>
    );
};

export default Option;