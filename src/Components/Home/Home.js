import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import Row from 'react-bootstrap/Row';
import bannerImage from '../../../src/image/bg.jpg';
import './Home.css'

const Home = () => {
    const quiz = useLoaderData();
    // console.log(quiz)

    return (
        <div>
            <div className='design'>
                <div >
                    <img src={bannerImage} style={{ width: 400 }} className='img-design' alt="" />
                </div>
                <div className='re-design'>
                    <h3 className='mt-5 text-secondary'>React is a JavaScript library used to develop interactive UI. I create a quiz website to understand the basics of react.js, css, javascript.</h3>
                </div>
            </div>
            <Row xs={1} md={2} lg={4} className='m-5'>
                {
                    quiz.data.map(qz => <Quiz
                        key={qz.id}
                        qz={qz} >
                    </Quiz>)
                }
            </Row>
        </div>
    );

};

export default Home;