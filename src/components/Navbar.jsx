import { motion, useScroll, useTransform } from 'framer-motion'

const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'Work', href: '#case-studies' },
  { label: 'Spotlight', href: '#data-spotlight' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const { scrollY } = useScroll()
  const x = useTransform(scrollY, [0, 150], ['-50%', 'calc(100vw - 40px)'])
  const opacity = useTransform(scrollY, [0, 150], [1, 0])

  return (
    <motion.nav
      style={{
        position: 'fixed',
        top: 16,
        left: '50%',
        x,
        zIndex: 1000,
        padding: '10px 24px',
        display: 'flex',
        alignItems: 'center',
        gap: 32,
        background: '#ffffff',
        borderRadius: 100,
        border: '3px solid #1a1a2e',
        boxShadow: '6px 6px 0px #1a1a2e',
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
              color: '#6b6b80',
              textDecoration: 'none',
              fontSize: '0.8rem',
              fontWeight: 600,
              fontFamily: "'Space Grotesk', sans-serif",
              transition: 'color 0.15s',
              padding: '4px 0',
              borderBottom: '2px solid transparent',
            }}
            onMouseEnter={(e) => {
              e.target.style.color = '#7c3aed'
              e.target.style.borderBottomColor = '#7c3aed'
            }}
            onMouseLeave={(e) => {
              e.target.style.color = '#6b6b80'
              e.target.style.borderBottomColor = 'transparent'
            }}
          >
            {item.label}
          </a>
        ))}
      </div>
    </motion.nav>
  )
}
