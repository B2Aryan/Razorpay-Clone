# Tailwind CSS Project

A modern, responsive website built with Tailwind CSS v3, featuring a beautiful design and comprehensive component library.

Visit the Website -https://b2aryan.github.io/Razorpay-Clone/

## Features

- 🎨 **Tailwind CSS v3** - Latest version with all modern features
- 📱 **Fully Responsive** - Mobile-first design approach
- 🚀 **Custom Components** - Reusable button, card, and input components
- 🎭 **Custom Animations** - Smooth transitions and hover effects
- 🎯 **Custom Color Palette** - Extended color system with primary, secondary, and accent colors
- 📦 **Build Process** - Optimized production builds with PostCSS and Autoprefixer

## Project Structure

```
├── index.html              # Main HTML file
├── src/
│   └── input.css          # Source CSS with Tailwind directives
├── dist/
│   └── output.css         # Compiled CSS (generated)
├── tailwind.config.js     # Tailwind configuration
├── postcss.config.js      # PostCSS configuration
├── package.json           # Dependencies and scripts
└── README.md              # This file
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone or download the project**
   ```bash
   git clone <repository-url>
   cd tailwind-css-project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Navigate to `index.html` in your browser
   - Or use a local server like `live-server` or `http-server`

### Build Commands

- **Development (with watch)**: `npm run dev`
- **Production build**: `npm run build:prod`
- **One-time build**: `npm run build`

## Customization

### Colors

The project includes a custom color palette that extends Tailwind's default colors:

- **Primary**: Blue shades (`primary-50` to `primary-950`)
- **Secondary**: Green shades (`secondary-50` to `secondary-950`)
- **Accent**: Yellow/Orange shades (`accent-50` to `accent-950`)

### Custom Components

The project includes several custom component classes:

- `.btn-primary` - Primary button with hover effects
- `.btn-secondary` - Secondary button with hover effects
- `.btn-outline` - Outline button with hover effects
- `.card` - Card component with shadow and hover effects
- `.input-field` - Styled input field with focus states

### Custom Utilities

- `.text-gradient` - Gradient text effect
- `.bg-pattern` - Subtle dot pattern background
- `.glass-effect` - Glassmorphism effect
- `.animate-float` - Floating animation

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Internet Explorer 11+ (with some limitations)

## Performance

- **Development**: Unoptimized CSS for faster builds
- **Production**: Minified and optimized CSS with vendor prefixes
- **File Size**: Optimized output with only used CSS classes

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Tailwind CSS Components](https://tailwindui.com/)
- [PostCSS Documentation](https://postcss.org/)
- [Autoprefixer](https://autoprefixer.github.io/)

## Support

If you encounter any issues or have questions:

1. Check the [Tailwind CSS documentation](https://tailwindcss.com/docs)
2. Search existing issues
3. Create a new issue with detailed information

---

Built with ❤️ using Tailwind CSS v3
