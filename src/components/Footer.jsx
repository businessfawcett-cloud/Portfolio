export default function Footer() {
  return (
    <footer
      style={{
        textAlign: 'center',
        padding: '32px 24px',
        fontSize: '0.75rem',
        fontFamily: "'Space Grotesk', sans-serif",
        fontWeight: 500,
        color: '#b0aca4',
        borderTop: '2px solid #e0dcd4',
      }}
    >
      &copy; {new Date().getFullYear()} Parker Fawcett
      <span style={{ margin: '0 8px', color: '#7c3aed' }}>✦</span>
      Built with React & Framer Motion
    </footer>
  )
}
