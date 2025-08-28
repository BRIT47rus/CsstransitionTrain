import type { FC } from 'react';
import './Hello.css';
interface Props {
    open: boolean;
}
export const Hello: FC<Props> = ({ open, ...props }) => {
    return (
        <div {...props} className={`hello`}>
            Hello world
        </div>
    );
};
