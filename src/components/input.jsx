import React, { forwardRef } from 'react';
import clsx from 'clsx';

const Input = forwardRef(({ id, label, variant, className, ...rest }, ref) => {
    let labelClassName = 'block text-sm/6 font-medium text-gray-900';
    let inputWrapper = 'mt-2';

    if (variant === 'withoutLabel') {
        labelClassName = 'sr-only';
        inputWrapper = '';
    }

    return (
        <div className="flex-1">
            <label htmlFor={id} className={labelClassName}>
                {label}
            </label>
            <div className={inputWrapper}>
                <input
                    id={id}
                    ref={ref}
                    type="text"
                    className={clsx(
                        'block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6',
                        {
                            [className]: !!className,
                        },
                    )}
                    {...rest}
                />
            </div>
        </div>
    );
});

export default Input;
