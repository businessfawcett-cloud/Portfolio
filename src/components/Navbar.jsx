import { motion } from 'framer-motion'

const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'Work', href: '#case-studies' },
  { label: 'Spotlight', href: '#data-spotlight' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      style={{
        position: 'fixed',
        top: 16,
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1000,
        padding: '10px 24px',
        display: 'flex',
        alignItems: 'center',
        gap: 32,
        background: 'rgba(255, 255, 255, 0.75)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderRadius: 100,
        border: '1px solid rgba(255, 255, 255, 0.5)',
        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.06)',
      }}
    >
      <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '1rem', color: '#1a1a2e' }}>
        PF<span style={{ color: '#7c3aed' }}>.</span>
      </span>
      <div style={{ display: 'flex', gap: 20 }}>
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            style={{
              color: '#475569',
              textDecoration: 'none',
              fontSize: '0.85rem',
              fontWeight: 500,
              fontFamily: "'Space Grotesk', sans-serif",
              transition: 'color 0.15s',
              padding: '4px 0',
            }}
            onMouseEnter={(e) => {
              e.target.style.color = '#7c3aed'
            }}
            onMouseLeave={(e) => {
              e.target.style.color = '#475569'
            }}
          >
            {item.label}
          </a>
        ))}
      </div>
    </motion.nav>
  )
}
