import React from 'react';

const Option = ({ option }) => {
    console.log(option)
    return (
        <button className='border border-teal-500 w-full my-3 px-2 py-4 rounded-md'>
                <p className='text-teal-500'>{option}</p>
        </button>
    );
};

export default Option;