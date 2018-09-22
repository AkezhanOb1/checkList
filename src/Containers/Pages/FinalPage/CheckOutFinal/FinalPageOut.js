import React, {Component} from 'react'

import Aux from '../../../../hoc/Aux/Aux'
import UserInfo from '../../../../Components/UserInfo/UserInfo'
import WeatherAndTime from "../../../../Components/WeatherAndTime/WeatherAndTime";
import ControlPane from '../../../../Components/ControlPane/ControlPane'
import DoneElements from '../../../../Components/DoneElements/DoneElements'
import Achievements from '../../../../Components/Achievements/Achievements'
import Chart from '../../../../Containers/Charts/Chart'
import FinalPageMain from '../../../../Components/FinalPageMain/FinalPageMain'
import BottomMessage from '../../../../Components/Messages/BottomMessage/BottomMessage'

class FinalPageOut extends Component {

    state = {
        show: true,
        tasks: this.props.location.state.tasks.slice(),
        achievements: this.props.location.state.achive.slice(),
        opacity: 1,
        time: 3
    }

    rightWindowHandler = () => {
        this.setState({
            opacity: 0
        })
    }

    buttonClickHandler = (event) => {
        this.forwardHandler()
    }

    forwardHandler =  () => {
        this.props.history.push({
            pathname: '/final',
            state: { tasks: this.state.tasks }
        })
    }

    backHandler = () => {
        this.props.history.push({
            pathname: '/insite',
            state: {  tasks: this.state.tasks, achive: this.state.achievements }
        })
    }

    actionMessageHandler = () => {
        let x = setInterval(() => {
            this.setState(prevState => ({
                time: prevState.time - 1
            }));

            if (this.state.time === 0) {
                clearInterval(x);
                this.setState({
                    time: 5
                })
                this.props.history.push({
                    pathname: '/final',
                    state: { tasks: this.state.tasks }
                })
            }
        }, 1000);
    }


    componentDidMount = () => {
        this.actionMessageHandler()
    }



    render() {
        return(
            <Aux>
                <div className="col-sm-6 col-md-6 col-lg-4 offset-lg-4 center-items">
                    <FinalPageMain
                        timer={this.state.time}
                        forwardFunction={this.forwardHandler}
                        clickHandler={this.buttonClickHandler}
                        buttonText={"Завершить"}
                        regularMessage={"Без волевого усилия инерция всегда побеждает. - "}
                        actionMessage={"Анжелика"} />
                    <BottomMessage />
                </div>

                {this.state.show &&
                <Aux>

                    <div className="col-sm-6 col-md-6 col-lg-3 offset-lg-1 left-border center-items" id={'hide'} style={{opacity: this.state.opacity}}>
                        <WeatherAndTime color={"special-Gold"}/>
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

export default FinalPageOut