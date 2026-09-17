# ALTIUS - Plataforma de Apoyo Pedagógico (Bolivia)

> **Herramienta pedagógica de orientación temprana para la detección de señales de trastornos del neurodesarrollo (TDAH, Dislexia, Discalculia) en el ámbito escolar.**

---

## 📌 1. Arquitectura y Stack Tecnológico

El proyecto está estructurado con una arquitectura desacoplada y moderna (Frontend + Backend), lista para ejecutarse en desarrollo local y desplegarse en **Render**.

- **Frontend:**
  - [React 18](https://react.dev/) + [Vite](https://vitejs.dev/) + [TypeScript](https://www.typescriptlang.org/)
  - [Tailwind CSS](https://tailwindcss.com/) (Paleta empática y sobria con tonos lavanda, azules y teal, sin alertas rojas alarmistas)
  - [Lucide React](https://lucide.dev/) (Iconografía limpia y accesible)
- **Backend:**
  - [Node.js](https://nodejs.org/) + [Express](https://expressjs.com/) + [TypeScript](https://www.typescriptlang.org/)
  - [Prisma ORM](https://www.prisma.io/) conectado a PostgreSQL en [Supabase](https://supabase.com/)
- **Despliegue:**
  - Configuración nativa para [Render](https://render.com/) mediante `render.yaml` (Infrastructure as Code).

---

## 📁 2. Estructura del Proyecto

```text
altius/
├── backend/
│   ├── prisma/
│   │   ├── schema.prisma         # Esquema Prisma mapeado a tablas Supabase
│   │   └── seed.ts               # Semilla con preguntas, reglas y sugerencias
│   ├── src/
│   │   ├── controllers/
│   │   │   └── encuestaController.ts # Lógica de encuesta, cálculo y recursos
│   │   ├── lib/
│   │   │   └── prisma.ts         # Singleton de cliente Prisma
│   │   ├── routes/
│   │   │   └── api.ts            # Definición de endpoints /api
│   │   └── index.ts              # Servidor Express, CORS y middlewares
│   ├── .env.example
│   ├── package.json
│   └── tsconfig.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.tsx        # Navegación y estado
│   │   │   ├── Footer.tsx        # Aviso ético y delimitación de alcance
│   │   │   ├── WelcomeScreen.tsx # 1. Pantalla de Bienvenida
│   │   │   ├── ConsentScreen.tsx # 2. Pantalla de Consentimiento
│   │   │   ├── SurveyScreen.tsx  # 3. Pantalla de Encuesta Dinámica
│   │   │   ├── ResultsScreen.tsx # 4. Pantalla de Resultados y Próximos Pasos
│   │   │   └── ReferralScreen.tsx# 5. Directorio de Derivación (Bolivia)
│   │   ├── data/
│   │   │   └── mockData.ts       # Datos de contingencia / demo
│   │   ├── services/
│   │   │   └── api.ts            # Cliente HTTP con fallback transparente
│   │   ├── types/
│   │   │   └── index.ts          # Interfaces TypeScript del dominio
│   │   ├── App.tsx               # State machine y flujo SPA fluido
│   │   ├── main.tsx
│   │   └── index.css
│   ├── .env.example
│   ├── index.html
│   ├── package.json
│   ├── tailwind.config.js
│   └── vite.config.ts
├── render.yaml                   # Render Blueprint (Backend + Frontend)
├── package.json                  # Scripts globales de desarrollo
└── README.md
```

---

## 🚀 3. Guía de Ejecución Local

### Paso 1: Clonar e instalar dependencias

```bash
# 1. Instalar dependencias en Backend
cd backend
npm install

# 2. Instalar dependencias en Frontend
cd ../frontend
npm install

# 3. (Opcional) Instalar dependencias en la raíz para scripts globales
cd ..
npm install
```

### Paso 2: Configurar Variables de Entorno

#### Backend (`backend/.env`):
Copia el archivo `backend/.env.example` a `backend/.env`:
```env
PORT=5000
NODE_ENV=development
DATABASE_URL="postgresql://postgres.[PROJECT_REF]:[TU_CONTRASEÑA]@aws-0-[REGION].pooler.supabase.com:6543/postgres?pgbouncer=true"
DIRECT_URL="postgresql://postgres.[PROJECT_REF]:[TU_CONTRASEÑA]@aws-0-[REGION].pooler.supabase.com:5432/postgres"
CORS_ORIGIN="http://localhost:5173"
```

#### Frontend (`frontend/.env`):
Copia `frontend/.env.example` a `frontend/.env`:
```env
VITE_API_URL=http://localhost:5000/api
```

### Paso 3: Inicializar Prisma con Supabase

```bash
cd backend

# Generar el cliente de Prisma
npm run prisma:generate

# Sincronizar esquema con la base de datos de Supabase
npm run prisma:push

# Poblar con las preguntas pedagógicas y reglas iniciales
npm run prisma:seed
```

### Paso 4: Iniciar el Entorno de Desarrollo

Puedes iniciar ambos servicios simultáneamente desde la raíz:
```bash
npm run dev
```

O en terminales separadas:
```bash
# Terminal 1: Backend (http://localhost:5000)
cd backend
npm run dev

# Terminal 2: Frontend (http://localhost:5173)
cd frontend
npm run dev
```

---

## 🗄️ 4. Esquema de Base de Datos (Supabase)

El cliente Prisma (`backend/prisma/schema.prisma`) interactúa con las siguientes tablas:

1. `preguntas_encuesta`: Catálogo de reactivos pedagógicos categorizados por área (TDAH, Dislexia, Discalculia).
2. `opciones_respuesta`: Opciones ponderadas (pesos de 0 a 3) vinculadas a cada pregunta.
3. `reglas_niveles`: Rangos de puntaje y clasificación de intensidad de señal (*Sin señales*, *Leve*, *Moderada*, *Relevante*).
4. `sugerencias`: Pautas de intervención inmediatas clasificadas por contexto (*aula*, *casa*, *derivación*) con citas de autores.
5. `respuestas_estudiante`: Registro seguro y anónimo de respuestas asociadas al código del estudiante.
6. `resultados`: Cálculo del nivel de señal por categoría para consulta o reevaluación.
7. `tests_profesionales`: Directorio de pruebas y baterías estandarizadas disponibles en Bolivia.

---

## ☁️ 5. Despliegue en Render

### Opción A: Despliegue Automático con `render.yaml` (Recomendado)
1. Sube este repositorio a tu cuenta de **GitHub**.
2. En [Render Dashboard](https://dashboard.render.com/), haz clic en **New +** > **Blueprint**.
3. Conecta el repositorio `altius`. Render leerá el archivo `render.yaml`.
4. Define las variables secretas que solicita el Blueprint (`DATABASE_URL` y `DIRECT_URL` de Supabase).
5. Haz clic en **Apply**. Render compilará y desplegará:
   - El servicio web Node.js (`altius-backend`).
   - El sitio estático React (`altius-frontend`).

### Opción B: Creación Manual en Render

#### 1. Backend Web Service:
- **Environment:** `Node`
- **Root Directory:** `backend`
- **Build Command:** `npm install && npm run build`
- **Start Command:** `npm start`
- **Environment Variables:**
  - `DATABASE_URL`: *(Connection string de Supabase con Pooler)*
  - `DIRECT_URL`: *(Connection string directo de Supabase)*
  - `PORT`: `10000`
  - `NODE_ENV`: `production`
  - `CORS_ORIGIN`: `https://altius-frontend.onrender.com`

#### 2. Frontend Static Site:
- **Environment:** `Static Site`
- **Root Directory:** `frontend`
- **Build Command:** `npm install && npm run build`
- **Publish Directory:** `dist`
- **Rewrite Rule:** `/*` -> `/index.html`
- **Environment Variables:**
  - `VITE_API_URL`: `https://altius-backend.onrender.com/api`

---

## 🧭 6. Flujo de Navegación de la Aplicación

```
[1. Pantalla de Bienvenida]
          │
          ▼
[2. Consentimiento & Código Anónimo]
          │
          ▼
[3. Encuesta Dinámica (Docente/Familia)]
          │
          ▼
[4. Resultados & Acciones de Aula/Casa]
          │
          ├──► [Imprimir / PDF]
          └──► [5. Directorio de Derivación Bolivia]
```

1. **Bienvenida:** Presentación del proyecto, delimitación ética de alcance (no diagnóstico clínico).
2. **Consentimiento:** Información sobre uso educativo de datos y aceptación obligatoria.
3. **Encuesta:** Preguntas dinámicas según rol con barra de progreso y observaciones cualitativas.
4. **Resultados:** Medidores visuales suaves por categoría (TDAH, Dislexia, Discalculia), citas científicas (*Vizcarra & Terán, 2018*) y estrategias inmediatas.
5. **Derivación:** Directorio de centros de atención psicopedagógica y salud integral en Bolivia.
