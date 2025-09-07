import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import IntroIframe from '@/components/IntroIframe'
import GradientButton from '@/components/GradientButton'

export default function Home() {
  return (
    <>
      <IntroIframe />

      <Navbar />

      <div className="flex flex-col min-h-screen bg-black text-white">
        <main className="flex-grow flex flex-col items-center justify-center p-8">
          <div className="max-w-3xl text-center">
            <h1 className="text-5xl font-bold mb-4">
              Comprendre le Deep Learning, simplement.
            </h1>
            <p className="text-lg text-gray-400 mb-8">
              Un projet de vulgarisation tech pour les curieux, les scientos, et
              les rêveurs.
            </p>

            <GradientButton href="/explorer">Explorer</GradientButton>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
