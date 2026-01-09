import React from 'react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    padding?: string;
}

export const Card: React.FC<CardProps> = ({
    children,
    className = '',
    padding = '1.5rem'
}) => {
    return (
        <div
            className={`glass ${className}`}
            style={{ padding }}
        >
            {children}
        </div>
    );
};
