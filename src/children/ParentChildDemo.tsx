// =============================================================================
// 🎯 Parent-Child Demo Component - QElements Version
// =============================================================================
// This component demonstrates QElements parent-child styling system.
// It shows how themes cascade from parent to child components.
// =============================================================================

import React, { useState } from 'react';
import { QElementComponent, useQElementStyle } from '../qelements/QElementComponent';

const ParentChildDemo = () => {
  const [activeTheme, setActiveTheme] = useState<'default' | 'blue' | 'purple' | 'green'>('default');
  const [selectedComponent, setSelectedComponent] = useState<'button' | 'card' | 'input'>('button');

  const themes = {
    default: {
      name: 'Default Theme',
      colors: {
        primary: '#dc2626',
        secondary: '#ff6b6b',
        background: '#1a1a1a',
        text: '#ffffff'
      }
    },
    blue: {
      name: 'Blue Theme',
      colors: {
        primary: '#2563eb',
        secondary: '#3b82f6',
        background: '#0f172a',
        text: '#ffffff'
      }
    },
    purple: {
      name: 'Purple Theme',
      colors: {
        primary: '#7c3aed',
        secondary: '#a855f7',
        background: '#1e1b2e',
        text: '#ffffff'
      }
    },
    green: {
      name: 'Green Theme',
      colors: {
        primary: '#059669',
        secondary: '#10b981',
        background: '#064e3b',
        text: '#ffffff'
      }
    }
  };

  const components = {
    button: {
      name: 'QElement Button',
      description: 'QElement buttons that inherit parent theme colors and can override specific styles',
      example: (
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <button style={{
            background: `linear-gradient(135deg, ${themes[activeTheme].colors.primary}, ${themes[activeTheme].colors.secondary})`,
            color: themes[activeTheme].colors.text,
            border: 'none',
            padding: '0.75rem 1.5rem',
            borderRadius: '12px',
            cursor: 'pointer',
            fontSize: '1rem',
            fontWeight: '600',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
          }}>
            Primary Button
          </button>
          <button style={{
            background: 'rgba(255,255,255,0.1)',
            color: themes[activeTheme].colors.text,
            border: `1px solid ${themes[activeTheme].colors.primary}`,
            padding: '0.75rem 1.5rem',
            borderRadius: '12px',
            cursor: 'pointer',
            fontSize: '1rem',
            fontWeight: '600',
            transition: 'all 0.3s ease'
          }}>
            Secondary Button
          </button>
        </div>
      )
    },
    card: {
      name: 'QElement Card',
      description: 'QElement cards that automatically inherit parent theme and demonstrate style cascading',
      example: (
        <div style={{
          background: 'rgba(255,255,255,0.05)',
          borderRadius: '16px',
          padding: '1.5rem',
          border: `1px solid ${themes[activeTheme].colors.primary}20`,
          backdropFilter: 'blur(10px)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.3)'
        }}>
          <h4 style={{ 
            color: themes[activeTheme].colors.text,
            margin: '0 0 0.5rem 0',
            fontSize: '1.2rem'
          }}>
            Sample Card
          </h4>
          <p style={{ 
            color: '#cccccc',
            margin: '0 0 1rem 0',
            lineHeight: '1.6'
          }}>
            This card inherits the current theme colors and demonstrates
            consistent styling across components.
          </p>
          <div style={{
            background: `linear-gradient(45deg, ${themes[activeTheme].colors.primary}20, ${themes[activeTheme].colors.secondary}20)`,
            borderRadius: '8px',
            padding: '0.75rem',
            textAlign: 'center',
            color: themes[activeTheme].colors.primary,
            fontWeight: '600'
          }}>
            Theme: {themes[activeTheme].name}
          </div>
        </div>
      )
    },
    input: {
      name: 'QElement Input',
      description: 'QElement form inputs that inherit parent theme colors and focus states',
      example: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <input
            type="text"
            placeholder="Enter your name"
            style={{
              background: 'rgba(255,255,255,0.1)',
              border: `2px solid ${themes[activeTheme].colors.primary}40`,
              borderRadius: '12px',
              padding: '0.75rem 1rem',
              color: themes[activeTheme].colors.text,
              fontSize: '1rem',
              outline: 'none',
              transition: 'all 0.3s ease'
            }}
            onFocus={(e) => {
              e.target.style.borderColor = themes[activeTheme].colors.primary;
              e.target.style.boxShadow = `0 0 0 3px ${themes[activeTheme].colors.primary}20`;
            }}
            onBlur={(e) => {
              e.target.style.borderColor = `${themes[activeTheme].colors.primary}40`;
              e.target.style.boxShadow = 'none';
            }}
          />
          <textarea
            placeholder="Enter your message"
            rows={3}
            style={{
              background: 'rgba(255,255,255,0.1)',
              border: `2px solid ${themes[activeTheme].colors.primary}40`,
              borderRadius: '12px',
              padding: '0.75rem 1rem',
              color: themes[activeTheme].colors.text,
              fontSize: '1rem',
              outline: 'none',
              resize: 'vertical',
              transition: 'all 0.3s ease'
            }}
          />
        </div>
      )
    }
  };

  return (
    <QElementComponent 
      elementId="parent-child-demo"
      style={{ 
        minHeight: '100vh', 
        background: `linear-gradient(135deg, ${themes[activeTheme].colors.background}, #2d1b1b)`,
        padding: '2rem',
        color: themes[activeTheme].colors.text
      }}
    >
      {/* Header */}
      <div style={{
        background: 'rgba(255,255,255,0.05)',
        borderRadius: '16px',
        padding: '2rem',
        marginBottom: '2rem',
        border: `1px solid ${themes[activeTheme].colors.primary}20`,
        backdropFilter: 'blur(10px)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.3)'
      }}>
        <h2 style={{ 
          fontSize: '2rem', 
          fontWeight: '700', 
          margin: '0 0 1rem 0',
          background: `linear-gradient(45deg, ${themes[activeTheme].colors.secondary}, ${themes[activeTheme].colors.primary})`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          🎯 Parent-Child Demo
        </h2>
        <p style={{ 
          color: '#cccccc', 
          fontSize: '1.1rem', 
          margin: '0 0 2rem 0',
          lineHeight: '1.6'
        }}>
          Explore how QElements enables parent-child styling with automatic theme inheritance and style cascading
        </p>
        
        {/* Theme Selector */}
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ 
            color: themes[activeTheme].colors.text,
            marginBottom: '1rem',
            fontSize: '1.2rem'
          }}>
            Choose Theme:
          </h3>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {Object.keys(themes).map((theme) => (
              <button
                key={theme}
                onClick={() => setActiveTheme(theme as 'default' | 'blue' | 'purple' | 'green')}
                style={{
                  background: activeTheme === theme 
                    ? `linear-gradient(135deg, ${themes[theme as keyof typeof themes].colors.primary}, ${themes[theme as keyof typeof themes].colors.secondary})` 
                    : 'rgba(255,255,255,0.1)',
                  color: themes[activeTheme].colors.text,
                  border: activeTheme === theme 
                    ? `2px solid ${themes[theme as keyof typeof themes].colors.secondary}` 
                    : `1px solid ${themes[theme as keyof typeof themes].colors.primary}40`,
                  padding: '0.75rem 1.5rem',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  fontWeight: '600',
                  transition: 'all 0.3s ease'
                }}
              >
                {themes[theme as keyof typeof themes].name}
              </button>
            ))}
          </div>
        </div>

        {/* Component Selector */}
        <div>
          <h3 style={{ 
            color: themes[activeTheme].colors.text,
            marginBottom: '1rem',
            fontSize: '1.2rem'
          }}>
            Choose Component:
          </h3>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {Object.keys(components).map((component) => (
              <button
                key={component}
                onClick={() => setSelectedComponent(component as 'button' | 'card' | 'input')}
                style={{
                  background: selectedComponent === component 
                    ? `linear-gradient(135deg, ${themes[activeTheme].colors.primary}, ${themes[activeTheme].colors.secondary})` 
                    : 'rgba(255,255,255,0.1)',
                  color: themes[activeTheme].colors.text,
                  border: selectedComponent === component 
                    ? `2px solid ${themes[activeTheme].colors.secondary}` 
                    : `1px solid ${themes[activeTheme].colors.primary}40`,
                  padding: '0.75rem 1.5rem',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  fontWeight: '600',
                  transition: 'all 0.3s ease',
                  textTransform: 'capitalize'
                }}
              >
                {component}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Component Demo */}
      <div style={{
        background: 'rgba(255,255,255,0.05)',
        borderRadius: '16px',
        padding: '2rem',
        border: `1px solid ${themes[activeTheme].colors.primary}20`,
        backdropFilter: 'blur(10px)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.3)'
      }}>
        <h3 style={{ 
          fontSize: '1.5rem', 
          marginBottom: '1rem',
          color: themes[activeTheme].colors.secondary
        }}>
          {components[selectedComponent].name}
        </h3>
        
        <p style={{ 
          color: '#cccccc', 
          marginBottom: '2rem',
          lineHeight: '1.6'
        }}>
          {components[selectedComponent].description}
        </p>

        {/* Component Example */}
        <div style={{
          background: '#0a0a0a',
          borderRadius: '12px',
          padding: '2rem',
          border: `1px solid ${themes[activeTheme].colors.primary}30`
        }}>
          {components[selectedComponent].example}
        </div>

        {/* Code Example */}
        <div style={{ marginTop: '2rem' }}>
          <h4 style={{ 
            color: themes[activeTheme].colors.text,
            marginBottom: '1rem',
            fontSize: '1.1rem'
          }}>
            How QElements works:
          </h4>
          <div style={{
            background: '#0a0a0a',
            borderRadius: '12px',
            padding: '1.5rem',
            border: `1px solid ${themes[activeTheme].colors.primary}30`,
            fontFamily: 'Monaco, Consolas, "Courier New", monospace',
            fontSize: '0.9rem',
            lineHeight: '1.5',
            overflow: 'auto'
          }}>
            <pre style={{ 
              margin: 0, 
              color: '#ffffff',
              whiteSpace: 'pre-wrap'
            }}>
{`// QElements Parent-Child Styling Example
import { QElementProvider, QElementComponent } from '../qelements/QElementProvider';

const ThemeDemo = () => {
  const [activeTheme, setActiveTheme] = useState('${activeTheme}');
  
  return (
    <QElementProvider>
      <QElementComponent 
        elementId="theme-container"
        style={{
          // Parent styles cascade to all children
          color: '${themes[activeTheme].colors.text}',
          background: \`linear-gradient(135deg, \${themes[activeTheme].colors.background}, #2d1b1b)\`,
          fontFamily: 'Arial, sans-serif'
        }}
      >
        <QElementComponent 
          elementId="theme-button"
          style={{
            // Inherits color and fontFamily from parent
            // Only specify what's different
            background: \`linear-gradient(135deg, \${themes[activeTheme].colors.primary}, \${themes[activeTheme].colors.secondary})\`,
            padding: '0.75rem 1.5rem',
            borderRadius: '12px',
            cursor: 'pointer'
          }}
          onClick={() => setActiveTheme(activeTheme === 'default' ? 'blue' : 'default')}
        >
          Switch Theme
        </QElementComponent>
      </QElementComponent>
    </QElementProvider>
  );
};`}
            </pre>
          </div>
        </div>
      </div>
    </QElementComponent>
  );
};

export default ParentChildDemo;