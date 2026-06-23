import { motion } from 'framer-motion'

const steps = [
  { label: 'Firecrawl API', desc: 'Bypasses anti-scraping protection, parses raw semantic HTML from competitor domains', color: '#06b6d4' },
  { label: 'Structured JSON', desc: 'Converts unstructured web data into clean, structured JSON tokens', color: '#7c3aed' },
  { label: 'Groq LLMs', desc: 'Processes tokens through Groq for near-zero latency brief generation', color: '#f59e0b' },
]

export default function DataSpotlight() {
  return (
    <section id="data-spotlight" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <p className="section-label" style={{ color: '#f59e0b' }}>Data & Automation</p>
        <h2 className="section-title" style={{ WebkitTextFillColor: '#1a1a2e' }}>
          The Pipeline
        </h2>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28, alignItems: 'start', maxWidth: 960, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <div className="card" style={{ padding: '28px 24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
              <h3 style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '1.3rem',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                color: '#1a1a2e',
              }}>
                Alvien
              </h3>
              <span className="tag tag-neutral" style={{ fontSize: '0.65rem' }}>B2B BI SaaS</span>
            </div>

            <p style={{ fontSize: '0.85rem', color: '#475569', lineHeight: 1.7, marginBottom: 18 }}>
              A B2B business intelligence and competitor analysis SaaS that automates the extraction of public market data to generate structured strategic briefs.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 20 }}>
              {['Python', 'FastAPI', { label: 'Firecrawl API', colorClass: 'tag-neutral' }, { label: 'Groq LLMs', colorClass: 'tag-neutral' }, 'TailwindCSS'].map((tech) => (
                <span key={typeof tech === 'string' ? tech : tech.label} className={`tag ${typeof tech === 'string' ? '' : tech.colorClass}`} style={{ fontSize: '0.62rem' }}>
                  {typeof tech === 'string' ? tech : tech.label}
                </span>
              ))}
            </div>

            <div style={{ display: 'flex', gap: 10 }}>
              <a
                href="https://alvien.onrender.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ fontSize: '0.78rem', padding: '8px 18px' }}
              >
                Live Site
              </a>
              <a
                href="https://github.com/businessfawcett-cloud/alvien"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ fontSize: '0.78rem', padding: '8px 18px' }}
              >
                GitHub
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.4, delay: 0.15, ease: 'easeOut' }}
        >
          <div className="card" style={{ padding: '28px 24px' }}>
            <h4 style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '0.8rem',
              fontWeight: 700,
              color: '#f59e0b',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: 24,
            }}>
              Architecture Flow
            </h4>

            <div style={{ position: 'relative' }}>
              {steps.map((step, i) => (
                <div key={step.label} style={{ display: 'flex', gap: 16 }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 32 }}>
                    <div style={{
                      width: 32,
                      height: 32,
                      borderRadius: '50%',
                      background: '#ffffff',
                      border: `2px solid ${step.color}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      fontFamily: "'Space Grotesk', sans-serif",
                      color: step.color,
                      flexShrink: 0,
                      boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                    }}>
                      {i + 1}
                    </div>
                    {i < steps.length - 1 && (
                      <div style={{
                        width: 3,
                        flex: 1,
                        background: `linear-gradient(to bottom, ${step.color}, transparent)`,
                        minHeight: 24,
                      }} />
                    )}
                  </div>
                  <div style={{ paddingBottom: i < steps.length - 1 ? 14 : 0 }}>
                    <p style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      color: '#1a1a2e',
                      marginBottom: 2,
                    }}>
                      {step.label}
                    </p>
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
