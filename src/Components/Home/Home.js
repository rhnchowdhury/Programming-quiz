import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import Row from 'react-bootstrap/Row';
// import bannerImage from '../../../public/bg.jpg'

const Home = () => {
    const quiz = useLoaderData();
    console.log(quiz)
    return (

        <div>
            <div className='dd'>
                {/* <img src={bannerImage} alt="" /> */}



                <h3>po</h3>
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