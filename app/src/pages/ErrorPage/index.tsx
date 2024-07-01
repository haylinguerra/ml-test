import React from 'react';
import { useRouteError } from 'react-router-dom';

const Error: React.FC = () => {
    const { data:  message } = useRouteError() as { data: string };
    return (
        <div>
            <h2>{message}</h2>
        </div>
    );
};

export default Error;