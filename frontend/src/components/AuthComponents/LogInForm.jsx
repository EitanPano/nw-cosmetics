import { useForm } from '../../hooks/useForm';
import { Button, Col, Form, FormControl, FormGroup, FormLabel, Row } from 'react-bootstrap';

export const LogInForm = ({ onLogIn }) => {

    const [logInForm, handleChange] = useForm({ username: '', password: '' });

    

    return (
        <Form>
            <h3 className='text-center my-3'>Log-In</h3>
            <FormGroup controlId='mailortext'>
                <FormLabel>Email or Username</FormLabel>
                <FormControl value={logInForm.username} onChange={handleChange} name="username" className='d-inline mb-2' type='text' placeholder='Yourmail@example.com'></FormControl>
            </FormGroup>
            <FormGroup controlId='password'>
                <FormLabel>Password</FormLabel>
                <FormControl value={logInForm.password} onChange={handleChange} name="password" className='d-inline mb-2' type='current-password' placeholder='Enter Password'></FormControl>
            </FormGroup>

            <Row className='my-2'>
                <Col className='d-flex justify-content-center'>
                    <Button onClick={() => onLogIn(logInForm)} className='text-center'>LogIn</Button>
                </Col>
            </Row>

        </Form>
    );
};
