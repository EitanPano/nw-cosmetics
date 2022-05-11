import { Spinner } from 'react-bootstrap';

export const Loader = () => {
    return (
        <Spinner className="loader" role="status" animation="border">
            <Spinner className="loader" role="status" animation="grow"></Spinner>
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    );
};
