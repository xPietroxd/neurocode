'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    localStorage.setItem('neurocode_token', 'mock_jwt_token_demo')
    router.push('/dashboard')
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-primary">Acesso NeuroCode</h1>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">E-mail</label>
          <input type="email" id="email" required className="w-full px-3 py-2 border border-slate-300 rounded-md" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-1">Senha</label>
          <input type="password" id="password" required className="w-full px-3 py-2 border border-slate-300 rounded-md" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit" className="w-full bg-primary text-white py-2 rounded-md font-semibold hover:bg-blue-700">Entrar</button>
      </form>
    </div>
  )
}
