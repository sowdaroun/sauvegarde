import React from 'react'
import './statistic.css'

function Statistic() {
  return (
    <div className='contenu_statistic'>
        <div className='items'>
            <span style={{ fontSize:'20px',fontWeight:'bold',color:'#179CB1',paddingLeft:'10px'}}>100</span> <br></br>
            <span style={{fontWeight:'bold',paddingRight:'20px',paddingLeft:'10px'}}>Total des Patients</span>
        </div>
        <div className='items'>
            <span style={{ fontSize:'20px',fontWeight:'bold',color:'#179CB1',paddingLeft:'10px'}}>90</span> <br></br>
            <span style={{fontWeight:'bold',paddingRight:'20px',paddingLeft:'10px'}}>Total des Medecins</span>
        </div>
        <div className='items'>
            <span style={{ fontSize:'20px',fontWeight:'bold',color:'#179CB1',paddingLeft:'10px'}}>20%</span> <br></br>
            <span style={{fontWeight:'bold',paddingRight:'20px',paddingLeft:'10px'}}>Taux d'évolution du Diabète</span>
        </div>

    </div>
  )
}

export default Statistic