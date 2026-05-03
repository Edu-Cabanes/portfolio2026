import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Skills', href: '#skills' },
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Contacto', href: '#contacto' },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        padding: scrolled ? '0.75rem 2rem' : '1.25rem 2rem',
        background: scrolled
          ? 'rgba(10, 10, 10, 0.85)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid transparent',
        transition: 'all 0.3s ease',
      }}
    >
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {/* Logo */}
        <a
          href="#inicio"
          style={{
            fontSize: '1.25rem',
            fontWeight: '800',
            color: 'var(--foreground)',
            textDecoration: 'none',
            letterSpacing: '-0.02em',
          }}
        >
          Edu<span style={{ color: 'var(--accent)' }}>.</span>
        </a>

        {/* Desktop links */}
        <div
          style={{
            display: 'flex',
            gap: '2rem',
            alignItems: 'center',
          }}
          className="nav-desktop"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                color: 'var(--text-muted)',
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: '500',
                transition: 'color 0.2s ease',
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = 'var(--accent)')}
              onMouseOut={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="nav-mobile-btn"
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: 'var(--foreground)',
            cursor: 'pointer',
            padding: '0.5rem',
          }}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="nav-mobile-menu"
          style={{
            padding: '1rem 2rem 1.5rem',
            background: 'rgba(10, 10, 10, 0.95)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            display: 'none',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                color: 'var(--text-muted)',
                textDecoration: 'none',
                fontSize: '1.1rem',
                fontWeight: '500',
                padding: '0.5rem 0',
              }}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};
