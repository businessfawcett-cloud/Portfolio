import { motion, AnimatePresence } from 'framer-motion'

const colorMap = {
  purple: { accent: '#7c3aed', border: '#7c3aed', bg: '#ede9fe' },
  cyan: { accent: '#06b6d4', border: '#06b6d4', bg: '#ecfeff' },
  green: { accent: '#10b981', border: '#10b981', bg: '#ecfdf5' },
  orange: { accent: '#f59e0b', border: '#f59e0b', bg: '#fff7ed' },
  pink: { accent: '#ec4899', border: '#ec4899', bg: '#fdf2f8' },
}

export default function ProjectModal({ project, onClose }) {
  const c = colorMap[project.color] || colorMap.purple

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 2000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 24,
          background: 'rgba(26, 26, 46, 0.5)',
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          onClick={(e) => e.stopPropagation()}
          className="card"
          style={{
            width: '100%',
            maxWidth: 720,
            maxHeight: '90vh',
            overflowY: 'auto',
            background: '#ffffff',
            border: '3px solid #1a1a2e',
            borderRadius: 20,
            boxShadow: '12px 12px 0px #1a1a2e',
          }}
        >
          <div
            style={{
              height: 220,
              background: c.bg,
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              borderBottom: '3px solid #1a1a2e',
              borderRadius: '17px 17px 0 0',
            }}
          >
            {project.image ? (
              <img src={project.image} alt={project.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            ) : (
              <span style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                fontWeight: 700,
                color: 'rgba(0,0,0,0.06)',
                letterSpacing: '-0.03em',
              }}>
                {project.name}
              </span>
            )}
            <button
              onClick={onClose}
              style={{
                position: 'absolute',
                top: 16,
                right: 16,
                width: 36,
                height: 36,
                borderRadius: '50%',
                border: '3px solid #1a1a2e',
                background: '#ffffff',
                color: '#1a1a2e',
                fontSize: '1rem',
                fontWeight: 700,
                cursor: 'pointer',
                zIndex: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: "'Space Grotesk', sans-serif",
                transition: 'transform 0.15s',
                boxShadow: '3px 3px 0px #1a1a2e',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              ✕
            </button>
          </div>

          <div style={{ padding: '28px 28px 32px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
              <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.6rem', fontWeight: 700, letterSpacing: '-0.02em', color: '#1a1a2e' }}>
                {project.name}
              </h2>
              <span className={`tag ${c.bg ? 'tag' : ''}`} style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '0.65rem',
                padding: '4px 12px',
                borderRadius: 100,
                fontWeight: 600,
                background: c.bg,
                color: c.accent,
                border: `2px solid ${c.accent}`,
              }}>{project.type}</span>
            </div>

            <p style={{ fontSize: '0.88rem', color: '#6b6b80', lineHeight: 1.8, marginBottom: 24 }}>
              {project.description}
            </p>

            <div style={{ marginBottom: 24 }}>
              <h4 style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '0.75rem',
                fontWeight: 700,
                color: c.accent,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: 10,
              }}>
                Full Tech Stack
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {project.stack.map((tech) => (
                  <span key={typeof tech === 'string' ? tech : tech.label} className={`tag ${typeof tech === 'string' ? '' : tech.colorClass || ''}`}>
                    {typeof tech === 'string' ? tech : tech.label}
                  </span>
                ))}
              </div>
            </div>

            {project.architecture && (
              <div style={{ marginBottom: 24 }}>
                <h4 style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: c.accent,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginBottom: 10,
                }}>
                  Architecture & Approach
                </h4>
                <div style={{
                  background: '#faf7f2',
                  borderRadius: 12,
                  padding: 20,
                  border: '2px solid #1a1a2e',
                }}>
                  <p style={{ fontSize: '0.82rem', color: '#6b6b80', lineHeight: 1.7, marginBottom: 12 }}>
                    {project.architecture.summary}
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {project.architecture.highlights.map((h, i) => (
                      <li key={i} style={{
                        fontSize: '0.8rem',
                        color: '#4a4a5e',
                        paddingLeft: 16,
                        position: 'relative',
                        marginBottom: 6,
                        lineHeight: 1.6,
                      }}>
                        <span style={{ position: 'absolute', left: 0, color: c.accent, fontWeight: 700 }}>→</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            <div style={{ marginBottom: 28 }}>
              <h4 style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '0.75rem',
                fontWeight: 700,
                color: c.accent,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: 10,
              }}>
                Key Metrics
              </h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {project.metrics.map((m, i) => (
                  <li key={i} style={{
                    fontSize: '0.82rem',
                    color: '#4a4a5e',
                    paddingLeft: 16,
                    position: 'relative',
                    marginBottom: 8,
                    lineHeight: 1.6,
                  }}>
                    <span style={{ position: 'absolute', left: 0, color: c.accent, fontWeight: 700 }}>→</span>
                    {m}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ display: 'flex', gap: 12 }}>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ fontSize: '0.82rem', padding: '10px 24px' }}
              >
                Visit Live Site
              </a>
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ fontSize: '0.82rem', padding: '10px 24px' }}
                >
                  View on GitHub
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
