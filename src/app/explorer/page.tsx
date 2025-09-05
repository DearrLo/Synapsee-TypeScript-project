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

          <HeroSteps />
        </section> {/* ← cette section devait être fermée */}

        {/* 3 blocs façon “Apprendre / Explorer / Appliquer”, 
        apprendre ça sera easy juste dla doc, explorer minis démos interactives maybe (?) et appliquer : exemples concrets (img, vidéos et anims 3D ?) */}
        <section id="start" className="mx-auto max-w-5xl px-6 pb-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card
              title="Apprendre"
              desc="blablabla"
              tag="learn"
            />
            <Card
              title="Explorer"
              desc="blablabla"
              tag="explorer"
            />
            <Card
              title="Appliquer"
              desc="blablabla"
              tag="apply"
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

function HeroSteps() {
  return (
    <div className="mt-8 flex flex-col items-center">
      {/* Stepper cliquable */}
      <nav aria-label="Paliers" className="flex items-center gap-4 sm:gap-8">
        {/* Étape 1 */}
        <div className="flex flex-col items-center">
          {/* change plus tard vers #palier-1 si tu ajoutes la section */}
          <a
            href="#start"
            aria-label="Étape 1 : Palier 1"
            className="flex h-12 w-12 items-center justify-center rounded-full ring-1 ring-zinc-700 text-zinc-300 hover:text-white hover:ring-zinc-500 transition"
          >
            <span className="text-base font-semibold">1</span>
          </a>
          <a href="#start" className="mt-2 text-sm text-zinc-400 hover:text-zinc-200">
            Palier 1
          </a>
        </div>

        {/* Trait entre 1 et 2 */}
        <div aria-hidden="true" className="h-px w-10 sm:w-16 bg-zinc-700/70" />

        {/* Étape 2 */}
        <div className="flex flex-col items-center">
          {/* #palier 2 plus tard */}
          <a
            href="#start"
            aria-label="Étape 2 : Palier 2"
            className="flex h-12 w-12 items-center justify-center rounded-full ring-1 ring-zinc-700 text-zinc-300 hover:text-white hover:ring-zinc-500 transition"
          >
            <span className="text-base font-semibold">2</span>
          </a>
          <a href="#start" className="mt-2 text-sm text-zinc-400 hover:text-zinc-200">
            Palier 2
          </a>
        </div>

        {/* Trait entre 2 et 3 */}
        <div aria-hidden="true" className="h-px w-10 sm:w-16 bg-zinc-700/70" />

        {/* Étape 3 */}
        <div className="flex flex-col items-center">
          {/* #palier 3 plus tard */}
          <a
            href="#start"
            aria-label="Étape 3 : Palier 3"
            className="flex h-12 w-12 items-center justify-center rounded-full ring-1 ring-zinc-700 text-zinc-300 hover:text-white hover:ring-zinc-500 transition"
          >
            <span className="text-base font-semibold">3</span>
          </a>
          <a href="#start" className="mt-2 text-sm text-zinc-400 hover:text-zinc-200">
            Palier 3
          </a>
        </div>
      </nav>

      {/* main CTA sous le stepper */}
      <div className="relative mt-8">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 scale-110 rounded-full bg-gradient-to-r from-violet-600/30 via-indigo-600/20 to-transparent blur-3xl"
        />
        <a
          href="#start"
          className="inline-flex h-14 items-center justify-center rounded-full bg-violet-600 px-8 text-lg font-semibold text-white shadow-lg transition hover:bg-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-400/70 focus:ring-offset-2 focus:ring-offset-zinc-950"
        >
          Commencer ici
        </a>
      </div>
    </div>
  );
}
