import AboutMe from '@/components/AboutMe'
import ClientsFigures from '@/components/ClientsFigures'
import Contact from '@/components/Contact'
import Features from '@/components/Features'
import Footer from '@/components/Footer'
import MainContent from '@/components/MainContent'
import Navbar from '@/components/Navbar'
import Services from '@/components/Services'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between 
      md:px-20 px-6">
      <Navbar />
      <MainContent />
      <ClientsFigures />
      <Services />
      <AboutMe />
      <Features />
      <Contact />
      <Footer />
    </main>
  )
}
