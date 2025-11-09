import { useTranslation } from 'react-i18next'
import { LanguageSwitcher } from './LanguageSwitcher'
import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const navItems = [
  { id: 'models', key: 'models' },
  { id: 'about', key: 'about' },
  { id: 'inventory', key: 'inventory' },
]

export const Header = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  const isHomePage = location.pathname === '/'

  useEffect(() => {
    if (!isHomePage) return

    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id))
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check on mount

    return () => window.removeEventListener('scroll', handleScroll)
  }, [isHomePage])

  const scrollToSection = (id: string) => {
    if (isHomePage) {
      const section = document.getElementById(id)
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' })
        setIsMenuOpen(false)
      }
    } else {
      navigate(`/#${id}`)
      setIsMenuOpen(false)
    }
  }

  const scrollToTop = () => {
    if (isHomePage) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      navigate('/')
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={scrollToTop}
            className="text-2xl font-bold text-black hover:opacity-80 transition-opacity cursor-pointer"
          >
            ESSA DOMY
          </button>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium uppercase tracking-wide transition-colors ${
                  activeSection === item.id
                    ? 'text-black border-b-2 border-black'
                    : 'text-gray-600 hover:text-black'
                }`}
              >
                {t(`nav.${item.key}`)}
              </button>
            ))}
            <LanguageSwitcher />
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left text-sm font-medium uppercase tracking-wide ${
                  activeSection === item.id ? 'text-black' : 'text-gray-600'
                }`}
              >
                {t(`nav.${item.key}`)}
              </button>
            ))}
            <div className="pt-4">
              <LanguageSwitcher />
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

