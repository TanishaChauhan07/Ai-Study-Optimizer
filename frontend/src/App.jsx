import { useState } from 'react'
import InputForm from './components/InputForm'
import ResultsPage from './components/ResultsPage'
import LoadingScreen from './components/LoadingScreen'
import { Toaster } from 'react-hot-toast'
import './App.css'

function App() {
  const [stage, setStage] = useState('input') // 'input' | 'loading' | 'results'
  const [results, setResults] = useState(null)

  return (
    <div>
      <Toaster position="top-right" />
      {stage === 'input' && (
        <InputForm setStage={setStage} setResults={setResults} />
      )}
      {stage === 'loading' && <LoadingScreen />}
      {stage === 'results' && (
        <ResultsPage results={results} setStage={setStage} />
      )}
    </div>
  )
}

export default App