import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
    label?: string;
    textarea?: boolean;
}

export const Input: React.FC<InputProps> = ({ label, textarea, className = '', ...props }) => {
    const inputStyles = {
        width: '100%',
        padding: '0.75rem 1rem',
        background: 'rgba(255, 255, 255, 0.03)',
        border: '1px solid var(--card-border)',
        borderRadius: '8px',
        color: 'var(--foreground)',
        fontSize: '1rem',
        outline: 'none',
        transition: 'border-color 0.22s ease'
    };

    const Component = textarea ? 'textarea' : 'input';

    return (
        <div style={{ marginBottom: '1.5rem' }}>
            {label && (
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                    {label}
                </label>
            )}
            <Component
                {...props}
                style={inputStyles as any}
                onFocus={(e) => (e.target.style.borderColor = 'var(--accent)')}
                onBlur={(e) => (e.target.style.borderColor = 'var(--card-border)')}
            />
        </div>
    );
};
