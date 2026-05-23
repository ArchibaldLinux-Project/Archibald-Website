import { Github, Mail, Globe } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Product: [
      { label: 'Download', href: '#download' },
      { label: 'Features', href: '#features' },
      { label: 'Documentation', href: '#docs' },
      { label: 'Changelog', href: '#' },
    ],
    Community: [
      { label: 'GitHub', href: 'https://github.com/archibald-linux' },
      { label: 'Discord', href: '#' },
      { label: 'Forum', href: '#' },
      { label: 'Report Issues', href: '#' },
    ],
    Legal: [
      { label: 'License', href: '#' },
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Code of Conduct', href: '#' },
    ],
    Resources: [
      { label: 'Wiki', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Press Kit', href: '#' },
      { label: 'Contact', href: '#' },
    ],
  }

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="section-container py-16">
        <div className="grid md:grid-cols-5 gap-12 mb-12">
          {/* Logo Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="text-3xl font-bold gradient-text">Ɑ</div>
              <span className="text-lg font-bold text-white">Archibald</span>
            </div>
            <p className="text-slate-400 text-sm">
              A modern, lightweight Linux distribution built on Arch Linux.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                <Mail size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                <Globe size={20} />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-white mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              © {currentYear} Archibald Linux Project. All rights reserved.
            </p>
            <p className="text-slate-500 text-sm">
              Built with passion for the Linux community
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
