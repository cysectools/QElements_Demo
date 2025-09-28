import React, { useEffect, useRef, ReactNode } from 'react';
import { useQElement, QElementStyle } from './QElementProvider';

// Export types and hooks for external use
export type { QElementStyle };
export { useQElement };

interface QElementComponentProps {
  elementId: string;
  as?: keyof JSX.IntrinsicElements;
  children?: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  [key: string]: any;
}

export const QElementComponent: React.FC<QElementComponentProps> = ({
  elementId,
  as: Component = 'div',
  children,
  className,
  style: inlineStyle,
  ...props
}) => {
  const { getComputedStyle, manager } = useQElement();
  const elementRef = useRef<HTMLElement>(null);

  // Get the computed style from the QElement system
  const computedStyle = getComputedStyle(elementId);

  // Convert QElement style to CSS style object
  const convertToCSSStyle = (qStyle: QElementStyle): React.CSSProperties => {
    const cssStyle: React.CSSProperties = {};
    
    Object.entries(qStyle).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        // Convert camelCase to kebab-case for CSS properties
        const cssKey = key.replace(/([A-Z])/g, '-$1').toLowerCase();
        (cssStyle as any)[cssKey] = value;
      }
    });

    return cssStyle;
  };

  // Merge computed style with inline style
  const finalStyle: any = {
    ...(computedStyle ? convertToCSSStyle(computedStyle) : {}),
    ...inlineStyle
  };

  // Update the element in the manager if it doesn't exist
  useEffect(() => {
    if (!manager.getElement(elementId)) {
      manager.createElement(elementId);
    }
  }, [elementId, manager]);

  return React.createElement(
    Component,
    {
      ref: elementRef,
      className,
      style: finalStyle,
      'data-qelement-id': elementId,
      ...props
    },
    children
  );
};

// Hook for managing QElement styles
export const useQElementStyle = (elementId: string) => {
  const { updateParentStyle, overrideChildStyle, resetChildOverrides, getComputedStyle } = useQElement();

  return {
    // Update parent style (affects all children)
    updateParent: (newStyle: Partial<QElementStyle>) => {
      updateParentStyle(elementId, newStyle);
    },
    // Override child style (only affects this element)
    override: (overrides: Partial<QElementStyle>) => {
      overrideChildStyle(elementId, overrides);
    },
    // Reset overrides to parent values
    reset: () => {
      resetChildOverrides(elementId);
    },
    // Get computed style
    getComputed: () => getComputedStyle(elementId)
  };
};
