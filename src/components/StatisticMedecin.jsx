import React from 'react'
import './style/_statisticmedecin.scss'
import { Form } from "react-bootstrap";
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Legend } from "chart.js"

Chart.register(ArcElement, Legend);

//  const data = [
//   {
//     name: "Cona",
//     Homme: 4000,

//   },
//   {
//     name: "Labe",
//     Homme: 20,

//   },
//   {
//     name: "Mamou",
//     Homme: 40,

//   },
//   {
//     name: "Boke",
//     Homme: 40,

//   },
//   {
//     name: "Kindia",
//     Homme: 800,

//   },
//   {
//     name: "Kankan",
//     Homme: 400,

//   },
//   {
//     name: "Faranah",
//     Homme: 300,

//   },
//   {
//     name: "N'Zerekore",
//     Homme: 100,

//   },

// ];
const dat = {
  labels: [
    'Red',
    'Blue',
    'Yellow'
  ],
  datasets: [{

    data: [300, 50, 100],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ],
    borderWidth: 2,
  }]
};
function StatisticMedecin() {
  return (
    <div className='Medecin'>
      <div className='titlemede'>
        <h3 style={{ color: '#179CBC', fontWeight: 'bold' }}>MEDECIN PAR REGION</h3>
        <Form.Select style={{ width: '25%', height: '40px', background: 'transparent', borderRadius: '10px' }}>
          <option >Select</option>
        </Form.Select>
      </div>


      <Doughnut data={dat} options={{ cutout: '80%', borderWidth: '50px', responsive: 'true' }} />
      {/*<PieChart width={500} height={500}>
          <Pie data={dat} dataKey="name" outerRadius={250} innerRadius={150} fill="green" />
  </PieChart>*/}




    </div>
  )
}

export default StatisticMedecin