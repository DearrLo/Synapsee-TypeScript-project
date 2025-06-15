import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
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
            <button className="relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-semibold text-white transition-all duration-300 rounded-xl group bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-blue-500 shadow-lg shadow-blue-500/20 hover:shadow-indigo-500/30">
              <span className="relative z-10">Explorer</span>
              <div className="absolute inset-0 w-full h-full bg-white opacity-10 blur-sm transition-all duration-300 group-hover:opacity-20"></div>
            </button>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
