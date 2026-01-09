import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline';
}

export const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    className = '',
    ...props
}) => {
    const baseStyles = 'btn-primary'; // Using the class defined in index.css

    return (
        <button
            className={`${baseStyles} ${className}`}
            style={variant === 'primary' ? {} : {
                padding: '0.75rem 1.5rem',
                borderRadius: '8px',
                fontWeight: '600',
                cursor: 'pointer',
                border: variant === 'outline' ? '1px solid var(--accent)' : '1px solid var(--card-border)',
                background: variant === 'outline' ? 'transparent' : 'var(--card-bg)',
                color: variant === 'outline' ? 'var(--accent)' : 'var(--foreground)'
            }}
            {...props}
        >
            {children}
        </button>
    );
};
