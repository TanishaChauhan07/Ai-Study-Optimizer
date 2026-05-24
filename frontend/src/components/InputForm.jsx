import { useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import { BookOpen, Sparkles } from 'lucide-react'

export default function InputForm({ setStage, setResults }) {
  const [url, setUrl] = useState('')
  const [topic, setTopic] = useState('')

  const handleSubmit = async () => {
    if (!url.trim()) {
      toast.error('Please enter a YouTube URL')
      return
    }
    setStage('loading')
    try {
      const response = await axios.post('http://localhost:8000/api/v1/study-notes', {
        youtube_url: url,
        focus_topic: topic || null,
      })
      setResults(response.data)
      setStage('results')
    } catch (err) {
      const msg = err.response?.data?.detail || 'Something went wrong'
      toast.error(msg)
      setStage('input')
    }
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.header}>
          <div style={styles.iconWrapper}>
            <BookOpen size={32} color="#6366f1" />
          </div>
          <h1 style={styles.title}>AI Study Optimizer</h1>
          <p style={styles.subtitle}>
            Paste a YouTube lecture URL and get structured study notes instantly
          </p>
        </div>

        <div style={styles.form}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>
              🎬 YouTube Lecture URL
            </label>
            <input
              style={styles.input}
              type="text"
              placeholder="https://www.youtube.com/watch?v=..."
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>
              <Sparkles size={16} color="#6366f1" style={{ marginRight: 6 }} />
              Focus Topic <span style={styles.optional}>(optional)</span>
            </label>
            <input
              style={styles.input}
              type="text"
              placeholder="e.g. neural networks, sorting algorithms..."
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
            />
          </div>

          <button style={styles.button} onClick={handleSubmit}>
            <Sparkles size={18} />
            Generate Study Notes
          </button>
        </div>

        <p style={styles.hint}>
          Works with any YouTube video that has captions enabled
        </p>
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
    padding: '20px',
    background: 'linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 100%)',
  },
  card: {
    background: '#16213e',
    borderRadius: '20px',
    padding: '48px',
    width: '100%',
    maxWidth: '560px',
    border: '1px solid #2d2d5e',
    boxShadow: '0 25px 50px rgba(0,0,0,0.5)',
  },
  header: {
    textAlign: 'center',
    marginBottom: '40px',
  },
  iconWrapper: {
    background: '#1e1e3f',
    borderRadius: '16px',
    width: '64px',
    height: '64px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 16px',
    border: '1px solid #3d3d7e',
  },
  title: {
    fontSize: '28px',
    fontWeight: '700',
    color: '#f1f5f9',
    marginBottom: '8px',
  },
  subtitle: {
    color: '#94a3b8',
    fontSize: '15px',
    lineHeight: '1.6',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  label: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#cbd5e1',
    display: 'flex',
    alignItems: 'center',
  },
  optional: {
    color: '#64748b',
    fontWeight: '400',
    marginLeft: '4px',
  },
  input: {
    background: '#0f0f1a',
    border: '1px solid #2d2d5e',
    borderRadius: '10px',
    padding: '12px 16px',
    color: '#f1f5f9',
    fontSize: '15px',
    outline: 'none',
    transition: 'border-color 0.2s',
  },
  button: {
    background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    padding: '14px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    marginTop: '8px',
    transition: 'opacity 0.2s',
  },
  hint: {
    textAlign: 'center',
    color: '#475569',
    fontSize: '13px',
    marginTop: '20px',
  },
}