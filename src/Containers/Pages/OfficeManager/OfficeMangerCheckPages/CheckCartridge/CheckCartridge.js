import React, {Component} from 'react'

import Aux from '../../../../../hoc/Aux/Aux'
import UserInfo from '../../../../../Components/UserInfo/UserInfo'
import WeatherAndTime from "../../../../../Components/WeatherAndTime/WeatherAndTime";
import ControlPane from '../../../../../Components/ControlPane/ControlPane'
import DoneElements from '../../../../../Components/DoneElements/DoneElements'
import Achievements from '../../../../../Components/Achievements/Achievements'
import MainPart from '../../../../../Components/MainPart/Main'
import clipboard from '../../../../../assets/images/SVGs/clipboard.svg'
import BottomMessage from '../../../../../Components/Messages/BottomMessage/BottomMessage'

class CheckCartridge extends Component {

    state = {
        show: true,
        tasks: this.props.location.state.tasks.slice(0, 6),
        achievements: this.props.location.state.achive.slice(0, 3),
        opacity: 1
    }

    componentWillMount() {
        this.prevTasks = this.props.location.state.tasks.slice(0, 6)
        this.prevAchievements = this.props.location.state.achive.slice(0, 3)


        let taskList = this.state.tasks.slice()
        let newTask = {
            title: 'Проверка картриджей в принтере',
            done: 'progress'
        }
        taskList.push(newTask)


        let achiveList = this.state.achievements.slice()
        let newAchive = {
            image: clipboard,
            title: 'Задачи',
            info: '+15',
            color: 'special-Gold',
            border: 'outter',
        }
        achiveList.push(newAchive)

        this.setState({
            tasks: taskList,
            achievements: achiveList
        })


    }


    rightWindowHandler = () => {
        console.log("HIDING RIGHT HALVE")
        this.setState({
            opacity: 0
        })
    }

    buttonClickHandler = (event) => {
        this.prevTasks = this.state.tasks.slice()
        let taskList = this.state.tasks.slice()
        taskList.pop()
        let newTask = {
            title: 'Картриджи в принтере заполнены',
            done: 'done'
        }
        taskList.push(newTask)
        this.setState({
            tasks: taskList
        })
    }

    progressChangeHandler = () => {
        let taskList = this.state.tasks.slice()
        if(taskList[taskList.length - 1].done === 'progress') {
            this.buttonClickHandler()
        }
    }

    forwardHandler = async () => {
        await this.progressChangeHandler()
        this.props.history.push({
            pathname: '/water',
            state: {  tasks: this.state.tasks, achive: this.state.achievements }
        })
    }

    backHandler = () => {
        this.props.history.push({
            pathname: '/radio',
            state: {  tasks: this.state.tasks, achive: this.state.achievements }
        })
    }

    errorHandler = () => {
        let taskList = this.state.tasks.slice()
        taskList.pop()
        let newTask = {
            title: 'Картриджи в принтере пустой',
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
                    <MainPart
                        backFunction={this.backHandler}
                        forwardFunction={this.forwardHandler}
                        clickHandler={this.buttonClickHandler} buttonText={"Как картриджи?"}
                        completed={"90%"}
                        errorText={"Не вставлены"}  errorHandler={this.errorHandler}
                    />
                    <BottomMessage />
                </div>

                {this.state.show &&

                <Aux>
                    <div className="col-sm-6 col-md-6 col-lg-3 offset-lg-1 left-border center-items"  id={'hide'} style={{opacity: this.state.opacity}}>
                        <WeatherAndTime color={"regular"}/>
                        <Achievements achive={this.state.achievements}/>
                        <UserInfo name={"Кудайберген"} fathersName={"Аманатаевич"} id={"18it26"} profession={"Офис-менеджер"}/>
                        <DoneElements tasks={this.state.tasks}/>
                        <ControlPane remove={this.rightWindowHandler}/>
                    </div>
                </Aux>
                }
            </Aux>
        )
    }
}

export default CheckCartridge