// =============================================================================
// 🎵 Music Platform Demo - QElements Version
// =============================================================================
// This demo showcases the QElements parent-child styling system.
// It demonstrates how parent styles cascade to children with overrides.
// =============================================================================

import React, { useState } from 'react';
import { Analytics } from "@vercel/analytics/react"
import { QElementProvider } from '../qelements/QElementProvider';
import { QElementComponent } from '../qelements/QElementComponent';
import MusicPlatform from './App';
import CodeShowcase from './CodeShowcase';
import ParentChildDemo from './ParentChildDemo';

const MainApp = () => {
  const [activeView, setActiveView] = useState('music');

  return (
    <QElementProvider>
      <QElementComponent 
        elementId="root"
        style={{
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a0a0a 25%, #2d1b1b 50%, #1a0a0a 75%, #0a0a0a 100%)',
          minHeight: '100vh',
          color: '#ffffff',
          fontFamily: 'Arial, sans-serif',
          margin: 0,
          padding: 0,
          boxSizing: 'border-box',
          paddingTop: '100px'
        }}
      >
        {/* Navigation Bar */}
        <QElementComponent 
          elementId="navigation"
          as="nav"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            background: 'linear-gradient(135deg, #0a0a0a 0%, #1a0a0a 25%, #2d1b1b 50%, #1a0a0a 75%, #0a0a0a 100%)',
            borderBottom: '3px solid transparent',
            borderImage: 'linear-gradient(90deg, #dc2626, #ff6b6b, #dc2626) 1',
            padding: '1rem 2rem',
            boxShadow: '0 8px 32px rgba(220, 38, 38, 0.3), 0 2px 16px rgba(0,0,0,0.6)',
            backdropFilter: 'blur(10px)'
          }}
        >
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <div style={{ 
              background: 'linear-gradient(45deg, #dc2626, #ff6b6b)',
              borderRadius: '12px',
              padding: '8px 12px',
              boxShadow: '0 4px 12px rgba(220, 38, 38, 0.4)'
            }}>
              <h1 style={{ 
                color: '#ffffff', 
                margin: 0, 
                fontSize: '1.6rem', 
                fontWeight: '800',
                textShadow: '0 2px 4px rgba(0,0,0,0.5)'
              }}>
                🎵 SoundWave
              </h1>
            </div>
            <div style={{
              background: 'rgba(255,255,255,0.1)',
              borderRadius: '20px',
              padding: '6px 16px',
              border: '1px solid rgba(220, 38, 38, 0.3)'
            }}>
              <span style={{ 
                color: '#ff6b6b', 
                fontSize: '0.85rem', 
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                Music Platform Demo
              </span>
            </div>
          </div>
    
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
            <button
              onClick={() => setActiveView('music')}
              style={{
                background: activeView === 'music' 
                  ? 'linear-gradient(135deg, #dc2626 0%, #ff6b6b 50%, #dc2626 100%)' 
                  : 'rgba(255,255,255,0.05)',
                color: '#ffffff',
                border: activeView === 'music' 
                  ? '2px solid #ff6b6b' 
                  : '1px solid rgba(220, 38, 38, 0.3)',
                padding: '0.75rem 1.5rem',
                borderRadius: '12px',
                cursor: 'pointer',
                fontSize: '0.9rem',
                fontWeight: '600',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: activeView === 'music' 
                  ? '0 8px 25px rgba(220, 38, 38, 0.4), 0 4px 12px rgba(0,0,0,0.3)' 
                  : '0 2px 8px rgba(0,0,0,0.2)',
                transform: activeView === 'music' ? 'translateY(-2px)' : 'translateY(0)',
                backdropFilter: 'blur(10px)'
              }}
              onMouseEnter={(e) => {
                if (activeView !== 'music') {
                  e.currentTarget.style.background = 'rgba(220, 38, 38, 0.1)';
                  e.currentTarget.style.borderColor = '#ff6b6b';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(220, 38, 38, 0.2)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeView !== 'music') {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                  e.currentTarget.style.borderColor = 'rgba(220, 38, 38, 0.3)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.2)';
                }
              }}
            >
              🎵 Music Platform
            </button>
            <button
              onClick={() => setActiveView('code')}
              style={{
                background: activeView === 'code' 
                  ? 'linear-gradient(135deg, #dc2626 0%, #ff6b6b 50%, #dc2626 100%)' 
                  : 'rgba(255,255,255,0.05)',
                color: '#ffffff',
                border: activeView === 'code' 
                  ? '2px solid #ff6b6b' 
                  : '1px solid rgba(220, 38, 38, 0.3)',
                padding: '0.75rem 1.5rem',
                borderRadius: '12px',
                cursor: 'pointer',
                fontSize: '0.9rem',
                fontWeight: '600',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: activeView === 'code' 
                  ? '0 8px 25px rgba(220, 38, 38, 0.4), 0 4px 12px rgba(0,0,0,0.3)' 
                  : '0 2px 8px rgba(0,0,0,0.2)',
                transform: activeView === 'code' ? 'translateY(-2px)' : 'translateY(0)',
                backdropFilter: 'blur(10px)'
              }}
              onMouseEnter={(e) => {
                if (activeView !== 'code') {
                  e.currentTarget.style.background = 'rgba(220, 38, 38, 0.1)';
                  e.currentTarget.style.borderColor = '#ff6b6b';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(220, 38, 38, 0.2)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeView !== 'code') {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                  e.currentTarget.style.borderColor = 'rgba(220, 38, 38, 0.3)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.2)';
                }
              }}
            >
              💻 Code Showcase
            </button>
            <button
              onClick={() => setActiveView('demo')}
              style={{
                background: activeView === 'demo' 
                  ? 'linear-gradient(135deg, #dc2626 0%, #ff6b6b 50%, #dc2626 100%)' 
                  : 'rgba(255,255,255,0.05)',
                color: '#ffffff',
                border: activeView === 'demo' 
                  ? '2px solid #ff6b6b' 
                  : '1px solid rgba(220, 38, 38, 0.3)',
                padding: '0.75rem 1.5rem',
                borderRadius: '12px',
                cursor: 'pointer',
                fontSize: '0.9rem',
                fontWeight: '600',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: activeView === 'demo' 
                  ? '0 8px 25px rgba(220, 38, 38, 0.4), 0 4px 12px rgba(0,0,0,0.3)' 
                  : '0 2px 8px rgba(0,0,0,0.2)',
                transform: activeView === 'demo' ? 'translateY(-2px)' : 'translateY(0)',
                backdropFilter: 'blur(10px)'
              }}
              onMouseEnter={(e) => {
                if (activeView !== 'demo') {
                  e.currentTarget.style.background = 'rgba(220, 38, 38, 0.1)';
                  e.currentTarget.style.borderColor = '#ff6b6b';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(220, 38, 38, 0.2)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeView !== 'demo') {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                  e.currentTarget.style.borderColor = 'rgba(220, 38, 38, 0.3)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.2)';
                }
              }}
            >
              🎯 Parent-Child Demo
            </button>
          </div>
        </div>
        </QElementComponent>

        {/* Main Content */}
        <QElementComponent 
          elementId="content"
          style={{
            position: 'relative',
            zIndex: 1,
            padding: '2rem'
          }}
        >
        {/* Background Pattern */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 20% 80%, rgba(220, 38, 38, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 107, 107, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(220, 38, 38, 0.05) 0%, transparent 50%)
          `,
          pointerEvents: 'none',
          zIndex: 0
        }} />
        
        {/* Content */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          {activeView === 'music' && <MusicPlatform />}
          {activeView === 'code' && <CodeShowcase />}
          {activeView === 'demo' && <ParentChildDemo />}
        </div>
        </QElementComponent>
      </QElementComponent>
    </QElementProvider>
  );
};

export default MainApp;
