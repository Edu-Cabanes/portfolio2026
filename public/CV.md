
<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap');

  :root {
    --primary: #1e40af; /* Deep Blue */
    --secondary: #3b82f6; /* Lighter Blue */
    --text: #1f2937;
    --gray: #6b7280;
    --border: #e5e7eb;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    line-height: 1.5;
    color: var(--text);
    max-width: 850px;
    margin: 0 auto;
    padding: 30px;
    background-color: #fff;
  }

  /* Header Section */
  .header {
    text-align: center;
    margin-bottom: 30px;
  }

  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 5px;
    color: #111827;
    letter-spacing: -0.5px;
    text-transform: uppercase;
  }

  .title-tag {
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--primary);
    margin-bottom: 20px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .contact-bar {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 15px;
    font-size: 0.85rem;
    color: var(--gray);
  }

  .contact-item {
    display: flex;
    align-items: center;
    gap: 6px;
    text-decoration: none;
    color: inherit;
    transition: color 0.2s;
  }

  .contact-item:hover {
    color: var(--secondary);
  }

  .icon {
    width: 16px;
    height: 16px;
    fill: var(--primary);
  }

  /* Section Styling */
  h2 {
    font-size: 1.15rem;
    font-weight: 700;
    color: var(--primary);
    border-bottom: 2px solid var(--border);
    padding-bottom: 6px;
    margin-top: 35px;
    margin-bottom: 15px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  h3 {
    font-size: 1.05rem;
    font-weight: 700;
    color: #111827;
    margin-bottom: 2px;
  }

  .sub-info {
    font-size: 0.9rem;
    color: var(--gray);
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
  }

  .role {
    font-weight: 600;
    color: #374151;
  }

  .date-loc {
    font-weight: 500;
    color: var(--primary);
    font-style: italic;
  }

  /* Lists */
  ul {
    padding-left: 18px;
    margin-bottom: 15px;
    list-style-type: none;
  }

  li {
    position: relative;
    margin-bottom: 6px;
    font-size: 0.95rem;
  }

  li::before {
    content: "•";
    color: var(--secondary);
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }

  /* Skills Grid */
  .skills-container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .skill-category {
    font-size: 0.95rem;
    padding: 8px 12px;
    background-color: #f8fafc;
    border-radius: 6px;
    border-left: 3px solid var(--primary);
  }

  .skill-category strong {
    color: var(--primary);
  }

  /* PDF Specifics */
  @media print {
    body { padding: 0; }
    a { text-decoration: none; color: inherit; }
    .skill-category { background-color: #f8fafc !important; -webkit-print-color-adjust: exact; }
  }
</style>

<div class="header">
  <h1>Eduardo Cabanes Álvarez</h1>
  <div class="title-tag">Full-Stack Software Engineer</div>
  
  <div class="contact-bar">
    <a href="mailto:educabanes54@gmail.com" class="contact-item">
      <svg class="icon" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
      educabanes54@gmail.com
    </a>
    <span class="contact-item">
      <svg class="icon" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
      603 47 65 47
    </span>
    <a href="https://github.com/Edu-Cabanes" class="contact-item">
      <svg class="icon" viewBox="0 0 24 24"><path d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.24.73-.53v-1.84c-3.03.66-3.67-1.46-3.67-1.46-.5-1.27-1.2-1.61-1.2-1.61-.98-.67.08-.66.08-.66 1.1.08 1.67 1.13 1.67 1.13.97 1.65 2.53 1.17 3.15.89.1-.7.38-1.17.69-1.44-2.42-.27-4.96-1.21-4.96-5.38 0-1.19.43-2.16 1.14-2.92-.1-.27-.5-1.38.12-2.88 0 0 .91-.29 3 1.12A10.3 10.3 0 0112 6.09c.92.01 1.83.12 2.7.35 2.08-1.41 3-1.12 3-1.12.62 1.5.22 2.61.12 2.88.7.76 1.14 1.73 1.14 2.92 0 4.18-2.55 5.1-4.98 5.37.39.34.73 1 .73 2.02v3c0 .3.18.63.74.52A11 11 0 0012 1.27z"/></svg>
      GitHub
    </a>
    <a href="https://linkedin.com/in/edu-cabanes" class="contact-item">
      <svg class="icon" viewBox="0 0 24 24"><path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a2.7 2.7 0 00-2.7-2.7c-1.2 0-2.2.7-2.7 1.6v-1.4H10v7.8h3.2v-4.2c0-.6.5-1.1 1.1-1.1s1.1.5 1.1 1.1v4.2h3.1M6.7 18.5V9.4h3.1v9.1H6.7M8.3 4.8a1.8 1.8 0 00-1.8 1.8 1.8 1.8 0 001.8 1.8 1.8 1.8 0 001.8-1.8 1.8 1.8 0 00-1.8-1.8z"/></svg>
      LinkedIn
    </a>
    <a href="https://eduardocabanesdev.vercel.app/" class="contact-item">
      <svg class="icon" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm1 17.93V13h3.5a8 8 0 01-3.5 6.93zM11 19.93A8 8 0 017.5 13H11v6.93zM11 11H7a8 8 0 014-6.93V11zm2-6.93A8 8 0 0117 11h-4V4.07zM12 4c.6 0 1.2.1 1.8.23-1.1 1.4-1.8 3.2-1.8 5.1V4zM10.2 4.23c.6-.13 1.2-.23 1.8-.23v5.33c0-1.9-.7-3.7-1.8-5.1zM12 20c-.6 0-1.2-.1-1.8-.23 1.1-1.4 1.8-3.2 1.8-5.1V20zm1.8-.23c-.6.13-1.2.23-1.8.23v-5.33c0 1.9.7 3.7 1.8 5.1z"/></svg>
      Portfolio
    </a>
  </div>
</div>

## Perfil
Estudiante de último año de DAM enfocado en el ecosistema moderno de JavaScript, TypeScript y Supabase. Destaco por mi capacidad de aprendizaje exponencial y mi enfoque arquitectónico: me motiva construir el producto completo, desde el modelado de bases de datos y testing automatizado hasta la experiencia final del usuario.

## Habilidades Técnicas
<div class="skills-container">
  <div class="skill-category"><strong>Frontend:</strong> React 19, Next.js 16 (App Router), TypeScript, Tailwind CSS 4, shadcn/ui</div>
  <div class="skill-category"><strong>Backend & Datos:</strong> Supabase (Auth + PostgreSQL), Row Level Security (RLS), Stripe Checkout</div>
  <div class="skill-category"><strong>Herramientas & Testing:</strong> Vitest, Playwright (E2E), Testing Library, Git/GitHub, Docker</div>
  <div class="skill-category"><strong>En formación:</strong> Java POO, Quarkus, Orquestación IA y Sistemas Multi-Agentes</div>
</div>

## Proyectos Destacados

<div>
  <div class="sub-info">
    <h3>CanisPath — Plataforma SaaS Full-Stack</h3>
    <span class="date-loc">En desarrollo</span>
  </div>
  <div class="role">Software Engineer | Proyecto Principal</div>
  <ul>
    <li>Arquitectura y base de datos con <strong>Supabase</strong> (Auth + DB) y pagos vía <strong>Stripe Checkout</strong> con Server Actions.</li>
    <li>Algoritmo core en <strong>TypeScript</strong> para generar dinámicamente sesiones de entrenamiento según el progreso.</li>
    <li>Ecosistema robusto de testing con <strong>Vitest</strong> y <strong>Playwright</strong> para asegurar la fiabilidad de flujos críticos.</li>
  </ul>
</div>

<div>
  <div class="sub-info">
    <h3>GreenGood — Web Corporativa (greengood.es)</h3>
    <span class="date-loc">Entregado / Producción</span>
  </div>
  <div class="role">Frontend Developer | Proyecto Freelance</div>
  <ul>
    <li>Desarrollo integral del catálogo y la plataforma usando <strong>Next.js 16</strong> y <strong>Tailwind CSS 4</strong>.</li>
    <li>Optimización avanzada de SEO local, diseño 100% responsive y despliegue performante.</li>
  </ul>
</div>

## Experiencia Profesional

<div>
  <div class="sub-info">
    <h3>Universidad Pontificia de Salamanca</h3>
    <span class="date-loc">Ago. 2025 – Dic. 2025</span>
  </div>
  <div class="role">Soporte Técnico / Servicios Operativos</div>
  <ul>
    <li>Colaboración en servicios operativos dentro de un entorno institucional de alta exigencia.</li>
  </ul>
</div>

<div>
  <div class="sub-info">
    <h3>Mcuper Comunicaciones S.L. / Zener / Yealink</h3>
    <span class="date-loc">Feb. 2022 – Mar. 2025</span>
  </div>
  <div class="role">Técnico de Instalaciones y Comunicaciones</div>
  <ul>
    <li>Despliegue y mantenimiento de infraestructura de red y sistemas de comunicación.</li>
    <li>Diagnóstico técnico de averías y optimización de servicios de conectividad.</li>
    <li>Trayectoria consolidada demostrando alta fidelización y responsabilidad operativa.</li>
  </ul>
</div>

<div>
  <div class="sub-info">
    <h3>Gestión de Actividades Propias</h3>
    <span class="date-loc">Jun. 2020 – Mar. 2022</span>
  </div>
  <div class="role">Trabajador Autónomo</div>
  <ul>
    <li>Gestión integral de proyectos independientes: planificación, finanzas y atención al cliente.</li>
    <li>Desarrollo de habilidades de autogestión y resolución proactiva de retos operativos.</li>
  </ul>
</div>

## Educación

<div>
  <div class="sub-info">
    <h3>IES Julián Marías</h3>
    <span class="date-loc">2024 – 2026</span>
  </div>
  <div class="role">Técnico Superior en Desarrollo de Aplicaciones Multiplataforma (DAM)</div>
  <ul>
    <li>Formación en desarrollo multiplataforma, sistemas de gestión y entornos web/móviles.</li>
  </ul>
</div>
