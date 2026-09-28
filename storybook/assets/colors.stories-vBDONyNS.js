import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,n}from"./iframe-Bc-Z9Q2J.js";import{n as r,t as i}from"./tokens-CD6Z9U6O.js";var a,o,s,c,l,u;function d(){return(d=e((()=>{n(),i(),a=r,o={title:`Tokens/Colores`,tags:[`!autodocs`],parameters:{layout:`padded`}},s=e=>t`
  <div style="display:grid;gap:4px;font-size:12px">
    <div
      style="height:44px;border-radius:var(--cy-radius-md);background:var(${e.cssVar});border:1px solid var(--cy-color-border-subtle)"
    ></div>
    <code style="font-size:11px">${e.name.split(`.`).pop()}</code>
    <span style="color:var(--cy-color-text-muted)">${e.value}</span>
  </div>
`,c={render:()=>{let e=new Map;for(let t of a.filter(e=>e.name.startsWith(`palette.`)&&e.name.split(`.`).length===3)){let n=t.name.split(`.`)[1];e.set(n,[...e.get(n)??[],t])}return t`${[...e].map(([e,n])=>t`
        <h3 style="margin:24px 0 8px;text-transform:capitalize">${e}</h3>
        <div style="display:grid;grid-template-columns:repeat(11,minmax(60px,1fr));gap:8px">${n.map(s)}</div>
      `)}`}},l={render:()=>{let e=a.filter(e=>e.layer===`semantic`&&e.type===`color`);return t`
      <table style="border-collapse:collapse;width:100%;font-size:13px">
        <thead>
          <tr style="text-align:left">
            <th style="padding:6px">Token</th>
            <th>Muestra</th>
            <th>Variable CSS</th>
            <th>Claro</th>
            <th>Oscuro</th>
            <th>Alias</th>
          </tr>
        </thead>
        <tbody>
          ${e.map(e=>t`<tr style="border-top:1px solid var(--cy-color-border-subtle)">
              <td style="padding:6px"><code>${e.name}</code></td>
              <td>
                <div
                  style="width:48px;height:24px;border-radius:4px;background:var(${e.cssVar});border:1px solid var(--cy-color-border-subtle)"
                ></div>
              </td>
              <td><code>${e.cssVar}</code></td>
              <td>${e.value}</td>
              <td>${e.darkValue??e.value}</td>
              <td><code>${e.alias??``}</code></td>
            </tr>`)}
        </tbody>
      </table>
    `}},u=[`Paletas`,`Semanticos`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    const groups = new Map<string, FlatToken[]>();
    for (const t of all.filter(t => t.name.startsWith('palette.') && t.name.split('.').length === 3)) {
      const g = t.name.split('.')[1];
      groups.set(g, [...(groups.get(g) ?? []), t]);
    }
    return html\`\${[...groups].map(([name, list]) => html\`
        <h3 style="margin:24px 0 8px;text-transform:capitalize">\${name}</h3>
        <div style="display:grid;grid-template-columns:repeat(11,minmax(60px,1fr));gap:8px">\${list.map(swatch)}</div>
      \`)}\`;
  }
}`,...c.parameters?.docs?.source},description:{story:`Paletas primitivas generadas en OKLCH a partir de los colores semilla.`,...c.parameters?.docs?.description}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    const semantic = all.filter(t => t.layer === 'semantic' && t.type === 'color');
    return html\`
      <table style="border-collapse:collapse;width:100%;font-size:13px">
        <thead>
          <tr style="text-align:left">
            <th style="padding:6px">Token</th>
            <th>Muestra</th>
            <th>Variable CSS</th>
            <th>Claro</th>
            <th>Oscuro</th>
            <th>Alias</th>
          </tr>
        </thead>
        <tbody>
          \${semantic.map(t => html\`<tr style="border-top:1px solid var(--cy-color-border-subtle)">
              <td style="padding:6px"><code>\${t.name}</code></td>
              <td>
                <div
                  style="width:48px;height:24px;border-radius:4px;background:var(\${t.cssVar});border:1px solid var(--cy-color-border-subtle)"
                ></div>
              </td>
              <td><code>\${t.cssVar}</code></td>
              <td>\${t.value}</td>
              <td>\${t.darkValue ?? t.value}</td>
              <td><code>\${t.alias ?? ''}</code></td>
            </tr>\`)}
        </tbody>
      </table>
    \`;
  }
}`,...l.parameters?.docs?.source},description:{story:`Tokens semánticos: cambian con el modo claro/oscuro (usa el selector de la barra).`,...l.parameters?.docs?.description}}}})))()}d();export{c as Paletas,l as Semanticos,u as __namedExportsOrder,o as default};