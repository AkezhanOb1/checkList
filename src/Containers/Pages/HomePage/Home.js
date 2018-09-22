import React, {Component} from 'react'
import Logo from '../../../Components/Logo/Logo'
import ErrorMessage from '../../../Components/Messages/ErrorMessage/ErrorMessage'
import BottomMessage from '../../../Components/Messages/BottomMessage/BottomMessage'
import InputText from '../../../Components/InputFields/InputText/InputText'

import Aux from '../../../hoc/Aux/Aux'



class Home extends Component {

    state = {
        errorMessage: false,
        userID: ""
    }

    //Handling user Input (USERID)
    userIdHandler = (userID) => {
        this.setState({
            userID: userID.target.value,
            errorMessage: "Неверный ID"
        })
    }

    forwardHandler =  () => {
        this.props.history.push({
            pathname: '/password',
            state: { user: this.state.userID }
        })
    }

    render() {
        return(
            <Aux>
                <div className="col-sm-6 col-md-6 col-lg-4 offset-lg-4 center-items">
                    <div className="main-part">
                        <Logo />
                        <InputText types={"text"}
                                   inputText={"Введите свой ID"}
                                   changeHandler={this.userIdHandler}
                                   completed={"16%"}
                                   forwardHandler={this.forwardHandler}/>
                        <div className="message-types">
                            <ErrorMessage show={this.state.errorMessage} text={this.state.errorMessage}/>
                        </div>
                    </div>
                    <BottomMessage />
                </div>

            </Aux>
        )
    }
}

export default Home
