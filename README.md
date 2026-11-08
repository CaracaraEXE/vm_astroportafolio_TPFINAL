# PORTAFOLIO ASTRO - HERBERTIA LAHUE

Una página que recopila todos mis proyectos y sirve de modo de introducción a mis ideas y a mi historia creativa. Hecho fuertemente en base a mi amor por el diseño gráfico en los 2000s, tanto en albumes musicales como en los sitios web mismos.

El sitio web fue hecho a forma de servir como un CV virtual (Y justamente fue hecho en el mismo). La busqueda laboral es un tema complicado para mi, especialmente en la construcción de un resumen laboral, por lo que hice este sitio web a manera de mostrar una "snapshot" mía de forma mas facil para quienes estén interesados para colaborar conmigo.

También quisiera enfocar esta página a otros artistas como yo, ofreciendo diferentes recursos y herramientas virtuales que me han ayudado a lo largo de mi carrera. Esto es un homenaje a la página retro **Blue Vertigo**, que contiene un repositorio propio aunque algo desactualizado. Me gustaria hacer dicha sección un "sucesor espiritual" del mismo.

## DEPLOYMENT

Se recomienda tener descargado `Node.js` para inicializar el proyecto, ya que depende el comando `npm run dev` para inicializarse. La URL donde se hostea el proyecto se puede acceder desde Vercel.

La única dependencia externa que hace uso el proyecto es **WebcoreUI** para el carrousel, el cual se instala usando `npm create webcore@latest`.

## OVERVIEW

Mi portafolio posee 4 páginas básicas, /index.js (Super estilizado para jugar con la idea visual), /about (Contiene mini bio, habilidades y experiencia previa), /works con la lista de cada proyecto correspondiente y posterior categorización, y /links con un directorio a modo de recopilar herramientas y otros sitios útiles para otros creativos.

Cada proyecto expuesto posee un carrousel con una o más imagenes de su creación, versiones alternativas u otros agregados, una mini tabla con año de creación y categorías y *si es posible*, un link externo para que el usuario conozca dicho proyecto en detalle.

Realmente no quise irme muy lejos con la estructura de este proyecto, sólo quise hacer el portafolio de mis sueños.

### INGREDIENTES
Este proyecto fue realizado gracias a las siguientes tecnologias:
- **AstroJS:** Framework del proyecto. Varias partes de este repositorio se basaron en el tutorial oficial sobre como crear un Blog con dicho framework.
- **Vercel:** Plataforma de Deployment
- **Node.js:** Maneja e instala los diversos paquetes JS usados en el proyecto.
- **WebcoreUI:** Libreria externa. Ofrece los componentes de Carrousel y Breadcrumbs.
- **TailwindCSS:** Estiliza el proyecto junto el CSS regular.
- **HoverCSS:** Libreria externa. Ofrece efectos especiales al pasar objetos por el mouse.

**Importante aclaración: Se ha usado ayuda de Google Gemini a modo de consulta en ciertas partes del proceso (Trabas), pero no se usó a ningun Agente de Inteligencia Artificial para modificar el proyecto. Estoy opuesta por completo en el uso de IA Generativa en actividades creativas, asi que me niego por completo a recomendar sitios que hagan uso de la misma.**

## COMPONENTES

| Componente                  | Descripción                                           |
| :------------------------ | :----------------------------------------------- |
| **Gallery.astro**             | Hostea la lista de proyectos pasada por Astro.props (Filtradas por categoría o no) y muestra sus imagenes como portadas clickeables (Componente GalleryItem.astro).                           |
| **Header.astro**             | Ubicado al costado de la página (NO es un <aside> debido a su importancia semantica), contiene el <nav> principal (Sidemenu.astro) y otros links importantes (Créditos, redes sociales -socMednav.astro- y un toggle de tema oscuro/claro).      |
| **LinkList.astro**           | Usado en la página de Directorio, ofrece una lista dinamica de links sugeridos filtrados por categoría correspondiente..
| **Categories.astro**         | Botón reusable en Gallery.astro y en WorkLayout.astro el cual cataloga cada proyecto y lleva a la página de dicha categoría.     |                |

# BASE DE DATOS
La informacion presente en */links* y */works* sale de la base de datos virtual **Supabase**, la cual se conecta al documento haciendo uso de una URL y una Access Key especial. *Cabe mencionar que al usar un plan gratuito, Supabase solo mantiene conexión por una semana.*

Ante cualquier desconexión se ha ofrecido un fallback presente en un archivo JSON, interpretado como una Colección de AstroJS para */works*.

# ACCESIBILIDAD WEB

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
