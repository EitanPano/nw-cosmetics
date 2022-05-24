import { useState } from 'react';
import { useDidUpdate } from './useDidUpdate';

// You have to put the "name" attribute on the input!

export const useForm = (initialState, cbFunc = () => {}) => {
    const [fields, setFields] = useState(initialState);

    useDidUpdate(() => {
        // console.log(cbFunc);
        cbFunc(fields);
    }, [fields, cbFunc]);

    const handleChange = ({ target }) => {
        const field = target.name;
        const value = target.type === 'number' ? +target.value : target.value;
        setFields((prevFields) => ({ ...prevFields, [field]: value }));
    };

    return [fields, handleChange, setFields];
};

export const getValidators = ({ target }, currPassword) => {
    const regexSwitch = (field) => {
        switch (field) {
            case 'username':
                return /^[A-Za-z0-9]{3,32}$/.test(target.value);

            case 'email':
                return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(target.value);

            case 'password':
                return /^(?=.*\d)(?=.*[a-z])(?=.*[a-zA-Z]).{8,20}$/.test(target.value);

            case 'confirmPassword':
                return (currPassword === value)
        
            default:
                return true;
        }
    }
    const name = target.name;
    const value = target.type === 'number' ? +target.value : target.value;
    const isDirty = target.value.length ? true : false;
    const isTouched = true;
    const isRegexTested = regexSwitch(target.name)
    const isValid = (isRegexTested && isDirty)

    return [{ name, value }, { isValid, isDirty, isTouched }];
};

