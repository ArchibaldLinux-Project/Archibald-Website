import { Cpu, HardDrive, Zap } from 'lucide-react'

export default function SystemRequirements() {
  const requirements = {
    minimum: [
      { label: 'CPU', value: 'Dual-core 1.8 GHz' },
      { label: 'RAM', value: '512 MB' },
      { label: 'Storage', value: '10 GB free space' },
      { label: 'Display', value: 'VGA (1024x768)' },
    ],
    recommended: [
      { label: 'CPU', value: 'Quad-core 2.4 GHz or better' },
      { label: 'RAM', value: '4 GB or more' },
      { label: 'Storage', value: '40 GB SSD' },
      { label: 'Display', value: 'Full HD (1920x1080) or higher' },
    ]
  }

  return (
    <section className="py-20 bg-slate-900">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            System Requirements
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Archibald is designed to run on a wide range of hardware
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Minimum Requirements */}
          <div className="bg-slate-800 rounded-lg border border-slate-700 p-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Zap className="text-yellow-400" size={24} />
              Minimum Requirements
            </h3>
            <ul className="space-y-4">
              {requirements.minimum.map((req, index) => (
                <li key={index} className="flex justify-between items-center">
                  <span className="text-slate-300">{req.label}</span>
                  <span className="text-white font-semibold">{req.value}</span>
                </li>
              ))}
            </ul>
            <p className="text-slate-500 text-sm mt-6">
              These are the bare minimum specs for basic usage. Performance may be limited.
            </p>
          </div>

          {/* Recommended Requirements */}
          <div className="bg-blue-900/30 rounded-lg border border-blue-500/50 p-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Cpu className="text-blue-400" size={24} />
              Recommended Specs
            </h3>
            <ul className="space-y-4">
              {requirements.recommended.map((req, index) => (
                <li key={index} className="flex justify-between items-center">
                  <span className="text-slate-300">{req.label}</span>
                  <span className="text-white font-semibold">{req.value}</span>
                </li>
              ))}
            </ul>
            <p className="text-slate-300 text-sm mt-6">
              Recommended for the best experience and smooth multitasking.
            </p>
          </div>
        </div>

        <div className="mt-12 bg-slate-800 rounded-lg border border-slate-700 p-8">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <HardDrive size={20} />
            Storage Partitioning
          </h3>
          <p className="text-slate-400 mb-4">
            We recommend the following partition layout for optimal performance:
          </p>
          <div className="bg-slate-900 rounded p-4 space-y-2 text-sm text-slate-300 font-mono">
            <div>/boot/efi → 512 MB (EFI)</div>
            <div>/boot → 1 GB (Linux boot)</div>
            <div>/ → 20+ GB (Root filesystem)</div>
            <div>/home → Remaining space (User data)</div>
          </div>
        </div>
      </div>
    </section>
  )
}
