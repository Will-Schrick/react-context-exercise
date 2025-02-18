Excersice react context - GOT 🐉
En este ejercicio tendrás que crear una aplicación en React que permita listar los personajes que nos devuelve la api de https://thronesapi.com/

Esta aplicación va a tener dos páginas: El index / y el detalle de un personaje en /details/:characterId

Las informaciones tendrán que ser guardadas y compartidas con el React context

Instalar las dependencias con npm i

Usar la api de thronesApi 👉 https://thronesapi.com/
Crear un context donde guardar la respuesta de la petición
Crear una página index en el path / donde vamos a listar los personajes que hemos conseguido con la petición, en la lista hay que mostrar el name del personaje y la imagen de la cerveza de imageUrl
Crear una página /details/:characterId que se mostrará al hacer click en un personaje de la lista, estos son los detalles que hay que mostrar: firstName, lastName, title, family and imageUrl

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
