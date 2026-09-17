import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import apiRoutes from './routes/api';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Configuración de CORS
const allowedOrigins = process.env.CORS_ORIGIN 
  ? process.env.CORS_ORIGIN.split(',').map(s => s.trim()) 
  : ['http://localhost:5173', 'http://localhost:3000'];

app.use(cors({
  origin: (origin, callback) => {
    // Permitir requests sin origin (ej. Postman, server-to-server) o si está en la lista permitida o en Render
    if (!origin || allowedOrigins.includes(origin) || origin.endsWith('.onrender.com')) {
      callback(null, true);
    } else {
      callback(null, true); // Permisivo para desarrollo y demos
    }
  },
  credentials: true
}));

app.use(express.json());

// Health Check
app.get('/api/health', (req: Request, res: Response) => {
  res.json({
    status: 'ok',
    service: 'ALTIUS Backend API',
    timestamp: new Date().toISOString()
  });
});

// Rutas de la API
app.use('/api', apiRoutes);

// Manejo de errores global
app.use((err: any, req: Request, res: Response, next: express.NextFunction) => {
  console.error('Error no controlado:', err);
  res.status(500).json({
    success: false,
    message: 'Ocurrió un error interno en el servidor.',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

app.listen(port, () => {
  console.log(`🚀 Servidor ALTIUS ejecutándose en el puerto ${port}`);
  console.log(`📡 Health check: http://localhost:${port}/api/health`);
});
