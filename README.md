# Aplicación TODO en reactjs

Aplicación TODO con ReactJS + Redux + Servicios

## Requisitos

* NodeJS: v14.15.3+
* NPM: 6.14.10+
* ReactJS: ^17.0.1

Puede descargar la última versión desde el [sitio oficial de nodeJS](https://nodejs.org/es/) y más info sobre [ReactJS](https://es.reactjs.org/)

## Instalación
Para su instalación clone este repositorio e instale las dependencias del proyecto:
```bash
git clone https://github.com/JuLiAnChz/test-reactjs.git
cd test-reactjs
npm install
```

Ahora es importante configurar la URL del backend en el siguiente archivo
```bash
vim src/const/API.js
```

modifique la constante
```javascript
const API_V1_URL = 'http://localhost:8000/api/v1';
```

## Información adicional
Este proyecto fué desarrollado bajo el flujo de trabajo de git flow, puede ver más información [en atlassian](https://www.atlassian.com/es/git/tutorials/comparing-workflows/gitflow-workflow#:~:text=El%20flujo%20de%20trabajo%20de,de%20la%20publicaci%C3%B3n%20del%20proyecto.)

## Backend
Puedes encontrar el backend original de este proyecto en [el siguiente repositorio](https://github.com/JuLiAnChz/test-laravel-api)