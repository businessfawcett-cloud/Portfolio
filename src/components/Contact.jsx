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
        transition={{ duration: 0.4 }}
        style={{ textAlign: 'center' }}
      >
        <p className="section-label" style={{ color: '#ec4899' }}>Contact</p>
        <h2 className="section-title" style={{ marginBottom: 12, WebkitTextFillColor: '#1a1a2e' }}>
          Let's Build Something
        </h2>
        <p style={{
          fontSize: '0.9rem',
          color: '#475569',
          marginBottom: 36,
          maxWidth: 480,
          margin: '0 auto 36px',
        }}>
          Open to research collaboration, enterprise architecture discussions,
          and building the next generation of AI-powered tools.
        </p>

        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          {links.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              {...(link.label !== 'Email' ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="btn btn-secondary"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              style={{
                padding: '14px 28px',
                fontSize: '0.85rem',
                gap: 8,
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
