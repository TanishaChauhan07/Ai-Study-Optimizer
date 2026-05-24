import { useState } from 'react'
import toast from 'react-hot-toast'
import { ArrowLeft, BookOpen, Lightbulb, CheckSquare, Star, Copy, FileText } from 'lucide-react'

export default function ResultsPage({ results, setStage }) {
  const [copied, setCopied] = useState(false)

  const copyNotes = () => {
    const text = `
AI STUDY NOTES — ${results.video_title}
${'='.repeat(50)}

SUMMARY
${results.summary}

KEY CONCEPTS
${results.key_concepts.map((c, i) => `${i + 1}. ${c}`).join('\n')}

ACTION ITEMS
${results.action_items.map((a, i) => `${i + 1}. ${a}`).join('\n')}

STUDY POINTS
${results.study_points.map((s, i) => `${i + 1}. ${s}`).join('\n')}

Source: ${results.video_url}
    `.trim()
    navigator.clipboard.writeText(text)
    setCopied(true)
    toast.success('Notes copied to clipboard!')
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        {/* Top Bar */}
        <div style={styles.topBar}>
          <button style={styles.backBtn} onClick={() => setStage('input')}>
            <ArrowLeft size={16} /> New Video
          </button>
          <button style={styles.copyBtn} onClick={copyNotes}>
            <Copy size={16} />
            {copied ? 'Copied!' : 'Copy All Notes'}
          </button>
        </div>

        {/* Title */}
        <div style={styles.titleCard}>
          <FileText size={20} color="#6366f1" />
          <div>
            <p style={styles.titleLabel}>Study Notes for</p>
            <h1 style={styles.videoTitle}>{results.video_title}</h1>
            <p style={styles.transcriptInfo}>
              📄 Processed {results.transcript_length.toLocaleString()} characters of transcript
            </p>
          </div>
        </div>

        {/* Summary */}
        <Section icon={<BookOpen size={18} color="#6366f1" />} title="Summary" color="#6366f1">
          <p style={styles.summaryText}>{results.summary}</p>
        </Section>

        {/* Key Concepts */}
        <Section icon={<Lightbulb size={18} color="#f59e0b" />} title="Key Concepts" color="#f59e0b">
          {results.key_concepts.map((concept, i) => (
            <div key={i} style={styles.listItem}>
              <span style={{ ...styles.badge, background: '#f59e0b22', color: '#f59e0b' }}>{i + 1}</span>
              <span>{concept}</span>
            </div>
          ))}
        </Section>

        {/* Action Items */}
        <Section icon={<CheckSquare size={18} color="#10b981" />} title="Action Items" color="#10b981">
          {results.action_items.map((item, i) => (
            <div key={i} style={styles.listItem}>
              <span style={{ ...styles.badge, background: '#10b98122', color: '#10b981' }}>✓</span>
              <span>{item}</span>
            </div>
          ))}
        </Section>

        {/* Study Points */}
        <Section icon={<Star size={18} color="#8b5cf6" />} title="Study Points" color="#8b5cf6">
          {results.study_points.map((point, i) => (
            <div key={i} style={styles.listItem}>
              <span style={{ ...styles.badge, background: '#8b5cf622', color: '#8b5cf6' }}>★</span>
              <span>{point}</span>
            </div>
          ))}
        </Section>
      </div>
    </div>
  )
}

function Section({ icon, title, color, children }) {
  return (
    <div style={styles.section}>
      <div style={styles.sectionHeader}>
        {icon}
        <h2 style={{ ...styles.sectionTitle, color }}>{title}</h2>
      </div>
      <div style={styles.sectionContent}>{children}</div>
    </div>
  )
}

const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 100%)',
    padding: '24px 20px',
  },
  wrapper: {
    maxWidth: '760px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  topBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backBtn: {
    background: 'transparent',
    border: '1px solid #2d2d5e',
    color: '#94a3b8',
    borderRadius: '8px',
    padding: '8px 16px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    fontSize: '14px',
  },
  copyBtn: {
    background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
    border: 'none',
    color: 'white',
    borderRadius: '8px',
    padding: '8px 16px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    fontSize: '14px',
    fontWeight: '600',
  },
  titleCard: {
    background: '#16213e',
    border: '1px solid #2d2d5e',
    borderRadius: '16px',
    padding: '24px',
    display: 'flex',
    gap: '16px',
    alignItems: 'flex-start',
  },
  titleLabel: {
    color: '#64748b',
    fontSize: '12px',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    marginBottom: '4px',
  },
  videoTitle: {
    fontSize: '20px',
    fontWeight: '700',
    color: '#f1f5f9',
    marginBottom: '6px',
  },
  transcriptInfo: {
    color: '#475569',
    fontSize: '13px',
  },
  section: {
    background: '#16213e',
    border: '1px solid #2d2d5e',
    borderRadius: '16px',
    padding: '24px',
  },
  sectionHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '16px',
  },
  sectionTitle: {
    fontSize: '17px',
    fontWeight: '700',
  },
  sectionContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  summaryText: {
    color: '#cbd5e1',
    lineHeight: '1.8',
    fontSize: '15px',
  },
  listItem: {
    display: 'flex',
    gap: '12px',
    alignItems: 'flex-start',
    color: '#cbd5e1',
    fontSize: '15px',
    lineHeight: '1.6',
  },
  badge: {
    borderRadius: '6px',
    padding: '2px 8px',
    fontSize: '12px',
    fontWeight: '700',
    flexShrink: 0,
    marginTop: '2px',
  },
}