import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';

const Quiz = ({ qz }) => {
    const { name, logo } = qz;
    return (

        <Col >
            <Card className=' bg-dark bg-opacity-50 p-2 m-2' >
                <Card.Img variant="top " className='p-1 rounded border-4' src={logo} />
                <Card.Body className='d-flex justify-content-between '>
                    <Card.Title className='text-white'><h6>{name}</h6></Card.Title>
                    <Card.Text>
                        <Button>Start Quiz</Button>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>

    );
};

export default Quiz;