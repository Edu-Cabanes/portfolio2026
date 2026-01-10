import React from 'react';
import { Button } from '../components/Button';

export const Hero: React.FC = () => {
    return (
        <section className="section" style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            minHeight: '70vh',
            justifyContent: 'center',
            gap: '1.5rem'
        }}>
            <h1 style={{ fontSize: '3.5rem', fontWeight: '800', maxWidth: '900px' }}>
                Junior Software Developer | <span style={{ color: 'var(--accent)' }}>Especializándome en React e Integración de IA</span>
            </h1>

            <p style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
                Estudiante de 2º de DAM enfocado en el desarrollo de soluciones eficientes. Mi trabajo se centra en el registro inteligente de datos, el análisis dinámico de los mismos y la implementación de modelos de Inteligencia Artificial para optimizar la experiencia de usuario.
            </p>

            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                <Button variant="outline" onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}>
                    Contactar
                </Button>
            </div>
        </section>
    );
};
