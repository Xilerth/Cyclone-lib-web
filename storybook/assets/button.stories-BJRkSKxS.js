import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,n}from"./iframe-Bc-Z9Q2J.js";import{r,t as i}from"./if-defined-CjDRKuij.js";var a,o,s,c,l,u,d,f,p;function m(){return(m=e((()=>{n(),i(),a={title:`Acciones/Button`,component:`cy-button`,args:{label:`Guardar`,variant:`solid`,color:`primary`,size:`md`,disabled:!1},argTypes:{variant:{control:`inline-radio`,options:[`solid`,`soft`,`outline`,`ghost`]},color:{control:`select`,options:[`primary`,`neutral`,`success`,`warning`,`danger`,`info`]},size:{control:`inline-radio`,options:[`sm`,`md`,`lg`]}},render:({label:e,variant:n,color:r,size:i,disabled:a})=>t`
    <cy-button variant=${n} color=${r} size=${i} ?disabled=${a}>${e}</cy-button>
  `},o={},s=[`primary`,`neutral`,`success`,`warning`,`danger`,`info`],c=[`solid`,`soft`,`outline`,`ghost`],l={render:()=>t`
    <div style="display:grid;gap:12px">
      ${c.map(e=>t`<div class="sb-row">
          ${s.map(n=>t`<cy-button variant=${e} color=${n}>${n}</cy-button>`)}
        </div>`)}
    </div>
  `},u={render:()=>t`
    <div class="sb-row">
      <cy-button size="sm">Small</cy-button>
      <cy-button size="md">Medium</cy-button>
      <cy-button size="lg">Large</cy-button>
    </div>
  `},d={args:{disabled:!0}},f={render:({label:e})=>t`
    <div class="sb-row">
      <cy-button style="--cy-button-radius: 9999px; --cy-button-padding-x-md: 28px">${e}</cy-button>
      <cy-button style=${r(`--cy-color-primary-solid: #db2777; --cy-color-primary-solid-hover: #be185d`)}
        >Rosa</cy-button
      >
    </div>
  `},p=[`Playground`,`Matrix`,`Sizes`,`Disabled`,`CustomTokens`],o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{}`,...o.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <div style="display:grid;gap:12px">\n      ${variants.map(v => html`<div class="sb-row">\n          ${colors.map(c => html`<cy-button variant=${v} color=${c}>${c}</cy-button>`)}\n        </div>`)}\n    </div>\n  `\n}',...l.parameters?.docs?.source},description:{story:"Todas las combinaciones de `variant` × `color`.",...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <div class="sb-row">
      <cy-button size="sm">Small</cy-button>
      <cy-button size="md">Medium</cy-button>
      <cy-button size="lg">Large</cy-button>
    </div>
  \`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: ({
    label
  }) => html\`
    <div class="sb-row">
      <cy-button style="--cy-button-radius: 9999px; --cy-button-padding-x-md: 28px">\${label}</cy-button>
      <cy-button style=\${ifDefined('--cy-color-primary-solid: #db2777; --cy-color-primary-solid-hover: #be185d')}
        >Rosa</cy-button
      >
    </div>
  \`
}`,...f.parameters?.docs?.source},description:{story:`Personalización local con variables CSS de componente.`,...f.parameters?.docs?.description}}}})))()}m();export{f as CustomTokens,d as Disabled,l as Matrix,o as Playground,u as Sizes,p as __namedExportsOrder,a as default};