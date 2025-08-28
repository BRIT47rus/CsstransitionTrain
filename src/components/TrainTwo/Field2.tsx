import { createRef, useCallback, useEffect, useRef, useState } from 'react';
import './Fielsd.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export const Field2 = () => {
    const [show, setShow] = useState(false);
    const [state, setState] = useState<string[]>([]);
    const nodeRef = state.map(() => useRef(null));

    const countRef = useRef(1);

    const setCallbackRef = (index) => (element) => {
        nodeRef[index].current = element;
        // Лучшее место для DOM-операций
    };
    const deleteItem = (i: string) => {
        setState((st) => st.filter((item) => item !== i));
    };

    const addItem = useCallback(() => {
        const newItem = 'n' + countRef.current++;
        setState((s) => [...s, newItem]);
    }, []);
    console.log(nodeRef.current);
    return (
        <div className="field">
            <button onClick={() => setShow((prev) => !prev)}>
                {show ? 'Close' : 'Open'}
            </button>
            <TransitionGroup>
                {state.map((item, i) => (
                    <CSSTransition
                        key={item}
                        nodeRef={nodeRef.current[i]}
                        timeout={300}
                        classNames="fade"
                        unmountOnExit
                    >
                        <div
                            ref={setCallbackRef(i)}
                            className="fade"
                            onClick={() => deleteItem(item)}
                        >
                            {item}
                        </div>
                    </CSSTransition>
                ))}
            </TransitionGroup>
            <button onClick={addItem}>Add Item</button>
        </div>
    );
};
