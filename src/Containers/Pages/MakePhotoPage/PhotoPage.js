import React,{ Component } from 'react'
import Webcam from 'react-webcam';
import Aux from '../../../hoc/Aux/Aux'
import UserInfo from '../../../Components/UserInfo/UserInfo'
import ControlPane from '../../../Components/ControlPane/ControlPane'
import DoneElements from '../../../Components/DoneElements/DoneElements'
import ProgressBar from '../../../Components/ProgressBar/ProgressBar'
import BottomMessage from '../../../Components/Messages/BottomMessage/BottomMessage'
import arrow from '../../../assets/images/arrow.png'


class PhotoPage extends Component {


    state = {
        show: true,
        reMake: false,
        opacity: 1,
        image: '',
        imageShow: false,
        tasks: [
                  {
                    title: 'Личность подтверждена',
                    done: 'done'
                  },
                  {
                    title: 'Ожидаем фотографию',
                    done: 'progress'
                  }
        ]
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


    photoHandler = () => {
        let tasksList = this.state.tasks.slice()
        tasksList.pop()
        const newTask = {
            title: 'Фотография зафиксирована',
            done: 'done'
        }
        tasksList.push(newTask)
        this.setState({
            tasks: tasksList,
            reMake: true
        })
        this.capture()
    }

    reMakePhoto = () => {
        let tasksList = this.state.tasks.slice()
        tasksList.pop()
        const newTask = {
            title: 'Ожидаем фотографию',
            done: 'progress'
        }
        tasksList.push(newTask)
        this.setState({
            tasks: tasksList,
            imageShow: false
        })
    }

    async goAheadHandler() {
       await this.photoHandler()

        this.props.history.push({
            pathname: '/telegram',
            state: {  tasks: this.state.tasks }
        })
    }

    setRef = (webcam) => {
        this.webcam = webcam;
    }

    capture = async() => {
        let imageSrc = ''
        try {
            imageSrc = this.webcam.getScreenshot();
        }catch(e)
        {

        }

        await this.setState({
            image: imageSrc,
            imageShow: true
        })

    };

    showHandler = () => {
        this.setState({
            show: true,
            opacity: 1
        })
    }


    render() {
        const videoConstraints = {
            width: 600,
            height: 460,
            facingMode: 'user',
        };

        return(
            <Aux>
                <div className="col-sm-6 col-md-6 col-lg-4 offset-lg-4">
                    <div className="main-part">
                        <div className="Userimage">
                            {this.state.imageShow ? <img src={this.state.image} alt="selfy"/> :

                                <Webcam
                                    audio={false}
                                    height={230}
                                    ref={this.setRef}
                                    screenshotFormat="image/jpeg"
                                    width={400}
                                    videoConstraints={videoConstraints}/> }

                        </div>

                        <div className="input-field">
                            {this.state.reMake &&
                                <div className="re-do special-Gold">
                                    <i className="fas fa-sync" onClick={() => this.reMakePhoto()}/>
                                </div>
                            }
                            <div className="form-line">
                                <input type="button" value="CHEESE" className="white" style={{width: '100px'}} onClick={() => this.photoHandler()}/>
                                <ProgressBar completed={'50%'}/>
                            </div>
                            <div className="arrow">
                                <img src={arrow} alt="arrow" onClick={() => this.goAheadHandler()} />
                            </div>
                        </div>
                    </div>
                    <BottomMessage />
                </div>
                {   this.state.show ?

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

export default PhotoPage