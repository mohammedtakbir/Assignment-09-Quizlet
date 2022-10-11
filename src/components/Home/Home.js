import React from 'react';
import headerImg from '../../images/header--img.jpg'
const Home = () => {
    return (
        <div className='container mx-auto'> 
            <div className='mt-10 flex items-center gap-10 p-10'>
                <img className='w-full' src={headerImg} alt="" />
                <div>
                    <h2 className='font-bold text-4xl mb-10'>Organize Live Multiplayer Play Buzz Quiz for Your Event!</h2>
                    <p className='font-medium text-xl mb-7'>
                        myQuiz is a web-based Audience Engagement Cloud Platform for hosting interactive trivia quizzes at in-person, virtual, and hybrid events. No app install is required
                    </p>
                    <div className='flex'>
                        <button className='bg-teal-400 py-3 px-7 mr-8 text-white font-medium rounded-lg inline-block'>Pick a plan</button>
                        <button className='bg-teal-400 py-3 px-7 text-white font-medium rounded-lg inline-block'>Demo Quiz</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;