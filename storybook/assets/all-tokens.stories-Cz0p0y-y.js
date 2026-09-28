import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,n}from"./iframe-Bc-Z9Q2J.js";import{n as r,t as i}from"./tokens-CD6Z9U6O.js";var a,o,s,c;function l(){return(l=e((()=>{n(),i(),a=r,o={title:`Tokens/Referencia`,tags:[`!autodocs`],args:{layer:`all`,filter:``},argTypes:{layer:{control:`inline-radio`,options:[`all`,`base`,`semantic`,`component`]}}},s={render:({layer:e,filter:n})=>{let r=a.filter(t=>(e===`all`||t.layer===e)&&t.name.includes(n));return t`
      <p>${r.length} tokens</p>
      <table style="border-collapse:collapse;width:100%;font-size:13px">
        <thead>
          <tr style="text-align:left">
            <th style="padding:6px">Token</th>
            <th>Capa</th>
            <th>Tipo</th>
            <th>Variable CSS</th>
            <th>Valor</th>
            <th>Alias</th>
          </tr>
        </thead>
        <tbody>
          ${r.map(e=>t`<tr style="border-top:1px solid var(--cy-color-border-subtle)">
              <td style="padding:6px"><code>${e.name}</code></td>
              <td>${e.layer}</td>
              <td>${e.type??``}</td>
              <td><code>${e.cssVar}</code></td>
              <td>${e.value}${e.darkValue?t`<br /><small>🌙 ${e.darkValue}</small>`:``}</td>
              <td><code>${e.alias??``}</code></td>
            </tr>`)}
        </tbody>
      </table>
    `}},c=[`Todos`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: ({
    layer,
    filter
  }) => {
    const list = all.filter(t => (layer === 'all' || t.layer === layer) && t.name.includes(filter));
    return html\`
      <p>\${list.length} tokens</p>
      <table style="border-collapse:collapse;width:100%;font-size:13px">
        <thead>
          <tr style="text-align:left">
            <th style="padding:6px">Token</th>
            <th>Capa</th>
            <th>Tipo</th>
            <th>Variable CSS</th>
            <th>Valor</th>
            <th>Alias</th>
          </tr>
        </thead>
        <tbody>
          \${list.map(t => html\`<tr style="border-top:1px solid var(--cy-color-border-subtle)">
              <td style="padding:6px"><code>\${t.name}</code></td>
              <td>\${t.layer}</td>
              <td>\${t.type ?? ''}</td>
              <td><code>\${t.cssVar}</code></td>
              <td>\${t.value}\${t.darkValue ? html\`<br /><small>🌙 \${t.darkValue}</small>\` : ''}</td>
              <td><code>\${t.alias ?? ''}</code></td>
            </tr>\`)}
        </tbody>
      </table>
    \`;
  }
}`,...s.parameters?.docs?.source},description:{story:`Todos los tokens (primitivos, semánticos y de componente) con su variable CSS.`,...s.parameters?.docs?.description}}}})))()}l();export{s as Todos,c as __namedExportsOrder,o as default};