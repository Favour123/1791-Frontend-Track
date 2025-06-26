
# Theme Switching Demo with CSS Custom Properties

A React-based web application demonstrating advanced theme switching functionality using CSS custom properties, featuring smooth transitions, system preference detection, and full accessibility compliance.

## 🌟 Features

### Theme Switching
- **Light/Dark/System modes** - Complete theme switching with system preference detection
- **Smooth transitions** - 300ms CSS transitions for seamless theme changes
- **Persistent preferences** - User theme choices saved to localStorage
- **Real-time updates** - Instant theme application without page refresh

### Accessibility & UX
- **WCAG 2.1 compliant** - Proper contrast ratios and accessibility features
- **Keyboard navigation** - Full keyboard support for all interactive elements
- **Screen reader friendly** - Comprehensive ARIA labels and semantic HTML
- **Reduced motion support** - Respects user's motion preferences
- **Focus indicators** - Clear visual focus states for better navigation

### Technical Implementation
- **CSS Custom Properties** - Modern theming approach with CSS variables
- **React Context API** - Centralized theme state management
- **TypeScript** - Full type safety and better developer experience
- **Tailwind CSS** - Utility-first CSS framework integration
- **shadcn/ui** - High-quality, accessible UI components

## 🚀 Live Demo

**URL**: https://lovable.dev/projects/62498930-1c20-4105-9bdc-9a6e97542032

## 🛠️ Technologies Used

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, CSS Custom Properties
- **UI Components**: shadcn/ui, Radix UI primitives
- **Icons**: Lucide React
- **State Management**: React Context API, TanStack Query
- **Routing**: React Router DOM

## 📁 Project Structure

```
src/
├── components/
│   ├── ThemeToggle.tsx          # Full theme menu (Light/Dark/System)
│   ├── SimpleThemeToggle.tsx    # Simple light/dark toggle
│   └── ui/                      # shadcn/ui components
├── hooks/
│   └── useTheme.tsx             # Theme context and logic
├── pages/
│   └── Index.tsx                # Main demo page
└── index.css                    # CSS custom properties & theme styles
```

## 🎯 Key Components

### ThemeToggle
Full-featured dropdown menu with Light, Dark, and System options
```typescript
import { ThemeToggle } from '@/components/ThemeToggle'
```

### SimpleThemeToggle  
Basic toggle button for Light/Dark switching
```typescript
import { SimpleThemeToggle } from '@/components/SimpleThemeToggle'
```

### useTheme Hook
Custom hook providing theme state and controls
```typescript
const { theme, setTheme, resolvedTheme, systemTheme } = useTheme()
```

## 🎨 Theme Implementation

The project uses CSS custom properties for theming:

- **Light theme** - Clean, modern light interface
- **Dark theme** - Eye-friendly dark interface  
- **System theme** - Automatically matches OS preference
- **Smooth transitions** - All theme changes animated
- **Consistent design** - Unified color system across all components

## 🔧 Development

### Prerequisites
- Node.js & npm installed ([install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating))

### Local Development
```bash
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to project directory
cd <YOUR_PROJECT_NAME>

# Install dependencies
npm install

# Start development server
npm run dev
```

### Deployment
Simply open [Lovable](https://lovable.dev/projects/62498930-1c20-4105-9bdc-9a6e97542032) and click Share → Publish.

## 🌐 Custom Domain
Connect your own domain by navigating to Project > Settings > Domains in Lovable.
[Learn more about custom domains](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)

## 📝 Usage Examples

### Basic Theme Toggle
```tsx
import { SimpleThemeToggle } from '@/components/SimpleThemeToggle'

function Header() {
  return (
    <header>
      <h1>My App</h1>
      <SimpleThemeToggle />
    </header>
  )
}
```

### Full Theme Menu
```tsx
import { ThemeToggle } from '@/components/ThemeToggle'

function Settings() {
  return (
    <div>
      <h2>Appearance</h2>
      <ThemeToggle />
    </div>
  )
}
```

### Custom Theme Logic
```tsx
import { useTheme } from '@/hooks/useTheme'

function CustomComponent() {
  const { resolvedTheme, setTheme } = useTheme()
  
  return (
    <div className={`themed-component ${resolvedTheme}`}>
      Current theme: {resolvedTheme}
      <button onClick={() => setTheme('dark')}>
        Switch to Dark
      </button>
    </div>
  )
}
```

## 🎯 Project Goals

This project demonstrates:
- Modern CSS theming techniques
- Accessible UI component design  
- React best practices and patterns
- TypeScript integration
- Responsive design principles
- Performance optimization

## 🤝 Contributing

This project was built with [Lovable](https://lovable.dev) - an AI-powered web development platform. 

To contribute:
1. Make changes in the Lovable editor
2. Changes automatically sync to GitHub
3. Or clone the repo and push changes back

## 📄 License

This project is open source and available under the MIT License.

---

Built with ❤️ using [Lovable](https://lovable.dev)
