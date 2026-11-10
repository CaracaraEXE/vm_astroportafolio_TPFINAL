# PORTAFOLIO ASTRO - HERBERTIA LAHUE

Una página que recopila todos mis proyectos y sirve de modo de introducción a mis ideas y a mi historia creativa. Hecho fuertemente en base a mi amor por el diseño gráfico en los 2000s, tanto en albumes musicales como en los sitios web mismos.

El sitio web fue hecho a forma de servir como un CV virtual (Y justamente fue hecho en el mismo). La busqueda laboral es un tema complicado para mi, especialmente en la construcción de un resumen laboral, por lo que hice este sitio web a manera de mostrar una "snapshot" mía de forma mas facil para quienes estén interesados para colaborar conmigo.

También quisiera enfocar esta página a otros artistas como yo, ofreciendo diferentes recursos y herramientas virtuales que me han ayudado a lo largo de mi carrera. Esto es un homenaje a la página retro **Blue Vertigo**, que contiene un repositorio propio aunque algo desactualizado. Me gustaria hacer dicha sección un "sucesor espiritual" del mismo.

## DEPLOYMENT

Se recomienda tener descargado `Node.js` para inicializar el proyecto, ya que depende el comando `npm run dev` para inicializarse. La URL donde se hostea el proyecto se puede acceder desde Vercel.

Mientras que el proyecto hace uso de otras dependencias, las unicas que hay que re-instalar al probar este proyecto en otra computadora son AstroJS (+ Extension de Visual Studio Code) y Node.JS (En mi caso, use el installer permitido).

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

### USO DE INTELIGENCIA ARTIFICIAL
Durante el proceso de este portafolio sólo se utilizó a **Google Gemini Pro (Estudiantil)** a modo de realizar consultas en las partes donde me trabé o encontré un problema extraño.
Especificamente, consulte por los siguientes problemas:
- Un problema de .map() con el array hard-codeado en timeline.astro (Error propio que detecté gracias a la respuesta)
- Complicaciones con importar SVGs dentro de un componente (Al final relei la documentacion y opte por importar el SVG y usarlo como componente en si)
- Consultar sobre problemas que tuve al seguir el tutorial de () para realizar un dropdown-opener (Usando EventListeners). El resultado se halla en *dropdown.js*.
- Arreglar un schema Zod para las colecciones de AstroJS; asi como su previa importacion a través de Props y variables que extraen los datos, ej {work.data} (Deprecado al ser reemplazado por la API de Supabase).
- Usar una imagen como propiedad CSS `background-image`. Estaba tan deseperada que probé TODAS las respuestas que me dió, y la unica que remotamente dió algo fue *`style={'background-image: url('${herb.src}');'}*.
- Solucionar un error de conexión de Supabase (No me ayudo para nada, pero lo solucione sola en el 2do intento de integracion)
- Pasar los archivos JSON de */works* a un archivo CSV. *Fue una opción de último recurso, ya que todas las herramientas de conversión JSON-CSV daban formatos erroneos y que causaban problemas al tratar de importar los datos a la tabla de Supabase*
- Arreglar un problema de Deployment con Vercel (No sirvió *y casi rompe mi proyecto,* al final me arriesgué e hice un cambio en astro.config.mjs que lo arregló aunque no se a qué costo).
- Importar multiples fuentes en AstroJS, ya que no encontre soluciones buenas y el tutorial oficial solo cubre la importación de una. (Entre sus respuestas recordé que Google Fonts ofrece un enlace con las fuentes especificas, asi que usé eso y listo).

Por un tema de tiempo e inseguridad también probe el agente incorporado de **Supabase**, mas que nada porque no entendia los comandos en SQL ni ciertos schemas de tablas, asi que hubieron ciertas tareas repetitivas que son los pocos casos validos en donde veo valido el uso de la IA (...No voy a quitar comillas simples en 100+ celdas a mano, sinceramente)

En general, varias de las soluciones las descubrí por mi cuenta o luego fueron reemplazadas por otros cambios. No me gusta usar código dado sólo por la IA, asi que preferí usar lo minimo posible. **Tampoco quiero promover el uso de la IA en actividades artisticas, por que ninguno de los enlaces de /links posee algo que involucra a la misma.**

## COMPONENTES

| Componente                  | Descripción                                           |
| :------------------------ | :----------------------------------------------- |
| **Gallery.astro**             | Hostea la lista de proyectos pasada por Astro.props (Filtradas por categoría o no) y muestra sus imagenes como portadas clickeables (Componente GalleryItem.astro).                           |
| **Header.astro**             | Ubicado al costado de la página (NO es un <aside> debido a su importancia semantica), contiene el <nav> principal (Sidemenu.astro) y otros links importantes (Créditos, redes sociales -socMednav.astro- y un toggle de tema oscuro/claro).      |
| **LinkList.astro**           | Usado en la página de Directorio, ofrece una lista dinamica de links sugeridos filtrados por categoría correspondiente..
| **Categories.astro**         | Botón reusable en Gallery.astro y en WorkLayout.astro el cual cataloga cada proyecto y lleva a la página de dicha categoría.     |                |
| **ThemeIcon.astro**         | Botón presente en *index.js* y *Header.astro* que permite cambiar temas usando clases CSS y guardando información en el almacenamiento local.     |                |

# BASE DE DATOS
La informacion presente en */links* y */works* sale de la base de datos virtual **Supabase**, la cual se conecta al documento haciendo uso de una URL y una Access Key especial. *Cabe mencionar que al usar un plan gratuito, Supabase solo mantiene conexión por una semana.*

Ante cualquier desconexión se ha ofrecido un fallback presente en un archivo JSON, interpretado como una Colección de AstroJS para */works*.

# ACCESIBILIDAD WEB
- Pantalla responsive, el sideMenu cambia de posición y es toggleable en pantallas más chicas.
- Tema oscuro/claro ajustable a las preferencias de cada usuario.
- Todas las combinaciones de color texto/fondo pasan los criterios de contraste de color AA establecidos por WCAG 2.1
- Sitio revisado y aprobado por **WAVE Accesibility Checker** y **Axe Devtools**.
- Todas las imagenes u otros elementos poseen un texto alternativo correspondiente (Atributo alt o title si es posible, asi como aria-label).
- Se intento seguir la semantica correspondiente para la estructura del sitio.

# LIMITACIONES

Aunque estoy muy feliz con el resultado final, sostengo que aún quedan cosas que mejorar.

AstroJS es un caso muy extraño de Framework, en donde varias cosas de Next.JS se simplifican pero otras se sobre-complejizan a niveles que rozan lo absurdo. El Javascript funciona de maneras hiper-mega-especificas al punto que no pude implementar acordemente ciertos codigos que le hubiesen ido bien a la página. Tambien detesto el hecho que no se pueden colocar multiples imagenes de forma normal; si o si tienen que importarse previamente.

Una de las features descartadas que más desee agregar en un principio fue la de una herramienta de dibujo en donde el usuario podia crear algo por su cuenta, promoviendo la creación propia en un mundo donde cada vez los algoritmos hacen el trabajo de otros. No obstante el JS del modelo que iba a usar no lograba implementarse en la página, incluso cuando traté de hacer reverse engineering por mi cuenta y modificar las funciones en base de qué tolera Astro en interactividad. Otra idea fue hacer la herramienta en mi sitio extra de Neocities y hacer un iframe del mismo. La idea estaba casi completa (Aunque el iframe era dificil de ajustar el tamaño), pero lo que me hizo cortarlo por completo fue que no era mobile friendly. Tampoco me convencieron las otras alternativas y/o librerias que se hallaban por la web.

El guestbook fue una de las pocas partes cuya implementación siento que quedó a medias, ya que no está instalado dentro de un sitio sino es un iframe conteniendo un servicio externo (Atabook). La falta de una API que me convenciese (La que estaba familiar, MongoDB, era dificil de conectar a este framework) para guardar los mensajes retrasó mucho el proceso de desarollo. E incluso ya incluido, siento que su inclusión puede sentirse redundante al ya haber secciones de comentarios para cada proyecto. En el caso de dejarlo en la página pero hacerlo mejor integrado, lo que más me convenció es [este tutorial](https://resrc.neocities.org/posts/make-your-own-guestbook) en particular que hace uso de Cloudflare Workers (Lo cual contiene integraciones con Supabase).

En el futuro quisiera poder hacer las siguientes modificaciones:
- Componente de busqueda de proyectos (Busca por titulo y devuelve resultados que coincidan)
- Un apartado aparte de **Blog**, aunque este es más bien una excusa para mantener a Supabase activo por más tiempo.
- Otras configuraciones de accesibilidad web; como aumentar el tamaño el texto.
- Hacer un boton de volver al inicio
- Y por supuesto, alguna funcion de dibujo que funcione.

## CREDITOS

El portafolio oficial posee un apartado de */credits*, con todas las personas que lograron que este proyecto sea posible. No obstante, a modo de resumir, estos son los contribuyentes en el tema de códigos.
- [AstroJS Docs](https://docs.astro.build/en/getting-started/)
- [Hover.css](https://ianlunn.github.io/Hover)
- [WebcoreUI](https://webcoreui.dev/d)
- [Coding2Go (Youtube)](https://www.youtube.com/watch?v=R7b3OlEyqug)
- [Astro Frame Shift](https://github.com/EmaSuriano/astro-frame-shift)
- [Atabook](https://atabook.org/es)
- [Widget Star](https://widget.st/)
- [Pierdomenico (Dev.to)](https://dev.to/mino89/incredibly-simple-talk-bubbles-with-tailwind-4fe0)
- [Astro Embed](https://github.com/delucis/astro-embed)

## EVIDENCIA DE PROCESO
Presente en forma de documento de Google Docs.
[Enlace directo](https://docs.google.com/document/d/1mGSYDaP2n53ak3Kuqw2ERQe5YNMiG8Xo8iTCh71vz2c/edit?usp=sharing)