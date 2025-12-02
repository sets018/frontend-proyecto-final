import ReactGA from 'react-ga4';

export const ContactButton = () => {

  const handleButtonClick = () => {
    // 1. Enviar evento a Google Analytics
    ReactGA.event({
      category: "Interaccion",
      action: "Click Boton Prueba",
      label: "Boton Componente Nuevo"
    });
    
    // 2. Feedback visual
    console.log("Evento enviado a GA4");
    alert("Evento enviado a GA");
  };

  return (
    <button onClick={handleButtonClick} style={{ padding: '10px', backgroundColor: '#4CAF50', color: 'white', cursor: 'pointer' }}>
      ¡Haz Clic Aquí!
    </button>
  );
};