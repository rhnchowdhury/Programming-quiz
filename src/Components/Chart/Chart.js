import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

const Chart = () => {

    const data = [{ id: 1, name: "React", total: 8 },
    { id: 2, name: "JavaScript", total: 9 },
    { id: 4, name: "CSS", total: 8 },
    { id: 5, name: "Git", total: 11 }]

    return (
        <div className=' mt-5 d-flex justify-content-center '>
            <LineChart width={500} height={300} data={data}>
                <Line type="monotone" dataKey="total" stroke="#82ca9d" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip></Tooltip>
            </LineChart>
        </div>
    );
};

export default Chart;