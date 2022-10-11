import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Home = () => {
    const quiz = useLoaderData();
    console.log(quiz)
    return (
        <div className='d-flex m-5'>
            {
                quiz.data.map(qz => <Quiz
                    key={qz.id} qz={qz}
                ></Quiz>)
            }
        </div>
    );
};

export default Home;