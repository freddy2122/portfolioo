import { useState } from 'react'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-blanc/90 backdrop-blur-md border-b border-noir/5 shadow-sm">
      <nav className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="#"
          className="flex items-center gap-2 text-noir font-bold tracking-tight group"
        >
          
          <span className="hidden sm:inline">AKOUTA Deo</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10">
          <a href="#experience" className="nav-link text-sm font-medium">
            Expérience
          </a>
          <a href="#projets" className="nav-link text-sm font-medium">
            Projets
          </a>
          <a
            href="#contact"
            className="text-sm font-medium px-4 py-2 rounded-lg bg-accent text-blanc hover:bg-accent-light transition-colors duration-300"
          >
            Contact
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden w-10 h-10 flex flex-col justify-center gap-1.5 p-2 rounded-lg hover:bg-noir/5 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span className={`block h-0.5 bg-noir rounded-full transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block h-0.5 bg-noir rounded-full transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 bg-noir rounded-full transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${menuOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="px-6 py-4 flex flex-col gap-3 bg-blanc border-t border-noir/5">
          <a href="#experiences" className="nav-link py-2" onClick={() => setMenuOpen(false)}>
            Expérience
          </a>
          <a href="#projets" className="nav-link py-2" onClick={() => setMenuOpen(false)}>
            Projets
          </a>
          <a href="#contact" className="text-accent font-medium py-2" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
