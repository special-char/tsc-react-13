import React from 'react';
import { Form } from '../ui/form';
import FormInput from './formInput';
import { Button } from '../ui/button';
import { useForm } from 'react-hook-form';

const FormTemplate = ({ onSubmit, fields }) => {
    const form = useForm({
        defaultValues: fields.reduce((p, c) => ({ ...p, [c.name]: '' }), {}),
        mode: 'all',
    });
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {fields.map((x) => (
                    <FormInput key={x.name} {...x} />
                ))}

                <Button className="w-full">Login</Button>
            </form>
        </Form>
    );
};

export default FormTemplate;
