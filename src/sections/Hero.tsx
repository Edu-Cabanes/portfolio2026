import React from 'react';
import { Button } from '../components/Button';
import { Github, Linkedin, Mail } from 'lucide-react';

import profileImg from '../assets/profile.jpg';

export const Hero: React.FC = () => {
    return (
        <section className="section hero-container">
            <div style={{ flex: 1, textAlign: 'inherit' }}>
                <h1 style={{ fontWeight: '800', marginBottom: '1.5rem', lineHeight: '1.1', animation: 'fadeInUp 0.8s ease' }}>
                    Junior Software Developer | <span style={{ color: 'var(--accent)' }}>Especializándome en React e Integración de IA</span>
                </h1>

                <p style={{ marginBottom: '2rem', lineHeight: '1.6', color: 'var(--foreground-muted)', animation: 'fadeInUp 1s ease' }}>
                    Estudiante de 2º de DAM enfocado en el desarrollo de soluciones eficientes. Mi trabajo se centra en el registro inteligente de datos, el análisis dinámico de los mismos y la implementación de modelos de Inteligencia Artificial para optimizar la experiencia de usuario.
                </p>

                <div className="social-container" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', justifyContent: 'inherit', animation: 'fadeInUp 1.2s ease' }}>
                    <Button variant="outline" onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}>
                        Contactar
                    </Button>
                    <div style={{ display: 'flex', gap: '1rem', marginLeft: '0.5rem' }}>
                        <a href="https://www.linkedin.com/in/edu-cabanes-a90378192/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--foreground-muted)', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--foreground-muted)'}>
                            <Linkedin size={24} />
                        </a>
                        <a href="https://github.com/Edu-Cabanes" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--foreground-muted)', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--foreground-muted)'}>
                            <Github size={24} />
                        </a>
                        <a href="mailto:educabanes54@gmail.com" style={{ color: 'var(--foreground-muted)', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--foreground-muted)'}>
                            <Mail size={24} />
                        </a>
                    </div>
                </div>
            </div>

            <div style={{ flex: 1, display: 'flex', justifyContent: 'center', position: 'relative', animation: 'fadeInUp 1.4s ease' }}>
                <div style={{
                    position: 'absolute',
                    width: '130%',
                    height: '130%',
                    background: 'radial-gradient(circle, rgba(255, 170, 0, 0.12) 0%, transparent 70%)',
                    zIndex: -1,
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)'
                }} />
                <img
                    src={profileImg}
                    alt="Edu Cabanes"
                    className="hero-image"
                    style={{
                        width: '100%',
                        maxWidth: '550px',
                        height: '600px',
                        objectFit: 'cover',
                        objectPosition: 'center 20%',
                        borderRadius: '32px',
                        boxShadow: '0 25px 50px rgba(0,0,0,0.4), 0 0 30px rgba(255, 170, 0, 0.1)',
                        border: '1px solid rgba(255, 170, 0, 0.2)',
                        transform: 'rotate(1deg)',
                        transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                        cursor: 'pointer'
                    }}
                    onMouseOver={(e) => {
                        e.currentTarget.style.transform = 'rotate(0deg) scale(1.03)';
                        e.currentTarget.style.boxShadow = '0 30px 60px rgba(0,0,0,0.5), 0 0 40px rgba(255, 170, 0, 0.2)';
                    }}
                    onMouseOut={(e) => {
                        e.currentTarget.style.transform = 'rotate(1deg) scale(1)';
                        e.currentTarget.style.boxShadow = '0 25px 50px rgba(0,0,0,0.4), 0 0 30px rgba(255, 170, 0, 0.1)';
                    }}
                />
            </div>
        </section>
    );
};
