import { useRef, useState } from 'react';
import './Fielsd.css';
import { CSSTransition } from 'react-transition-group';

export const Field2 = () => {
    const [show, setShow] = useState(false);
    const nodeRef = useRef(null); // без <HTMLElement | null> — для JS/TS

    return (
        <div className="field">
            <button onClick={() => setShow((o) => !o)}>
                {show ? 'Close' : 'Open'}
            </button>

            <CSSTransition
                nodeRef={nodeRef}
                in={show}
                timeout={300}
                classNames="fade"
                unmountOnExit
            >
                <div ref={nodeRef} className="fade">
                    Hello world
                </div>
            </CSSTransition>
        </div>
    );
};
