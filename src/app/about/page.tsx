import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <section className="relative bg-zinc-950 text-white overflow-x-clip">
        {/* trait violet */}
        <span
          aria-hidden
          className="pointer-events-none absolute left-[max(2rem,9%)] top-28 h-[2px] w-[575px] bg-violet-500/60"
        />

        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr]">
          {/* texte de gauche */}
          <div>
            <h1 className="text-[clamp(36px,6vw,92px)] font-extrabold leading-none tracking-tight">
              ABOUT.
            </h1>

            <p className="mt-6 max-w-xl text-lg text-zinc-300">
              Blablablablabla Blablablablabla Blablablablabla Blablablablabla
              Blablablablabla Blablablablabla Blablablablabla Blablablablabla
              Blablablablabla Blablablablabla Blablablablabla Blablablablabla.
              Blablablablabla Blablablablabla Blablablablabla Blablablablabla
              Blablablablabla Blablablablabla Blablablablabla Blablablablabla
              Blablablablabla Blablablablabla Blablablablabla Blablablablabla.
              Blablablablabla Blablablablabla Blablablablabla Blablablablabla
              Blablablablabla Blablablablabla Blablablablabla Blablablablabla
              Blablablablabla Blablablablabla Blablablablabla Blablablablabla.
              Blablablablabla Blablablablabla Blablablablabla Blablablablabla
              Blablablablabla Blablablablabla Blablablablabla Blablablablabla
              Blablablablabla Blablablablabla Blablablablabla Blablablablabla.
            </p>
          </div>

          {/* img (wrapper avec hauteur fixe + fill) */}
          <div className="relative">
            <div className="relative h-[550px] overflow-hidden rounded-2xl border border-white/10 shadow-2xl ring-1 ring-violet-500/20 mt-[30px] lg:ml-[40px]">
              <Image
                src="/images/about/me-pic.png"
                alt="me-drawing"
                fill
                className="object-cover"
                sizes="(min-width:1024px) 560px, 100vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-2">
        <div className="max-w-6xl mx-auto rounded-2xl bg-zinc-900/70 border border-white/10 p-6">

          <h2 className="text-2xl font-semibold text-white"> RGPD — Protection des données</h2>
          <div className="mt-4 text-zinc-300 space-y-4">
            <p>
              Ce site est consultable librement. Aucune donnée personnelle n'est
              collectée ni transmise.
            </p>
            <p>
              Des cookies de mesure d'audience peuvent être utilisés, uniquement après votre consentement.
            </p>
            <p>
              Ce site utilise Matomo Analytics pour mesurer son audience et améliorer son contenu. L'outil est configuré de manière conforme
              au RGPD : les adresses IP sont anonymisées, aucune donnée nominative n'est collectée, et aucun cookie de suivi n'est déposé sans votre consentement.
            </p>
            <p>
              Les statistiques générées (pages visitées, temps passé, origine du trafic, appareil utilisé) sont uniquement utilisées à des fins internes et ne sont jamais transmises à des tiers.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
