# RetroGames - Catálogo de Videojuegos

Mini aplicación desarrollada en Angular.

## Funcionalidades implementadas

* Catálogo de videojuegos
* Diseño visual con tarjetas
* Evento click en botones
* Actualización dinámica de información
* Comunicación entre componentes

## Comunicación entre componentes

### Padre → Hijo (@Input)

El componente padre envía información del videojuego al componente hijo mediante @Input.

### Hijo → Padre (@Output)

El componente hijo envía eventos al padre mediante @Output y EventEmitter.

---

# Requisitos

Tener instalado:

* Node.js
* npm
* Angular CLI

Verificar instalación:

bash
node -v
npm -v
ng version


---

# Instalación

Entrar a la carpeta del proyecto:

bash
cd mi-catalogo


Instalar dependencias:

bash
npm install


---

# Ejecutar el proyecto

Iniciar servidor de desarrollo:

bash
ng serve


o:

bash
npx ng serve


---

# Abrir en navegador

text
http://localhost:4200


---

# Estructura principal

text
src/app/
│
├── app.ts
├── app.html
├── app.css
│
├── tarjeta-juego/
│   ├── tarjeta-juego.ts
│   ├── tarjeta-juego.html
│   └── tarjeta-juego.css


---

# Tecnologías utilizadas

* Angular
* TypeScript
* HTML
* CSS

---

# Integrantes
* Josue  → Investigación teórica sobre componentes y arquitectura en Angular.
* Josue  → Diseño visual y estructura
* Marcos Morales → Comunicación padre → hijo (@Input)
* Marcos Morales → Comunicación hijo → padre (@Output)
* Estudiante 5 → Pruebas y documentación
