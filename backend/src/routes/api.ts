import { Router } from 'express';
import {
  getPreguntas,
  guardarRespuestasYCalcular,
  getResultadosPorEstudiante,
  getRecursosDerivacion,
  consultarAsistenteIA
} from '../controllers/encuestaController';

const router = Router();

// Endpoints principales
router.get('/encuesta', getPreguntas);
router.post('/encuesta/respuestas', guardarRespuestasYCalcular);
router.get('/resultados/:estudiante_id', getResultadosPorEstudiante);
router.get('/recursos', getRecursosDerivacion);

// Endpoints de Inteligencia Artificial (Groq)
router.post('/ia/consulta', consultarAsistenteIA);

export default router;
