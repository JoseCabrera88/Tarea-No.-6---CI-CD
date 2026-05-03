# Aplicación Web de Bienvenida - Node.js

Una aplicación web simple creada con Node.js y Express que muestra un mensaje de bienvenida.

## 📋 Requisitos

- Node.js (v14 o superior)
- npm (incluido con Node.js)

## 🚀 Instalación y Ejecución

### 1. Instalar dependencias

```bash
npm install
```

### 2. Iniciar la aplicación

```bash
npm start
```

O alternativamente:

```bash
npm run dev
```

La aplicación se ejecutará en `http://localhost:3000`

## 📝 Descripción

La aplicación incluye:

- **Página principal (/)**: Interfaz de bienvenida con diseño moderno
- **API (GET /api/bienvenida)**: Endpoint JSON que devuelve un mensaje de bienvenida
- **Estilos**: CSS moderno con gradiente y diseño responsivo

## 📂 Estructura de Archivos

```
.
├── package.json      # Configuración del proyecto
├── server.js         # Archivo principal de la aplicación
└── README.md         # Este archivo
```

## 🔧 Scripts Disponibles

- `npm start` - Inicia el servidor en modo producción
- `npm run dev` - Inicia el servidor en modo desarrollo

## 🌐 Rutas Disponibles

- `GET /` - Página principal con interfaz HTML
- `GET /api/bienvenida` - API que devuelve JSON

## 📦 Dependencias

- **Express.js**: Framework web para Node.js

## 📝 Notas

- El puerto por defecto es `3000`, pero puede cambiarse con la variable de entorno `PORT`
- Para detener el servidor, presiona `Ctrl+C` en la terminal

## 💡 Ejemplo de uso de la API

```bash
curl http://localhost:3000/api/bienvenida
```

Respuesta:
```json
{
  "mensaje": "¡Hola desde la API!",
  "timestamp": "2024-05-02T10:30:45.123Z",
  "estado": "ok"
}
```
