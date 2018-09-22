import React, {Component} from 'react'
import Aux from '../../../hoc/Aux/Aux'
import UserLogo from '../../../Components/UserAvatar/UserAvatar'
import UserInfo from '../../../Components/UserInfo/UserInfo'
import ControlPane from '../../../Components/ControlPane/ControlPane'
import DoneElements from '../../../Components/DoneElements/DoneElements'
import BottomMessage from '../../../Components/Messages/BottomMessage/BottomMessage'

class Final extends Component {

    state = {
        show: true,
        tasks: this.props.location.state.tasks.slice(),
        opacity: 1
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
                    <div className="main-part">
                        <UserLogo />
                        <p className="white fs_20">Надеемся, ваш день был плодотворным</p>
                        <p className="white">Возвращайтесь скорее</p>
                        <div className="input-field">
                            <div className="form-line">
                                <input type="button" value={"Завершить"} onClick={() => console.log("FINISH")} id={"finalButton"} />
                                <div className="my-progrss-bar" style={{width: "100%"}}/>
                            </div>
                        </div>
                    </div>
                    <BottomMessage />
                </div>

                {this.state.show ?

                <Aux>

                    <div className="col-sm-6 col-md-6 col-lg-3 offset-lg-1 left-border center-items" id={'hide'} style={{opacity: this.state.opacity}}>
                        <UserInfo name={"Кудайберген"} fathersName={"Аманатаевич"} id={"18it26"} profession={"Маркетолог"}/>
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

export default Final