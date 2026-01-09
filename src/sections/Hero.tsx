import React from 'react';
import { Button } from '../components/Button';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
    return (
        <section className="section" style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            minHeight: '80vh',
            justifyContent: 'center',
            gap: '1.5rem'
        }}>
            <div style={{
                background: 'var(--accent-glow)',
                color: 'var(--accent)',
                padding: '0.5rem 1rem',
                borderRadius: '20px',
                fontSize: '0.875rem',
                fontWeight: '600',
                border: '1px solid var(--accent)'
            }}>
                Disponible para Febrero 2026
            </div>

            <h1 style={{ fontSize: '4rem', fontWeight: '800', maxWidth: '800px' }}>
                Junior <span style={{ color: 'var(--accent)' }}>Software Developer</span>
            </h1>

            <p style={{ fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto' }}>
                Estudiante de 2º de DAM enfocado en Clean Code, arquitecturas modernas y aprendizaje continuo.
            </p>

            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                <Button onClick={() => document.getElementById('proyectos')?.scrollIntoView({ behavior: 'smooth' })}>
                    Ver Proyectos <ArrowRight size={18} style={{ marginLeft: '8px' }} />
                </Button>
                <Button variant="outline" onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}>
                    Contactar
                </Button>
            </div>
        </section>
    );
};
