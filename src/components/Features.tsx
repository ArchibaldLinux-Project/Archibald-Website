import { Zap, Shield, Package, Users, Code, Cpu } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Minimal bloat. Maximum performance. Optimized for speed and responsiveness.'
    },
    {
      icon: Shield,
      title: 'Secure by Default',
      description: 'Built-in security tools and configurations to keep your system protected.'
    },
    {
      icon: Package,
      title: 'Arch Repositories',
      description: 'Access to the massive Arch Linux package repository via pacman.'
    },
    {
      icon: Users,
      title: 'User-Friendly',
      description: 'Simple graphical installer and intuitive tools for new Linux users.'
    },
    {
      icon: Code,
      title: 'Developer Ready',
      description: 'Pre-configured development tools and version control integration.'
    },
    {
      icon: Cpu,
      title: 'Lightweight',
      description: 'Minimal resource usage. Runs smoothly on older hardware too.'
    },
  ]

  return (
    <section id="features" className="py-20 bg-slate-900">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Choose Archibald?
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Built on the solid foundation of Arch Linux with a focus on user experience
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="bg-slate-800 rounded-lg p-8 border border-slate-700 hover:border-blue-500/50 transition-colors group"
              >
                <div className="mb-4 inline-block p-3 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                  <Icon size={28} className="text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-400">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
