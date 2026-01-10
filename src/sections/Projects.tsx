import React, { useState } from 'react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Code2 } from 'lucide-react';
import './Projects.css';

export const Projects: React.FC = () => {
    const [showProjects, setShowProjects] = useState(false);
    const [showDetails, setShowDetails] = useState(false);

    return (
        <section id="proyectos" className="projects-section">
            <h2 className="section-title">
                Proyectos <span style={{ color: 'var(--accent)' }}>Destacados</span>
            </h2>

            {!showProjects ? (
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem', animation: 'fadeIn 0.8s ease' }}>
                    <Button
                        onClick={() => setShowProjects(true)}
                        style={{
                            padding: '1.2rem 3rem',
                            borderRadius: '50px',
                            fontSize: '1.25rem'
                        }}
                    >
                        Ver Proyectos <Code2 size={24} style={{ marginLeft: '1rem' }} />
                    </Button>
                </div>
            ) : (
                <div className="projects-grid" style={{ animation: 'fadeIn 0.6s ease' }}>
                    <Card className="project-card" padding="2rem">
                        <div className="project-header">
                            <h3>Core Architecture: Interactive SaaS Education Platform</h3>
                            <p className="project-main-desc">
                                Desarrollo de una arquitectura escalable para plataformas educativas
                                que requieren un control de datos y asistencia inteligente.
                            </p>
                            <div className="project-tags">
                                {['React', 'Firebase', 'IA', 'State Management'].map(tag => (
                                    <span key={tag} style={{
                                        background: 'rgba(var(--accent-rgb), 0.1)',
                                        color: 'var(--accent)',
                                        padding: '0.25rem 0.75rem',
                                        borderRadius: '6px',
                                        fontSize: '0.75rem',
                                        fontWeight: '500',
                                        marginRight: '0.5rem'
                                    }}>{tag}</span>
                                ))}
                            </div>
                        </div>

                        {!showDetails ? (
                            <Button onClick={() => setShowDetails(true)} style={{ width: '100%' }}>
                                Ver detalles del proyecto
                            </Button>
                        ) : (
                            <div className="project-details-overlay">
                                <div className="details-content">
                                    <div className="detail-item">
                                        <h4>1. Registro y Persistencia de Datos</h4>
                                        <p><strong>Tecnología:</strong> Firebase Firestore</p>
                                        <p>Gestión asíncrona de eventos y modelado NoSQL para permitir lecturas rápidas de los datos del usuario.</p>
                                    </div>

                                    <div className="detail-item">
                                        <h4>2. Análisis y Visualización Dinámica</h4>
                                        <p><strong>Tecnología:</strong> React Hooks + Context API</p>
                                        <p>Procesamiento de datos en tiempo real para dashboards dinámicos sin recargas de página.</p>
                                    </div>

                                    <div className="detail-item">
                                        <h4>3. Motor de Inteligencia Artificial</h4>
                                        <p><strong>Tecnología:</strong> Gemini API (Gemini 3.0) + Node.js</p>
                                        <p>Integración de asistentes inteligentes con lógica de prompts para tutoría personalizada.</p>
                                    </div>

                                    <div className="detail-item">
                                        <h4>4. Seguridad y Acceso</h4>
                                        <p><strong>Tecnología:</strong> Firebase Auth</p>
                                        <p>Control de acceso basado en tokens y protección de rutas privadas.</p>
                                    </div>

                                    <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
                                        <Button
                                            variant="secondary"
                                            onClick={() => setShowDetails(false)}
                                            style={{ flex: 1 }}
                                        >
                                            Cerrar detalles
                                        </Button>
                                        <Button
                                            variant="secondary"
                                            onClick={() => setShowProjects(false)}
                                            style={{ opacity: 0.6 }}
                                        >
                                            Ocultar todo
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </Card>
                </div>
            )}
        </section>
    );
};
