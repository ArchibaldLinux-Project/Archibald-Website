import { ArrowRight, Download } from 'lucide-react'

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-slate-800 to-slate-900 py-20 md:py-32">
      <div className="section-container text-center">
        <div className="inline-block mb-6">
          <span className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-semibold border border-blue-500/30">
            Simple. Fast. Reliable.
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Archibald Linux
        </h1>

        <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-4">
          When Arch Linux became begginer freindly (we all love tux)
        </p>

        <p className="text-slate-400 max-w-2xl mx-auto mb-12">
          Experience the power of Arch Linux with a polished, beginner-friendly installer and pre-configured tools for an optimal out-of-the-box experience.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="#download"
            className="btn-primary inline-flex items-center justify-center gap-2 group"
          >
            <Download size={20} />
            Download Now
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#docs"
            className="btn-secondary inline-flex items-center justify-center gap-2"
          >
            Learn More
          </a>
        </div>

        <div className="text-slate-400 text-sm">
          Latest Version: <span className="text-white font-semibold">1.0.0</span> • Free & Open Source
        </div>
      </div>
    </section>
  )
}
