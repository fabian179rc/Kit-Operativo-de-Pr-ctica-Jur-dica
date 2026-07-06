# Higiene y Seguridad — sitio estático

Export estático publicado desde [Magic Patterns](https://magicpatterns.com), servido tal cual en GitHub Pages.

- El sitio publicado vive en [`site/`](site/) (`index.html`, `css/`, `js/`, `images/`, `CNAME`).
- El deploy es automático vía GitHub Actions (`.github/workflows/deploy.yml`) en cada push a `main`: sube `site/` como artifact de Pages, sin build (ya viene compilado).
- Dominio: `maestrodeauditor.tupuntodigital.shop` (definido en `site/CNAME`).

Para editar el contenido, hay que volver a exportar/publicar desde el proyecto de Magic Patterns y reemplazar los archivos dentro de `site/`.
