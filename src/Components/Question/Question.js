import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QsShow from '../QsShow/QsShow';

const Question = () => {
    const question = useLoaderData()
    // console.log(question)
    return (
        <div className='mt-4'>
            <h2>{question.data.name} Quiz</h2>
            <div className='m-3'>
                {
                    question.data.questions.map(qs => <QsShow
                        key={qs.id}
                        qs={qs}
                    ></QsShow>)
                }
            </div>
        </div>
    );
};

export default Question;