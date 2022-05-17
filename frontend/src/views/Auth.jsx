import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getIsNameExist } from '../store/auth/actions'

import { Container } from 'react-bootstrap';
import { LogInForm } from '../components/AuthComponents/LogInForm';
import { SignUpForm } from '../components/AuthComponents/SignUpForm';

export const Auth = () => {
    const dispatch = useDispatch()
    const [isSignedUp, setIsSignedUp] = useState(false);


    const onSignUp = (userCreds) => {
        // dispatch(signUp(userCreds))
        console.log(userCreds);
    }    
    
    const onLogIn = (userCreds) => {
        // dispatch(logIn(userCreds))
        console.log(userCreds);
    }


    const onGetIsExist = (someName) => {
        return dispatch(getIsNameExist(someName)).then(isExist => isExist)
    }

    const FormToShow = () => (
        <Container className='d-flex flex-column align-items-center'>
            { isSignedUp 
                ?<LogInForm onLogIn={onLogIn}></LogInForm>
                : <SignUpForm onSignUp={onSignUp} onGetIsExist={onGetIsExist}></SignUpForm> 
            }

            <p>
                {isSignedUp ?  "Don't have an account yet?" : 'Already have an account?'}
                <button
                    onClick={() => setIsSignedUp(!isSignedUp)}
                    className="btn-nude"
                >
                    {isSignedUp ? 'Sign-Up' : 'Log-In' }
                </button>
            </p>
        </Container>
    );

    return (
        <main className="main-layout">
            <FormToShow />
        </main>
    );
};
