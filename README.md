# Cyclone · web pública

Build estático de la documentación pública de [Cyclone-lib](https://github.com/Xilerth/Cyclone-lib), listo para GitHub Pages.

- `/` — web de documentación (`apps/docs`): catálogo de componentes, playground, tokens y creador de temas.
- `/storybook/` — Storybook (`apps/storybook`).

Generado desde Cyclone-NG@eb3e7ce. Todas las rutas son relativas, así que funciona en `https://<usuario>.github.io/Cyclone-lib-web/` sin configuración. `.nojekyll` evita que Pages procese los ficheros con Jekyll.

## Publicar

Settings → Pages → *Deploy from a branch* → rama con este contenido, carpeta `/ (root)`.

## Regenerar

En Cyclone-NG:

```sh
pnpm install --frozen-lockfile
pnpm build
pnpm --filter docs-web --filter docs-storybook build
cp -r apps/storybook/dist apps/docs/dist/storybook
```

Después, sustituye el contenido de este repo (salvo `README.md`, `.nojekyll` y `.git`) por `apps/docs/dist/`.
