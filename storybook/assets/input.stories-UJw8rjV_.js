import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,n}from"./iframe-CdIDLIln.js";import{r,t as i}from"./if-defined-DrdMuKnp.js";var a,o,s,c,l,u,d;function f(){return(f=e((()=>{n(),i(),a={title:`Formularios/Input`,component:`cy-input`,args:{label:`Email`,placeholder:`tu@email.com`,hint:`Nunca lo compartiremos`,type:`email`,size:`md`,invalid:!1,required:!1,disabled:!1,readonly:!1},argTypes:{size:{control:`inline-radio`,options:[`sm`,`md`,`lg`]},type:{control:`select`,options:[`text`,`email`,`password`,`search`,`tel`,`url`,`number`]}},render:e=>t`
    <div class="sb-stack">
      <cy-input
        label=${r(e.label)}
        placeholder=${r(e.placeholder)}
        hint=${r(e.hint)}
        error-text=${r(e.errorText)}
        .value=${e.value??``}
        type=${e.type}
        size=${e.size}
        ?invalid=${e.invalid}
        ?required=${e.required}
        ?disabled=${e.disabled}
        ?readonly=${e.readonly}
      ></cy-input>
    </div>
  `},o={},s={args:{invalid:!0,errorText:`Introduce un email válido`,value:`hola`}},c={args:{disabled:!0,value:`deshabilitado@cyclone.dev`}},l={render:()=>t`
    <div class="sb-stack">
      <cy-input size="sm" placeholder="Small"></cy-input>
      <cy-input size="md" placeholder="Medium"></cy-input>
      <cy-input size="lg" placeholder="Large"></cy-input>
    </div>
  `},u={render:()=>t`
    <form
      class="sb-stack"
      @submit=${e=>{e.preventDefault();let t=e.target.querySelector(`output`);t.textContent=JSON.stringify(Object.fromEntries(new FormData(e.target)))}}
    >
      <cy-input name="email" type="email" label="Email" required></cy-input>
      <cy-checkbox name="terms" required>Acepto los términos</cy-checkbox>
      <div class="sb-row">
        <cy-button type="submit">Enviar</cy-button>
        <cy-button type="reset" variant="soft" color="neutral">Reset</cy-button>
      </div>
      <output></output>
    </form>
  `},d=[`Playground`,`Invalid`,`Disabled`,`Sizes`,`NativeForm`],o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    invalid: true,
    errorText: 'Introduce un email válido',
    value: 'hola'
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    value: 'deshabilitado@cyclone.dev'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <div class="sb-stack">
      <cy-input size="sm" placeholder="Small"></cy-input>
      <cy-input size="md" placeholder="Medium"></cy-input>
      <cy-input size="lg" placeholder="Large"></cy-input>
    </div>
  \`
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <form
      class="sb-stack"
      @submit=\${(e: SubmitEvent) => {
    e.preventDefault();
    const out = (e.target as HTMLFormElement).querySelector('output')!;
    out.textContent = JSON.stringify(Object.fromEntries(new FormData(e.target as HTMLFormElement)));
  }}
    >
      <cy-input name="email" type="email" label="Email" required></cy-input>
      <cy-checkbox name="terms" required>Acepto los términos</cy-checkbox>
      <div class="sb-row">
        <cy-button type="submit">Enviar</cy-button>
        <cy-button type="reset" variant="soft" color="neutral">Reset</cy-button>
      </div>
      <output></output>
    </form>
  \`
}`,...u.parameters?.docs?.source},description:{story:"Los controles son form-associated: funcionan en un `<form>` nativo y en `FormData`.",...u.parameters?.docs?.description}}}})))()}f();export{c as Disabled,s as Invalid,u as NativeForm,o as Playground,l as Sizes,d as __namedExportsOrder,a as default};