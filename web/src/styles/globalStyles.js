import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root{
  --font-header: 'Zilla Slab', serif;
  --font-body: 'Raleway', sans-serif;
  --paddingW: 5vw;
  --paddingH: 5vh;
  --maxWidth: 40rem;
  --borderRadius: 0.125rem;
  --pageGap: 6rem;
  --color-primary: hsla(190,69%,28%,100%);
  --color-primary80: hsla(190,69%,28%,80%);
  --color-primary60: hsla(190,69%,28%,60%);
  --color-primary40: hsla(190,69%,28%,40%);
  --color-secondary: hsla(192,43%,50%,100%);
  --color-secBg20: hsla(192,43%,50%,20%);
  --color-tertiary: hsla(190,42%,65%,100%);
  --color-tertiarySolid: hsla(185,25%,90%,90%);
  --color-tertiaryBg20: hsla(190,42%,65%,20%);
  --color-tertiaryBg75: hsla(190,42%,65%,75%);
  --color-tertiaryBg90: hsla(190,42%,65%,90%);
  --color-fourth: hsla(35,100%,58%,100%);
  --color-greyBg: hsla(246, 26%, 98%,100%);
  --color-greyMid: hsla(24,22%,91%,100%);
  --color-title: hsla(190,85%,15%,100%);
  --color-body: hsla(0,0%,40%,100%);
  --color-white: hsla(0,0%,100%,100%);
  --color-whiteBg70: hsla(0,0%,100%,70%);
  --color-whiteBg20: hsla(0,0%,100%,20%);
  --mq-xsmall: 467px;
  --mq-small: 768px;
  --mq-mid: 991px;
  --mq-large: 1440px;
}

/* @font-face {
  font-family: "Zilla Slab, Raleway";
} */
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    /* stylelint-disable-next-line */
    font: inherit;
    vertical-align: baseline;
  }

  /* Added to Fix Footer to bottom of viewport */
  html,
  body {
    background: var(--color-greyBg);
    height: 100%;
    font-family: var(--font-body);
    
  }
  .siteRoot {
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
  .siteContent {
    display: flex;
    flex-direction: column;
    flex: 1 0 auto;
  }
  footer {
    width: 100%;
  }

  /* End Fix to Place Footer on Bottom of Viewport */

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  @media screen and (min-width: 35em) {
    html {
      margin-right: calc(-100vw + 100%);
      overflow-x: hidden;
    }
  }

  ol,
  ul,
  li {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote::before,
  blockquote::after,
  q::before,
  q::after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  * {
    box-sizing: border-box;
  }

  body {
    font-size: 100%;
    font-variant-ligatures: none;
    text-rendering: optimizeLegibility;
    text-shadow: rgba(0, 0, 0, 0.01) 0 0 1px;
    font-weight: 400;
    line-height: 2;
  }

  img {
    display: block;
    width: 100%;
    height: auto;
  }

  button,
  input,
  textarea,
  select {
    font-family: inherit;
    font-size: inherit;
    background: none;
    border: none;
    appearance: none;
    border-radius: 0;
    resize: none;
    &:invalid {
      box-shadow: none;
    }
    &:focus {
      outline: 5px auto #5e9ed6;
      outline: 5px auto -webkit-focus-ring-color;
    }
  }

  body:not(.user-is-tabbing) button:focus,
  body:not(.user-is-tabbing) input:focus,
  body:not(.user-is-tabbing) select:focus,
  body:not(.user-is-tabbing) textarea:focus,
  body:not(.user-is-tabbing) a:focus {
    outline: none;
  }

  h1,h2,h3,h4, h5{
    font-family: var(--font-header);
    line-height: 1.2;
    font-weight: 700;
    color: var(--color-title);
  }

  h1{
    
    max-width:50rem;
      font-size: 3rem;
    @media screen and (min-width: 768px){
    font-size: 3.5rem;
    }
  }
  h2{
      font-size: 2.5rem;
   
   @media screen and (min-width: 768px){
    font-size: 3.15rem;
    }
  }
  h3{
   
      font-size: 2rem;
   @media screen and (min-width: 768px){
    font-size: 2.75rem;
    }
  }

  h4{
   
      font-size: 1.5rem;
   @media screen and (min-width: 768px){
    font-size: 2.25rem;
    }
  }

  h5{
      font-size: 1.25rem;
   
   @media screen and (min-width: 768px){
    font-size: 1.5rem;
    }
  }

  h6{
    font-family: var(--font-body);
    font-size: 1rem;
    color: var(--color-body);
    font-weight: 600;
    
  }

  p{
    font-size: 0.875rem;
    color: var(--color-body);
    max-width: 40rem;
    margin:0;
  }

  a {
    text-decoration: none;
    color: var(--color-primary);

    &:active {
      color: var(--color-primary);
    }
    &:focus {
      color: var(--color-primary);
    }
  }
`;

export default GlobalStyle;
