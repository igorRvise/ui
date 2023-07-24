import type { RviseTheme } from './index';
import '@emotion/react';

declare module '@emotion/react' {
  export type Theme = RviseTheme;
}
