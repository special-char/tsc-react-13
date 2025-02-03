import React from 'react';
import FormTemplate from '@/components/form/formTemplate';
import { useAuth } from '@/context/auth';

const fields = [
    {
        name: 'name',
        rules: {
            required: {
                value: true,
                message: 'name is mendatory',
            },
        },
        label: 'Name',
        placeholder: 'Elon Musk',
    },
    {
        name: 'email',
        rules: {
            required: {
                value: true,
                message: 'Email is mendatory',
            },
            pattern: {
                value: /^[^@]+@[^@]+\.[^@]+$/,
                message: 'Enter valid email',
            },
        },
        label: 'Email',
        placeholder: 'elon@tesla.com',
    },
    {
        name: 'password',
        rules: {
            required: {
                value: true,
                message: 'Password is mendatory',
            },
            pattern: {
                value: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
                message: 'Enter valid password',
            },
        },
        label: 'Password',
        placeholder: 'supersecret',
        type: 'password',
    },
];

const Register = () => {
    const { register } = useAuth();

    return <FormTemplate fields={fields} onSubmit={register} />;
};

export default Register;
