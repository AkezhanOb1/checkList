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

class CheckInsite extends Component {

    state = {
        show: true,
        tasks: this.props.location.state.tasks.slice(0, 3),
        achievements: this.props.location.state.achive.slice(),
        opacity: 1,
        insite: ''
    }

    componentWillMount() {
        let taskList = this.state.tasks.slice()
        let newTask = {
            title: 'Проверка инсайта',
            done: 'progress'
        }
        taskList.push(newTask)
        this.setState({
            tasks: taskList
        })
    }

    rightWindowHandler = () => {
        this.setState({
            opacity: 0
        })
    }

    changeStatus = () => {
        let taskList = this.state.tasks.slice()
        taskList.pop()
        let newTask = {
            title: 'Инсайт записан',
            done: 'done'
        }
        taskList.push(newTask)
        this.setState({
            tasks: taskList,
        })
    }

    buttonClickHandler = (event) => {
        let text = event.target.value
        this.setState({
            insite: text
        })
        this.changeStatus()
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
            pathname: '/finalOut',
            state: {  tasks: this.state.tasks, achive: this.state.achievements }
        })
    }

    backHandler = () => {
        this.props.history.push({
            pathname: '/report',
            state: {  tasks: this.state.tasks, achive: this.state.achievements }
        })
    }

    errorHandler = () => {
        let taskList = this.state.tasks.slice()
        taskList.pop()
        let newTask = {
            title: 'Инсайт отсутсвует',
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
                        <UserLogo margin={"0"}/>
                        <h1 className="white logoutMessage">Отчет</h1>
                        <InputText types={"text"}
                                   inputText={"Ссылка на инсайт..."}
                                   changeHandler={this.buttonClickHandler}
                                   completed={"82%"}
                                   forwardHandler={this.forwardHandler}
                                   backFunction={this.backHandler}/>
                        <ErrorMessage show={this.state.show} text={"Нету инсайтов"} errorHandler={this.errorHandler}/>
                    </div>
                    <BottomMessage />
                </div>

                {this.state.show &&
                <Aux>
                    <div className="col-sm-6 col-md-6 col-lg-3 offset-lg-1 left-border center-items" id={'hide'} style={{opacity: this.state.opacity}} >
                        <WeatherAndTime color={"regular"}/>
                        <Achievements achive={this.state.achievements}/>
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

export default CheckInsite
