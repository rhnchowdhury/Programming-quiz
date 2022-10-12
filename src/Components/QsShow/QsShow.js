
import Card from 'react-bootstrap/Card';
import QsAns from '../QsAns/QsAns';
import { ArchiveBoxArrowDownIcon } from '@heroicons/react/24/solid'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const QsShow = ({ qs }) => {
    const { question, options, correctAnswer } = qs;
    const showAns = event => {
        toast.info(correctAnswer, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',

        });
    }

    return (
        <div className='m-4'>
            <Card>
                <Card.Body>

                    <h3 className='mb-4'>{question}</h3>

                    <div className='d-flex justify-content-end'>
                        <ArchiveBoxArrowDownIcon onClick={() => showAns()} className=" text-white-100 " style={{ width: 30 }} /><ToastContainer />
                    </div>

                    <Card.Text >
                        {
                            options.map(op => <QsAns key={op.id} op={op} correctAnswer={correctAnswer}></QsAns>)
                        }
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default QsShow;