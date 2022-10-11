import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const quizData = useLoaderData().data;
    let getData = [];
    for (const data of quizData) {
        const singleData = { name: data.name, total: data.total };
        getData.push(singleData);
    };
    return (
        <div className='flex justify-center mt-[200px] max-w-[700px] mx-auto'>
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
    );
};

export default Statistics;