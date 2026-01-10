import React from 'react';
import { Card } from '../components/Card';
import { Code2, Cloud, Wrench } from 'lucide-react';

export const Skills: React.FC = () => {
    const groups = [
        {
            title: 'Frontend & UI',
            icon: <Code2 size={24} color="var(--accent)" />,
            skills: ['React', 'TypeScript', 'Vite', 'CSS Modules', 'Diseño Responsivo']
        },
        {
            title: 'Data & Cloud',
            icon: <Cloud size={24} color="var(--accent)" />,
            skills: ['Firebase (Auth & Firestore)', 'Registro de datos asíncrono', 'Análisis de datos en tiempo real']
        },
        {
            title: 'Modern Dev',
            icon: <Wrench size={24} color="var(--accent)" />,
            skills: ['IA Prompt Engineering', 'Git', 'Metodologías Ágiles', 'Desarrollo orientado a la eficiencia']
        }
    ];

    return (
        <section className="section">
            <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>
                Habilidades <span style={{ color: 'var(--accent)' }}>Técnicas</span>
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                {groups.map((group, i) => (
                    <Card key={i} padding="1.5rem">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                            {group.icon}
                            <h3 style={{ fontSize: '1.25rem' }}>{group.title}</h3>
                        </div>

                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                            {group.skills.map(skill => (
                                <div key={skill} style={{
                                    border: '1px solid var(--card-border)',
                                    padding: '0.5rem 1rem',
                                    borderRadius: '12px',
                                    fontSize: '0.9rem'
                                }}>
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </Card>
                ))}
            </div>
        </section>
    );
};
