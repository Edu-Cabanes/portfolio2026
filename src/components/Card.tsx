import React from 'react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    padding?: string;
    style?: React.CSSProperties;
}

export const Card: React.FC<CardProps> = ({
    children,
    className = '',
    padding = '1.5rem',
    style = {}
}) => {
    return (
        <div
            className={`glass ${className}`}
            style={{ padding, ...style }}
        >
            {children}
        </div>
    );
};
