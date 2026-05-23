import { Download, CheckCircle2, HardDrive } from 'lucide-react'

export default function Downloads() {
  const downloads = [
    {
      name: 'x86_64',
      description: '64-bit for modern computers',
      size: '1.8 GB',
      checksum: 'SHA256: a1b2c3d4e5f6...',
      filename: 'archibald-1.0.0-x86_64.iso'
    },
    {
      name: 'ARM64',
      description: 'For ARM-based systems (Raspberry Pi, etc.)',
      size: '1.5 GB',
      checksum: 'SHA256: f6e5d4c3b2a1...',
      filename: 'Not out yet. Stay tuned for updates!'
    },
    {
      name: 'i686',
      description: '32-bit for older hardware',
      size: '1.6 GB',
      checksum: 'SHA256: x9y8z7w6v5u4...',
      filename: 'Not out yet. Stay tuned for updates!'
    },
  ]

  const mirrors = [
    { name: 'Primary Mirror', url: 'https://mirror.archibald.linux/iso/' },
    { name: 'CDN Mirror', url: 'https://cdn.archibald.linux/iso/' },
    { name: 'EU Mirror', url: 'https://eu.archibald.linux/iso/' },
  ]

  return (
    <section id="download" className="py-20 bg-slate-950">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Download Archibald
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Available for multiple architectures. Choose your preferred version below.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {downloads.map((download, index) => (
            <div
              key={index}
              className="bg-slate-900 rounded-lg border border-slate-700 p-8 flex flex-col"
            >
              <h3 className="text-2xl font-bold text-white mb-2">{download.name}</h3>
              <p className="text-slate-400 mb-4 flex-1">{download.description}</p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-slate-300">
                  <HardDrive size={16} />
                  <span>{download.size}</span>
                </div>
                <div className="text-xs text-slate-500 break-all">{download.checksum}</div>
              </div>

              <button className="btn-primary w-full inline-flex items-center justify-center gap-2">
                <Download size={18} />
                Download
              </button>

              <div className="text-xs text-slate-500 mt-3 text-center">{download.filename}</div>
            </div>
          ))}
        </div>

        <div className="bg-slate-900 rounded-lg border border-slate-700 p-8">
          <h3 className="text-xl font-bold text-white mb-4">Download Mirrors</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {mirrors.map((mirror, index) => (
              <a
                key={index}
                href={mirror.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-slate-800 rounded border border-slate-600 hover:border-blue-500 transition-colors"
              >
                <p className="font-semibold text-white mb-1">{mirror.name}</p>
                <p className="text-xs text-slate-400 truncate">{mirror.url}</p>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 bg-blue-500/10 border border-blue-500/30 rounded-lg p-6">
          <div className="flex gap-3">
            <CheckCircle2 size={24} className="text-blue-400 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-semibold text-white mb-2">Verify Your Download</h4>
              <p className="text-slate-400 text-sm">
                We recommend verifying your download using the provided SHA256 checksums. This ensures the integrity of your download.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
