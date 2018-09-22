import React, {Component} from 'react'

import Aux from '../../../../../hoc/Aux/Aux'
import UserInfo from '../../../../../Components/UserInfo/UserInfo'
import WeatherAndTime from "../../../../../Components/WeatherAndTime/WeatherAndTime";
import ControlPane from '../../../../../Components/ControlPane/ControlPane'
import DoneElements from '../../../../../Components/DoneElements/DoneElements'
import Achievements from '../../../../../Components/Achievements/Achievements'
import MainPart from '../../../../../Components/MainPart/Main'
import gloves from '../../../../../assets/images/SVGs/boxing.svg'
import BottomMessage from '../../../../../Components/Messages/BottomMessage/BottomMessage'

class CheckWater extends Component {

    state = {
        show: true,
        tasks: this.props.location.state.tasks.slice(0, 7),
        achievements: this.props.location.state.achive.slice(0, 4),
        opacity: 1
    }

    componentWillMount() {
        this.prevTasks = this.props.location.state.tasks.slice(0, 7)
        this.prevAchievements = this.props.location.state.achive.slice(0, 4)

        let taskList = this.state.tasks.slice()
        let newTask = {
            title: 'Проверка воды в офисе',
            done: 'progress'
        }
        taskList.push(newTask)


        let achiveList = this.state.achievements.slice()
        let newAchive = {
            image: gloves,
            title: 'Навыки',
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
        this.setState({
            opacity: 0
        })
        setTimeout( () => {
            this.setState({
                show: false
            })},1000)
    }


    buttonClickHandler = (event) => {
        this.prevTasks = this.state.tasks.slice()
        let taskList = this.state.tasks.slice()
        taskList.pop()
        let newTask = {
            title: "Вода в офисе есть",
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
            pathname: '/flowers',
            state: {  tasks: this.state.tasks, achive: this.state.achievements }
        })
    }

    backHandler = () => {
        this.props.history.push({
            pathname: '/cartridge',
            state: {  tasks: this.state.tasks, achive: this.state.achievements }
        })
    }

    errorHandler = () => {
        let taskList = this.state.tasks.slice()
        taskList.pop()
        let newTask = {
            title: 'Вода в офисе нет',
            done: 'incomplete'
        }
        taskList.push(newTask)
        this.setState({
            tasks: taskList
        })
    }


    showHandler = () => {
        this.setState({
            show: true,
            opacity: 1
        })
    }

    render() {
        return(

            <Aux>
                <div className="col-sm-6 col-md-6 col-lg-4 offset-lg-4 center-items">
                    <MainPart
                        backFunction={this.backHandler}
                        forwardFunction={this.forwardHandler}
                        clickHandler={this.buttonClickHandler} buttonText={"Вода в офисе есть?"}
                        completed={"100%"}
                        errorText={"Воды нет"}  errorHandler={this.errorHandler}
                    />
                    <BottomMessage />
                </div>

                {this.state.show ?

                <Aux>
                    <div className="col-sm-6 col-md-6 col-lg-3 offset-lg-1 left-border center-items"  id={'hide'} style={{opacity: this.state.opacity}}>
                        <WeatherAndTime color={"regular"}/>
                        <Achievements achive={this.state.achievements}/>
                        <UserInfo name={"Кудайберген"} fathersName={"Аманатаевич"} id={"18it26"} profession={"Офис-менеджер"}/>
                        <DoneElements tasks={this.state.tasks}/>
                        <ControlPane remove={this.rightWindowHandler}/>
                    </div>
                </Aux>

                    : <button className={"special-Gold showButton"} onClick={() => this.showHandler()}> &#60; </button>
                }
            </Aux>
        )
    }
}

export default CheckWater
