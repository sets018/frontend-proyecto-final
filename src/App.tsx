import "./App.css";
import { AuthenticatorProvider } from "./contexts/Authenticator";
import { ContactButton } from './components/ContactButton'; 
import Root from "./pages/root";

// Importar Sentry
import * as Sentry from "@sentry/react"; 

function App() {
  return (
    <AuthenticatorProvider>
      <Root />

      {/* --- SECCIÓN DE PRUEBAS DE SENTRY --- */}
            <div style={{ 
          position: 'fixed', 
          bottom: 10,       // Pegado al borde inferior
          left: 10,         // A la izquierda
          background: '#fff0f0', 
          padding: '10px', 
          border: '2px solid #D32F2F', 
          borderRadius: '8px',
          zIndex: 9999,
          width: '200px'    // Ancho fijo para que alineen bien
        }}>
        <p style={{ margin: '0 0 8px 0', fontWeight: 'bold', color: '#D32F2F' }}>Debug Sentry:</p>
        
        <div style={{ display: 'flex', gap: '5px' }}>
            <button onClick={() => {
            console.log("Enviando prueba a Sentry...");
            Sentry.captureMessage("Test Manual Sentry");
            alert("Mensaje enviado");
            }} style={{ flex: 1, cursor: 'pointer' }}>
            Test
            </button>

            <button onClick={() => {
            throw new Error("Error Manual Sentry");
            }} style={{ flex: 1, background: '#D32F2F', color: 'white', border: 'none', cursor: 'pointer' }}>
            Romper
            </button>
        </div>
      </div> 
    {/* --- SECCIÓN DE PRUEBAS DE ANALYTICS --- */}
      <div style={{ 
        marginTop: '30px', 
        padding: '20px', 
        border: '1px dashed #ccc', 
        borderRadius: '8px',
        textAlign: 'center'
      }}>
        
        <h3>Zona de Pruebas GA4</h3>
        
        <p style={{ color: '#555', fontSize: '0.9rem', marginBottom: '15px' }}>
          Botón de prueba para enviar eventos a Google Analytics.
          <br />
          <small>(Nota: Por defecto ya se envía un "pageview" al iniciar la app)</small>
        </p>

        {/*componente boton */}
        <ContactButton />

      </div>

    </AuthenticatorProvider>
  )
}

export default App