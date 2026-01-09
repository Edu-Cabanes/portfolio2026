import React from 'react';
import { Card } from '../components/Card';
import { Database, Shield, Brain, BarChart3, ExternalLink } from 'lucide-react';

export const Projects: React.FC = () => {
    return (
        <section id="proyectos" className="section">
            <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>
                Proyectos <span style={{ color: 'var(--accent)' }}>Destacados</span>
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
                <Card className="project-card" padding="2rem">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1.5rem' }}>
                        <h3 style={{ fontSize: '1.5rem' }}>Interactive SaaS Education Platform</h3>
                        <ExternalLink size={20} color="var(--text-muted)" />
                    </div>

                    <p style={{ marginBottom: '2rem' }}>
                        Plataforma completa de gestión de aprendizaje que integra tutorización mediante Inteligencia Artificial.
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <Shield size={18} color="var(--accent)" />
                            <span>Auth robusta y base de datos con Firebase</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <Brain size={18} color="var(--accent)" />
                            <span>Integración de modelos IA (LLMs)</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <Database size={18} color="var(--accent)" />
                            <span>Arquitectura de servicios asíncronos</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <BarChart3 size={18} color="var(--accent)" />
                            <span>Dashboard de analíticas dinámicas</span>
                        </div>
                    </div>

                    <div style={{ display: 'flex', gap: '0.5rem', marginTop: '2rem' }}>
                        {['React', 'TypeScript', 'Firebase', 'OpenAI'].map(tag => (
                            <span key={tag} style={{
                                background: 'rgba(255,255,255,0.05)',
                                padding: '0.25rem 0.75rem',
                                borderRadius: '6px',
                                fontSize: '0.75rem'
                            }}>
                                {tag}
                            </span>
                        ))}
                    </div>
                </Card>
            </div>
        </section>
    );
};
