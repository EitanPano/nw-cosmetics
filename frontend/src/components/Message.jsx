import React from 'react';
import { Alert } from 'react-bootstrap';

export const Message = ({ variant = 'alert', children }) => {
    if (!children) return null
    return (
        <Alert className="" variant={variant}>
            {children}
        </Alert>
    );
};

Message.defaultProps = {
    variant: 'info',
};
