import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Step1() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-center p-8">
        <h1 className="text-3xl font-bold">Step 1</h1>
      </main>
      <Footer />
    </>
  )
}
