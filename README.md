# 🅰️ Angular LAB

Este repositorio contiene la resolución del laboratorio del módulo de Angular de Lemoncode. La aplicación reúne una mini-SPA con navegación pública y privada, autenticación simulada, Angular Material, Sass y ejercicios opcionales de galería, directivas y RxJS.

La solución utiliza componentes standalone y organiza el código por responsabilidad: layout, páginas, servicios y elementos compartidos.

---

## 📁 Estructura del proyecto

```bash
public/
└── assets/
    └── gallery/                  # Imágenes locales de la galería

src/
├── app/
│   ├── layout/                   # Cabecera, pie y menús de navegación
│   ├── pages/                    # Páginas enrutadas de la aplicación
│   ├── services/                 # Servicios de estado, como Auth
│   ├── shared/
│   │   └── directives/           # Directivas reutilizables
│   ├── app.config.ts             # Proveedores de la aplicación
│   ├── app.routes.ts             # Definición de rutas
│   └── app.ts                    # Componente raíz
├── styles.scss                   # Tema y estilos globales
└── main.ts                       # Punto de entrada
```

---

## 🧪 Laboratorio y retos

### 1️⃣ Mini-aplicación con autenticación

Aplicación con layout común y navegación dependiente del estado de sesión.

- Routing para Home, Login, Acerca de, Dashboard, Galería, CRUD y Perfil.
- Menú público y privado, cabecera con logo y pie común.
- Formulario reactivo de login con validaciones y mensajes de error.
- Servicio `Auth` con login, logout, consulta de sesión y username.
- Persistencia de la sesión mediante `localStorage`.
- Username y botón de salida visibles únicamente tras iniciar sesión.

Credenciales de prueba:

```text
Usuario: master@lemoncode.net
Contraseña: 12345678
```

---

### 2️⃣ Galería de fotos

Galería con ocho imágenes locales servidas desde `public/assets/gallery`.

- Selección de imagen mediante miniaturas.
- Navegación anterior/siguiente con límites deshabilitados.
- Controles para aumentar y disminuir el tamaño de la imagen.
- Reproductor automático: cambia de imagen cada dos segundos y vuelve al inicio.
- Botones Play y Stop según el estado del reproductor.
- Imagen activa resaltada y miniaturas paginadas de tres en tres con `SlicePipe`.

📂 `src/app/pages/gallery/`

---

### 3️⃣ Reto: directiva Rotate

Directiva personalizada aplicada exclusivamente a imágenes.

- Rotación inicial configurable mediante el atributo `rotate`.
- Paso configurable mediante `step`; por defecto, 10 grados.
- Clic para girar en sentido horario y Shift + clic para invertir el sentido.
- Ejemplo integrado en la imagen principal de la Galería.

📂 `src/app/shared/directives/rotate.ts`

---

### 4️⃣ Reto: login asíncrono con RxJS

- `Auth.login()` devuelve un `Observable<boolean>`.
- Respuesta simulada con un retardo de dos segundos usando `delay`.
- El componente Login se suscribe al observable para redirigir o mostrar el error.
- Indicador de carga de Angular Material mientras se espera la respuesta.

---

## 🗺️ Rutas principales

| Ruta | Descripción |
| --- | --- |
| `/home` | Página de bienvenida |
| `/login` | Formulario de acceso |
| `/acerca-de` | Información del laboratorio |
| `/dashboard` | Página principal del área privada |
| `/galeria` | Galería de fotos y demostración de Rotate |
| `/crud` | Área reservada para operaciones CRUD |
| `/profile` | Área reservada para el perfil |

La ruta raíz y las rutas no encontradas redirigen a `/home`.

---

## 🚀 Instalación y ejecución

#### 1. Clona el repositorio

```bash
git clone https://github.com/JCMiriam-front-lemoncode-XVIII-labs/module-4_angular.git
```

#### 2. Instala las dependencias

```bash
pnpm install
```

#### 3. Levanta el entorno de desarrollo

```bash
pnpm start
```

#### 4. Abre [http://localhost:4200](http://localhost:4200) en el navegador.

La aplicación se recargará automáticamente al guardar cambios.

---

## 🛠️ Tecnologías usadas

- Angular 20
- TypeScript
- Angular Router
- Angular Reactive Forms
- Angular Material y Angular CDK
- RxJS
- Sass
- Web Storage API (`localStorage`)
- Angular CLI y pnpm

---

## 📌 Comandos disponibles

| Comando | Descripción |
| --- | --- |
| `pnpm start` | Inicia el servidor de desarrollo |
| `pnpm build` | Genera la build de producción en `dist/` |
| `pnpm watch` | Compila en modo desarrollo y observa cambios |
| `pnpm test` | Ejecuta los tests configurados con Karma |
| `pnpm exec ng generate <schematic>` | Genera elementos mediante Angular CLI |

---

## 📌 Notas

- El estado de autenticación es una simulación local: no existe backend ni token real.
- Las imágenes de la galería se almacenan localmente y se publican bajo la ruta `assets/gallery/...`.
- Los estilos priorizan los componentes y el tema por defecto de Angular Material, añadiendo Sass solo para la estructura necesaria.
