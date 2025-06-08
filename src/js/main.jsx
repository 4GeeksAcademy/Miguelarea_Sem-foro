import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/index.css'; 

function LucesSemaforo() {
  const [color, setColor] = useState(null); 
  const [Purpura, setPurpura] = useState(false); 

  const coloresBase = ['red', 'yellow', 'green'];
  const colores = Purpura ? [...coloresBase, 'purple'] : coloresBase;

  const cycleColor = () => {
    const currentIndex = colores.indexOf(color);
    const nextIndex = (currentIndex + 1) % colores.length;
    setColor(colores[nextIndex]);
  };

  
  useEffect(() => {
    if (color === 'green') {
      const contenedor = document.getElementById('cruce-container');

      const persona = document.createElement('div');
      persona.textContent = '🚶';
      persona.className = 'persona-animada';
      contenedor.appendChild(persona);

      setTimeout(() => {
        persona.remove();
      }, 20000);
    }
  }, [color]);

  return (
    <div style={{ textAlign: 'center' }}>
      <div id="traffic-light">
        {colores.map((c) => (
          <div
            key={c}
            className={`light ${c} ${color === c ? 'selected' : ''}`}
            onClick={() => setColor(color === c ? null : c)} 
          ></div>
        ))}
      </div>

      <div className="d-flex justify-content-center flex-wrap gap-3 mt-3">
        <button className="btn btn-primary" onClick={cycleColor}>
          Cambiar color manualmente
        </button>

        <button
          className="btn btn-secondary"
          onClick={() => setPurpura(true)}
          disabled={Purpura}
        >
          Agregar púrpura
        </button>
      </div>

      
      <div id="cruce-container">
        <div id="paso-peatones"></div>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<LucesSemaforo />);
