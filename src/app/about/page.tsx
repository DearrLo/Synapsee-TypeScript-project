import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function AboutPage() {
  return (
      <>
  <Navbar />
    <main className="text-white p-8">
      <h1 className="text-4xl font-bold">À propos</h1>
      <p>Ce projet a été codé entre deux breakdowns et un Redbull, avec amour par Lorette.</p>
    </main>
     <Footer />
       </>
  );
}
