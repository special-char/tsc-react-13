import React, { memo } from 'react';
import clsx from 'clsx';

const Button = ({ className, ...rest }) => {
    return (
        <button
            type="submit"
            className={clsx(
                'rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
                {
                    [className]: !!className,
                },
            )}
            {...rest}
        />
    );
};

export default Button;
