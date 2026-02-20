// Image dans public/ : IMAGE 2026-02-20 16:00:33.jpg
const heroImage = '/IMAGE 2026-02-20 16:00:33.jpg'

function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 pt-24 pb-12 overflow-hidden">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Texte à gauche */}
        <div className="text-left order-2 lg:order-1">
          <p
            className="text-accent font-medium text-sm uppercase tracking-widest mb-4 opacity-0 animate-fade-in-up"
            style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}
          >
            Bonjour, je suis
          </p>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-noir mb-4 opacity-0 animate-fade-in-up"
            style={{ animationDelay: '0.25s', animationFillMode: 'forwards' }}
          >
            <span className="block">AKOUTA</span>
            <span className="block mt-1 bg-gradient-to-r from-accent via-sky to-emerald bg-clip-text text-transparent">
              Déo-Gratias Schedrak Freddy
            </span>
          </h1>
          <p
            className="text-gris text-lg md:text-xl max-w-lg opacity-0 animate-fade-in-up"
            style={{ animationDelay: '0.45s', animationFillMode: 'forwards' }}
          >
            Développeur d'applications web, mobile, et Blockchain
          </p>
          <div
            className="mt-10 flex flex-wrap gap-4 opacity-0 animate-fade-in-up"
            style={{ animationDelay: '0.65s', animationFillMode: 'forwards' }}
          >
            <a
              href="#experience"
              className="px-6 py-3 rounded-lg bg-noir text-blanc font-medium hover:bg-noir/90 transition-all duration-300 hover:scale-105"
            >
              Voir mon parcours
            </a>
            <a
              href="#projets"
              className="px-6 py-3 rounded-lg border-2 border-accent text-accent font-medium hover:bg-accent hover:text-blanc transition-all duration-300 hover:scale-105"
            >
              Découvrir mes projets
            </a>
          </div>
          <div
            className="mt-12 opacity-0 animate-float animate-fade-in"
            style={{ animationDelay: '1s', animationFillMode: 'forwards' }}
            aria-hidden
          >
            <a href="#contact" className="inline-flex flex-col items-center gap-1 text-gris hover:text-accent transition-colors">
              <span className="block w-6 h-10 rounded-full border-2 border-noir/20" />
              <span className="text-xs">Contact</span>
            </a>
          </div>
        </div>

        {/* Image à droite */}
        <div
          className="relative order-1 lg:order-2 flex justify-center lg:justify-end opacity-0 animate-scale-in"
          style={{ animationDelay: '0.35s', animationFillMode: 'forwards' }}
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-2xl ring-2 ring-noir/5">
            <img
              src={encodeURI(heroImage)}
              alt="AKOUTA Déo-Gratias Schedrak Freddy"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.onerror = null
                e.target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop'
              }}
            />
            <div className="absolute inset-0 rounded-2xl ring-2 ring-inset ring-blanc/20 pointer-events-none" />
          </div>
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] rounded-full bg-gradient-to-br from-accent/10 to-sky/10 blur-2xl" />
        </div>
      </div>
    </section>
  )
}

export default Hero
