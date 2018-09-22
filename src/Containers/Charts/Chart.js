import React, {Component} from 'react'
import {Bar} from 'react-chartjs-2'

class Chart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            chartData: {
                labels: ["пн","вт","ср","чт","пт","сб","вс"],
                datasets: [
                    {
                        data: [8, 9.5, 6, 8, 8.2, 7, 6.5, 6.8, 8, 9.5, 7],
                        backgroundColor: [
                            'rgba(225, 148, 45, 1)',
                            'rgba(225, 148, 45, 1)',
                            'rgba(51, 180, 240, 1)',
                            'rgba(225, 148, 45, 1)',
                            'rgba(225, 148, 45, 1)',
                            'rgba(225, 148, 45, 1)',
                            'rgba(51, 180, 240, 1)',
                            'rgba(51, 180, 240, 1)',
                            'rgba(51, 180, 240, 1)',
                            'rgba(225, 148, 45, 1)',
                            'rgba(225, 148, 45, 1)',
                        ],
                    }
                ],
            },
        }
    }


    render() {
        return(
            <div className="chartCover">
                <div className="chart">
                    <Bar
                        data={this.state.chartData}
                        options={{
                            scales: {
                                yAxes: [{
                                    ticks: {
                                        max: 10,
                                        min: 5,
                                        stepSize: 1
                                    }
                                }]
                            },
                            legend: {
                                display: false
                            },
                            responsive: true,
                        }}/>
                    <div className="chartInfo regular">
                        <p>7час 45мин</p>
                        <p>2475 KZT</p>
                    </div>
                </div>
                <div className="salaryInfo">
                    <div className="monthly">
                        <p className={"regular"}>За месяц</p>
                        <p className={"special-Gold"}>94 ч 33 мин</p>
                        <p className={"special-Blue"}>33987 KZT</p>
                    </div>
                    <div className="last">
                        <p className={"regular"}>Осталось</p>
                        <p className={"special-Gold"}>123ч 45мин</p>
                        <p className={"special-Blue"}>232457 KZT</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Chart