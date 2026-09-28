export default function Home() {
  return (
    <div className="space-y-8 py-12 text-center">
      <h2 className="text-4xl font-bold text-primary">Da inclusão no papel para a inclusão na prática.</h2>
      <p className="text-xl text-slate-600 max-w-2xl mx-auto">
        Plataforma SaaS profissional para apoiar professores e famílias no acompanhamento pedagógico de estudantes com necessidades educacionais específicas.
      </p>
      <div className="flex justify-center gap-4 mt-6">
        <a href="/dashboard" className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
          Acessar Plataforma
        </a>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto text-left">
        <article className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-2 text-slate-800">Perfil Pedagógico</h3>
          <p className="text-slate-600">Mapeamento de barreiras e potencialidades individualizadas.</p>
        </article>
        <article className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-2 text-slate-800">NeuroCode IA</h3>
          <p className="text-slate-600">Assistente inteligente para adaptação de atividades pedagógicas.</p>
        </article>
        <article className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-2 text-slate-800">Segurança e LGPD</h3>
          <p className="text-slate-600">Proteção total dos dados com criptografia e multi-tenancy.</p>
        </article>
      </div>
    </div>
  )
}
