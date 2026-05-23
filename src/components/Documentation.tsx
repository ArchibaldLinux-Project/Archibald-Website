import { BookOpen, Terminal, Settings, AlertCircle } from 'lucide-react'

export default function Documentation() {
  const guides = [
    {
      icon: Terminal,
      title: 'Installation Guide',
      description: 'Step-by-step instructions for installing Archibald on your machine',
      link: '#'
    },
    {
      icon: Settings,
      title: 'Configuration',
      description: 'Configure your system after installation - network, locale, packages',
      link: '#'
    },
    {
      icon: BookOpen,
      title: 'User Manual',
      description: 'Complete guide to all Archibald features and tools',
      link: '#'
    },
    {
      icon: AlertCircle,
      title: 'Troubleshooting',
      description: 'Common issues and their solutions',
      link: '#'
    },
  ]

  return (
    <section id="docs" className="py-20 bg-slate-950">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Documentation
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Comprehensive guides and documentation to help you get started (Not out yet, stay tuned for updates!)
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {guides.map((guide, index) => {
            const Icon = guide.icon
            return (
              <a
                key={index}
                href={guide.link}
                className="bg-slate-900 rounded-lg border border-slate-700 p-8 hover:border-blue-500 hover:bg-slate-800 transition-all group"
              >
                <div className="mb-4 inline-block p-3 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                  <Icon size={28} className="text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {guide.title}
                </h3>
                <p className="text-slate-400">{guide.description}</p>
              </a>
            )
          })}
        </div>

        <div className="bg-slate-900 rounded-lg border border-slate-700 p-8">
          <h3 className="text-2xl font-bold text-white mb-6">Quick Start</h3>
          <div className="space-y-4 text-slate-300">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <p className="font-semibold text-white mb-1">Download the ISO</p>
                <p>Choose the ISO image for your architecture from the Download section.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <p className="font-semibold text-white mb-1">Create Installation Media</p>
                <p>Use Balena Etcher, Ventoy, or dd to create a bootable USB drive.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <p className="font-semibold text-white mb-1">Boot and Install</p>
                <p>Boot from the USB drive and follow the graphical installer.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                4
              </div>
              <div>
                <p className="font-semibold text-white mb-1">Post-Installation Setup</p>
                <p>Configure your system preferences, install additional software, and enjoy!</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-6">
          <div className="flex gap-3">
            <BookOpen size={24} className="text-emerald-400 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-white mb-2">Need More Help?</h4>
              <p className="text-slate-400 text-sm">
                Check out the full documentation at{' '}
                <a href="#" className="text-emerald-400 hover:text-emerald-300">
                  docs.archibald.linux
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
