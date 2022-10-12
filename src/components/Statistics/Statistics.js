import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const quizData = useLoaderData().data;
    let getData = [];
    for (const data of quizData) {
        const singleData = { name: data.name, total: data.total };
        getData.push(singleData);
    };
    return (
        <div className='container mx-auto'>
            <div className='flex justify-center mt-[150px] max-w-[700px] mx-auto md:pr-0 pr-5'>
                <ResponsiveContainer width="100%" height={400}>
                    <LineChart width={500} height={400} data={getData}>
                        <Line type="monotone" dataKey="total" stroke="#82ca9d" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip></Tooltip>
                        <CartesianGrid strokeDasharray="3 3" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
            <h1 className='mb-10 text-center text-2xl font-semibold mt-5 text-teal-500'>Total Quiz for each topic...</h1>
        </div>
    );
};

export default Statistics;