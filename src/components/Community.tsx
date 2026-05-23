import { Users, Github, MessageCircle, Globe } from 'lucide-react'

export default function Community() {
  const communityChannels = [
    {
      icon: Github,
      name: 'GitHub',
      description: 'View source code, report issues, and contribute',
      link: 'https://github.com/archibald-linux',
      color: 'text-slate-300'
    },
    {
      icon: MessageCircle,
      name: 'Discord',
      description: 'Join our community chat for support and discussion',
      link: '#',
      color: 'text-indigo-400'
    },
    {
      icon: Globe,
      name: 'Forum',
      description: 'Community forums for detailed discussions and help',
      link: '#',
      color: 'text-blue-400'
    },
    {
      icon: Users,
      name: 'Contributors',
      description: 'Become a contributor and help improve Archibald',
      link: '#',
      color: 'text-cyan-400'
    },
  ]

  const contributors = [
    { name: 'RasperryPy', role: 'Core Developer', avatar: '👩‍💻' },
    { name: 'RasperryPy', role: 'Documentation', avatar: '👨‍📚' }
  ]

  return (
    <section id="community" className="py-20 bg-slate-900">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Join Our Community
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Connect with other Archibald users and contributors
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {communityChannels.map((channel, index) => {
            const Icon = channel.icon
            return (
              <a
                key={index}
                href={channel.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 rounded-lg border border-slate-700 p-6 hover:border-blue-500 hover:bg-slate-700 transition-all group"
              >
                <Icon size={32} className={`${channel.color} mb-3 group-hover:scale-110 transition-transform`} />
                <h3 className="font-bold text-white mb-2">{channel.name}</h3>
                <p className="text-sm text-slate-400">{channel.description}</p>
              </a>
            )
          })}
        </div>

        <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-lg border border-blue-500/30 p-12 mb-16">
          <h3 className="text-2xl font-bold text-white mb-4 text-center">Why Contribute?</h3>
          <p className="text-slate-300 text-center max-w-2xl mx-auto mb-8">
            Archibald is built by the community, for the community. Whether you're a developer, designer, writer, or just an enthusiast, there are many ways to contribute and help shape the future of Archibald Linux.
          </p>
          <div className="flex justify-center">
            <a href="#" className="btn-primary inline-flex items-center gap-2">
              View Contributing Guidelines
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-white mb-8">Meet the Team</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {contributors.map((contributor, index) => (
              <div key={index} className="bg-slate-800 rounded-lg border border-slate-700 p-6 text-center">
                <div className="text-5xl mb-3">{contributor.avatar}</div>
                <h4 className="font-bold text-white mb-1">{contributor.name}</h4>
                <p className="text-slate-400 text-sm">{contributor.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
