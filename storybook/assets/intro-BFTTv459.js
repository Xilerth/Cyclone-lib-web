import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{A as t,M as n,a as r,j as i,o as a}from"./blocks-wp3rbIx-.js";function o(e){let t={code:`code`,em:`em`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,...i(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`Introducción`}),`
`,(0,c.jsx)(t.h1,{id:`cyclone`,children:`Cyclone`}),`
`,(0,c.jsxs)(t.p,{children:[`Librería de componentes escrita una vez como `,(0,c.jsx)(t.strong,{children:`Web Components`}),` (Stencil, Shadow DOM) con wrappers
nativos para `,(0,c.jsx)(t.strong,{children:`Angular`}),` (`,(0,c.jsx)(t.code,{children:`@cyclone-lib/angular`}),`) y `,(0,c.jsx)(t.strong,{children:`React`}),` (`,(0,c.jsx)(t.code,{children:`@cyclone-lib/react`}),`).`]}),`
`,(0,c.jsx)(t.h2,{id:`tokens-y-personalización`,children:`Tokens y personalización`}),`
`,(0,c.jsxs)(t.p,{children:[`Toda la apariencia sale de `,(0,c.jsx)(t.strong,{children:`design tokens`}),` generados desde un JSON (`,(0,c.jsx)(t.code,{children:`@cyclone-lib/tokens`}),`):`]}),`
`,(0,c.jsxs)(t.p,{children:[`| Capa | Ejemplo | Se define en |
|---|---|---|
| Primitivos | `,(0,c.jsx)(t.code,{children:`--cy-palette-primary-600`}),`, `,(0,c.jsx)(t.code,{children:`--cy-space-4`}),`, `,(0,c.jsx)(t.code,{children:`--cy-radius-md`}),` | Generados desde la configuración (colores semilla → escalas OKLCH) |
| Semánticos (claro/oscuro) | `,(0,c.jsx)(t.code,{children:`--cy-color-primary-solid`}),`, `,(0,c.jsx)(t.code,{children:`--cy-color-bg-surface`}),` | Generados; referencian primitivos |
| Componente | `,(0,c.jsx)(t.code,{children:`--cy-button-radius`}),`, `,(0,c.jsx)(t.code,{children:`--cy-input-border-focus`}),` | JSON por componente; referencian semánticos |`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
  "$schema": "./node_modules/@cyclone-lib/tokens/theme.schema.json",
  "colors": { "primary": "#7c3aed" },
  "radius": "full",
  "density": "compact",
  "tokens": { "button": { "font-weight": "{font.weight.bold}" } }
}
`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npx cyclone-tokens build cyclone.theme.json --out src/theme
`})}),`
`,(0,c.jsxs)(t.p,{children:[`Prueba el `,(0,c.jsx)(t.strong,{children:`Theme builder`}),` en la sección `,(0,c.jsx)(t.em,{children:`Tokens`}),` y usa el selector `,(0,c.jsx)(t.strong,{children:`Modo`}),` de la barra superior
para ver el modo oscuro.`]})]})}function s(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=n(),t(),a()})))()}l();export{s as default};