# Michi - APP creada con React y firebase.

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Objetivos de aprendizaje](#3-objetivos-de-aprendizaje)
* [4. Consideraciones generales](#4-consideraciones-generales)
* [5. Prototipo](#5-Prototipo)
* [6. Checklist](#6-checklist)

***

## 1. Preámbulo
El objetivo de este proyecto es reforzar conocimientos con React, utilizando únicamente class components, los ciclos de vida y
firebase para guardar las jugadas.

## 2. Resumen del proyecto
Crear el juego de tic tac toe, conocido también como 3 en raya o el Michi (gatito) para reforzar,
el uso de React sin hooks.

## 3. Objetivos de aprendizaje
- Utilizar React sin hooks.
- Manejar mejor los ciclos de vida de react.
- Aprender a configurar react desde cero (agregando webpack y babel).
- Crear el boilerplate desde 0.
- Manejar firebase (CRUD) para las partidas o para los mejores puntajes.

## 4. Consideraciones generales

La lógica del proyecto esta implementada completamente en JavaScript (ES6).
Se iran agregando las librerías utilizadas en este apartado. 

### Dependencias utilizadas
En el archivo de package.json podras encontrar las siguientes dependencias de babel, guardadas, como dependencias de desarrollador.
Babel sirve para transpilar código de JS6 a JS5 con la finalidad que todos los navegadores puedan entenderlo.
   - @babel/core 
   - @babel-loader 
   - @babel/cli
   - @babel/preset-env
   - @babel/preset-react (este es exclusivo para usarlo con React)

También encontrarás algunas dependencias de webpack que es un sistema de empaquetador para procesar y preparar el desarrollo de una applicación web para producción.

Webpack permite que trabajes con cualquier tipo de archivo (como preprocesadores de CSS, o componentes de React), las dev dependencias que instalé fueron:

    - html-webpack-plugin
    - webpack
    - webpack-cli
    - webpack-dev-server

Y por supuesto instalé React y react-dom como dependencias para el cliente.
- react
- react-dom

Finalmente encontrarás un archivo llamado "webpack.config.js" donde se específica a webpack la manera en la que queremos que se empaqueten los módulos y archivos de app.

Y un archivo llamado "jsconfig.json" para configurar como llamaremos a nuestros componentes.
## 5. Prototipo de alta fidelidad

Puedes verlo en este [link](https://www.figma.com/file/cB9SdDPAL8rJ0XiDneGfHJ/tic-tac-toe?node-id=0%3A1)

O aquí abajo:
![prototipo](https://github.com/IselaReyesPerdomo94/CDMX007-TIC-TAC-TOE-RN/blob/master/public/img/prototipo.png)

## 6. Checklist de entregable

### UI

* [ ] Muestra grilla (grid) de 3x3
* [ ] Muestra jugador al que le toca su turno
* [ ] Permite marcar cajita vacía
* [ ] Cambia el turno después de marcar cajita
* [ ] No permite marcar cajita ya marcada
* [ ] Permite reiniciar la partida
* [ ] Detecta jugadas ganadoras en eje x
* [ ] Detecta jugadas ganadoras en eje y
* [ ] Detecta jugadas ganadoras en diagonales
* [ ] Muestra jugador ganador cuando gana
* [ ] Muestra jugada ganadora cuando hay ganador
* [ ] Muestra empate cuando nadie gana y no quedan cajitas que marcar
* [ ] Permire volver a empezar cuando termina una partida (alguien ganó o empate)



