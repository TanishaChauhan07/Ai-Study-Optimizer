import { useEffect, useState } from 'react'

const messages = [
  'Fetching YouTube transcript...',
  'Reading the lecture...',
  'Identifying key concepts...',
  'Generating study notes...',
  'Almost done...',
]

export default function LoadingScreen() {
  const [msgIndex, setMsgIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setMsgIndex((i) => (i + 1) % messages.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.spinner} />
        <h2 style={styles.title}>Processing your lecture</h2>
        <p style={styles.message}>{messages[msgIndex]}</p>
        <p style={styles.hint}>This usually takes 15–30 seconds</p>
      </div>
    </div>
  )
}

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 100%)',
  },
  card: {
    textAlign: 'center',
    padding: '48px',
  },
  spinner: {
    width: '56px',
    height: '56px',
    border: '4px solid #2d2d5e',
    borderTop: '4px solid #6366f1',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
    margin: '0 auto 24px',
  },
  title: {
    fontSize: '22px',
    fontWeight: '700',
    color: '#f1f5f9',
    marginBottom: '12px',
  },
  message: {
    color: '#6366f1',
    fontSize: '16px',
    marginBottom: '8px',
    minHeight: '24px',
  },
  hint: {
    color: '#475569',
    fontSize: '13px',
  },
}