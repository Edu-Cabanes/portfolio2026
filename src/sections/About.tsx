import React from 'react';
import { Card } from '../components/Card';

export const About: React.FC = () => {
    return (
        <section id="sobre-mi" className="section">
            <h2 style={{ marginBottom: '3rem', textAlign: 'center' }}>
                Sobre <span style={{ color: 'var(--accent)' }}>Mí</span>
            </h2>

            <Card className="responsive-card-padding" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', marginBottom: '3rem' }}>
                <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--foreground)' }}>
                    Como estudiante de último año de Desarrollo de Aplicaciones Multiplataforma (DAM), he centrado mi aprendizaje en el ecosistema de React y las nuevas posibilidades que ofrece la IA.
                </p>
                <p style={{ fontSize: '1.2rem', lineHeight: '1.8', marginTop: '1.5rem', color: 'var(--foreground)' }}>
                    Me apasiona transformar datos en información útil mediante dashboards visuales y crear herramientas que no solo funcionen, sino que aporten valor al usuario mediante el análisis de comportamiento.
                </p>
            </Card>

            <h2 style={{ marginBottom: '3rem', textAlign: 'center' }}>
                Educación
            </h2>

            <Card className="responsive-card-padding" style={{ maxWidth: '800px', margin: '0 auto' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
                    <div>
                        <h3 style={{ fontSize: '1.5rem', color: 'var(--accent)' }}>Grado Superior en Desarrollo de Aplicaciones Multiplataforma (DAM)</h3>
                        <p style={{ fontSize: '1.1rem', marginTop: '0.5rem' }}>IES Julián Marías</p>
                    </div>
                    <span style={{
                        background: 'rgba(var(--accent-rgb), 0.1)',
                        color: 'var(--accent)',
                        padding: '0.5rem 1rem',
                        borderRadius: '20px',
                        fontSize: '0.9rem',
                        fontWeight: 'bold'
                    }}>
                        2024 - Presente
                    </span>
                </div>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: 'var(--foreground-muted)' }}>
                    <strong>Dato Clave:</strong> Finalizando el segundo curso con especial interés en arquitecturas web y análisis de datos.
                </p>
            </Card>
        </section>
    );
};
