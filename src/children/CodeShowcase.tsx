// =============================================================================
// 💻 Code Showcase Component - QElements Version
// =============================================================================
// This component demonstrates QElements with code examples and explanations.
// It shows how the QElements system works with parent-child styling.
// =============================================================================

import React, { useState } from 'react';
import { QElementComponent } from '../qelements/QElementComponent';

const CodeShowcase = () => {
  const [activeSection, setActiveSection] = useState<'overview' | 'components' | 'styling' | 'interactions'>('overview');

  const codeSections = {
    overview: {
      title: 'QElements Overview',
      description: 'How QElements enables parent-child styling with React components',
      code: `// QElements Provider Setup
import { QElementProvider, QElementComponent } from '../qelements/QElementProvider';

const App = () => {
  return (
    <QElementProvider>
      <QElementComponent 
        elementId="root"
        style={{
          background: 'linear-gradient(135deg, #1a1a1a, #2d1b1b)',
          minHeight: '100vh',
          color: '#ffffff'
        }}
      >
        {/* All children inherit root styles */}
        <MusicPlatform />
      </QElementComponent>
    </QElementProvider>
  );
};`
    },
    components: {
      title: 'QElement Components',
      description: 'Using QElementComponent for automatic style inheritance',
      code: `// Child components inherit parent styles
const MusicPlatform = () => {
  return (
    <QElementComponent 
      elementId="music-platform"
      style={{
        // Only specify what's different from parent
        padding: '2rem',
        background: 'rgba(255,255,255,0.05)'
      }}
    >
      <QElementComponent 
        elementId="music-header"
        style={{
          // Inherits color from parent, adds specific styles
          borderRadius: '16px',
          padding: '2rem',
          border: '1px solid rgba(220, 38, 38, 0.2)'
        }}
      >
        <h2>🎵 Discover New Music</h2>
      </QElementComponent>
    </QElementComponent>
  );
};`
    },
    styling: {
      title: 'Parent-Child Styling',
      description: 'How parent styles cascade to children with QElements',
      code: `// Parent styles automatically cascade to children
const ParentComponent = () => {
  return (
    <QElementComponent 
      elementId="parent"
      style={{
        color: '#ff6b6b',        // Children inherit this
        fontSize: '1.2rem',       // Children inherit this
        fontFamily: 'Arial'      // Children inherit this
      }}
    >
      <QElementComponent 
        elementId="child"
        style={{
          // Only override what's different
          fontSize: '1.5rem',     // Override parent's fontSize
          fontWeight: 'bold'       // Add new property
          // color and fontFamily inherited from parent
        }}
      >
        Child inherits parent styles!
      </QElementComponent>
    </QElementComponent>
  );
};`
    },
    interactions: {
      title: 'Dynamic Styling',
      description: 'How QElements handles dynamic theme changes and overrides',
      code: `// Dynamic theme switching with QElements
const ThemeDemo = () => {
  const [theme, setTheme] = useState('default');
  
  const themes = {
    default: { primary: '#dc2626', secondary: '#ff6b6b' },
    blue: { primary: '#2563eb', secondary: '#3b82f6' }
  };

  return (
    <QElementComponent 
      elementId="theme-container"
      style={{
        // Dynamic styles based on theme
        background: \`linear-gradient(135deg, \${themes[theme].primary}, \${themes[theme].secondary})\`,
        color: '#ffffff'
      }}
    >
      <QElementComponent 
        elementId="theme-button"
        style={{
          // Inherits theme colors, adds button-specific styles
          padding: '0.75rem 1.5rem',
          borderRadius: '12px',
          cursor: 'pointer'
        }}
        onClick={() => setTheme(theme === 'default' ? 'blue' : 'default')}
      >
        Switch Theme
      </QElementComponent>
    </QElementComponent>
  );
};`
    }
  };

  return (
    <QElementComponent 
      elementId="code-showcase"
      style={{ 
        minHeight: '100vh', 
        background: 'linear-gradient(135deg, #1a1a1a 0%, #2d1b1b 50%, #1a1a1a 100%)',
        padding: '2rem',
        color: '#ffffff'
      }}
    >
      {/* Header */}
      <div style={{
        background: 'rgba(255,255,255,0.05)',
        borderRadius: '16px',
        padding: '2rem',
        marginBottom: '2rem',
        border: '1px solid rgba(220, 38, 38, 0.2)',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.3)'
      }}>
        <h2 style={{ 
          fontSize: '2rem', 
          fontWeight: '700', 
          margin: '0 0 1rem 0',
          background: 'linear-gradient(45deg, #ff6b6b, #dc2626)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          💻 Code Showcase
        </h2>
        <p style={{ 
          color: '#cccccc', 
          fontSize: '1.1rem', 
          margin: '0 0 2rem 0',
          lineHeight: '1.6'
        }}>
          Explore the code behind this music platform interface
        </p>
        
        {/* Section Navigation */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          {Object.keys(codeSections).map((section) => (
            <button
              key={section}
              onClick={() => setActiveSection(section as 'overview' | 'components' | 'styling' | 'interactions')}
              style={{
                background: activeSection === section 
                  ? 'linear-gradient(135deg, #dc2626, #ff6b6b)' 
                  : 'rgba(255,255,255,0.1)',
                color: '#ffffff',
                border: 'none',
                padding: '0.75rem 1.5rem',
                borderRadius: '12px',
                cursor: 'pointer',
                fontSize: '1rem',
                fontWeight: '600',
                transition: 'all 0.3s ease',
                textTransform: 'capitalize'
              }}
            >
              {section}
            </button>
          ))}
        </div>
      </div>

      {/* Code Content */}
      <div style={{
        background: 'rgba(255,255,255,0.05)',
        borderRadius: '16px',
        padding: '2rem',
        border: '1px solid rgba(220, 38, 38, 0.2)',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.3)'
      }}>
        <h3 style={{ 
          fontSize: '1.5rem', 
          marginBottom: '1rem',
          color: '#ff6b6b'
        }}>
          {codeSections[activeSection].title}
        </h3>
        
        <p style={{ 
          color: '#cccccc', 
          marginBottom: '2rem',
          lineHeight: '1.6'
        }}>
          {codeSections[activeSection].description}
        </p>

        {/* Code Block */}
        <div style={{
          background: '#0a0a0a',
          borderRadius: '12px',
          padding: '1.5rem',
          border: '1px solid rgba(220, 38, 38, 0.3)',
          overflow: 'auto',
          fontFamily: 'Monaco, Consolas, "Courier New", monospace',
          fontSize: '0.9rem',
          lineHeight: '1.5'
        }}>
          <pre style={{ 
            margin: 0, 
            color: '#ffffff',
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-word'
          }}>
            {codeSections[activeSection].code}
          </pre>
        </div>

        {/* Features List */}
        <div style={{ marginTop: '2rem' }}>
          <h4 style={{ 
            color: '#ff6b6b', 
            marginBottom: '1rem',
            fontSize: '1.1rem'
          }}>
            QElements Key Features:
          </h4>
          <ul style={{ 
            color: '#cccccc', 
            paddingLeft: '1.5rem',
            lineHeight: '1.6'
          }}>
            <li>🎯 <strong>Parent-Child Styling</strong> - Automatic style inheritance from parent to child components</li>
            <li>🎨 <strong>Theme Management</strong> - Dynamic theme switching with cascading style updates</li>
            <li>⚡ <strong>Style Overrides</strong> - Children can override specific parent styles while inheriting others</li>
            <li>🔗 <strong>Component Composition</strong> - React component-based styling system with full TypeScript support</li>
            <li>🎵 <strong>Real-time Updates</strong> - Style changes propagate instantly through the component tree</li>
            <li>🔄 <strong>State-driven Styling</strong> - Styles update automatically based on component state</li>
          </ul>
        </div>
      </div>
    </QElementComponent>
  );
};

export default CodeShowcase;