import { useEffect, useRef, useState } from 'react';
import './Fielsd.css';
enum EState {
    None,
    Entering,
    Entered,
    Exiting,
}
export const Field = () => {
    const [open, setOpen] = useState(true);
    const [state, setState] = useState<EState>(EState.None);
    const timerRef = useRef<number | null>(null);
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (open) {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
            setState(EState.Entered);
            window.requestAnimationFrame(() => {
                const element = ref.current;
                if (element && element instanceof HTMLElement) {
                    window.getComputedStyle(element).opacity;
                    setState(EState.Entering);
                }
            });
        } else {
            setState(EState.Exiting);
            timerRef.current = setTimeout(() => {
                setState(EState.None);
            }, 1000);
        }
    }, [open]);
    const classN =
        state === EState.Entered || state === EState.Entering
            ? 'hello show'
            : 'hello hidden';
    return (
        <div className="field">
            <button onClick={() => setOpen((o) => !o)}>
                {open ? 'Close' : 'Open'}
            </button>
            {state !== EState.None && (
                <div className={classN} ref={ref}>
                    fg
                </div>
            )}
        </div>
    );
};
