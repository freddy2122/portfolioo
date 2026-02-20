import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Ici tu peux brancher un service (Formspree, EmailJS, etc.) ou mailto
    setSent(true)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-24 px-6 bg-noir text-blanc">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 opacity-0 animate-fade-in-up" style={{ animationFillMode: 'forwards' }}>
          Contact
        </h2>
        <p className="text-blanc/70 mb-12 max-w-xl opacity-0 animate-fade-in-up" style={{ animationDelay: '0.15s', animationFillMode: 'forwards' }}>
          Une question ou un projet ? Envoyez-moi un message.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Formulaire */}
          <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-blanc/80 mb-2">
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-blanc/10 border border-blanc/20 text-blanc placeholder-blanc/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-blanc/80 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-blanc/10 border border-blanc/20 text-blanc placeholder-blanc/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                  placeholder="votre@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-blanc/80 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-blanc/10 border border-blanc/20 text-blanc placeholder-blanc/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
                  placeholder="Votre message..."
                />
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3 rounded-lg bg-accent text-blanc font-medium hover:bg-accent-light transition-all duration-300 hover:scale-[1.02]"
              >
                {sent ? 'Message envoyé ✓' : 'Envoyer'}
              </button>
            </form>
          </div>

          {/* Infos de contact */}
          <div className="opacity-0 animate-fade-in-up space-y-6" style={{ animationDelay: '0.35s', animationFillMode: 'forwards' }}>
            <p className="text-blanc/70">
              Vous pouvez aussi me joindre directement par email ou sur les réseaux.
            </p>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:votre@email.com"
                  className="inline-flex items-center gap-3 text-blanc/90 hover:text-accent-light transition-colors"
                >
                  <span className="w-10 h-10 rounded-lg bg-blanc/10 flex items-center justify-center text-accent">@</span>
                  akoutadeo@email.com
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/freddy2122"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-blanc/90 hover:text-accent-light transition-colors"
                >
                  <span className="w-10 h-10 rounded-lg bg-blanc/10 flex items-center justify-center text-accent">G</span>
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/deo-akouta-a44a1823b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-blanc/90 hover:text-accent-light transition-colors"
                >
                  <span className="w-10 h-10 rounded-lg bg-blanc/10 flex items-center justify-center text-accent">in</span>
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
