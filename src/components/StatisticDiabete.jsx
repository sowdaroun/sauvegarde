import React from 'react'
import { Form } from "react-bootstrap";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./statisticdiabete.scss";
const data = [
  {
    name: "JAN",
    Cas: 4000,
    Décès: 2400,
  },
  {
    name: "FEV",
    Cas: 4000,
    Décès: 2400,
  },
  {
    name: "MARS",
    Cas: 4000,
    Décès: 2400,
  },
  {
    name: "AVR",
    Cas: 4000,
    Décès: 2400,
  },
  {
    name: "MAI",
    Cas: 4000,
    Décès: 2400,
  },
  {
    name: "jun",
    Cas: 4000,
    Décès: 0,
  },
  {
    name: "juil",
    Cas: 4000,
    Décès: 0,
  },
  {
    name: "aout",
    Cas: 4000,
    Décès: 20,
  },
  {
    name: "sept",
    Cas: 4000,
    Décès: 10,
  },
  {
    name: "oct",
    Cas: 4000,
    Décès: 400,
  },
  {
    name: "nov",
    Cas: 4000,
    Décès: 200,
  },
  {
    name: "dec",
    Cas: 4000,
    Décès: 24,
  },
];

function StatisticDiabete() {
  return (

    <div className="diabete">
      <div className="title">
        <h3 style={{ color: '#179CB1', fontSize: '40px', fontWeight: 'bold' }}>EVOLUTION DU DIABETE</h3>
        <Form.Select style={{ width: '20%', height: '40px', background: 'transparent', marginRight: '10px' }}>
          <option >Select</option>
        </Form.Select>
      </div>
      <div className='diagrame'>
        <ResponsiveContainer width="100%" aspect={4 / 1}>
          <LineChart data={data}>
            <XAxis dataKey="name" />
            <YAxis height="100%" />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="Cas"
              stroke="#179CB1"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="Décès" stroke="red" />
          </LineChart>
        </ResponsiveContainer>
      </div>

    </div>

  )
}

export default StatisticDiabete