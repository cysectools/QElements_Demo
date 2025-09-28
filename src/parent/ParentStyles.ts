// =============================================================================
// 🎯 PARENT FILE - Main Parent Styles Definition
// =============================================================================
// This is the MAIN PARENT FILE that controls all styling for the entire app.
// All child components inherit from these parent styles.
// Change values here to affect ALL child components globally.
// =============================================================================

import { QElementStyle } from 'qelements';

export const ParentStyles = {
  // =============================================================================
  // ROOT THEME - Applied to the main QElementProvider
  // =============================================================================
  rootTheme: {
    // Global background and layout
    background: 'linear-gradient(135deg, #0a0a0a 0%, #1a0a0a 25%, #2d1b1b 50%, #1a0a0a 75%, #0a0a0a 100%)',
    minHeight: '100vh',
    color: '#ffffff',
    fontFamily: 'Arial, sans-serif',
    margin: '0',
    padding: '0',
    boxSizing: 'border-box',
    
    // Global typography
    fontSize: '16px',
    lineHeight: '1.6',
    fontWeight: '400',
    
    // Global spacing
    paddingTop: '100px', // Account for fixed header
  } as QElementStyle,

  // =============================================================================
  // NAVIGATION PARENT - Applied to all navigation elements
  // =============================================================================
  navigationParent: {
    // Navigation container styles
    position: 'fixed' as const,
    top: '0',
    left: '0',
    right: '0',
    zIndex: 1000,
    background: 'linear-gradient(135deg, #0a0a0a 0%, #1a0a0a 25%, #2d1b1b 50%, #1a0a0a 75%, #0a0a0a 100%)',
    borderBottom: '3px solid transparent',
    borderImage: 'linear-gradient(90deg, #dc2626, #ff6b6b, #dc2626) 1',
    padding: '1rem 2rem',
    boxShadow: '0 8px 32px rgba(220, 38, 38, 0.3), 0 2px 16px rgba(0,0,0,0.6)',
    backdropFilter: 'blur(10px)',
    
    // Navigation typography
    color: '#ffffff',
    fontSize: '1rem',
    fontWeight: '600',
  } as QElementStyle,

  // =============================================================================
  // BUTTON PARENT - Applied to all buttons
  // =============================================================================
  buttonParent: {
    // Base button styles
    border: '1px solid rgba(220, 38, 38, 0.3)',
    borderRadius: '12px',
    padding: '0.75rem 1.5rem',
    cursor: 'pointer',
    fontSize: '0.9rem',
    fontWeight: '600',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    backdropFilter: 'blur(10px)',
    
    // Default button state
    background: 'rgba(255,255,255,0.05)',
    color: '#ffffff',
    boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
    transform: 'translateY(0)',
  } as QElementStyle,

  // =============================================================================
  // CARD PARENT - Applied to all card-like containers
  // =============================================================================
  cardParent: {
    // Base card styles
    background: 'linear-gradient(145deg, #2a2a2a 0%, #1a1a1a 100%)',
    borderRadius: '12px',
    padding: '1.5rem',
    border: '1px solid #dc2626',
    boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
    transition: 'all 0.3s ease',
    
    // Card typography
    color: '#ffffff',
    fontSize: '0.9rem',
    lineHeight: '1.5',
  } as QElementStyle,

  // =============================================================================
  // HEADER PARENT - Applied to all headers
  // =============================================================================
  headerParent: {
    // Header container styles
    background: 'linear-gradient(90deg, #000000 0%, #2d1b1b 50%, #000000 100%)',
    borderBottom: '2px solid #dc2626',
    padding: '1rem 2rem',
    boxShadow: '0 4px 20px rgba(220, 38, 38, 0.3)',
    
    // Header typography
    color: '#ffffff',
    fontSize: '1.2rem',
    fontWeight: '700',
    textShadow: '0 2px 4px rgba(0,0,0,0.5)',
  } as QElementStyle,

  // =============================================================================
  // CONTENT PARENT - Applied to main content areas
  // =============================================================================
  contentParent: {
    // Content container styles
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '2rem',
    background: 'transparent',
    
    // Content typography
    color: '#e0e0e0',
    fontSize: '1rem',
    lineHeight: '1.6',
  } as QElementStyle,

  // =============================================================================
  // TOOLTIP PARENT - Applied to all tooltip containers
  // =============================================================================
  tooltipParent: {
    // Tooltip container styles
    background: 'linear-gradient(145deg, #1a1a1a 0%, #0f0f0f 100%)',
    border: '2px solid transparent',
    borderImage: 'linear-gradient(45deg, #dc2626, #ff6b6b, #dc2626) 1',
    borderRadius: '16px',
    padding: '24px',
    boxShadow: '0 20px 60px rgba(0,0,0,0.9), 0 8px 32px rgba(220, 38, 38, 0.3), inset 0 1px 0 rgba(255,255,255,0.1)',
    backdropFilter: 'blur(20px)',
    
    // Tooltip typography
    color: '#ffffff',
    fontFamily: 'Monaco, Consolas, "Courier New", monospace',
    fontSize: '0.9rem',
    lineHeight: '1.5',
  } as QElementStyle,

  // =============================================================================
  // FOOTER PARENT - Applied to all footers
  // =============================================================================
  footerParent: {
    // Footer container styles
    background: 'linear-gradient(90deg, #000000 0%, #2d1b1b 50%, #000000 100%)',
    borderTop: '2px solid #dc2626',
    padding: '2rem',
    marginTop: '3rem',
    textAlign: 'center' as const,
    
    // Footer typography
    color: '#ffffff',
    fontSize: '0.9rem',
    lineHeight: '1.4',
  } as QElementStyle,
};

// =============================================================================
// THEME VARIATIONS - Alternative themes you can switch between
// =============================================================================
export const ThemeVariations = {
  // Light theme variation
  light: {
    ...ParentStyles.rootTheme,
    background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 50%, #dee2e6 100%)',
    color: '#212529',
  } as QElementStyle,

  // Blue theme variation
  blue: {
    ...ParentStyles.rootTheme,
    background: 'linear-gradient(135deg, #0a0a2e 0%, #16213e 25%, #0f3460 50%, #16213e 75%, #0a0a2e 100%)',
    color: '#e3f2fd',
  } as QElementStyle,

  // Purple theme variation
  purple: {
    ...ParentStyles.rootTheme,
    background: 'linear-gradient(135deg, #2d1b69 0%, #4a148c 25%, #7b1fa2 50%, #4a148c 75%, #2d1b69 100%)',
    color: '#f3e5f5',
  } as QElementStyle,
};

// =============================================================================
// RESPONSIVE BREAKPOINTS - Applied globally
// =============================================================================
export const ResponsiveBreakpoints = {
  mobile: '768px',
  tablet: '1024px',
  desktop: '1200px',
};

// =============================================================================
// ANIMATION PRESETS - Applied globally
// =============================================================================
export const AnimationPresets = {
  fadeIn: {
    animation: 'fadeIn 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  },
  slideUp: {
    animation: 'slideUp 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  },
  bounce: {
    animation: 'bounce 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  },
};
