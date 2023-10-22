import { createGlobalStyle } from 'styled-components';
import 'modern-normalize/modern-normalize.css';

export const GlobalStyle = createGlobalStyle`
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

@font-face {
  font-family: 'Manrope';
  src: url('../src/assets/fonts/Manrope-Regular.ttf');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'Manrope';

  src: url('../src/assets/fonts/Manrope-Medium.ttf');
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: 'Manrope';
  src: url('../src/assets/fonts/Manrope-SemiBold.ttf');
  font-weight: 600;
  font-style: normal;

}

@font-face {
  font-display: swap;
  font-family: 'Manrope';
  src: url('../src/assets/fonts/Manrope-Bold.ttf');
  font-style: normal;
  font-weight: 700;
 
}


@font-face {
  font-family: 'Montserrat';
  src: url('../src/assets/fonts/Montserrat-Regular.ttf');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'Montserrat';
  src: url('../src/assets/fonts/Montserrat-SemiBold.ttf');
  font-weight: 500;
  font-style: normal;
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
