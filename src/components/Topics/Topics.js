import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizTopics from '../QuizTopics/QuizTopics';
const Topics = () => {
    const quizTopics = useLoaderData().data;
    return (
        <div className='container mx-auto'>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 md:p-10 md:px-0 px-4 gap-10 md:mt-12 mt-9 mb-10'>
                {
                    quizTopics.map(quizTopic => <QuizTopics 
                        key={quizTopic.id}
                        quizTopic={quizTopic}
                    />)
                }
            </div>
        </div>
    );
};

export default Topics;