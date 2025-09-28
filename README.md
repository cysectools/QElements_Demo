# 🎨 QElements Demo - Interactive Showcase

A comprehensive demonstration of the QElements package - a powerful React-based styling system that enables parent-child style inheritance with automatic theme management. Features interactive demos, code examples, and real-world applications.

## 🌐 Live Demo

**🚀 [View Live Demo on Vercel](https://q-elements-demo.vercel.app)**

Experience the QElements system in action with interactive demos, theme switching, and parent-child styling examples.

## ✨ QElements Features

- **🎯 Parent-Child Styling**: Automatic style inheritance from parent to child components
- **🎨 Dynamic Theme Switching**: Real-time theme changes with cascading style updates
- **⚡ Style Overrides**: Children can override specific parent styles while inheriting others
- **🔗 Component Composition**: React component-based styling system with full TypeScript support
- **🎵 Real-time Updates**: Style changes propagate instantly through the component tree
- **🔄 State-driven Styling**: Styles update automatically based on component state

## 🎯 Demo Components

- **🎵 Music Platform**: Real-world application using QElements
- **💻 Code Showcase**: QElements usage patterns and best practices
- **🎯 Parent-Child Demo**: Interactive theme switching and inheritance

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm start
   ```

3. **Open your browser:**
   Navigate to `http://localhost:3000`

## 📁 Project Structure

```
src/
├── qelements/           # QElements package source code
│   ├── index.ts         # Main exports
│   ├── QElementProvider.tsx
│   ├── QElementComponent.tsx
│   ├── QElementHooks.ts
│   └── ...
├── templates/           # Preloaded template components
│   ├── BasicTemplate.tsx
│   ├── ThemeTemplate.tsx
│   ├── ResponsiveTemplate.tsx
│   └── AnimationTemplate.tsx
├── App.tsx             # Main sandbox interface
└── index.tsx           # React entry point
```

## 🎨 Templates

### Basic Template
Demonstrates core parent-child relationships and style inheritance.

### Theme Template
Shows advanced theme management with dynamic color schemes and style switching.

### Responsive Template
Displays adaptive layouts and styles that respond to different screen sizes.

### Animation Template
Features smooth transitions and animations using the QElements animation system.

## 💻 Using QElements in Your Project

To use QElements in your own React/TypeScript project:

1. **Copy the QElements source:**
   ```bash
   cp -r src/qelements/ /path/to/your/project/src/
   ```

2. **Import and use:**
   ```tsx
   import { QElementProvider, QElementComponent, useQElementStyle } from './qelements';
   
   function App() {
     return (
       <QElementProvider>
         <QElementComponent elementId="my-element">
           <div>Your content here</div>
         </QElementComponent>
       </QElementProvider>
     );
   }
   ```

## 🔧 Development

- **Hot Reload**: Changes to templates are reflected immediately
- **Code View**: Toggle between live preview and source code
- **Template Switching**: Switch between different QElements features
- **Interactive Demos**: All templates include interactive controls

## 📚 Learn More

- **🌐 [Live Demo](https://q-elements-demo.vercel.app)** - Interactive QElements showcase
- **📦 [GitHub Repository](https://github.com/cysectools/QElements_Demo)** - Source code and examples
- **📖 [QElements Documentation](https://github.com/cysectools/QElement#readme)** - Complete documentation

## 🎉 Enjoy Building!

This sandbox provides a complete environment to explore, test, and understand QElements capabilities. Experiment with different templates, modify the code, and see how QElements can enhance your React applications!
