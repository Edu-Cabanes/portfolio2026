import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '../components/Button';

export const Contact: React.FC = () => {
    return (
        <section id="contacto" className="section" style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                ¿Hablamos?
            </h2>
            <p style={{ marginBottom: '3rem' }}>
                Estoy abierto a oportunidades para Febrero 2026.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '3rem' }}>
                <a href="#" className="contact-link" style={{ color: 'inherit' }}>
                    <Linkedin size={32} />
                </a>
                <a href="#" className="contact-link" style={{ color: 'inherit' }}>
                    <Github size={32} />
                </a>
                <a href="mailto:tuemail@ejemplo.com" className="contact-link" style={{ color: 'inherit' }}>
                    <Mail size={32} />
                </a>
            </div>

            <div style={{ maxWidth: '500px', margin: '0 auto' }}>
                <Button style={{ width: '100%' }}>
                    Enviar un mensaje directo
                </Button>
            </div>
        </section>
    );
};
