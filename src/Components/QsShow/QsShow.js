import React from 'react';
import Card from 'react-bootstrap/Card';
import QsAns from '../QsAns/QsAns';

const QsShow = ({ qs }) => {
    const { question, correctAnswer, options } = qs;
    return (
        <div className='m-4'>
            <Card>
                <Card.Body>
                    <h3 className='mb-4'>{question}</h3>
                    <Card.Text >
                        {
                            options.map(op => <QsAns key={op.id} op={op}></QsAns>)
                        }
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default QsShow;