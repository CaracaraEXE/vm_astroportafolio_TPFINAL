# PORTAFOLIO ASTRO - HERBERTIA LAHUE

Una página que recopila todos mis proyectos y sirve de modo de introducción a mis ideas y a mi historia creativa. Hecho fuertemente en base a mi amor por el diseño gráfico de los 2000s y la música.

## DEPLOYMENT

Para inicializar el proyecto dentro de github, solo se tiene que usar el comando `npm run dev`. La URL donde se hostea el proyecto se puede acceder desde Vercel.

La única dependencia externa que hace uso el proyecto es **WebcoreUI** para el carrousel, el cual se instala usando `npm create webcore@latest`.

## OVERVIEW

Mi portafolio posee 4 páginas básicas, /index.js (Super estilizado para jugar con la idea visual), /about (Contiene mini bio, habilidades y experiencia previa), /works con la lista de cada proyecto correspondiente y posterior categorización, y /links con un directorio a modo de recopilar herramientas y otros sitios útiles para otros creativos.

Cada proyecto expuesto posee un carrousel con una o más imagenes de su creación, versiones alternativas u otros agregados, una mini tabla con año de creación y categorías y *si es posible*, un link externo para que el usuario conozca dicho proyecto en detalle.

Realmente no quise irme muy lejos con la estructura de este proyecto, realmente sólo quise hacer el portafolio de mis sueños.

## COMPONENTES

| Componente                  | Descripción                                           |
| :------------------------ | :----------------------------------------------- |
| **Gallery.astro**             | Hostea la lista de proyectos pasada por Astro.props (Filtradas por categoría o no) y muestra sus imagenes como portadas clickeables (Componente GalleryItem.astro).                           |
| **Header.astro**             | Ubicado al costado de la página (NO es un <aside> debido a su importancia semantica), contiene el <nav> principal (Sidemnu.astro) y otros links importantes (Créditos y redes sociales -socMednav.astro-).      |
| **LinkList.astro**           | Usado en la página de Directorio, ofrece una lista dinamica de links sugeridos filtrados por categoría correspondiente..
| **Categories.astro**         | Botón reusable en Gallery.astro y en WorkLayout.astro el cual cataloga cada proyecto y lleva a la página de dicha categoría.     |                |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
