import React from 'react';

const Home = () => {
  const data = {
    labels: ['1º sem.', '2º sem.', '3º sem.', '4º sem.'],
    datasets: [
      {
        label: 'Promedio de calificaciones',
        data: [2, 3, 2.5, 4],
        fill: false,
        backgroundColor: '#f94144',
        borderColor: '#f94144'
      }
    ]
  };

  return (
    <div className="container">
      <div className=''>
        <span>30</span>
        <span></span>
        <span>Jose Gomez</span>
      </div>
      <span>2.89</span>
      <span>Promedio general</span>
      <span>37</span>
      <span>Evaluaciones realizadas</span>
      <span>152.00</span>
      <span>Hs. de investigación</span>
      <span>83.00</span>
      <span>Hs. de Extensión</span>
      <span>0</span>
      <span>Materias cursadas act.</span>

      <span>Calificaciones</span>
    </div>
  );
};

export default Home;
