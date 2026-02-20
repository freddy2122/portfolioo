function Header() {
  const navItems = [
    { href: '#', label: 'Accueil', icon: HomeIcon },
    { href: '#competences', label: 'Compétences', icon: SkillsIcon },
    { href: '#experience', label: 'Expérience', icon: ExperienceIcon },
    { href: '#projets', label: 'Projets', icon: ProjectsIcon },
    { href: '#contact', label: 'Contact', icon: ContactIcon },
  ]

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-blanc/90 backdrop-blur-md border-b border-noir/5 shadow-sm">
        <nav className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="flex items-center gap-2 text-noir font-bold tracking-tight">
            <span className="w-9 h-9 rounded-lg bg-accent text-blanc flex items-center justify-center text-sm font-extrabold">
              A
            </span>
            <span className="inline">AKOUTA Deo</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-10">
            <a href="#competences" className="nav-link text-sm font-medium">
              Compétences
            </a>
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
        </nav>
      </header>

      {/* Barre de navigation mobile en bas */}
      <nav
        className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-blanc/95 backdrop-blur-md border-t border-noir/10 shadow-[0_-4px_20px_rgba(0,0,0,0.06)]"
        aria-label="Navigation mobile"
      >
        <ul className="flex justify-around items-center px-2 py-3 max-w-lg mx-auto">
          {navItems.map(({ href, label, icon: Icon }) => (
            <li key={href + label}>
              <a
                href={href}
                className="flex flex-col items-center gap-1 py-1 px-3 rounded-lg text-gris hover:text-accent hover:bg-noir/5 transition-colors duration-200 min-w-[56px]"
              >
                <Icon className="w-6 h-6" />
                <span className="text-[10px] font-medium">{label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

function HomeIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  )
}

function SkillsIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  )
}

function ExperienceIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  )
}

function ProjectsIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
    </svg>
  )
}

function ContactIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  )
}

export default Header
