// =============================================================================
// 🎯 PARENT FILE - Parent Styles Provider
// =============================================================================
// This is a PARENT FILE that applies all parent styles to the QElements system.
// It wraps the QElementProvider and automatically applies parent styles.
// All child components will inherit from these parent styles.
// =============================================================================

import React, { useEffect } from 'react';
import { QElementProvider } from '../qelements/QElementProvider';
import { useQElement } from '../qelements/QElementComponent';
import { ParentStyles } from './ParentStyles';
interface ParentStylesProviderProps {
  children: React.ReactNode;
  theme?: 'default' | 'light' | 'blue' | 'purple';
}

export const ParentStylesProvider: React.FC<ParentStylesProviderProps> = ({ 
  children, 
  theme = 'default' 
}) => {
  const { updateParentStyle, createElement } = useQElement();

  useEffect(() => {
    // Apply root theme
    updateParentStyle('root', ParentStyles.rootTheme);
    
    // Apply navigation parent styles
    updateParentStyle('navigation', ParentStyles.navigationParent);
    
    // Apply button parent styles
    updateParentStyle('button', ParentStyles.buttonParent);
    
    // Apply card parent styles
    updateParentStyle('card', ParentStyles.cardParent);
    
    // Apply header parent styles
    updateParentStyle('header', ParentStyles.headerParent);
    
    // Apply content parent styles
    updateParentStyle('content', ParentStyles.contentParent);
    
    // Apply tooltip parent styles
    updateParentStyle('tooltip', ParentStyles.tooltipParent);
    
    // Apply footer parent styles
    updateParentStyle('footer', ParentStyles.footerParent);
    
    // Apply theme variation if specified
    if (theme !== 'default') {
      const themeStyles = ParentStyles[theme as keyof typeof ParentStyles];
      if (themeStyles) {
        updateParentStyle('root', themeStyles);
      }
    }
  }, [theme, updateParentStyle]);

  return <>{children}</>;
};

// =============================================================================
// WRAPPED PROVIDER - Combines QElementProvider with ParentStylesProvider
// =============================================================================
export const QElementsWithParents: React.FC<ParentStylesProviderProps> = ({ 
  children, 
  theme = 'default' 
}) => {
  return (
    <QElementProvider>
      <ParentStylesProvider theme={theme}>
        {children}
      </ParentStylesProvider>
    </QElementProvider>
  );
};

// =============================================================================
// HOOK FOR ACCESSING PARENT STYLES - For components that need to modify parents
// =============================================================================
export const useParentStyles = () => {
  const { updateParentStyle, getComputedStyle } = useQElement();
  
  return {
    updateParentStyle,
    getComputedStyle,
    
    // Convenience methods for common parent updates
    updateRootTheme: (styles: any) => updateParentStyle('root', styles),
    updateNavigationTheme: (styles: any) => updateParentStyle('navigation', styles),
    updateButtonTheme: (styles: any) => updateParentStyle('button', styles),
    updateCardTheme: (styles: any) => updateParentStyle('card', styles),
    updateHeaderTheme: (styles: any) => updateParentStyle('header', styles),
    updateContentTheme: (styles: any) => updateParentStyle('content', styles),
    updateTooltipTheme: (styles: any) => updateParentStyle('tooltip', styles),
    updateFooterTheme: (styles: any) => updateParentStyle('footer', styles),
  };
};
