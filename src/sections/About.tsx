import React from 'react';
import { Card } from '../components/Card';

export const About: React.FC = () => {
    return (
        <section id="sobre-mi" className="section">
            <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>
                Sobre <span style={{ color: 'var(--accent)' }}>Mí</span>
            </h2>

            <Card padding="2.5rem" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--foreground)' }}>
                    Como estudiante de último año de Desarrollo de Aplicaciones Multiplataforma (DAM), he centrado mi aprendizaje en el ecosistema de React y las nuevas posibilidades que ofrece la IA.
                </p>
                <p style={{ fontSize: '1.2rem', lineHeight: '1.8', marginTop: '1.5rem', color: 'var(--foreground)' }}>
                    Me apasiona transformar datos en información útil mediante dashboards visuales y crear herramientas que no solo funcionen, sino que aporten valor al usuario mediante el análisis de comportamiento.
                </p>
            </Card>
        </section>
    );
};
