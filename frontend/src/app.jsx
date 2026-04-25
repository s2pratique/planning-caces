import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage darkMode={darkMode} setDarkMode={setDarkMode} />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

function HomePage({ darkMode, setDarkMode }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <div className="max-w-2xl w-full space-y-8">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">
            📅 Planning Formations CACES
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Application de gestion du planning - Phase 1 Setup
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">🎯 Statut du Projet</h2>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
            >
              {darkMode ? '☀️ Mode clair' : '🌙 Mode sombre'}
            </button>
          </div>

          <div className="space-y-4">
            <StatusItem 
              status="✅" 
              title="Repository GitHub" 
              description="Structure créée"
            />
            <StatusItem 
              status="🚧" 
              title="Backend" 
              description="En cours de déploiement"
            />
            <StatusItem 
              status="🚧" 
              title="Frontend" 
              description="En cours de déploiement"
            />
            <StatusItem 
              status="⏳" 
              title="Base de données" 
              description="À configurer"
            />
            <StatusItem 
              status="⏳" 
              title="Authentification" 
              description="À configurer"
            />
          </div>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-2">📋 Prochaines étapes</h3>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li>1. Déployer sur Vercel (Frontend)</li>
            <li>2. Déployer sur Railway (Backend + DB)</li>
            <li>3. Configurer Google OAuth</li>
            <li>4. Développer les modules CRUD</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

function StatusItem({ status, title, description }) {
  return (
    <div className="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
      <span className="text-2xl">{status}</span>
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
      </div>
    </div>
  )
}

export default App
