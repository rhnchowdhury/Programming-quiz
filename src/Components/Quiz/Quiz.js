import React from 'react';
import { Button } from 'react-bootstrap';
import './Quiz.css'
const Quiz = ({ qz }) => {
    const { name, logo } = qz;
    return (
        <div className='bg-light m-2 p-3 border rounded'>
            <div className='design'>
                <img className='bg-dark rounded mb-3' src={logo} alt="" />
                <div className='d-flex justify-content-between'>
                    <h5 className=' text-primary' bg="primary">{name}</h5>
                    <Button variant="primary">Start Quiz</Button>
                </div>
            </div>
        </div>
    );
};

export default Quiz;