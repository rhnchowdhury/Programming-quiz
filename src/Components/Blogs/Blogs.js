// import React from 'react';
import React from 'react';
import Accordion from 'react-bootstrap/Accordion';


const Blogs = () => {
    return (
        <div className='mt-5'>
            <h1 className='mb-5 text-secondary'>Frequently asked Questions!!!</h1>

            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header >What is the purpose of react router?</Accordion.Header>
                    <Accordion.Body> <strong>ReactJS Router</strong> is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.</Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>How does content API works?</Accordion.Header>
                    <Accordion.Body>
                        <strong> Content APIs</strong> Context provides a way to pass data through the component tree without having to pass props down manually at every level. Context is primarily used when some data needs to be accessible by many components at different nesting levels. Apply it sparingly because it makes component reuse more difficult.

                        If you only want to avoid passing some props through many levels, component composition is often a simpler solution than context.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>What is the purpose of react router?</Accordion.Header>
                    <Accordion.Body><strong>Refs</strong> provide a way to access DOM nodes or React elements created in the render method. <strong>Refs</strong> can be used in the following cases: <br></br><strong>-</strong> When we need DOM measurements such as managing focus, text selection, or media playback.<br></br> <strong>-</strong> It is used in triggering imperative animations.<br></br> <strong>-</strong> When integrating with third-party DOM libraries.<br></br> <strong>-</strong> It can also use as in callbacks.</Accordion.Body>
                </Accordion.Item>
            </Accordion>

        </div>
    );
};

export default Blogs;