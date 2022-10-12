import React from 'react';
import Button from 'react-bootstrap/Button';

const QsAns = ({ op, correctAnswer }) => {


    const popUpToast = (op, right) => {
        if (op === right) {
            alert('right')
        }
        else {
            alert('false')
        }
    }

    return (
        <div className='d-flex justify-content-center  m-2'>
            <Button onClick={() => popUpToast(op, correctAnswer)} variant="outline-secondary w-50">{op}</Button>
        </div>
    );
};

export default QsAns;