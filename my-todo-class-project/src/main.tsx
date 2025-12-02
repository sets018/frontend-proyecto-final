import { createRoot } from 'react-dom/client'
import App from './App.tsx'

// 1. Importar Sentry
import * as Sentry from "@sentry/react";
// imprimir el DSN para verificar que se está leyendo correctamente
console.log("MI DSN:", impor|t.meta.env.VITE_SENTRY_DSN); 
// 1. Importar Google Analytics
import ReactGA from "react-ga4";


// 2. Inicializar Sentry
Sentry.init({
  // Usar el DSN de las variables de entorno
  // import.meta.env porque es Vite
  dsn: import.meta.env.VITE_SENTRY_DSN, 

  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration(),
  ],

  // (1.0 = 100% de las sesiones)
  tracesSampleRate: 1.0, 
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});

// 2. Inicializar Google Analytics
// Verificamos que exista la variable 
const gaId = import.meta.env.VITE_GOOGLE_ANALYTICS_ID;
// imprimir el id para verificar que se está leyendo correctamente
console.log("MI ID DE GOOGLE ANALYTICS ES:", gaId); 
if (gaId) {
  ReactGA.initialize(gaId);
  
  // Enviar la primera visita de pagina (Pageview)
  ReactGA.send({ 
    hitType: "pageview", 
    page: window.location.pathname, 
    title: "Inicio"
  });
}

createRoot(document.getElementById('root')!).render(
  <App />
)
