import { createGlobalStyle } from 'styled-components';
import 'modern-normalize/modern-normalize.css';

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: 'Manrope' -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  background-color: var(--accent-color-bg-color);
  color: var(--accent-color-text-color);

  font-family: Manrope, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  font-style: normal;
}


code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

li {
  cursor: pointer;
}

:root {
  --accent-color-bg-color: #ffffff;
  --accent-color-text-color: #121417;
}

:root.dark {
  --accent-color-bg-color: #0f172a;
  --accent-color-text-color: #ffffff;
}

/* --------- Fonts ------------------------------------- */

/* Manrope-Regular 400 */
@font-face {
  font-display: swap;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 400;
  src: url('./assets/fonts/Manrope-Regular.ttf') format('ttf');
}

/* Manrope-Medium 500 */
@font-face {
  font-display: swap;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  src: url('./assets/fonts/Manrope-Medium.ttf') format('ttf');
}

/* Manrope-SemiBold 600 */
@font-face {
  font-display: swap;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 600;
  src: url('./assets/fonts/Manrope-SemiBold.ttf') format('ttf');
}

/* Manrope-Bold 700 */
@font-face {
  font-display: swap;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  src: url('./assets/fonts/Manrope-Bold.ttf') format('ttf');
}

/* Montserrat-Regular 400 */
@font-face {
  font-display: swap;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  src: url('./assets/fonts/Montserrat-Regular.ttf') format('ttf');
}

/* Montserrat-SemiBold 600 */
@font-face {
  font-display: swap;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  src: url('./assets/fonts/Montserrat-SemiBold.ttf') format('ttf');
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

/* chrome */
html::-webkit-scrollbar {
  display: none;
}

/* firefox */
html {
  scrollbar-width: none;
}

.no-scrollbar::-webkit-scrollbar {
  display: none;
}

body {
  margin: 0;

  background-color: var(--accent-color-bg-color);
  color: var(--accent-color-text-color);

  font-family: Manrope, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  font-style: normal;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
  padding: 0;
}

img {
  display: block;
  height: auto;
  max-width: 100%;
}

ul,
ol {
  padding: 0;
  margin: 0;
  list-style: none;
}
`;
