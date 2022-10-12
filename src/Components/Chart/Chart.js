import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

const Chart = () => {

    const data = [{ id: 1, name: "React", marks: 8 },
    { id: 2, name: "JavaScript", marks: 9 },
    { id: 4, name: "CSS", marks: 8 },
    { id: 5, name: "Git", marks: 11 }]

    return (
        <div className=' mt-5 d-flex justify-content-center '>
            <LineChart width={500} height={300} data={data}>
                <Line type="monotone" dataKey="marks" stroke="#82ca9d" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip></Tooltip>
            </LineChart>
        </div>
    );
};

export default Chart;