import React from 'react';
import { Card } from '../components/Card';
import { Code2, Cloud, Wrench } from 'lucide-react';

export const Skills: React.FC = () => {
    const groups = [
        {
            title: 'Frontend & UI',
            icon: <Code2 size={24} color="var(--accent)" />,
            skills: ['React', 'Next.js (App Router)', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Diseño Responsivo']
        },
        {
            title: 'Backend & Datos',
            icon: <Cloud size={24} color="var(--accent)" />,
            skills: ['Supabase (Auth + PostgreSQL)', 'Row Level Security', 'Server Actions', 'Stripe (Checkout)', 'Resend (Email)', 'Zod (Validación)']
        },
        {
            title: 'Herramientas & Testing',
            icon: <Wrench size={24} color="var(--accent)" />,
            skills: ['Vitest', 'Playwright (E2E)', 'Testing Library', 'Git & GitHub', 'Netlify / Vercel', 'ESLint + Prettier']
        }
    ];

    return (
        <section id="skills" className="section">
            <h2 style={{ marginBottom: '3rem', textAlign: 'center' }}>
                Habilidades <span style={{ color: 'var(--accent)' }}>Técnicas</span>
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '4rem' }}>
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

            <h2 style={{ marginBottom: '3rem', textAlign: 'center' }}>
                Habilidades <span style={{ color: 'var(--accent)' }}>Blandas</span>
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                <Card padding="2rem">
                    <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: 'var(--accent)' }}>Adaptabilidad Grupal</h3>
                    <p style={{ lineHeight: '1.6', color: 'var(--foreground-muted)' }}>
                        Capacidad para integrarme rápidamente en equipos de trabajo, entendiendo rápidamente las dinámicas del grupo.
                    </p>
                </Card>

                <Card padding="2rem">
                    <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: 'var(--accent)' }}>Aprendizaje Exponencial</h3>
                    <p style={{ lineHeight: '1.6', color: 'var(--foreground-muted)' }}>
                        Enfoque en la absorción profunda de conocimientos técnicos. Aunque priorizo entender bien las bases al inicio, mi curva de progresión y autonomía se acelera drásticamente una vez dominado el contexto.
                    </p>
                </Card>

                <Card padding="2rem">
                    <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: 'var(--accent)' }}>Resolución y Optimización</h3>
                    <p style={{ lineHeight: '1.6', color: 'var(--foreground-muted)' }}>
                        Pasión por desgranar problemas complejos y encontrar la forma más eficiente de resolverlos, buscando siempre mejorar los procesos existentes.
                    </p>
                </Card>

                <Card padding="2rem">
                    <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: 'var(--accent)' }}>Mentalidad Crítica / Curiosidad Técnica</h3>
                    <p style={{ lineHeight: '1.6', color: 'var(--foreground-muted)' }}>
                        No me conformo con que el código funcione, busco entender el "por qué" y explorar si existe una mejor implementación.
                    </p>
                </Card>
            </div>
        </section>
    );
};
