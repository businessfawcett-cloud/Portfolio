import { motion } from 'framer-motion'

const colorMap = {
  purple: { border: '#7c3aed', tag: 'tag-purple', bg: '#ede9fe' },
  cyan: { border: '#06b6d4', tag: 'tag-cyan', bg: '#ecfeff' },
  green: { border: '#10b981', tag: 'tag-green', bg: '#ecfdf5' },
  orange: { border: '#f59e0b', tag: 'tag-orange', bg: '#fff7ed' },
  pink: { border: '#ec4899', tag: 'tag-pink', bg: '#fdf2f8' },
}

export default function CaseStudyCard({ project, index, onViewDetails }) {
  const c = colorMap[project.color] || colorMap.purple

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.4, delay: index * 0.1, ease: 'easeOut' }}
      className="card"
      onClick={() => onViewDetails(project)}
      style={{ cursor: 'pointer', overflow: 'hidden' }}
    >
      <div
        style={{
          height: 180,
          background: c.bg,
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderBottom: '3px solid #1a1a2e',
        }}
      >
        {project.image ? (
          <img src={project.image} alt={project.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        ) : (
          <span style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '3rem',
            fontWeight: 700,
            color: 'rgba(0,0,0,0.06)',
            letterSpacing: '-0.03em',
          }}>
            {project.name}
          </span>
        )}
      </div>

      <div style={{ padding: '24px 24px 28px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, letterSpacing: '-0.02em', color: '#1a1a2e' }}>
            {project.name}
          </h3>
          <span className={`tag ${c.tag}`} style={{ fontSize: '0.6rem' }}>{project.type}</span>
        </div>

        <p style={{ fontSize: '0.82rem', color: '#6b6b80', lineHeight: 1.7, marginBottom: 14 }}>
          {project.description}
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 0 }}>
          {project.stack.slice(0, 5).map((tech) => (
            <span key={typeof tech === 'string' ? tech : tech.label} className={`tag ${typeof tech === 'string' ? '' : tech.colorClass || ''}`} style={{ fontSize: '0.6rem' }}>
              {typeof tech === 'string' ? tech : tech.label}
            </span>
          ))}
          {project.stack.length > 5 && (
            <span className="tag" style={{ fontSize: '0.6rem' }}>+{project.stack.length - 5}</span>
          )}
        </div>
      </div>
    </motion.div>
  )
}
