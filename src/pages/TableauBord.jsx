import React from "react";
import StatisticDiabete from '../components/StatisticDiabete';
import StatisticMedecin from '../components/StatisticMedecin';
import StatisticRegion from '../components/StatisticRegion';
import TopMedecin from "../components/TopMedecin";
import Statistic from "../components/Statistic";
import "../components/style/_home.scss";
import Bande from '../components/Bande';
import TopBar from '../components/TopBar/TopBar';

function TableauBord() {
    return (
        <div className="home_page">
            <TopBar />
            <Statistic />
            <Bande />
            <StatisticDiabete />
            <div className="statistique">
                <StatisticMedecin />
                <StatisticRegion />
            </div>
            <TopMedecin />
        </div>
    );
}


export default TableauBord;
