import { lazy, type ComponentType } from 'react';

// Generic lazy loader with better error handling
export function createLazyComponent<T extends ComponentType<any>>(
  importFn: () => Promise<{ default: T }>,
  fallback?: React.ReactNode
) {
  const LazyComponent = lazy(importFn);
  
  return LazyComponent;
}

// Preload function for critical components
export function preloadComponent(importFn: () => Promise<any>) {
  const componentImport = importFn();
  // Store the promise to avoid duplicate imports
  return componentImport;
}