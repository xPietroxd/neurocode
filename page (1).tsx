export default function Dashboard() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-slate-800 mb-6">Dashboard do Professor</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow border-l-4 border-primary">
          <h2 className="text-xl font-semibold mb-2">Meus Estudantes</h2>
          <p className="text-3xl font-bold text-primary">24</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow border-l-4 border-secondary">
          <h2 className="text-xl font-semibold mb-2">Planos Ativos (PEI)</h2>
          <p className="text-3xl font-bold text-secondary">8</p>
        </div>
      </div>
    </div>
  )
}
