import React from 'react';
import Button from 'react-bootstrap/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const QsAns = ({ op, correctAnswer }) => {

    //*********Quiz Toasted******//
    const popUpToast = (op, right) => {
        if (op === right) {
            toast.success('Your answer is correct !!!', {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 3000,
            });
        }
        else {
            toast.error('Your answer is wrong !!! ', {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 3000,
            });
        }
    }
    /**************** */

    return (
        <div className='d-flex justify-content-center  m-2'>
            <Button onClick={() => popUpToast(op, correctAnswer)} variant="outline-secondary w-50">{op}</Button><ToastContainer />
        </div>
    );
};

export default QsAns;