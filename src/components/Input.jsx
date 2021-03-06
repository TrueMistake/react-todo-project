import React from 'react';

const Input = React.forwardRef((props, ref) => {
    console.log('props', props)
    return (
        <input ref={ref} className="input" {...props}/>
    );
});

export default Input;
