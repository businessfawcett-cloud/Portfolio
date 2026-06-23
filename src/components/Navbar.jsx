import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'Work', href: '#case-studies' },
  { label: 'Spotlight', href: '#data-spotlight' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      animate={{ x: scrolled ? 'calc(50vw - 16px)' : '-50%' }}
      transition={{ type: 'spring', stiffness: 200, damping: 25 }}
      style={{
        position: 'fixed',
        top: 16,
        left: '50%',
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
