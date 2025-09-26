import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from "next/link";

export default function ExplorerPage() {
  return (
    <>
      <Navbar />
      <main className="text-white p-12 relative overflow-hidden bg-black">
        <section className="mx-auto max-w-5xl px-6 py-20">
          <h1 className="max-w-2xl text-4xl sm:text-6xl">
            Explorer, pas à pas
          </h1>
          <p className="mt-4 max-w-2xl text-lg sm:text-xl">
            Le Machine Learning, expliqué par étapes.
          </p>

          <HeroSteps />
        </section>

        {/* 3 blocs façon “Apprendre / Explorer / Appliquer” 
        apprendre ça sera easy psq juste dla doc, explorer minis démos interactives maybe (?) et appliquer : exemples concrets (img, vidéos et anims 3D ?) */}
        <section id="start" className="mx-auto max-w-5xl px-6 pb-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card title="Les données" desc="Les fondations. Chaque image, son ou chiffre est une petite pièce d'un immense puzzle. Sans données de qualité, aucun apprentissage n'est possible. Découvre pourquoi leur préparation est la clé." tag="ce qu'on observe :" />
            <Card title="Les algorithmes" desc="Les méthodes. Ils ressemblent à des recettes qui testent, comparent et corrigent jusqu'à trouver le bon équilibre. Comprendre leur logique, c'est ouvrir la boîte noire du Machine Learning." tag="comment on apprend :" />
            <Card title="Les modèles" desc="L'édifice. Une fois entraîné, le modèle devient capable de prédire, reconnaître et généraliser. C'est le résultat tangible de tout le processus, celui qu'on met entre les mains du monde réel" tag="ce qu'on sait faire, après :" />
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
              Suis un parcours guidé en petits paliers. Chaque étape prend 2-3
              minutes, avec une analogie simple et un mini visuel.
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
      <p className="text-xs uppercase tracking-widest text-zinc-400">{tag}</p>
      <h3 className="mt-2 text-xl font-semibold text-white">{title}</h3>
      <p className="mt-2 text-zinc-300">{desc}</p>

      {/* voir + part avec la petite anim */}
      <a
        href="#"
        aria-label={`Voir plus sur ${title}`}
        className="mt-4 inline-flex mx-auto w-fit items-center gap-1 text-xs font-semibold uppercase tracking-widest text-indigo-400 hover:text-white transition group"
      >
        <span className="relative">
          Voir plus
          <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-gradient-to-r from-indigo-400 via-violet-400 to-transparent transition-all duration-300 group-hover:w-full" />
        </span>
        <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>

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
    <div className="mt-8 p-8 flex flex-col items-center">
      {/* Stepper cliquable (à improve psq pas assez impactant visuellement (?) + à link ) */}
      <nav aria-label="Paliers" className="flex items-center gap-4 sm:gap-8">

        {/* Étape 1 */}
        <div className="flex flex-col items-center">
          <Link
            href="/explorer/base1"
            aria-label="Étape 1 : Palier 1"
            className="flex h-12 w-12 items-center justify-center rounded-full ring-1 ring-zinc-700 text-zinc-300 hover:text-white hover:ring-zinc-500 transition"
          >
            <span className="text-base font-semibold">1</span>
          </Link>
          <a
            href="#start"
            className="mt-2 text-sm text-zinc-400 hover:text-zinc-200"
          >
            Bases
          </a>
        </div>

        {/* Trait entre 1 et 2 */}
        <div aria-hidden className="h-px w-10 sm:w-16 bg-zinc-700/70" />

        {/* Étape 2 */}
        <div className="flex flex-col items-center">
          <a
            href="#start"
            aria-label="Étape 2 : Palier 2"
            className="flex h-12 w-12 items-center justify-center rounded-full ring-1 ring-zinc-700 text-zinc-300 hover:text-white hover:ring-zinc-500 transition"
          >
            <span className="text-base font-semibold">2</span>
          </a>
          <a
            href="#start"
            className="mt-2 text-sm text-zinc-400 hover:text-zinc-200"
          >
            Pratique
          </a>
        </div>

        {/* Trait entre 2 et 3 */}
        <div aria-hidden className="h-px w-10 sm:w-16 bg-zinc-700/70" />

        {/* Étape 3 */}
        <div className="flex flex-col items-center">
          <a
            href="#start"
            aria-label="Étape 3 : Palier 3"
            className="flex h-12 w-12 items-center justify-center rounded-full ring-1 ring-zinc-700 text-zinc-300 hover:text-white hover:ring-zinc-500 transition"
          >
            <span className="text-base font-semibold">3</span>
          </a>
          <a
            href="#start"
            className="mt-2 text-sm text-zinc-400 hover:text-zinc-200"
          >
            Maîtrise
          </a>
        </div>
      </nav>

      {/* main CTA sous le stepper */}
      <a
        href="#start"
        className="group relative inline-flex h-12 items-center justify-center rounded-full px-8
             mt-10 text-xl font-semibold text-white
             overflow-hidden border-2 border-white/90
             ring-1 ring-violet-500/30
             shadow-[0_8px_26px_rgba(124,58,237,0.25)]
             transition-all duration-300 hover:-translate-y-0.5"
      >
        <span
          aria-hidden
          className="absolute inset-x-0 bottom-0 z-0 h-0 bg-violet-600
               transition-[height] duration-500 ease-out
               group-hover:h-full group-active:duration-150"
        />
        <span className="relative z-10">Commencer</span>
      </a>
    </div>
  )
}
