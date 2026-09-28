import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'NeuroCode Educação Inclusiva',
  description: 'Da inclusão no papel para a inclusão na prática.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="antialiased min-h-screen flex flex-col">
        <header className="bg-primary text-white p-4 shadow-md" role="banner">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold">NeuroCode</h1>
            <nav><a href="/" className="hover:underline focus:outline-none focus:ring-2 focus:ring-white rounded px-2 py-1">Início</a></nav>
          </div>
        </header>
        <main className="flex-grow container mx-auto p-4" role="main">{children}</main>
        <footer className="bg-slate-800 text-white text-center p-4 mt-8">
          <p>© 2026 NeuroCode. DADOS FICTÍCIOS / DEMONSTRAÇÃO.</p>
        </footer>
      </body>
    </html>
  )
}
