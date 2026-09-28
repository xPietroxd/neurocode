import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
const inter = Inter({ subsets: ['latin'] })
export const metadata: Metadata = { title: 'NeuroCode', description: 'Educação Inclusiva' }
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={\\ bg-background text-slate-800\}>
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-white p-2 z-50">Pular para conteúdo</a>
        <main id="main" className="min-h-screen">{children}</main>
      </body>
    </html>
  )
}
