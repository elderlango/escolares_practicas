<div align="center">

# Swapii

**Sistema de Gestion Escolar - Cliente Web**

Aplicacion web para la administracion de registros de alumnos mediante consumo de APIs REST externas.

[![React](https://img.shields.io/badge/React-18.2-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-4.2-646CFF?logo=vite&logoColor=white)](https://vitejs.dev)
[![Styled Components](https://img.shields.io/badge/Styled_Components-5.3-DB7093?logo=styled-components&logoColor=white)](https://styled-components.com)
[![React Router](https://img.shields.io/badge/React_Router-6.11-CA4245?logo=react-router&logoColor=white)](https://reactrouter.com)

</div>

---

## Descripcion

Swapii es una aplicacion web construida con React que permite gestionar registros de alumnos a traves de llamadas a APIs REST externas. Ofrece operaciones CRUD completas: registrar, consultar, modificar, eliminar y listar alumnos, todo con una interfaz moderna que soporta modo oscuro.

## Caracteristicas

- **Registro de alumnos** - Alta de nuevos registros con clave, matricula y datos personales
- **Consulta individual** - Busqueda de alumno por ID con visualizacion de datos
- **Modificacion** - Actualizacion de campos de un alumno existente
- **Eliminacion** - Baja de registros por ID
- **Listado general** - Visualizacion de todos los alumnos registrados
- **Modo oscuro** - Toggle de tema claro/oscuro con persistencia en localStorage
- **Notificaciones** - Feedback visual con toasts para cada operacion

## Tecnologias

| Tecnologia | Uso |
|---|---|
| React 18 | Framework UI |
| Vite 4 | Build tool y dev server |
| React Router 6 | Navegacion SPA |
| Styled Components 5 | Estilos CSS-in-JS |
| React Query 4 | Cache y gestion de datos |
| React Toastify | Notificaciones |
| React Icons | Iconografia |
| React Bootstrap | Componentes de UI auxiliares |
| ESLint | Linting |

## Estructura del Proyecto

```
fronter/
├── public/
├── src/
│   ├── context/          # Contextos de React (DarkMode)
│   ├── features/         # Modulos por funcionalidad
│   │   ├── Eliminar/     # Componentes de eliminacion
│   │   ├── Listar/       # Componentes de listado
│   │   ├── Modificar/    # Componentes de modificacion
│   │   ├── Obtener/      # Componentes de consulta
│   │   └── Registro/     # Componentes de registro
│   ├── hooks/            # Custom hooks
│   ├── pages/            # Paginas (rutas)
│   ├── styles/           # Estilos globales
│   ├── ui/               # Componentes reutilizables
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Instalacion y Ejecucion

### Requisitos

- Node.js 16+
- npm 8+

### Pasos

```bash
# Clonar el repositorio
git clone <url-del-repositorio>

# Entrar al directorio del frontend
cd fronter

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npx vite
```

La aplicacion estara disponible en `http://localhost:5173`.

### Build de produccion

```bash
npm run build
```

## API Externa

La aplicacion consume endpoints REST del servicio web escolar:

| Operacion | Endpoint |
|---|---|
| Registrar | `/alumnos/agregar` |
| Obtener | `/alumnos/obtener?alumno_id={id}` |
| Modificar | `/alumnos/agregar?alumno_idclave={id}` |
| Eliminar | `/alumnos/eliminar?alumno_id={id}` |
| Listar | `/alumnos/listar` |

## Posibles Mejas Futuras

- Implementar autenticacion de usuarios
- Agregar validacion de formularios con React Hook Form
- Migrar llamadas API a un servicio centralizado con Axios
- Implementar paginacion en el listado de alumnos
- Agregar tests unitarios y de integracion
- Migrar a TypeScript para mayor robustez
- Implementar manejo de errores con Error Boundary por ruta

## Creditos

Proyecto colaborativo universitario desarrollado por estudiantes del curso de desarrollo web.

---

<div align="center">
Hecho con React y Vite
</div>
