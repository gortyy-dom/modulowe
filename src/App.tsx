import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { Models } from '@/components/Models'
import { About } from '@/components/About'
import { Inventory } from '@/components/Inventory'
import { Team } from '@/components/Team'
import { ModelDetail } from '@/components/ModelDetail'
import { useEffect } from 'react'

function HomePage() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1)
      const element = document.getElementById(id)
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      }
    }
  }, [location.hash])

  return (
    <>
      <Hero />
      <Models />
      <About />
      <Inventory />
      <Team />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/models/:id" element={<ModelDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
