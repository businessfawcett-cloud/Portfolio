export default function Footer() {
  return (
    <footer
      style={{
        textAlign: 'center',
        padding: '32px 24px',
        fontSize: '0.7rem',
        color: 'rgba(255,255,255,0.2)',
        borderTop: '1px solid rgba(255,255,255,0.04)',
      }}
    >
      &copy; {new Date().getFullYear()} Parker Fawcett. Built with React & Framer Motion.
    </footer>
  )
}
