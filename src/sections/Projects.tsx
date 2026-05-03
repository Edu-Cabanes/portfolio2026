import React, { useState } from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Github, Globe } from 'lucide-react';
import './Projects.css';

export const Projects: React.FC = () => {
  const [showCanisPathDetails, setShowCanisPathDetails] = useState(false);

  return (
    <section id="proyectos" className="projects-section">
      <h2 className="section-title">
        Proyectos <span style={{ color: 'var(--accent)' }}>Destacados</span>
      </h2>

      <div className="projects-grid">
        {/* ── GreenGood ── */}
        <Card className="project-card" padding="2rem">
          <div className="project-header">
            <div className="project-title-row">
              <h3>GreenGood</h3>
              <span className="badge badge-live">EN PRODUCCIÓN</span>
            </div>
            <p className="project-subtitle">Web corporativa · Paisajismo y Jardinería</p>
            <p className="project-main-desc">
              Desarrollo integral de la web para una empresa de jardinería en Salamanca.
              Sitio multi-página con blog, catálogo de servicios, SEO local optimizado y
              diseño responsive profesional. Proyecto entregado y en producción.
            </p>
            <div className="project-tags">
              {['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS 4', 'Netlify'].map(tag => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>

          <div className="project-links">
            <a href="https://greengood.es" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Globe size={16} /> greengood.es
              </Button>
            </a>
            <a href="https://github.com/Edu-Cabanes/GreenGood" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Github size={16} /> Código
              </Button>
            </a>
          </div>
        </Card>

        {/* ── CanisPath ── */}
        <Card className="project-card" padding="2rem">
          <div className="project-header">
            <div className="project-title-row">
              <h3>CanisPath</h3>
              <span className="badge badge-wip">EN DESARROLLO</span>
            </div>
            <p className="project-subtitle">Plataforma full-stack · Adiestramiento Canino</p>
            <p className="project-main-desc">
              Plataforma web que combina cursos online con un planificador de entrenos
              personalizado. Incluye autenticación, pagos Stripe, panel de administración,
              y un algoritmo que genera sesiones según el progreso real del perro.
            </p>
            <div className="project-tags">
              {['Next.js 16', 'React 19', 'TypeScript', 'Supabase', 'PostgreSQL', 'Stripe', 'Tailwind CSS 4', 'shadcn/ui'].map(tag => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>

          {!showCanisPathDetails ? (
            <Button
              onClick={() => setShowCanisPathDetails(true)}
              style={{ width: '100%', marginTop: '0.5rem' }}
            >
              Ver arquitectura y stack técnico
            </Button>
          ) : (
            <div className="project-details-overlay">
              <div className="detail-item">
                <h4>Base de datos + Auth</h4>
                <p><strong>Supabase</strong> — PostgreSQL con Row Level Security, auth integrada,
                  tipos TypeScript generados desde el esquema, migraciones versionadas.</p>
              </div>

              <div className="detail-item">
                <h4>Pagos</h4>
                <p><strong>Stripe</strong> — Checkout integrado con Server Actions, webhooks para
                  confirmación de pago, gestión de acceso a cursos.</p>
              </div>

              <div className="detail-item">
                <h4>Planificador automático</h4>
                <p><strong>Algoritmo en TypeScript</strong> — Genera circuitos de entrenamiento
                  con 4 bloques (Conexión → Recordatorio → Principal → Relax) según el progreso
                  del perro, con selección dinámica y sistema de fallbacks.</p>
              </div>

              <div className="detail-item">
                <h4>Testing</h4>
                <p><strong>Vitest + Testing Library + Playwright</strong> — Tests unitarios,
                  de integración con BD, y e2e con auth setup automatizado.</p>
              </div>

              <div className="detail-item">
                <h4>Email y tareas programadas</h4>
                <p><strong>Resend + pg_cron + Edge Functions</strong> — Recordatorios de sesiones
                  pendientes y notificaciones de avance de fase.</p>
              </div>

              <div className="project-links" style={{ marginTop: '1.5rem' }}>
                <a href="https://github.com/Edu-Cabanes" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Github size={16} /> Repositorio (próximamente público)
                  </Button>
                </a>
                <Button
                  variant="secondary"
                  onClick={() => setShowCanisPathDetails(false)}
                  style={{ marginLeft: '0.5rem' }}
                >
                  Cerrar detalles
                </Button>
              </div>
            </div>
          )}
        </Card>
      </div>
    </section>
  );
};
