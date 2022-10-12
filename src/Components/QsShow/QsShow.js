
import Card from 'react-bootstrap/Card';
import QsAns from '../QsAns/QsAns';
import { ArchiveBoxArrowDownIcon } from '@heroicons/react/24/solid'

const QsShow = ({ qs }) => {
    const { question, options, correctAnswer } = qs;

    return (
        <div className='m-4'>
            <Card>
                <Card.Body>

                    <h3 className='mb-4'>{question}</h3>

                    <div className='d-flex justify-content-end'>
                        <ArchiveBoxArrowDownIcon className=" text-white-100 " style={{ width: 30 }} />
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