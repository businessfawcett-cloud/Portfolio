import { motion } from 'framer-motion'
import { useIsMobile } from '../hooks/useIsMobile'

const steps = [
  { label: 'Firecrawl API', desc: 'Bypasses anti-scraping protection, parses raw semantic HTML from competitor domains' },
  { label: 'Structured JSON', desc: 'Converts unstructured web data into clean, structured JSON tokens' },
  { label: 'Groq LLMs', desc: 'Processes tokens through Groq for near-zero latency brief generation' },
]

export default function DataSpotlight() {
  const isMobile = useIsMobile()

  return (
    <section id="data-spotlight" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="section-label">Data & Automation</p>
        <h2 className="section-title">The Pipeline</h2>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? 20 : 32, alignItems: 'start' }}>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="glass-card" style={{ padding: '32px 28px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, letterSpacing: '-0.02em' }}>Alvien</h3>
              <span className="tag" style={{ fontSize: '0.65rem' }}>B2B BI SaaS</span>
            </div>

            <p style={{ fontSize: '0.85rem', color: '#475569', lineHeight: 1.7, marginBottom: 20 }}>
              A B2B business intelligence and competitor analysis SaaS that automates the extraction of public market data to generate structured strategic briefs.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 20 }}>
              {['Python', 'FastAPI', { label: 'Firecrawl API', colorClass: 'tag-cyan' }, { label: 'Groq LLMs', colorClass: 'tag-orange' }, 'TailwindCSS'].map((tech) => (
                <span key={typeof tech === 'string' ? tech : tech.label} className={`tag ${typeof tech === 'string' ? '' : tech.colorClass}`} style={{ fontSize: '0.65rem' }}>
                  {typeof tech === 'string' ? tech : tech.label}
                </span>
              ))}
            </div>

            <div style={{ display: 'flex', gap: 12 }}>
              <a
                href="https://alvien.onrender.com"
                target="_blank"
                rel="noopener noreferrer"
                className="glass"
                style={{ padding: '8px 18px', borderRadius: 100, textDecoration: 'none', color: '#1a1a2e', fontSize: '0.75rem', fontWeight: 600, border: '1px solid rgba(139, 92, 246, 0.3)', background: 'rgba(139, 92, 246, 0.08)', transition: 'all 0.2s' }}
                onMouseEnter={(e) => (e.target.style.background = 'rgba(139, 92, 246, 0.12)')}
                onMouseLeave={(e) => (e.target.style.background = '')}
              >
                Live Site
              </a>

            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        >
          <div className="glass-card" style={{ padding: '32px 28px' }}>
            <h4 style={{ fontSize: '0.85rem', fontWeight: 600, color: '#334155', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 24 }}>
              Architecture Flow
            </h4>

            <div style={{ position: 'relative' }}>
              {steps.map((step, i) => (
                <div key={step.label} style={{ display: 'flex', gap: 16, marginBottom: i < steps.length - 1 ? 0 : 0 }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 24 }}>
                    <div style={{ width: 24, height: 24, borderRadius: '50%', background: 'rgba(139, 92, 246, 0.2)', border: '2px solid rgba(139, 92, 246, 0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem', fontWeight: 700, color: 'rgba(139, 92, 246, 0.9)', flexShrink: 0 }}>
                      {i + 1}
                    </div>
                    {i < steps.length - 1 && (
                      <div style={{ width: 1, flex: 1, background: 'linear-gradient(to bottom, rgba(139, 92, 246, 0.3), transparent)', minHeight: 28 }} />
                    )}
                  </div>
                  <div style={{ paddingBottom: i < steps.length - 1 ? 16 : 0 }}>
                    <p style={{ fontSize: '0.85rem', fontWeight: 600, color: '#1e293b', marginBottom: 4 }}>{step.label}</p>
                    <p style={{ fontSize: '0.75rem', color: '#475569', lineHeight: 1.6 }}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
