import { useRef } from 'react';

const RefInput = () => {

    const inputRef = useRef(null);

    const handleFocus = () => {
        if (inputRef.current) {
            inputRef.current.focus();
            inputRef.current.style.backgroundColor = 'yellow';
        }
    }

    return (
        <>
            <input ref={inputRef} type="text" />
            <button onClick={handleFocus}>Focus Input</button>
        </>
    );
};

export default RefInput;