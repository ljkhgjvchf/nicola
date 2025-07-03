/// <reference types="vite/client" />

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': {
        url: string;
      };
    }
  }
}
