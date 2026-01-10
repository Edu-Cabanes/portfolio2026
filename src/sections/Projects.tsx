import React, { useState } from 'react';
import { Card } from '../components/Card';
import {
    Database,
    Brain,
    ExternalLink,
    ChevronDown,
    ChevronUp,
    Layout,
    Lock,
    BarChart3,
    Code2
} from 'lucide-react';

interface ProjectDetailProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    tech: string;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ icon, title, description, tech }) => (
    <div style={{ marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
            <span style={{ color: 'var(--accent)' }}>{icon}</span>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>{title}</h4>
        </div>
        <p style={{ color: 'var(--foreground-muted)', fontSize: '0.95rem', marginBottom: '0.25rem' }}>
            {description}
        </p>
        <p style={{ fontSize: '0.85rem', color: 'var(--accent)', opacity: 0.8 }}>
            <strong>Tecnología:</strong> {tech}
        </p>
    </div>
);

export const Projects: React.FC = () => {
    const [showProjects, setShowProjects] = useState(false);
    const [showDetails, setShowDetails] = useState(false);

    return (
        <section id="proyectos" className="section" style={{
            minHeight: showProjects ? 'auto' : '400px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            transition: 'all 0.5s ease'
        }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>
                Proyectos <span style={{ color: 'var(--accent)' }}>Destacados</span>
            </h2>

            {!showProjects ? (
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flex: 1,
                    animation: 'fadeIn 0.8s ease'
                }}>
                    <button
                        onClick={() => setShowProjects(true)}
                        style={{
                            background: 'transparent',
                            border: '2px solid var(--accent)',
                            color: 'var(--accent)',
                            padding: '1.2rem 3rem',
                            borderRadius: '50px',
                            fontSize: '1.25rem',
                            fontWeight: 'bold',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem',
                            transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                            boxShadow: '0 0 20px rgba(var(--accent-rgb), 0.2)'
                        }}
                        onMouseOver={(e) => {
                            e.currentTarget.style.transform = 'scale(1.05)';
                            e.currentTarget.style.background = 'var(--accent)';
                            e.currentTarget.style.color = 'var(--background)';
                            e.currentTarget.style.boxShadow = '0 0 40px rgba(var(--accent-rgb), 0.4)';
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.transform = 'scale(1)';
                            e.currentTarget.style.background = 'transparent';
                            e.currentTarget.style.color = 'var(--accent)';
                            e.currentTarget.style.boxShadow = '0 0 20px rgba(var(--accent-rgb), 0.2)';
                        }}
                    >
                        Ver Proyectos <Code2 size={24} />
                    </button>
                </div>
            ) : (
                <div style={{ animation: 'fadeInUp 0.6s ease' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
                        <Card className="project-card" padding="0">
                            <div
                                onClick={() => setShowDetails(!showDetails)}
                                style={{
                                    padding: '1.5rem 2rem',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    transition: 'all 0.3s ease',
                                    background: showDetails ? 'rgba(var(--accent-rgb), 0.05)' : 'transparent'
                                }}
                                onMouseOver={(e) => e.currentTarget.style.background = 'rgba(var(--accent-rgb), 0.05)'}
                                onMouseOut={(e) => {
                                    if (!showDetails) e.currentTarget.style.background = 'transparent';
                                }}
                            >
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', margin: 0 }}>
                                    Core Architecture: Interactive SaaS Platform
                                </h3>
                                {showDetails ? <ChevronUp size={20} color="var(--accent)" /> : <ChevronDown size={20} color="var(--text-muted)" />}
                            </div>

                            {showDetails && (
                                <div style={{
                                    padding: '0 2rem 2rem 2rem',
                                    animation: 'fadeIn 0.4s ease'
                                }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1.5rem', paddingTop: '1rem' }}>
                                        <p style={{ color: 'var(--foreground-muted)', lineHeight: '1.6', margin: 0, flex: 1, paddingRight: '2rem' }}>
                                            Arquitectura integral para plataformas de gestión de aprendizaje (LMS) con análisis de datos avanzado.
                                        </p>
                                        <ExternalLink size={20} color="var(--accent)" style={{ cursor: 'pointer', flexShrink: 0 }} />
                                    </div>

                                    <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
                                        {['React', 'Firebase', 'IA', 'Node.js', 'TypeScript'].map(tag => (
                                            <span key={tag} style={{
                                                background: 'rgba(var(--accent-rgb), 0.1)',
                                                color: 'var(--accent)',
                                                padding: '0.25rem 0.75rem',
                                                borderRadius: '6px',
                                                fontSize: '0.75rem',
                                                fontWeight: '500'
                                            }}>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div style={{
                                        marginTop: '1.5rem',
                                        paddingTop: '1.5rem',
                                        borderTop: '1px solid rgba(255,255,255,0.1)'
                                    }}>
                                        <h4 style={{ color: 'var(--accent)', marginBottom: '1.5rem', fontSize: '1.1rem' }}>Desglose Técnico:</h4>
                                        <ProjectDetail
                                            icon={<Database size={20} />}
                                            title="1. Registro y Persistencia de Datos"
                                            description="Gestión asíncrona de eventos, registro de lecciones completadas y tiempos de uso."
                                            tech="Firebase Firestore. Modelado NoSQL para lecturas rápidas y escalabilidad fluida."
                                        />
                                        <ProjectDetail
                                            icon={<BarChart3 size={20} />}
                                            title="2. Análisis y Visualización Dinámica"
                                            description="Transformación de los datos crudos del usuario en métricas visuales y dashboards de progreso."
                                            tech="React Hooks + Context API. Procesamiento de datos en tiempo real con estado global."
                                        />
                                        <ProjectDetail
                                            icon={<Brain size={20} />}
                                            title="3. Motor de Inteligencia Artificial"
                                            description="Asistente inteligente integrado que responde dudas sobre el contenido y guía al usuario de forma personalizada."
                                            tech="Gemini API + Node.js/Serverless. Lógica de prompts para respuestas precisas en contexto educativo."
                                        />
                                        <ProjectDetail
                                            icon={<Lock size={20} />}
                                            title="4. Seguridad y Acceso"
                                            description="Sistema de login seguro, protección de rutas privadas y gestión de perfiles."
                                            tech="Firebase Auth. Control de acceso basado en tokens para garantizar privacidad de datos."
                                        />
                                        <ProjectDetail
                                            icon={<Layout size={20} />}
                                            title="5. Interfaz de Usuario (UI/UX)"
                                            description="Diseño moderno, fluido, adaptado a dispositivos móviles y con feedback inmediato."
                                            tech="React + TypeScript + CSS Modules. Tipado fuerte y estilos modulares para mantenimiento limpio."
                                        />
                                    </div>
                                </div>
                            )}
                        </Card>
                    </div>

                    <button
                        onClick={() => setShowProjects(false)}
                        style={{
                            background: 'transparent',
                            border: 'none',
                            color: 'var(--text-muted)',
                            padding: '1rem',
                            marginTop: '2rem',
                            cursor: 'pointer',
                            display: 'block',
                            margin: '2rem auto 0',
                            fontSize: '0.9rem',
                            textDecoration: 'underline'
                        }}
                    >
                        Ocultar Proyectos
                    </button>
                </div>
            )}
        </section>
    );
};
