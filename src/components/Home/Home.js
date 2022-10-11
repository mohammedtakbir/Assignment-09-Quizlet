import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import QuizTopics from '../QuizTopics/QuizTopics';
import './Home.css'
const Home = () => {
    const quizTopics = useLoaderData().data;
    return (
        <div className='container mx-auto'>
            <Header />
            <div className='custom-grid1 grid lg:grid-cols-4 md:grid-cols-2 p-10 gap-10'>
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

export default Home;