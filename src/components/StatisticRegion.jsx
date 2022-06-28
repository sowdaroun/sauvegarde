import React from 'react'
import { Form } from "react-bootstrap";
import './style/_statisticregion.scss'
import {
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  BarChart,
  CartesianGrid,
} from "recharts";


const data = [
  {
    name: "Cona",
    Homme: 4000,
    Femme: 2400,
  },
  {
    name: "Labe",
    Homme: 20,
    Femme: 10,
  },
  {
    name: "Mamou",
    Homme: 40,
    Femme: 20,
  },
  {
    name: "Boke",
    Homme: 40,
    Femme: 24,
  },
  {
    name: "Kindia",
    Homme: 800,
    Femme: 100,
  },
  {
    name: "Kankan",
    Homme: 400,
    Femme: 300,
  },
  {
    name: "Faranah",
    Homme: 300,
    Femme: 400,
  },
  {
    name: "N'Zerekore",
    Homme: 100,
    Femme: 200,
  },

];

function StatisticRegion() {
  return (
    <div className='region'>
      <div className='titlere'>
        <h3 style={{ color: '#179CBC', fontWeight: 'bold' }}>CAS PAR REGION</h3>
        <Form.Select style={{ width: '30%', height: '40px', background: 'transparent', borderRadius: '10px' }}>
          <option >Select</option>
        </Form.Select>
      </div>
      <BarChart width={500} height={300} data={data}>
        <XAxis dataKey="name" stroke="#8884d8" />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <Bar dataKey="Homme" fill="#179cbc" barSize={30} />
        <Bar dataKey="Femme" fill="#1fc4ee" barSize={30} />
      </BarChart>

    </div>
  )
}

export default StatisticRegion