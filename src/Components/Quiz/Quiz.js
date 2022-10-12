import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Quiz = ({ qz }) => {
    const { id, name, logo, total } = qz;

    // Button onclick added part
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/question/${id}`);
    }

    return (
        <Col>
            <Card className=' bg-dark bg-opacity-50 p-2 m-2' >
                <Card.Img variant="top " className='p-1 rounded border-4' src={logo} />
                <Card.Body className='d-flex justify-content-between '>
                    <Card.Title className='text-white m-2'><h5>{name}</h5></Card.Title>
                    <Card.Title className='text-white m-2'><h6>Questions: {total}</h6></Card.Title>
                </Card.Body>
                <Card.Text>
                    <Button onClick={handleNavigate}>Start Quiz</Button>
                </Card.Text>
            </Card>
        </Col>
    );
};

export default Quiz;