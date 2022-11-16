---
theme: jekyll-theme-leap-day
---

[Regresar](/DAWM/)

Local CORS Proxy
=======================

  <p align="center">
    <img width="257" height="150" src="https://opengraph.githubassets.com/7343d0d9955a8d629e503676ef4a3a2b2b07d1f302eef45bc047ff97a69793d8/garmeeh/local-cors-proxy">
  </p>

Ruta de la aplicación web
=========================

* * *

Este proxy sirve para evitar problemas de CORS desde un servidor local en el puerto 8010. Es una solución TEMPORAL para desarrolladores que solicitan peticiones a las API existentes sin tener que preocuparse por CORS.


Instrucciones
===============

* Del URL del API (p.e. `http://localhost:8001/jugadores.json`) Identifique el DOMINIO del API: `http://localhost:8001`
* Desde una línea de comandos nueva
  - Instale el **local-cors-proxy** de manera global, con: `npm install -g local-cors-proxy`
  - Levante el LCP (local cors proxy) con el DOMINIO del API, p.e. con: `lcp --proxyUrl http://localhost:8001`
* Use el nuevo endpoint (en el puerto 8010) para realizar los requerimientos, p.e.: `http://localhost:8010/proxy/jugadores.json`


Referencias 
===========

* * *

* GitHub - garmeeh/local-cors-proxy: Simple proxy to bypass CORS issues. (2022). Retrieved 16 November 2022, from https://github.com/garmeeh/local-cors-proxy
* local-cors-proxy. (2020). Retrieved 16 November 2022, from https://www.npmjs.com/package/local-cors-proxy
