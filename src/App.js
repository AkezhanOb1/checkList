import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './Containers/Pages/HomePage/Home'
import PassswordValidation from './Containers/Pages/PasswordValidationPage/Password'
import PhotoMaker from './Containers/Pages/MakePhotoPage/PhotoPage'
import LaptopChecker from './Containers/Pages/Marketer/CheckPages/CheckLaptop/CheckLaptop'
import MouseChecker from './Containers/Pages/Marketer/CheckPages/CheckMousePage/CheckMouse'
import KeyChecker from './Containers/Pages/Marketer/CheckPages/CheckLockKey/CheckKey'
import BatteryCheck from './Containers/Pages/Marketer/CheckPages/CheckLaptopBattery/CheckBattery'
import ShelfCheck from './Containers/Pages/Marketer/CheckPages/CheckShelfKey/CheckShelfKey'
import FlowersCheck from './Containers/Pages/Marketer/CheckPages/CheckFlowers/CheckFlowers'
import FinalPageIn from './Containers/Pages/FinalPage/CheckInFinal/FinalPageIn'
import Footer from './Components/Footer/Footer'
import NewReport from './Containers/Pages/Marketer/CheckPages/CheckReports/NewReport'
import Insite from './Containers/Pages/Marketer/CheckPages/CheckInsite/CheckInsite'
import FinalPageOut from './Containers/Pages/FinalPage/CheckOutFinal/FinalPageOut'
import Final from './Containers/Pages/FinalPage/FinalPage'
import Telegram from './Containers/Pages/OfficeManager/OfficeMangerCheckPages/CheckTelegram/CheckTelegram'
import OfficeLaptop from './Containers/Pages/OfficeManager/OfficeMangerCheckPages/CheckOfficeLaptop/CheckOfficeLaptop'
import Bot from './Containers/Pages/OfficeManager/OfficeMangerCheckPages/CheckBot/CheckBot'
import Radio from './Containers/Pages/OfficeManager/OfficeMangerCheckPages/CheckRadio/CheckRadio'
import Cartridge from './Containers/Pages/OfficeManager/OfficeMangerCheckPages/CheckCartridge/CheckCartridge'
import Water from './Containers/Pages/OfficeManager/OfficeMangerCheckPages/CheckWater/CheckWater'

import './App.css';

class App extends Component {
  render() {
    return (
        <Router>

            <div className="container-fluid">
                <div className="row show">
                    <Switch>

                        <Route path="/" exact component={Home} />
                        <Route path="/password" exact component={PassswordValidation} />
                        <Route path="/photo" exact component={PhotoMaker} />

                        {/*-----------------Check In MARKETER------------------------*/}
                        <Route path="/laptop" exact component={LaptopChecker} />
                        <Route path="/mouse" exact component={MouseChecker} />
                        <Route path="/key" exact component={KeyChecker} />
                        <Route path="/battery" exact component={BatteryCheck} />
                        <Route path="/shelf" exact component={ShelfCheck} />
                        <Route path="/flowers" exact component={FlowersCheck} />
                        <Route path="/finalIn" exact component={FinalPageIn} />

                        {/*---------------Check In OFFICE-MANAGER---------------*/}

                        <Route path="/telegram" exact component={Telegram} />
                        <Route path="/officeLaptop" exact component={OfficeLaptop} />
                        <Route path="/bot" exact component={Bot} />
                        <Route path="/radio" exact component={Radio} />
                        <Route path="/cartridge" exact component={Cartridge} />
                        <Route path="/water" exact component={Water} />

                        {/*----------------Check out --------------------------*/}
                        <Route path="/report" exact component={NewReport} />
                        <Route path="/insite" exact component={Insite} />
                        <Route path="/finalOut" exact component={FinalPageOut} />
                        <Route path="/final" exact component={Final} />
                    </Switch>
                </div>
                <Footer />
            </div>
        </Router>
    );
  }
}

export default App;
