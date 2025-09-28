// =============================================================================
// 👶 CHILD FILE - QElement Tooltip Component
// =============================================================================
// This is a CHILD FILE that inherits styles from parent files.
// It only specifies child-specific overrides and inherits all base styles.
// Parent styles are defined in: ../parent/ParentStyles.ts
// =============================================================================

import React, { useState } from 'react';
import { QElementComponent } from 'qelements';

interface QElementTooltipProps {
  children: React.ReactNode;
  elementId: string;
  title: string;
  description: string;
  codeExample: string;
  beginnerExplanation: string;
  advancedExplanation: string;
  features: string[];
}

const QElementTooltip: React.FC<QElementTooltipProps> = ({
  children,
  elementId,
  title,
  description,
  codeExample,
  beginnerExplanation,
  advancedExplanation,
  features
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);

  return (
    <div
      style={{ position: 'relative', display: 'inline-block' }}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => {
        setIsVisible(false);
        setShowAdvanced(false);
      }}
    >
      {children}
      
      {isVisible && (
        <QElementComponent elementId={`tooltip-${elementId}`}>
          <div
            style={{
              position: 'absolute',
              top: '100%',
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 1000,
              width: '450px',
              maxWidth: '90vw',
              background: 'linear-gradient(145deg, #1a1a1a 0%, #0f0f0f 100%)',
              border: '2px solid transparent',
              borderImage: 'linear-gradient(45deg, #dc2626, #ff6b6b, #dc2626) 1',
              borderRadius: '16px',
              padding: '24px',
              boxShadow: '0 20px 60px rgba(0,0,0,0.9), 0 8px 32px rgba(220, 38, 38, 0.3), inset 0 1px 0 rgba(255,255,255,0.1)',
              color: '#ffffff',
              fontFamily: 'Monaco, Consolas, "Courier New", monospace',
              fontSize: '0.9rem',
              lineHeight: '1.5',
              backdropFilter: 'blur(20px)',
              animation: 'fadeInUp 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          >
            {/* Header */}
            <div style={{ 
              marginBottom: '20px', 
              borderBottom: '2px solid transparent',
              borderImage: 'linear-gradient(90deg, #dc2626, #ff6b6b, #dc2626) 1',
              paddingBottom: '15px' 
            }}>
              <h3 style={{ 
                color: '#ff6b6b', 
                margin: '0 0 8px 0', 
                fontSize: '1.2rem',
                fontWeight: '700',
                textShadow: '0 2px 4px rgba(0,0,0,0.5)'
              }}>
                🎯 {title}
              </h3>
              <p style={{ 
                color: '#e0e0e0', 
                margin: '0', 
                fontSize: '0.9rem',
                lineHeight: '1.4'
              }}>
                {description}
              </p>
            </div>

            {/* Code Example */}
            <div style={{ marginBottom: '15px' }}>
              <h4 style={{ color: '#ff8080', margin: '0 0 8px 0', fontSize: '0.9rem' }}>
                💻 Code Example:
              </h4>
              <div style={{
                background: '#000000',
                borderRadius: '6px',
                padding: '10px',
                border: '1px solid #333333',
                overflow: 'auto'
              }}>
                <pre style={{
                  color: '#00ff00',
                  fontSize: '0.8rem',
                  margin: '0',
                  whiteSpace: 'pre-wrap'
                }}>
                  <code>{codeExample}</code>
                </pre>
              </div>
            </div>

            {/* Explanation Toggle */}
            <div style={{ marginBottom: '15px' }}>
              <button
                onClick={() => setShowAdvanced(!showAdvanced)}
                style={{
                  background: showAdvanced 
                    ? 'linear-gradient(45deg, #dc2626, #ff4444)' 
                    : 'transparent',
                  color: '#ffffff',
                  border: '1px solid #dc2626',
                  padding: '6px 12px',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '0.8rem',
                  transition: 'all 0.3s ease'
                }}
              >
                {showAdvanced ? '👨‍💻 Advanced' : '👶 Beginner'} View
              </button>
            </div>

            {/* Explanation Content */}
            <div style={{ marginBottom: '15px' }}>
              <h4 style={{ color: '#ff8080', margin: '0 0 8px 0', fontSize: '0.9rem' }}>
                {showAdvanced ? '🚀 Advanced Explanation:' : '📚 Beginner Explanation:'}
              </h4>
              <p style={{ 
                color: '#ffffff', 
                margin: '0', 
                fontSize: '0.85rem',
                lineHeight: '1.5'
              }}>
                {showAdvanced ? advancedExplanation : beginnerExplanation}
              </p>
            </div>

            {/* Features List */}
            <div>
              <h4 style={{ color: '#ff8080', margin: '0 0 8px 0', fontSize: '0.9rem' }}>
                ✨ QElements Features:
              </h4>
              <ul style={{ 
                color: '#ffffff', 
                margin: '0', 
                paddingLeft: '20px',
                fontSize: '0.8rem'
              }}>
                {features.map((feature, index) => (
                  <li key={index} style={{ marginBottom: '4px' }}>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Arrow */}
            <div style={{
              position: 'absolute',
              top: '-8px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '0',
              height: '0',
              borderLeft: '8px solid transparent',
              borderRight: '8px solid transparent',
              borderBottom: '8px solid #dc2626'
            }} />
          </div>
        </QElementComponent>
      )}
    </div>
  );
};

export default QElementTooltip;
