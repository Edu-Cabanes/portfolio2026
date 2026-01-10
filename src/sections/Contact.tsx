import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '../components/Button';

export const Contact: React.FC = () => {
    return (
        <section id="contacto" className="section" style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>
                ¿Hablamos?
            </h2>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', marginBottom: '3rem' }}>
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

            <div style={{ maxWidth: '500px', margin: '0 auto' }}>
                <Button
                    style={{ width: '100%' }}
                    onClick={() => window.location.href = 'mailto:educabanes54@gmail.com?subject=Contacto desde Portfolio'}
                >
                    Enviar un mensaje directo
                </Button>
            </div>
        </section>
    );
};
