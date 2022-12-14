import React from 'react';

const Blog = () => {
    return (
        <div className='container mx-auto'>
            <div className='md:px-0 px-4'>
                <h1 className='text-center mt-10 text-4xl font-semibold'>Frequently asked interview question</h1>
                <div className='mb-6 mt-7'>
                    <h3 className='font-medium text-2xl'>1. What is the purpose of React Router?</h3>
                    <ul className='mt-3'>
                        <li><strong>React Router</strong> is a standard library for routing in React. </li>
                        <li>ReactJS Router is mainly used for <strong>developing Single Page Web Applications</strong>.</li>
                        <li>It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</li>
                    </ul>
                </div>
                <div>
                    <h3 className='font-medium text-2xl'>2. How does context API works?</h3>
                    <ul className='mt-3'>
                        <li>The React <strong>Context API</strong> is a way for a React app to effectively produce global variables that can be passed around.</li>
                        <li> This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on.</li>
                        <li>Context is also touted as an easier, lighter approach to state management using Redux.</li>
                    </ul>
                </div>
                <div className='mt-6 mb-10'>
                    <h3 className='font-medium text-2xl'>2. What is the useRef hook?</h3>
                    <ul className='mt-3'>
                        <li>The <strong>useRef Hook</strong> allows you to persist values between renders.</li>
                        <li>It can be used to store a mutable value that does not cause a re-render when updated.</li>
                        <li>It can be used to access a DOM element directly.</li>
                        <li>Use <strong>useRef</strong> if you need to manage focus, text selection, trigger imperative animations or integrating third-party libraries.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Blog;