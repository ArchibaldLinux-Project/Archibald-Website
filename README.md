# Archibald Linux Website

A modern, clean website for the Archibald Linux Distribution - a lightweight, user-friendly Arch Linux-based operating system.

## Features

- **Hero Section**: Eye-catching introduction with download and learn more buttons
- **Features Showcase**: Highlight key features like performance, security, and ease of use
- **System Requirements**: Display minimum and recommended specs
- **Download Section**: Multiple architecture options (x86_64, ARM64, i686)
- **Documentation**: Quick start guide and links to comprehensive docs
- **Community**: Links to GitHub, Discord, Forums, and contributor information
- **Responsive Design**: Mobile-first approach with Tailwind CSS

## Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **TanStack Router** - Client-side routing
- **Tailwind CSS** - Styling
- **Lucide React** - Icons

## Getting Started

### Prerequisites

- Node.js 16+ and npm/yarn/bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/archibald-linux/website.git
cd website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## Build

To build for production:

```bash
npm run build
```

The compiled files will be in the `dist/` directory.

## Project Structure

```
src/
├── components/        # Reusable React components
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Features.tsx
│   ├── SystemRequirements.tsx
│   ├── Downloads.tsx
│   ├── Documentation.tsx
│   ├── Community.tsx
│   └── Footer.tsx
├── pages/            # Page components
│   └── index.tsx
├── App.tsx           # Root app component
├── main.tsx          # Entry point
└── styles.css        # Global styles
```

## Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme:

```js
colors: {
  archblue: "#1793d1",    // Primary blue
  archgray: "#2a2a2a",    // Dark gray
}
```

### Content

Update component files in `src/components/` to modify:
- Download links and mirror URLs
- Feature descriptions
- System requirements
- Documentation links
- Community channels

## Contributing

We welcome contributions! Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the GPL-3.0 License - see the LICENSE file for details.

## Support

- 🐛 **Issues**: Report bugs on [GitHub Issues](https://github.com/archibald-linux/website/issues)
- 💬 **Discussions**: Join our [Discord community](https://discord.gg/archibald)
- 📖 **Docs**: Visit [docs.archibald.linux](https://docs.archibald.linux)

## Acknowledgments

- Based on [Arch Linux](https://archlinux.org)
- UI Components inspired by modern design patterns
- Icons from [Lucide](https://lucide.dev)

---

**Made with ❤️ for the Archibald Linux community**
