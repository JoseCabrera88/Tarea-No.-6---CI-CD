const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static('public'));

// Rutas
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Aplicación de Bienvenida</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .container {
          background: white;
          border-radius: 10px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
          padding: 50px;
          text-align: center;
          max-width: 500px;
        }
        
        h1 {
          color: #333;
          margin-bottom: 20px;
          font-size: 2.5em;
        }
        
        p {
          color: #666;
          font-size: 1.1em;
          margin-bottom: 30px;
          line-height: 1.6;
        }
        
        .info {
          background: #f0f4ff;
          border-left: 4px solid #667eea;
          padding: 20px;
          text-align: left;
          border-radius: 5px;
          margin-top: 30px;
        }
        
        .info h3 {
          color: #667eea;
          margin-bottom: 10px;
        }
        
        .info p {
          color: #555;
          font-size: 0.95em;
          margin: 5px 0;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>¡Bienvenido! - Despliegue Automático en Azure</h1>
        <p>Tu aplicación Node.js se está ejecutando correctamente.</p>
        
        <div class="info">
          <h3>Información del Servidor</h3>
          <p><strong>Puerto:</strong> ${PORT}</p>
          <p><strong>Hora actual:</strong> ${new Date().toLocaleString('es-ES')}</p>
          <p><strong>Entorno:</strong> ${process.env.NODE_ENV || 'development'}</p>
        </div>
      </div>
    </body>
    </html>
  `);
});

// Ruta de prueba adicional
app.get('/api/bienvenida', (req, res) => {
  res.json({
    mensaje: '¡Hola desde la API!',
    timestamp: new Date().toISOString(),
    estado: 'ok'
  });
});

// Manejo de errores 404
app.use((req, res) => {
  res.status(404).send('<h1>404 - Página no encontrada</h1>');
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`✅ Servidor ejecutándose en http://localhost:${PORT}`);
  console.log(`🌐 Presiona Ctrl+C para detener el servidor`);
});
