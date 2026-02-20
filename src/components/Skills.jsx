const technologies = [
  'HTML',
  'CSS',
  'Bootstrap',
  'Tailwind CSS',
  'JavaScript',
  'React.js',
  'Angular',
  'Laravel',
  'Symfony',
  'Flutter',
  'React Native',
  'WordPress',
  'Wix',
]

function Skills() {
  return (
    <section id="competences" className="py-24 px-6 bg-gradient-to-b from-blanc to-noir/5">
      <div className="max-w-4xl mx-auto">
        <h2
          className="text-3xl md:text-4xl font-bold tracking-tight mb-4 opacity-0 animate-fade-in-up"
          style={{ animationFillMode: 'forwards' }}
        >
          Compétences
        </h2>
        <p
          className="text-gris mb-12 max-w-xl opacity-0 animate-fade-in-up"
          style={{ animationDelay: '0.15s', animationFillMode: 'forwards' }}
        >
          Langages et technologies que je maîtrise.
        </p>
        <ul className="flex flex-wrap gap-3 justify-center md:justify-start">
          {technologies.map((tech, i) => (
            <li
              key={tech}
              className="px-4 py-2 rounded-lg bg-noir/5 border border-noir/10 text-noir font-medium hover:bg-accent hover:text-blanc hover:border-accent transition-all duration-300 opacity-0 animate-scale-in"
              style={{
                animationDelay: `${0.2 + i * 0.05}s`,
                animationFillMode: 'forwards',
              }}
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Skills
