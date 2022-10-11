import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='bg-light p-2 d-flex justify-content-around'>
            <div>
                <h5 className='fs-2 fw-bold text-info'>PrimoQuiz</h5>
            </div>
            <div>
                <Link className=' text-decoration-none me-4 fs-5 ' to='/'>Home</Link>
                <Link className=' text-decoration-none me-4 fs-5 ' to='/chart'>Chart</Link>
                <Link className=' text-decoration-none fs-5 ' to='/blogs'>Blogs</Link>
            </div>
        </nav>
    );
};

export default Header;