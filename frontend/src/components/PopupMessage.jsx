import { Alert, Button, Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setUserMessage } from '../store/user/actions';

export const PopupMessage = () => {
    const { userMessage } = useSelector((state) => state.userModule);
    const dispatch = useDispatch();

    return (
        <Container className="fixed-bottom mb-4">
            <Row className="justify-content-center">
                <Col md={8} lg={6}>
                    <Alert
                        className="rounded d-flex align-items-center justify-content-between"
                        show={userMessage.message ? true : false}
                        variant={userMessage.variant || 'success'}
                    >
                        <h5 className="mb-0">{userMessage.message}</h5>
                        <Button
                            onClick={() => dispatch(setUserMessage())}
                            variant={'outline-dark'}
                            className={'rounded-circle'}
                            size="sm"
                        >
                            <i className="fa-solid fa-x"></i>
                        </Button>
                    </Alert>
                </Col>
            </Row>
        </Container>
    );
};
