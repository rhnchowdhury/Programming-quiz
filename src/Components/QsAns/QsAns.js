import React from 'react';
import Button from 'react-bootstrap/Button';

const QsAns = ({ op }) => {
    return (
        <div className='d-flex justify-content-center  m-2'>
            <Button variant="outline-secondary w-50">{op}</Button>
        </div>
    );
};

export default QsAns;