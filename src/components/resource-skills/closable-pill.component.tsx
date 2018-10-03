import * as React from 'react';
import Badge from 'reactstrap/lib/Badge';
import { IoMdClose } from 'react-icons/io';

interface IProps {
    className?: string
    color: string
    onClose: () => void
    text: string
}

export const ClosablePill: React.StatelessComponent<IProps> = (props) => {
    return (
        <Badge pill={true} color={props.color} className={`px-75 ${props.className}`}>
            <span className="pr-2">{props.text}</span>
            <IoMdClose onClick={props.onClose} className="clickable" size="2em" />
        </Badge>
    );
}