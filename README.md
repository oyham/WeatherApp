<!-- Please update value in the {}  -->
<h1 align="center">Weather App</h1>

<div align="center">
   Solution for a challenge from  <a href="http://devchallenges.io" target="_blank">Devchallenges.io</a>.
</div>

<div align="center">
  <h3>
    <a href="https://weappther.netlify.app">
      Demo
    </a>
    <span> | </span>
    <a href="https://github.com/oyham/WeatherApp">
      Repo
    </a>
    <span> | </span>
    <a href="https://devchallenges.io/challenges/mM1UIenRhK808W8qmLWv">
      Challenge
    </a>
  </h3>
</div>

<!-- TABLE OF CONTENTS -->
## Table of Contents

- [Overview](#overview)
  - [Built With](#built-with)
- [Features](#features)
- [How to](#how-to)
- [Contact](#contact)

<!-- OVERVIEW -->

## Overview

![desktop](https://github.com/oyham/WeatherApp/assets/97111287/022f6cb3-8ffc-438f-8755-55b77f6c57c8)


### WeAppther. [Link Here](https://weappther.netlify.app)
Fue un reto muy desafiante el enfrentarme por mi cuenta a una aplicación de clima. Fueron días de desarrollo, solucionando problemas y aprendiendo nuevas cosas. Siempre vi que desarrollar una aplicación de clima era como caer en el "cliché" del proyecto personal para mostrar, pero me equivoqué.
Mejoré personalemente en estructurar bien las carpetas ya que trabajé con helpers, custom hooks, services (llamada a la api), entre otros. Ya había trabajado con estas utilidades pero nunca lo habia estructurado tan bien (espero). 

### Built With
- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)

## Features
<!-- List the features of your application or follow the template. Don't share the figma file here :) -->

This application/site was created as a submission to a [DevChallenges](https://devchallenges.io/challenges) challenge. The [challenge](https://devchallenges.io/challenges/mM1UIenRhK808W8qmLWv) was to build an application to complete the given user stories.

<!-- PERONAL -->
## How to...
La forma en que pense abordar el proyecto fue la siguiente:
- Primero revisé lo que devolvía el endpoint de la API, un total de 40 items dividios en 8 por cada día, ya que devolvia datos cada 3 horas. 
- El desafío pedía mostrar el día de hoy más los 5 días siguientes, entonces tuve que dividir cada 8 items y agruparlos en un objeto.
- En algún momento la API traerá 40 items que corresponderan a 5 días, asi que en ese momento sólo se mostraran los siguientes 4 días y no 5 cómo pide el desafío.
- Me encuentro en una zona horaria (UTC-3) por lo que recibo de la API los items con una diferencia de 6+ horas. Traté de buscarle alguna solución pero no pude. Lo que debí hacer es sumarle +6 horas a mis funciones para mostrar correctamente la temperatura acorde al día, según la API. 
- Tampoco la API permite traer los datos con otro formato UTC, y tampoco quise cambiar de API, me parecio un buen desafío tener que buscarle la vuelta para que mi app funcione acorde al formato UTC proporcionado por openWeather. 


## Contact

- GitHub [Oyham](https://github.com/oyham)
- Instagram [Valentín Oyhamburu](https://www.instagram.com/valentin.oyhamburu/)
- Twitter [@ValenOyhamburu](https://twitter.com/ValenOyhamburu)
