# Visualizacion-Red-Bibliometrica---JS-HTML

![VID-20240117-WA0001-ezgif com-video-to-gif-converter](https://github.com/Johan-FF/Visualizacion-Red-Bibliometrica---JS-HTML/assets/94552691/5af80116-b789-40ea-84e9-7b1ff33b3b9a)

## Descripción

Este proyecto se creó con el fin de visualizar redes bibliométricas, en específico, las redes producto de un
proceso en la aplicación [VOSviewer](https://www.vosviewer.com/); esta aplicación tiene la opción de guardar
las redes en formato .json y apartir de este archivo trabaja este proyecto.

Además, de la visualización predeterminada de VOSviewer también es posible visualizar los datos de forma circular,
conservando funcionalidades y agrupaciones.

## Requerimientos

- NodeJS

## Instalación

1. Clona el repositorio:

```
git clone https://github.com/Johan-FF/Visualizacion-Red-Bibliometrica---JS-HTML.git
cd Visualizacion-Red-Bibliometrica---JS-HTML
```

2. Copia los archivos .js y .css, en la estructura de tu proyecto, además, el contenido del archico index.html copialo en
   el lugar donde quieres que se visualice dentro de tu código html.

3. Verifica que las rutas a los archivos .css y .js dentro de tu código html estén correctas.

## Configuración

Aclaración: El funcionamiento es versátil, esto significa que dependiendo de el valor
que almacene una variable en el localstorage cambia para visualizar una u otra.

1. En el archivo "inicio.js" puedes configurar la variable del localstorage a la cual se
   accede.

2. En el archivo "redes.js" puedes personalizar las variables que contienen las redes a visualizar.
   Para ello copia el contenido de un archivo .json (producto de un proceso en VOSviewer) como valor
   dentro de una de las variables en el archivo "redes.js".

3. En el archivo "creación.js" puedes personalizar los diferentes valores que guardas en
   localstorage, así, si guardas el valor "RED-1" visualizas la variable RED_CONTENIDO_1, si guardas
   el valor "RED-2" visualizas la variable RED_CONTENIDO_2, y así sucesivamente.

## Uso

1. Si aún no has personalizado la lógica de control para saber qué red visualizar, puedes
   agregar una variable al localstorage manualmente con la clave "PALABRA-CLAVE" y el valor
   "Nombre clave para red del contenido 1", luego recargar la página y podrás visualizar una de las redes.
   Puedes cambiar el valor por: "Nombre clave para red del contenido 2", "Nombre clave para red del contenido 3",
   "Nombre clave para red del contenido 4" y "Nombre clave para red del contenido 5"; para visualizar diferentes redes.

2. En el caso de que hayas personalizado todo, sólo falta que agregues lógica de negocio a tu código
   para agregar la variable al localstorage con el valor que deseas y luego que el código acceda automáticamente
   a esa variable en "inicio.js".
