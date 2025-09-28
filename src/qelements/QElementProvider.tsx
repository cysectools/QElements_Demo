import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';

// QElement Style Interface
export interface QElementStyle {
  // Layout
  padding?: number | string;
  margin?: number | string;
  width?: number | string;
  height?: number | string;
  minWidth?: number | string;
  minHeight?: number | string;
  maxWidth?: number | string;
  maxHeight?: number | string;
  
  // Positioning
  position?: 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky';
  top?: number | string;
  right?: number | string;
  bottom?: number | string;
  left?: number | string;
  zIndex?: number;
  
  // Display & Flexbox
  display?: 'block' | 'inline' | 'inline-block' | 'flex' | 'grid' | 'none';
  flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  flex?: number | string;
  flexGrow?: number;
  flexShrink?: number;
  flexBasis?: number | string;
  gap?: number | string;
  
  // Colors & Background
  backgroundColor?: string;
  color?: string;
  backgroundImage?: string;
  backgroundSize?: string;
  backgroundPosition?: string;
  backgroundRepeat?: string;
  
  // Typography
  fontSize?: number | string;
  fontWeight?: number | string;
  fontFamily?: string;
  textAlign?: 'left' | 'center' | 'right' | 'justify';
  textDecoration?: string;
  textTransform?: 'none' | 'uppercase' | 'lowercase' | 'capitalize';
  lineHeight?: number | string;
  letterSpacing?: number | string;
  
  // Borders
  border?: string;
  borderTop?: string;
  borderRight?: string;
  borderBottom?: string;
  borderLeft?: string;
  borderRadius?: number | string;
  borderWidth?: number | string;
  borderStyle?: string;
  borderColor?: string;
  
  // Effects
  boxShadow?: string;
  opacity?: number;
  transform?: string;
  transition?: string;
  cursor?: string;
  userSelect?: 'none' | 'auto' | 'text' | 'all';
  
  // Spacing
  paddingTop?: number | string;
  paddingRight?: number | string;
  paddingBottom?: number | string;
  paddingLeft?: number | string;
  marginTop?: number | string;
  marginRight?: number | string;
  marginBottom?: number | string;
  marginLeft?: number | string;
}

// QElement Class
export class QElement {
  public id: string;
  public style: QElementStyle;
  public parent: QElement | null = null;
  public children: QElement[] = [];
  public overrides: Partial<QElementStyle> = {};

  constructor(id: string, style: QElementStyle = {}) {
    this.id = id;
    this.style = style;
  }

  addChild(child: QElement): void {
    child.parent = this;
    this.children.push(child);
  }

  removeChild(child: QElement): void {
    const index = this.children.indexOf(child);
    if (index > -1) {
      this.children.splice(index, 1);
      child.parent = null;
    }
  }

  getComputedStyle(): QElementStyle {
    const computed: QElementStyle = { ...this.style };
    
    // Apply parent styles
    if (this.parent) {
      const parentComputed = this.parent.getComputedStyle();
      Object.assign(computed, parentComputed);
    }
    
    // Apply overrides
    Object.assign(computed, this.overrides);
    
    return computed;
  }

  updateStyle(newStyle: Partial<QElementStyle>): void {
    Object.assign(this.style, newStyle);
  }

  overrideStyle(overrides: Partial<QElementStyle>): void {
    Object.assign(this.overrides, overrides);
  }

  resetOverrides(): void {
    this.overrides = {};
  }
}

// QElement Manager
export class QElementManager {
  private _elements: Map<string, QElement> = new Map();
  private _rootElements: QElement[] = [];

  register(element: QElement): void {
    this._elements.set(element.id, element);
    if (!element.parent) {
      this._rootElements.push(element);
    }
  }

  unregister(id: string): void {
    const element = this._elements.get(id);
    if (element) {
      if (element.parent) {
        element.parent.removeChild(element);
      } else {
        const index = this._rootElements.indexOf(element);
        if (index > -1) {
          this._rootElements.splice(index, 1);
        }
      }
      this._elements.delete(id);
    }
  }

  getElement(id: string): QElement | null {
    return this._elements.get(id) || null;
  }

  createElement(id: string, style: QElementStyle = {}): QElement {
    const element = new QElement(id, style);
    this.register(element);
    return element;
  }

  updateParentStyle(id: string, newStyle: Partial<QElementStyle>): void {
    const element = this._elements.get(id);
    if (element) {
      element.updateStyle(newStyle);
    }
  }

  overrideChildStyle(id: string, overrides: Partial<QElementStyle>): void {
    const element = this._elements.get(id);
    if (element) {
      element.overrideStyle(overrides);
    }
  }

  resetChildOverrides(id: string): void {
    const element = this._elements.get(id);
    if (element) {
      element.resetOverrides();
    }
  }

  getComputedStyle(id: string): QElementStyle | null {
    const element = this._elements.get(id);
    return element ? element.getComputedStyle() : null;
  }
}

// Context Types
interface QElementContextType {
  manager: QElementManager;
  createElement: (id: string, style?: QElementStyle) => QElement;
  updateParentStyle: (id: string, newStyle: Partial<QElementStyle>) => void;
  overrideChildStyle: (id: string, overrides: Partial<QElementStyle>) => void;
  resetChildOverrides: (id: string) => void;
  getComputedStyle: (id: string) => QElementStyle | null;
  forceUpdate: () => void;
}

const QElementContext = createContext<QElementContextType | null>(null);

interface QElementProviderProps {
  children: ReactNode;
}

export const QElementProvider: React.FC<QElementProviderProps> = ({ children }) => {
  const [manager] = useState(() => new QElementManager());
  const [, forceUpdate] = useState({});

  const triggerUpdate = useCallback(() => {
    forceUpdate({});
  }, []);

  const createElement = useCallback((id: string, style: QElementStyle = {}) => {
    const element = manager.createElement(id, style);
    triggerUpdate();
    return element;
  }, [manager, triggerUpdate]);

  const updateParentStyle = useCallback((id: string, newStyle: Partial<QElementStyle>) => {
    manager.updateParentStyle(id, newStyle);
    triggerUpdate();
  }, [manager, triggerUpdate]);

  const overrideChildStyle = useCallback((id: string, overrides: Partial<QElementStyle>) => {
    manager.overrideChildStyle(id, overrides);
    triggerUpdate();
  }, [manager, triggerUpdate]);

  const resetChildOverrides = useCallback((id: string) => {
    manager.resetChildOverrides(id);
    triggerUpdate();
  }, [manager, triggerUpdate]);

  const getComputedStyle = useCallback((id: string) => {
    return manager.getComputedStyle(id);
  }, [manager]);

  const contextValue: QElementContextType = {
    manager,
    createElement,
    updateParentStyle,
    overrideChildStyle,
    resetChildOverrides,
    getComputedStyle,
    forceUpdate: triggerUpdate
  };

  return (
    <QElementContext.Provider value={contextValue}>
      {children}
    </QElementContext.Provider>
  );
};

export const useQElement = (): QElementContextType => {
  const context = useContext(QElementContext);
  if (!context) {
    throw new Error('useQElement must be used within a QElementProvider');
  }
  return context;
};
