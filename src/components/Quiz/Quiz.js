import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Quiz = () => {
    const quiz = useLoaderData();
    const { name, questions } = quiz.data;
    return (
        <div className='container mx-auto'>
            <h3 className='text-center font-bold text-3xl mt-14 mb-5 text-teal-500'>Quiz of {name}</h3>
            <div>
                {
                    questions.map(q => <Question
                        q={q}
                        key={q.id}
                    />)
                }
            </div>
        </div>
    );
};

export default Quiz;