function Footer() {
  return (
    <footer className="py-12 px-6 bg-noir/95 text-blanc border-t border-blanc/10">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-blanc/70 text-sm">
            © 2025 — AKOUTA Déo-Gratias Schedrak Freddy
          </p>
          <div className="flex gap-8">
            <a
              href="mailto:votre@email.com"
              className="text-blanc/80 hover:text-accent-light transition-colors duration-300 text-sm font-medium"
            >
              Contact
            </a>
            <a
              href="https://github.com/freddy2122"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blanc/80 hover:text-accent-light transition-colors duration-300 text-sm font-medium"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
