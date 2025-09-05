import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function ExplorerPage() {
  return (
    <>
      <Navbar />
      <main className="text-white p-10 relative overflow-hidden">
        <section className="mx-auto max-w-5xl px-6 py-20">
          <h1 className="text-4xl sm:text-6xl">Explorer, pas à pas</h1>
          <p className="mt-4 max-w-2xl text-lg sm:text-xl">Le Machine Learning, expliqué par étapes.</p>

          <div className="mt-8 flex gap-4">
            <a href="#start" className='group relative inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-medium text-white transition-colors bg-indigo-600 hover:bg-indigo-500'>
              Commencer ici
            </a>

            <a href="#start" className='group relative inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-medium text-white transition-colors bg-indigo-600 hover:bg-indigo-500'>
              Palier 1
            </a>

            <a href="#start" className='group relative inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-medium text-white transition-colors bg-indigo-600 hover:bg-indigo-500'>
              Palier 2
            </a>

            <a href="#start" className='group relative inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-medium text-white transition-colors bg-indigo-600 hover:bg-indigo-500'>
              Palier 3
            </a>
          </div>
        </section>

        {/* 3 blocs façon “Apprendre / Explorer / Appliquer”, 
        apprendre ça sera easy juste dla doc, explorer minis démos interactives maybe (?) et appliquer : exemples concrets (img, vidéos et anims 3D ?) */}
        <section id="start" className="mx-auto max-w-5xl px-6 pb-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card
              title="Apprendre"
              desc="blablabla"
            />
            <Card
              title="Explorer"
              desc="blablabla"
            />
            <Card
              title="Appliquer"
              desc="blablabla"
            />
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-12">
          <div className="rounded-2xl border border-zinc-800/70 bg-zinc-900/40 p-6 sm:p-8">
            <p className="mb-2 text-sm uppercase tracking-widest text-indigo-400">
              Débuter
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Je découvre le Machine Learning
            </h2>
            <p className="mt-3 max-w-3xl text-zinc-300">
              Suis un parcours guidé en petits paliers. Chaque étape prend
              2–3 minutes, avec une analogie simple et un mini visuel.
            </p>

            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              <Bullet>A</Bullet>
              <Bullet>B</Bullet>
              <Bullet>C</Bullet>
              <Bullet>D</Bullet>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

function Card({
  title,
  desc,
  tag,
}: {
  title: string
  desc: string
  tag: string
}) {
  return (
    <div className="group relative rounded-2xl border border-zinc-800/70 bg-zinc-900/40 p-6 transition-colors hover:border-zinc-700/80">
      <p className="text-xs uppercase tracking-widest text-zinc-400">
        {tag}
      </p>
      <h3 className="mt-2 text-xl font-semibold text-white">{title}</h3>
      <p className="mt-2 text-zinc-300">{desc}</p>
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px w-full scale-x-0 bg-gradient-to-r from-transparent via-indigo-400/60 to-transparent transition-transform duration-300 group-hover:scale-x-100"
      />
    </div>
  )
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2 text-zinc-300">
      <span className="mt-1.5 inline-block h-2 w-2 rounded-full bg-indigo-500" />
      <span>{children}</span>
    </li>
  )
}
