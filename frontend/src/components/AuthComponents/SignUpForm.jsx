import { useEffect, useRef, useState } from 'react';
import { useForm, getValidators } from '../../hooks/useForm';
import { asyncDebounce } from '../../services/utils';
import { Button, Col, Form, FormControl, FormGroup, FormLabel, Row } from 'react-bootstrap';


export const SignUpForm = ({ onSignUp, onGetIsExist }) => {
    const inputRef = useRef();
    const [signUpForm, handleChange] = useForm({username: '',email: '',password: '', confirmPassword: ''});
    const [formConfig, setFormConfig] = useState({username: {}, email: {}, password: {}, confirmPassword: {}})
    const _onGetIsExist = asyncDebounce(onGetIsExist, 600)

    const validateField = async (ev) => {
        handleChange(ev)
        const [target, validators] = getValidators(ev, signUpForm.password)
        setFormConfig({ ...formConfig, [target.name]: validators})
        
        const isExistRequired = (target.name === 'username' || target.name === 'email')
        const isExist = (isExistRequired) ? await _onGetIsExist(target.value) : false;
        if (isExist) {
            const targetFields = {...validators, isValid: !isExist}
            setFormConfig({ ...formConfig, [target.name]: targetFields })
        }
    }
    
    useEffect(() => {
        inputRef.current.focus()
    }, [])

    const handleSubmit = () => {
        if (Object.values(formConfig).every(targetField => targetField.isValid))
        onSignUp(signUpForm)
    }

    const { username, email, password, confirmPassword } = formConfig;
    return (
        <Form onSubmit={ev => ev.preventDefault}>
            <h3 className='text-center my-3'>Sign-Up</h3>
            <FormGroup controlId='username'>
                <FormLabel>Username</FormLabel>
                <FormControl
                    ref={inputRef}
                    value={signUpForm.username}
                    onChange={validateField}
                    name="username"
                    className='d-inline' type='text'
                    placeholder='Enter Username'
                    isInvalid={!username.isValid && username.isTouched}
                    isValid={username.isValid}
                    required
                />
                <Form.Control.Feedback type='invalid'>
                    Please choose a valid username.
                </Form.Control.Feedback>
            </FormGroup>
            <FormGroup controlId='email'>
                <FormLabel className='mt-2'>Email Address</FormLabel>
                <FormControl
                    value={signUpForm.email}
                    onChange={validateField}
                    name="email"
                    className='d-inline'
                    type='text'
                    placeholder='mail@example.com'
                    isInvalid={!email.isValid && email.isTouched}
                    isValid={email.isValid}
                    required
                />
                <Form.Control.Feedback type="invalid">
                    Please choose a valid email.
                </Form.Control.Feedback>
            </FormGroup>
            <FormGroup controlId='password'>
                <FormLabel className='mt-2'>Password</FormLabel>
                <FormControl
                    value={signUpForm.password}
                    onChange={validateField}
                    name="password"
                    className='d-inline secured'
                    type='current-password'
                    placeholder='Enter Password'
                    isInvalid={!password.isValid && password.isTouched}
                    onBlur={() => signUpForm.confirmPassword !== signUpForm.password || !confirmPassword.isTouched
                        ? setFormConfig({...formConfig, confirmPassword: {...confirmPassword, isValid: false}})
                        : setFormConfig({...formConfig, confirmPassword: {...confirmPassword, isValid: true}})
                    }
                    isValid={password.isValid}
                    required
                />
                <Form.Control.Feedback type='invalid'>
                    Min-8 Max-20, Atleast 1 number. 
                </Form.Control.Feedback>
            </FormGroup>
            <FormGroup controlId='confirmPassword'>
                <FormLabel className='mt-2'>Confirm-Password</FormLabel>
                <FormControl
                    value={signUpForm.confirmPassword}
                    onChange={validateField}
                    name="confirmPassword"
                    className='d-inline secured'
                    type='current-password'
                    placeholder='Enter Password'
                    isInvalid={!confirmPassword.isValid && confirmPassword.isTouched}
                    onBlur={() => (confirmPassword.isTouched && signUpForm.confirmPassword === signUpForm.password && password.isValid)
                        ? setFormConfig({...formConfig, confirmPassword: {...confirmPassword, isValid: true}})
                        : setFormConfig({...formConfig, confirmPassword: {...confirmPassword, isValid: false}})
                    }
                    isValid={confirmPassword.isValid}
                    required
                />
                <Form.Control.Feedback type='invalid'>
                    Passwords don't match.
                </Form.Control.Feedback>
            </FormGroup>

            <Row className='my-2'>
                <Col className='d-flex justify-content-center'>
                    <Button onClick={handleSubmit} className='text-center my-2'>SignUp</Button>
                </Col>
            </Row>
        </Form>
    );
}
