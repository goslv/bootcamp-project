import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';
import styled from 'styled-components';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const HomeContainer = styled.div`
  padding: 20px;
  background-color: #f5f7fa;
  height: 100vh;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: white;
  border-bottom: 1px solid #ddd;
`;

const WelcomeMessage = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const StatsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const Card = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  flex: 1;
  margin-right: 20px;
  &:last-child {
    margin-right: 0;
  }
`;

const CardTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 20px;
`;

const StatItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  span {
    margin-left: 10px;
    font-size: 16px;
  }
`;

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
    <HomeContainer>
      <Header>
        <WelcomeMessage>Bienvenido Jose</WelcomeMessage>
        <div>
          <span>30</span>
          <span>J</span>
          <span>Jose Gomez</span>
        </div>
      </Header>
      <StatsContainer>
        <Card>
          <CardTitle>Estadísticas</CardTitle>
          <StatItem>
            <span>2.89</span>
            <span>Promedio general</span>
          </StatItem>
          <StatItem>
            <span>37</span>
            <span>Evaluaciones realizadas</span>
          </StatItem>
          <StatItem>
            <span>152.00</span>
            <span>Hs. de investigación</span>
          </StatItem>
          <StatItem>
            <span>83.00</span>
            <span>Hs. de Extensión</span>
          </StatItem>
          <StatItem>
            <span>0</span>
            <span>Materias cursadas act.</span>
          </StatItem>
        </Card>
        <Card>
          <CardTitle>Calificaciones</CardTitle>
          <Line data={data} />
        </Card>
      </StatsContainer>
    </HomeContainer>
  );
};

export default Home;
