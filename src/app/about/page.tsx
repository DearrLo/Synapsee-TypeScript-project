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
              Blablablablabla Blablablablabla Blablablablabla
              Blablablablabla Blablablablabla Blablablablabla
              Blablablablabla Blablablablabla Blablablablabla
              Blablablablabla Blablablablabla Blablablablabla.
              Blablablablabla Blablablablabla Blablablablabla
              Blablablablabla Blablablablabla Blablablablabla
              Blablablablabla Blablablablabla Blablablablabla
              Blablablablabla Blablablablabla Blablablablabla.
              Blablablablabla Blablablablabla Blablablablabla
              Blablablablabla Blablablablabla Blablablablabla
              Blablablablabla Blablablablabla Blablablablabla
              Blablablablabla Blablablablabla Blablablablabla.
              Blablablablabla Blablablablabla Blablablablabla
              Blablablablabla Blablablablabla Blablablablabla
              Blablablablabla Blablablablabla Blablablablabla
              Blablablablabla Blablablablabla Blablablablabla.
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

      <Footer />
    </>
  )
}
