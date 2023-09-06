import './App.css';

import { Line } from "react-chartjs-2";
import { Row, Col,Switch, Image } from 'antd';
import Chart from 'chart.js/auto';
import {CategoryScale} from 'chart.js'; 
import { useState } from 'react';
Chart.register(CategoryScale);

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "First dataset",
      data: [33, 53, 85, 41, 44, 65],
      fill: false,
      borderColor: "rgb(229, 229, 73)"
    },
    {
      label: "Second dataset",
      data: [33, 25, 35, 51, 54, 76],
      fill: false,
      borderColor: "rgba(255, 102, 0, 0.656)"
    },
    {
      label: "Third dataset",
      data: [35, 27, 30, 51, 54, 76],
      fill: false,
      borderColor: "rgb(40, 199, 40)"
    }
  ]
};

function App() {

  const [isOnBlub, setIsOnBlub] = useState(false);

  const onToggleBlub = () => {
    setIsOnBlub(!isOnBlub);
  }

  const [isOnFan, setIsOnFan] = useState(false);

  const onToggleFan = () => {
    setIsOnFan(!isOnFan);
  }

  return (
    <div className="App">
      <Row>
        <Col span={8} className='row1 box' >
          <div className='temp all'>
            <h3>Nhiệt độ</h3>
            <h2>20</h2>
          </div>
        </Col>
        <Col span={8} className='row1 box' >
          <div className='humidity all'>
            <h3>Độ ẩm</h3>
            <h2>80%</h2>
          </div>
        </Col>
        <Col span={8} className='row1 box'>
          <div className='light all'>
            <h3>Ánh sáng</h3>
            <h2>100 lux</h2>
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={16} className='row2'>
          <Line data={data} />
         </Col>
        <Col span={8} className='row2' >
          <Row className='row1 box top'>
            <Col span={24} className='all switch'>
              <Image className='bulb' src={isOnBlub ? 'blub-on-removebg-preview.png': 'blub-off-removebg-preview.png'} width={80} style={{marginRight: 30}} preview={false}/>
              <Switch size="default" checked={isOnBlub} onClick={onToggleBlub} />
            </Col>
          </Row>
          <Row className='row1 box top'>
            <Col span={24} className='all switch'>
              <Image className='fan' src={isOnFan ? 'fan-on-unscreen.gif': 'fan-off-removebg-preview.png'} width={120} preview={false}/>
              <Switch size="default" checked={isOnFan} onClick={onToggleFan} />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default App;
