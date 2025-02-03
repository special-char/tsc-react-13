import React from 'react';
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';

const FormInput = ({ control, name, rules, label, ...props }) => {
    return (
        <FormField
            control={control}
            name={name}
            rules={rules}
            // rules={{
            //     required: {
            //         value: true,
            //         message: 'Email is mendatory',
            //     },
            //     pattern: {
            //         value: /^[^@]+@[^@]+\.[^@]+$/,
            //         message: 'Enter valid email',
            //     },
            // }}
            render={({ field }) => (
                <FormItem>
                    <FormLabel>{label}</FormLabel>
                    <FormControl>
                        <Input {...field} {...props} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
};

export default FormInput;
