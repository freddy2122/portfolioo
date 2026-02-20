const projects = [
  {
    titre: 'Reussir a tout prix',
    description: 'Réussir à tout prix | Entrepreneuriat, Business & Bourse - Monyévèdo Firmin TOVODOUNON',
    url: 'https://reussiratoutprix.com/',
    image: 'https://reussiratoutprix.com/img/core-img/ll.png',
    tags: ['Laravel', 'Bootstrap'],
  },
  {
    titre: 'TIC MITON',
    description: 'TIC Miton est votre solution simple et sûre pour tous vos trajets. Commandez un déplacement, demandez une course ou faites-vous livrer en quelques clics.',
    url: 'https://ticmiton.com/',
    image: 'https://ticmiton.com/assets/logo-tic-Lhz_wGS8.webp',
    tags: ['React.js', 'Tailwind css'],
  },
  {
    titre: 'Makena',
    description: 'Une autre réalisation sur laquelle vous avez travaillé.',
    url: 'https://makena.pro/',
    image: 'https://makena.pro/logo.png',
    tags: ['React.js', 'Tailwind css'],
  },
  {
    titre: "L'or de la Bourse",
    description: 'Une plateforme de trading en ligne pour les investisseurs.',
    url: 'https://lordelabourse.vercel.app/',
    image: 'https://lordelabourse.vercel.app/assets/LOR-C_1KlqAW.svg',
    tags: ['React.js', 'Tailwind css','API'],
  },
  {
    titre: "Credit Rural Guinee",
    description: 'Une plateforme de crédit rural en Guinée.',
    url: 'https://creditruralguinee.org/',
    image: 'https://creditruralguinee.org/wp-content/uploads/2024/04/cropped-unnamed-removebg-preview-1.png',
    tags: ['Wordpress','PHP'],
  },
]

function Projects() {
  return (
    <section id="projets" className="py-24 px-6 bg-gradient-to-b from-blanc to-noir/5">
      <div className="max-w-5xl mx-auto">
        <h2
          className="text-3xl md:text-4xl font-bold tracking-tight mb-4 opacity-0 animate-fade-in-up"
          style={{ animationFillMode: 'forwards' }}
        >
          Projets
        </h2>
        <p
          className="text-gris mb-12 max-w-xl opacity-0 animate-fade-in-up"
          style={{ animationDelay: '0.15s', animationFillMode: 'forwards' }}
        >
          Quelques réalisations sur lesquelles j'ai travaillé.
        </p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <a
              key={i}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl overflow-hidden bg-blanc border border-noir/10 shadow-lg hover:shadow-xl hover:border-accent/30 transition-all duration-500 opacity-0 animate-scale-in hover:-translate-y-2"
              style={{
                animationDelay: `${0.2 + i * 0.15}s`,
                animationFillMode: 'forwards',
              }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.titre}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-noir/70 via-noir/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-blanc font-medium">Voir le projet →</span>
                </div>
                <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                  {project.tags?.map((tag, j) => (
                    <span
                      key={j}
                      className="px-2 py-1 rounded-md bg-blanc/90 text-noir text-xs font-medium backdrop-blur"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-noir group-hover:text-accent transition-colors duration-300">
                  {project.titre}
                </h3>
                <p className="text-gris mt-2 text-sm line-clamp-2">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
