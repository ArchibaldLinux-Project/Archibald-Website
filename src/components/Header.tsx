import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { label: 'Features', href: '#features' },
    { label: 'Download', href: '#download' },
    { label: 'Documentation', href: '#docs' },
    { label: 'Community', href: '#community' },
  ]

  return (
    <header className="bg-slate-950 border-b border-slate-800">
      <nav className="section-container py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="text-3xl font-bold gradient-text">Ɑ</div>
          <span className="text-xl font-bold text-white">Archibald</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-slate-300 hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800 py-4">
          <div className="section-container space-y-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-slate-300 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
