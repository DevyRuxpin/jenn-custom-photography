import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Modern 2025 approach: Use proper TypeScript global declarations
declare global {
  interface Window {
    IntersectionObserver: typeof IntersectionObserver;
    ResizeObserver: typeof ResizeObserver;
    matchMedia: (query: string) => MediaQueryList;
    localStorage: Storage;
    sessionStorage: Storage;
    fetch: typeof fetch;
    performance: Performance;
  }
  
  namespace NodeJS {
    interface Global {
      IntersectionObserver: typeof IntersectionObserver;
      ResizeObserver: typeof ResizeObserver;
      localStorage: Storage;
      sessionStorage: Storage;
      fetch: typeof fetch;
      performance: Performance;
      URL: {
        createObjectURL: (object: any) => string;
        revokeObjectURL: (url: string) => void;
      };
    }
  }
}

// Mock IntersectionObserver with modern approach
const mockIntersectionObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

// Mock ResizeObserver with modern approach
const mockResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

// Set up global mocks
if (typeof window !== 'undefined') {
  window.IntersectionObserver = mockIntersectionObserver;
  window.ResizeObserver = mockResizeObserver;
} else {
  global.IntersectionObserver = mockIntersectionObserver;
  global.ResizeObserver = mockResizeObserver;
}

// Mock window.matchMedia with modern MediaQueryList interface
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // deprecated but still needed for some libraries
    removeListener: vi.fn(), // deprecated but still needed for some libraries
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

// Mock localStorage with proper Storage interface
const localStorageMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
  length: 0,
  key: vi.fn(),
};

// Mock sessionStorage with proper Storage interface
const sessionStorageMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
  length: 0,
  key: vi.fn(),
};

// Set up storage mocks
if (typeof window !== 'undefined') {
  Object.defineProperty(window, 'localStorage', {
    value: localStorageMock,
    writable: true,
  });
  Object.defineProperty(window, 'sessionStorage', {
    value: sessionStorageMock,
    writable: true,
  });
} else {
  global.localStorage = localStorageMock as any;
  global.sessionStorage = sessionStorageMock as any;
}

// Mock fetch with modern Response interface
global.fetch = vi.fn();

// Mock performance with modern Performance interface
const mockPerformance = {
  now: vi.fn(() => Date.now()),
  getEntriesByType: vi.fn(() => []),
  getEntriesByName: vi.fn(() => []),
  getEntries: vi.fn(() => []),
  mark: vi.fn(),
  measure: vi.fn(),
  clearMarks: vi.fn(),
  clearMeasures: vi.fn(),
  navigation: {} as PerformanceNavigation,
  timing: {} as PerformanceTiming,
  memory: {} as any,
};

if (typeof window !== 'undefined') {
  Object.defineProperty(window, 'performance', {
    value: mockPerformance,
    writable: true,
  });
} else {
  global.performance = mockPerformance as any;
}

// Mock URL with modern approach
const mockURL = {
  createObjectURL: vi.fn(() => 'mocked-url'),
  revokeObjectURL: vi.fn(),
};

if (typeof global !== 'undefined') {
  global.URL = mockURL as any;
}
