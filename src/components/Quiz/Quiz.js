import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Quiz = () => {
    const quiz = useLoaderData();
    const { name, questions } = quiz.data;
    return (
        <div className='container mx-auto'>
            <h3 className='text-center font-bold text-3xl mt-12 mb-5 text-teal-500'>Quiz of {name}</h3>
            <div>
                {
                    questions.map((q, index) => <Question
                        q={q}
                        key={q.id}
                        index={index}
                    />)
                }
            </div>
        </div>
    );
};

export default Quiz;