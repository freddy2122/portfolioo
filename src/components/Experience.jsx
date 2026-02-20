const experiences = [
  {
    titre: 'Éducation ',
    entreprise: 'EIG Bénin(École Internationale de Graphisme)',
    periode: '2023 – présent',
    description: "Formation dans le centre de formation, dans le lycée et dans l'université",
  },
  {
    titre: 'Consultant informatique',
    entreprise: 'DFL(Digital Future Lab)',
    periode: '2024 – 2025',
    description: 'Gestionnaire des projets et supervision des stagiaires',
  },
  {
    titre: 'Developpeur Web',
    entreprise: 'Nextmux',
    periode: '2022 – 2024',
    description: 'Travail en équipe et en autonomie sur des projets web/mobile',
  },
  {
    titre: 'Formation en developpement web',
    entreprise: 'EIG(École Internationale de Graphisme)',
    periode: '2021-2022',
    description: 'Apprentissage du developpement web et des bases de la programmation',
  },
  // Ajoutez ou supprimez des entrées selon votre parcours
]

function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-noir text-blanc">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 opacity-0 animate-fade-in-up" style={{ animationFillMode: 'forwards' }}>
          Expérience
        </h2>
        <p className="text-blanc/60 mb-12 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.15s', animationFillMode: 'forwards' }}>
          Mon parcours et mes réalisations.
        </p>
        <ul className="space-y-12">
          {experiences.map((exp, i) => (
            <li
              key={i}
              className="border-l-2 border-accent/50 pl-6 opacity-0 animate-slide-in-right hover:border-accent-light transition-colors duration-300"
              style={{ animationDelay: `${0.25 + i * 0.15}s`, animationFillMode: 'forwards' }}
            >
              <p className="text-accent-light/90 text-sm uppercase tracking-wider mb-1">
                {exp.periode}
              </p>
              <h3 className="text-xl font-semibold text-blanc">{exp.titre}</h3>
              <p className="text-blanc/80 mb-2">{exp.entreprise}</p>
              <p className="text-blanc/70">{exp.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Experience
