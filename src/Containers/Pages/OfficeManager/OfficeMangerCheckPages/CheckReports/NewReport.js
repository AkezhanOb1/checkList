import React, {Component} from 'react'

import Aux from '../../../../../hoc/Aux/Aux'
import UserInfo from '../../../../../Components/UserInfo/UserInfo'
import WeatherAndTime from "../../../../../Components/WeatherAndTime/WeatherAndTime";
import ControlPane from '../../../../../Components/ControlPane/ControlPane'
import DoneElements from '../../../../../Components/DoneElements/DoneElements'
import Achievements from '../../../../../Components/Achievements/Achievements'
import UserLogo from '../../../../../Components/UserAvatar/UserAvatar'
import InputText from '../../../../../Components/InputFields/InputText/InputText'
import Chart from '../../../../Charts/Chart'
import ErrorMessage from '../../../../../Components/Messages/ErrorMessage/ErrorMessage'

import BottomMessage from '../../../../../Components/Messages/BottomMessage/BottomMessage'

class NewReport extends Component {

    state = {
        show: true,
        tasks: this.props.location.state.tasks.slice(0, 2),
        achievements: [],
        opacity: 1,
        report: ''
    }

    componentWillMount() {
        this.prevTasks = this.props.location.state.tasks.slice(0, 2)
        this.achievements = [
            {image: "/static/media/target.8f86c67d.svg", title: "Цели", info: "+23", color: "special-Gold", border: "outter"},
            {image: "/static/media/clap.26b70709.svg", title: "Карма", info: "-43", color: "temperature", border: "outter2"},
            {image: "/static/media/light-bulb.d3fbb736.svg", title: "Идеи", info: "0", color: "temperature", border: "outter3"},
            {image: "/static/media/clipboard.8e980c41.svg", title: "Задачи", info: "+15", color: "special-Gold", border: "outter"},
            {image: "/static/media/boxing.8a67413b.svg", title: "Навыки", info: "+15", color: "special-Gold", border: "outter"},
        ]
        let taskList = this.state.tasks.slice()
        let newTask = {
            title: 'Ждем отчет',
            done: 'progress'
        }
        taskList.push(newTask)
        this.setState({
            tasks: taskList
        })
    }



    rightWindowHandler = () => {
        console.log("HIDING RIGHT HALVE")
        this.setState({
            opacity: 0
        })
    }

    buttonClickHandler = (event) => {
        let text = event.target.value
        this.changeStatus()
        this.setState({
            report: text
        })
    }

    changeStatus = () => {
        let taskList = this.state.tasks.slice()
        taskList.pop()
        let newTask = {
            title: 'Отчет принят',
            done: 'done'
        }
        taskList.push(newTask)
        this.setState({
            tasks: taskList,
        })
    }

    progressChangeHandler = () => {
        let taskList = this.state.tasks.slice()
        if(taskList[taskList.length - 1].done === 'progress') {
           this.changeStatus()
        }
    }

    forwardHandler = async () => {
        await this.progressChangeHandler()
        this.props.history.push({
            pathname: '/insite',
            state: {  tasks: this.state.tasks, achive: this.achievements }
        })
    }

    backHandler = () => {
        this.props.history.push({
            pathname: '/photo',
        })
    }

    errorHandler = () => {
        let taskList = this.state.tasks.slice()
        taskList.pop()
        let newTask = {
            title: 'Отчет не сдан',
            done: 'incomplete'
        }
        taskList.push(newTask)
        this.setState({
            tasks: taskList
        })
    }



    render() {
        return(
            <Aux>
                <div className="col-sm-6 col-md-6 col-lg-4 offset-lg-4 center-items">
                    <div className="main-part">
                        <UserLogo />
                        <h1 className="white">Отчет</h1>
                        <InputText types={"text"}
                                   inputText={"Отчет о сегодняшем дне..."}
                                   changeHandler={this.buttonClickHandler}
                                   completed={"66%"}
                                   forwardHandler={this.forwardHandler}
                                   backFunction={this.backHandler}/>
                        <ErrorMessage show={this.state.show} text={"Не буду писать отчет"} errorHandler={this.errorHandler}/>
                    </div>
                    <BottomMessage />
                </div>

                {this.state.show &&
                <Aux>
                    <div className="col-sm-6 col-md-6 col-lg-3 offset-lg-1 left-border center-items" id={'hide'} style={{opacity: this.state.opacity}} >
                        <WeatherAndTime color={"regular"}/>
                        <Achievements achive={this.achievements}/>
                        <Chart />
                        <UserInfo name={"Кудайберген"} fathersName={"Аманатаевич"} id={"18it26"} profession={"Маркетолог"}/>
                        <DoneElements tasks={this.state.tasks}/>
                        <ControlPane remove={this.rightWindowHandler}/>
                    </div>
                </Aux>
                }
            </Aux>
        )
    }
}

export default NewReport
