import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getIsNameExist, logIn, signUp } from '../store/auth/actions';

import { Container } from 'react-bootstrap';
import { LogInForm } from '../components/AuthComponents/LogInForm';
import { SignUpForm } from '../components/AuthComponents/SignUpForm';
import { setUserMessage } from '../store/user/actions';

export const Auth = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isSignedUp, setIsSignedUp] = useState(true);
    const { navTo } = useParams();


    const onSignUp = async (userCreds) => {
        dispatch(signUp(userCreds)).then(user => {
            if (!user) return null;
            navigate(navTo ? `/${navTo}` : '/');
        })
    }
    
    const onLogIn = async (userCreds) => {
        if (!userCreds.username || !userCreds.password) return null
        dispatch(logIn(userCreds)).then(user => {
            if (!user) return dispatch(setUserMessage('The username or password entered do not exist. ', 'danger'));
            navigate(navTo ? `/${navTo}` : '/');
        })
    }

    const onGetIsExist = (someName) => {
        return dispatch(getIsNameExist(someName)).then(isExist => isExist);
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
