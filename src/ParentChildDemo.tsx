// =============================================================================
// 👶 CHILD FILE - Legacy Parent-Child Demo Component
// =============================================================================
// This is a CHILD FILE that inherits styles from parent files.
// It only specifies child-specific overrides and inherits all base styles.
// Parent styles are defined in: ./parent/ParentStyles.ts
// =============================================================================

import React, { useState } from 'react';
import { QElementProvider } from '../qelements/QElementProvider';
import { QElementComponent } from '../qelements/QElementComponent';

const ParentChildDemo = () => {
  const [parentColor, setParentColor] = useState('#dc2626');
  const [childOverride, setChildOverride] = useState('#00ff00');

  return (
    <QElementProvider>
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <h2 style={{ color: '#ffffff', marginBottom: '20px' }}>
          🎯 QElements Parent-Child Override Demo
        </h2>
        
        {/* Parent Component */}
        <QElementComponent elementId="parent-container">
          <div style={{
            background: 'linear-gradient(145deg, #2a2a2a 0%, #1a1a1a 100%)',
            padding: '20px',
            borderRadius: '12px',
            border: '2px solid #dc2626',
            marginBottom: '20px'
          }}>
            <h3 style={{ color: '#ffffff', marginBottom: '15px' }}>
              👨‍👩‍👧‍👦 Parent Container
            </h3>
            <p style={{ color: '#cccccc', marginBottom: '15px' }}>
              This parent sets the base styles that children will inherit.
            </p>
            
            {/* Child Component - Inherits from parent */}
            <QElementComponent elementId="child-inherits">
              <div style={{
                background: 'rgba(255,255,255,0.1)',
                padding: '15px',
                borderRadius: '8px',
                border: '1px solid #666666',
                marginBottom: '10px'
              }}>
                <h4 style={{ color: '#ffffff', marginBottom: '10px' }}>
                  👶 Child (Inherits Parent Styles)
                </h4>
                <p style={{ color: '#cccccc' }}>
                  This child automatically inherits the parent's styling context.
                </p>
              </div>
            </QElementComponent>

            {/* Child Component - Overrides parent */}
            <QElementComponent elementId="child-overrides">
              <div style={{
                background: 'linear-gradient(45deg, #00ff00, #00cc00)', // Override parent background
                color: '#000000', // Override parent text color
                padding: '15px',
                borderRadius: '8px',
                border: '2px solid #00ff00', // Override parent border
                fontWeight: 'bold' // Add new property
              }}>
                <h4 style={{ color: '#000000', marginBottom: '10px' }}>
                  🎨 Child (Overrides Parent Styles)
                </h4>
                <p style={{ color: '#000000' }}>
                  This child overrides the parent's styles with its own values.
                </p>
              </div>
            </QElementComponent>

            {/* Interactive Override Demo */}
            <QElementComponent elementId="interactive-child">
              <div style={{
                background: 'rgba(255,255,255,0.1)',
                padding: '15px',
                borderRadius: '8px',
                border: '1px solid #666666',
                marginTop: '10px'
              }}>
                <h4 style={{ color: '#ffffff', marginBottom: '10px' }}>
                  🎛️ Interactive Override Demo
                </h4>
                <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                  <button
                    onClick={() => setParentColor(parentColor === '#dc2626' ? '#0066ff' : '#dc2626')}
                    style={{
                      background: '#dc2626',
                      color: 'white',
                      border: 'none',
                      padding: '8px 12px',
                      borderRadius: '4px',
                      cursor: 'pointer'
                    }}
                  >
                    Toggle Parent Color
                  </button>
                  <button
                    onClick={() => setChildOverride(childOverride === '#00ff00' ? '#ff6600' : '#00ff00')}
                    style={{
                      background: childOverride,
                      color: 'white',
                      border: 'none',
                      padding: '8px 12px',
                      borderRadius: '4px',
                      cursor: 'pointer'
                    }}
                  >
                    Toggle Child Override
                  </button>
                </div>
                <div style={{
                  background: childOverride,
                  color: 'white',
                  padding: '10px',
                  borderRadius: '4px',
                  textAlign: 'center'
                }}>
                  This child's background is dynamically overridden!
                </div>
              </div>
            </QElementComponent>
          </div>
        </QElementComponent>

        {/* Explanation */}
        <QElementComponent elementId="explanation">
          <div style={{
            background: 'linear-gradient(145deg, #1a1a1a 0%, #0f0f0f 100%)',
            padding: '20px',
            borderRadius: '12px',
            border: '1px solid #dc2626',
            marginTop: '20px'
          }}>
            <h3 style={{ color: '#dc2626', marginBottom: '15px' }}>
              💡 How Parent-Child Overrides Work:
            </h3>
            <ul style={{ color: '#ffffff', lineHeight: '1.6' }}>
              <li><strong>Parent Styles:</strong> Set the base styling context for all children</li>
              <li><strong>Child Inheritance:</strong> Children automatically inherit parent styles</li>
              <li><strong>Child Overrides:</strong> Children can override any parent property</li>
              <li><strong>Selective Override:</strong> Children only override what they specify</li>
              <li><strong>Dynamic Updates:</strong> Changes can be applied at runtime</li>
            </ul>
          </div>
        </QElementComponent>
      </div>
    </QElementProvider>
  );
};

export default ParentChildDemo;
