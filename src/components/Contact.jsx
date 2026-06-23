import { motion } from 'framer-motion'

const links = [
  { label: 'Email', href: 'mailto:parkerscottfawcett@gmail.com', icon: '✉' },
  { label: 'GitHub', href: 'https://github.com/businessfawcett-cloud', icon: '⌂' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/placeholder', icon: '⊞' },
]

export default function Contact() {
  return (
    <section id="contact" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{ textAlign: 'center' }}
      >
        <p className="section-label">Contact</p>
        <h2 className="section-title" style={{ marginBottom: 16 }}>
          Let's Build Something
        </h2>
        <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', marginBottom: 40, maxWidth: 480, margin: '0 auto 40px' }}>
          Open to research collaboration, enterprise architecture discussions, and building the next generation of AI-powered tools.
        </p>

        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          {links.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              {...(link.label !== 'Email' ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="glass"
              whileHover={{ y: -2 }}
              style={{
                padding: '14px 28px',
                borderRadius: 100,
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                fontSize: '0.85rem',
                fontWeight: 500,
                color: 'rgba(255,255,255,0.7)',
                transition: 'all 0.2s',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#fff'
                e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.3)'
                e.currentTarget.style.background = 'rgba(139, 92, 246, 0.06)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'rgba(255,255,255,0.7)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'
                e.currentTarget.style.background = ''
              }}
            >
              <span style={{ fontSize: '1rem' }}>{link.icon}</span>
              {link.label === 'Email' ? 'parkerscottfawcett@gmail.com' : link.href.replace('https://', '')}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
