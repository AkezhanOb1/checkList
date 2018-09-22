import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import UserLogo from '../../../Components/UserAvatar/UserAvatar'
import InfoMessage from '../../../Components/Messages/InfoMessage/InfoMessage'
import ErrorMessage from '../../../Components/Messages/ErrorMessage/ErrorMessage'
import UserInfo from '../../../Components/UserInfo/UserInfo'
import BottomMessage from '../../../Components/Messages/BottomMessage/BottomMessage'
import InputText from '../../../Components/InputFields/InputText/InputText'

import Aux from '../../../hoc/Aux/Aux'

class Home extends Component {

    state = {
        userPassword: "",
        errorMessage: '',
        time: null,
        showMessage: false,
        addminMessage: false,
        disable: false
    }

    componentWillMount() {
        const {user} = this.props.location.state
        console.log(user)
    }

    userPasswordHandler = (password) => {
        console.log('password ', password.target.value)
        this.setState({
            userPassword: password.target.value,
            errorMessage: "НЕ правильный пароль"
        })
    }


    actionMessageHandler = () => {
        this.setState({
            time: 10,
            disable: true
        })
        let x = setInterval(() => {
            this.setState(prevState => ({
                time: prevState.time - 1
            }));

            if (this.state.time === 0) {
                clearInterval(x);
                this.setState({
                    showMessage: true,
                    time: null,
                    disable: false
                })
            }
        }, 1000);
    }


    adminMessageHandler = () => {
       this.setState({
           addminMessage: true
       })
    }

    forwardHandler =  () => {
        this.props.history.push({
            pathname: '/photo',
        })
    }

    render() {
        return(

            <Aux>
                <div className="col-sm-6 col-md-6 col-lg-4 offset-lg-4 center-items">
                    <div className="main-part">
                        <UserLogo />

                        <InputText types={"password"}
                                   inputText={"Введите свой пароль"}
                                   changeHandler={this.userPasswordHandler}
                                   completed={"32%"}
                                   forwardHandler={this.forwardHandler}/>

                        <div className="message-types">
                            <ErrorMessage show={this.state.errorMessage} text={this.state.errorMessage}/>
                            <InfoMessage regularMessage={"Код не пришел?"}
                                         actionMessage={ this.state.disable === true ? "" : "Отправить повторно"}
                                         actionMessageHandler={this.actionMessageHandler}/>
                            {this.state.time && <div className={'special-Gold timer'}>{this.state.time}</div> }

                            {this.state.showMessage && <div className="callToAdminMessage">
                                <p className="regular">{"Если сообщение так и не пришло, то"}
                                    <br/>
                                    <span className="action-message"
                                          onClick={() => this.adminMessageHandler()}>{"свяжитесь с администратором"}
                                      </span>
                                </p>
                            </div>}
                        </div>
                    </div>
                    <BottomMessage />
                </div>

                <div className="col-sm-6 col-md-6 col-lg-3 offset-lg-1 left-border center-items" >
                    <UserInfo name={"Кудайберген"} fathersName={"Аманатаевич"} id={"18it26"} profession={"Маркетолог"}/>
                    <div className="deny">
                        <Link to={"/"}>
                            <p className="regular"><i className="fas fa-times action-message" onClick={() => console.log("IT IS NOT ME")}/>Это не я</p>
                        </Link>
                    </div>
                    {this.state.addminMessage && <div className="admin-message">
                        <p className="special-Gold">Администратор принял вашу заявку</p>
                        <p className="regular">Ожидайте</p>
                    </div>}
                </div>
            </Aux>

        )
    }
}

export default Home