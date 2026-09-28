import Link from 'next/link'
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 text-center">
      <h1 className="text-4xl font-bold text-primary mb-4">NEUROCODE EDUCAÇÃO INCLUSIVA</h1>
      <p className="text-xl text-slate-600 mb-8">"Da inclusão no papel para a inclusão na prática."</p>
      <div className="flex gap-4">
        <Link href="/login" className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700">Acessar Plataforma</Link>
      </div>
    </div>
  )
}
