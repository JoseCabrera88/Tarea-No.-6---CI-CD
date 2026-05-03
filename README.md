Aplicación Web de Bienvenida - Node.js
👤 Información del Proyecto
Autor: José Carlos Cabrera Sandoval
Carné: 0907-22-9576
Universidad: Universidad Mariano Gálvez

📝 Descripción del Proyecto
Esta es una aplicación web simple y moderna creada con Node.js y Express que demuestra conceptos fundamentales de desarrollo web. La aplicación muestra un mensaje de bienvenida interactivo con un diseño responsivo y moderno, incluyendo tanto una interfaz HTML como un endpoint API JSON.
El proyecto fue desarrollado como parte de un ejercicio práctico para aprender a:

Crear un servidor web con Node.js y Express
Diseñar interfaces web modernas con HTML y CSS
Crear endpoints API REST
Desplegar aplicaciones en Azure App Service
Implementar CI/CD con GitHub Actions


🎯 Características Principales

Interfaz de bienvenida elegante: Página principal con diseño moderno y gradiente
API REST: Endpoint /api/bienvenida que devuelve datos en JSON
Diseño responsivo: Funciona perfectamente en dispositivos móviles y desktop
Información en tiempo real: Muestra la hora actual y detalles del servidor
Fácil de desplegar: Configurado para Azure App Service con CI/CD


📋 Requisitos

Node.js (v14 o superior)
npm (incluido con Node.js)

🚀 Instalación y Ejecución
1. Instalar dependencias
bashnpm install
2. Iniciar la aplicación
bashnpm start
O alternativamente:
bashnpm run dev
La aplicación se ejecutará en http://localhost:3000

📝 Descripción Técnica
La aplicación incluye:

Página principal (/): Interfaz HTML5 con CSS moderno, gradiente de colores y diseño centrado
API (GET /api/bienvenida): Endpoint JSON que devuelve un mensaje, timestamp y estado
Estilos: CSS responsive con variables de color, flexbox y sombras modernas
Manejo de errores: Página 404 personalizada para rutas no encontradas


📂 Estructura de Archivos
.
├── package.json              # Configuración del proyecto y dependencias
├── server.js                 # Archivo principal de la aplicación
├── README.md                 # Este archivo (documentación)
├── .github/
│   └── workflows/
│       └── main.yml          # Workflow de GitHub Actions para despliegue en Azure
└── node_modules/             # Dependencias instaladas
🔧 Scripts Disponibles

npm start - Inicia el servidor en modo producción
npm run dev - Inicia el servidor en modo desarrollo

🌐 Rutas Disponibles

GET / - Página principal con interfaz HTML interactiva
GET /api/bienvenida - API que devuelve JSON con mensaje, timestamp y estado

📦 Dependencias

Express.js (v4.18.2): Framework web minimalista y flexible para Node.js


☁️ Despliegue en Azure
Esta aplicación está configurada para desplegarse automáticamente en Azure App Service mediante GitHub Actions.
Pasos realizados:

Creación de Web App en Azure
Activación de credenciales de publicación básica de SCM
Almacenamiento de credenciales en GitHub Secrets
Configuración de workflow de CI/CD en .github/workflows/main.yml

URL de la aplicación en producción:
https://mi-app-bienvenida-eph6aad3d4dsd7gb.canadacentral-01.azurewebsites.net

📝 Notas Importantes

El puerto por defecto es 3000, pero puede cambiarse con la variable de entorno PORT
Para detener el servidor localmente, presiona Ctrl+C en la terminal
Las credenciales de Azure se almacenan de forma segura en GitHub Secrets
Cada push a la rama main dispara automáticamente un nuevo despliegue


💡 Ejemplo de Uso de la API
Usando curl:
bashcurl http://localhost:3000/api/bienvenida
Respuesta JSON:
json{
  "mensaje": "¡Hola desde la API!",
  "timestamp": "2024-05-02T10:30:45.123Z",
  "estado": "ok"
}
Usando JavaScript/Fetch:
javascriptfetch('http://localhost:3000/api/bienvenida')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

🔐 Variables de Entorno
Aunque la aplicación funciona sin variables de entorno, puedes configurar:
PORT=3000          # Puerto en el que escucha el servidor (default: 3000)
NODE_ENV=production # Ambiente de ejecución (development/production)

📚 Recursos Útiles

Node.js Documentation
Express.js Guide
Azure App Service
GitHub Actions Documentation


✅ Checklist de Despliegue

 Aplicación Node.js funcional localmente
 Repositorio en GitHub con código
 Web App creado en Azure
 Credenciales de publicación obtenidas
 Secrets configurados en GitHub
 Workflow de GitHub Actions creado
 Despliegue automático funcionando
 Aplicación accesible en línea


📧 Información del Autor
Nombre: José Carlos Cabrera Sandoval
Carné: 0907-22-9576
Universidad: Universidad Mariano Gálvez

Última actualización: Mayo 2, 2026
Versión: 1.0.0
