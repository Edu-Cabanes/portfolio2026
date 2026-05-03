import React from 'react';
import { Button } from '../components/Button';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

import profileImg from '../assets/profile.jpg';

export const Hero: React.FC = () => {
    return (
        <section id="inicio" className="section hero-container">
            <div style={{ flex: 1, textAlign: 'inherit' }}>
                <h1 style={{ fontWeight: '800', marginBottom: '1.5rem', lineHeight: '1.1', animation: 'fadeInUp 0.8s ease' }}>
                    Desarrollador Web |{' '}
                    <span style={{ color: 'var(--accent)' }}>Next.js · TypeScript · Supabase</span>
                </h1>

                <p style={{ marginBottom: '2rem', lineHeight: '1.6', color: 'var(--foreground-muted)', animation: 'fadeInUp 1s ease' }}>
                    Estudiante de 2º de DAM con experiencia real desarrollando webs para clientes.
                    He llevado proyectos a producción con Next.js y actualmente construyo una plataforma
                    full-stack con Supabase, Stripe y testing automatizado. Me motiva crear producto completo:
                    desde la base de datos hasta la experiencia de usuario.
                </p>

                <div className="social-container" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', justifyContent: 'inherit', animation: 'fadeInUp 1.2s ease' }}>
                    <a href="/CV_Eduardo_Cabanes.pdf" download style={{ textDecoration: 'none' }}>
                        <Button variant="outline" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                            <Download size={18} />
                            Descargar CV
                        </Button>
                    </a>
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
                    background: 'radial-gradient(circle, rgba(59, 130, 246, 0.12) 0%, transparent 70%)',
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
                        boxShadow: '0 25px 50px rgba(0,0,0,0.4), 0 0 30px rgba(59, 130, 246, 0.1)',
                        border: '1px solid rgba(59, 130, 246, 0.2)',
                        transform: 'rotate(1deg)',
                        transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                        cursor: 'pointer'
                    }}
                    onMouseOver={(e) => {
                        e.currentTarget.style.transform = 'rotate(0deg) scale(1.03)';
                        e.currentTarget.style.boxShadow = '0 30px 60px rgba(0,0,0,0.5), 0 0 40px rgba(59, 130, 246, 0.2)';
                    }}
                    onMouseOut={(e) => {
                        e.currentTarget.style.transform = 'rotate(1deg) scale(1)';
                        e.currentTarget.style.boxShadow = '0 25px 50px rgba(0,0,0,0.4), 0 0 30px rgba(59, 130, 246, 0.1)';
                    }}
                />
            </div>
        </section>
    );
};
