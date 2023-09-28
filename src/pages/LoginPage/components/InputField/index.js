import React from "react";

const InputField = React.forwardRef(({label, id, inputType = "text", className, ...rest}, ref) => {

    return (
        <div>
            <div>
                <label htmlFor={id} className={`text-default text-primary`}>{label} </label>
            </div>
            <input
                {...rest}
                ref={ref}
                name={id}
                id={id}
                type={inputType}
                className={`${className}`}
            />

        </div>
    )
});

export default InputField;