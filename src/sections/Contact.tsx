import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export const Contact: React.FC = () => {
    return (
        <section id="contacto" className="section" style={{ textAlign: 'center' }}>
            <h2 style={{ marginBottom: '3rem' }}>
                ¿Hablamos?
            </h2>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
                <a href="https://www.linkedin.com/in/edu-cabanes-a90378192/" target="_blank" rel="noopener noreferrer" className="contact-link" style={{ color: 'inherit', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent)'} onMouseOut={(e) => e.currentTarget.style.color = 'inherit'}>
                    <Linkedin size={32} />
                </a>
                <a href="https://github.com/Edu-Cabanes" target="_blank" rel="noopener noreferrer" className="contact-link" style={{ color: 'inherit', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent)'} onMouseOut={(e) => e.currentTarget.style.color = 'inherit'}>
                    <Github size={32} />
                </a>
                <a href="mailto:educabanes54@gmail.com" className="contact-link" style={{ color: 'inherit', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent)'} onMouseOut={(e) => e.currentTarget.style.color = 'inherit'}>
                    <Mail size={32} />
                </a>
            </div>

        </section>
    );
};
