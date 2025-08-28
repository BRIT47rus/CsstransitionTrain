import { useCallback, useRef, useState } from 'react';
import './Fielsd.css';
import { CSSTransition } from 'react-transition-group';

export const Field2 = () => {
    const [show, setShow] = useState(false);
    const nodeRef = useRef(null);
    const [state, setState] = useState<string[]>([]);

    const deleteItem = (i: number) => {
        setState((st) => st.filter((_, it) => it !== i));
    };
    let count = 1;

    const addItem = useCallback(() => {
        count += 1;
        setState((s) => [...s, 'n' + count]);
    }, [count]);
    return (
        <div className="field">
            <button onClick={addItem}>{show ? 'Close' : 'Open'}</button>
            {state &&
                state.map((item, i) => {
                    return (
                        <div
                            ref={nodeRef}
                            key={item}
                            className="fade"
                            onClick={() => deleteItem(i)}
                        >
                            {item}
                        </div>
                    );
                })}
            <CSSTransition
                nodeRef={nodeRef}
                in={show}
                timeout={300}
                classNames="fade"
                unmountOnExit
            ></CSSTransition>
        </div>
    );
};
