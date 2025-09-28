# 🎵 SoundWave - QElements Music Platform Demo

A stunning music sharing platform built with QElements - showcasing parent-child UI element management with cascading styles, themes, responsive design, and animations. Features a sleek black and red gradient theme with full music platform functionality.

## 🎯 Music Platform Features

- **🎵 Discover Artists**: Browse and discover new music artists with ratings and followers
- **⭐ Rate & Review**: Rate artists and share your musical preferences
- **🔥 Trending Music**: View trending songs and popular tracks
- **👤 User Profiles**: Personal profiles with activity tracking and stats
- **📱 Responsive Design**: Beautiful mobile and desktop experience
- **🎨 QElements Styling**: Black and red gradient theme with cascading styles

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

- [QElements GitHub Repository](https://github.com/cysectools/QElement)
- [QElements Documentation](https://github.com/cysectools/QElement#readme)

## 🎉 Enjoy Building!

This sandbox provides a complete environment to explore, test, and understand QElements capabilities. Experiment with different templates, modify the code, and see how QElements can enhance your React applications!
