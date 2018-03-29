import React, {Component} from 'react';
import createHistory from 'history/createBrowserHistory';
import { Link } from 'react-router-dom';  
import { connect } from 'react-redux';
import * as actions from '../Actions';
import { Row, Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Input, Label } from 'reactstrap';

const localToken = localStorage.getItem('token'); 
const localName = localStorage.getItem('name'); 

class Footer extends Component { 
    constructor(props){
        super(props); 

        this.state = {
            dropdownOpen: false,
            dropdownOpen1: false,
        };

        this.quitGame = this.quitGame.bind(this); 
        this.toggle = this.toggle.bind(this);
        this.toggle1 = this.toggle1.bind(this);
    }

    quitGame(){
        this.props.logoutUser(); 
        const history = createHistory();
        history.push('/');
        history.go('/'); 
    }

    toggle() {
        this.setState({
          dropdownOpen: !this.state.dropdownOpen,
        });
    }


    toggle1() {
        this.setState({
          dropdownOpen1: !this.state.dropdownOpen1,
        });
    }

    render(){

        console.log("*******CHECKING LOGOUT ACTION**********");
        console.log(localToken); 
        console.log(localName); 

        if(localToken && localName){
            var rightPlayerStatus = [
                <div className = "d-flex flex-row player-status" key = '1'>
                    <Button className = "player-status-btn btn-1 ml-3" color="success">
                        <div className = "text-white p-2">Player Status :</div> 
                        <div className = "text-white status-red p-2">&nbsp; {localName} is active</div>
                    </Button>
                    <Button className = "player-status-btn btn-2 ml-3 quit" color = "danger" onClick = {()=> this.quitGame()}>QUIT GAME</Button>
                </div>
            ]

        }else{
            var rightPlayerStatus = [] 
        }

        var menuClass = ["dropdown-menu"];
        if(this.state.dropdownOpen){
            menuClass.push('show')
        }

        var musicClass = ["dropdown-menu"];
        if(this.state.dropdownOpen1){
            musicClass.push('show')
        }


        console.log("LOOK HERE")
        console.log(this.state.dropdownOpen); 
        console.log(menuClass); 

        return(
            <footer className = "main-footer pl-3">
                <Row className="no-gutters d-flex flex-row">
                    <div className = "d-flex flex-row text-white">
                       <div className = "p-2"><p>Alien BattleCraft &copy; 2018 Carla Severe</p></div>
                       <Link to ="/links"><div className = "p-2">&nbsp; &nbsp;How to Play</div></Link>
                       <Link to ="/links"><div className = "p-2">&nbsp; &nbsp;Soundtrack</div></Link>
                       <Link to ="/links"><div className = "p-2">&nbsp; &nbsp;Donate</div></Link>
                       <div className = "p-2 nav">
                            <div className="btn-group dropup" isOpen={this.state.dropdownOpen} onClick={this.toggle}>
                                <Button type="button" className="dropdown-toggle nav-btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded={this.state.dropdownOpen} >
                                    Navigate
                                </Button>
                                <div className={menuClass.join(' ')}>
                                    <Link className = "dropdown-item" to = "/"><div>Home</div></Link>
                                    <Link className = "dropdown-item"  to = "/choose"><div>Choose Character</div></Link>
                                    <Link className = "dropdown-item"  to = "/scene"><div>Story Scenes</div></Link>
                                    <Link className = "dropdown-item"  to = "/convo"><div>Conversations</div></Link>
                                    <Link className = "dropdown-item"  to = "/map"><div>BattleCraft Map</div></Link>
                                    <Link className = "dropdown-item" to = "/game"><div>Battle</div></Link>
                                </div>
                            </div>
                        </div>
                        <div className = "p-2 nav">
                            Music &nbsp;
                            <div className="slideThree"> 
                                <Input 
                                    type="checkbox" 
                                    value="None" 
                                    id="slideThree" 
                                    name="check" 
                                />
                                <Label for="slideThree"></Label>
                            </div>
                        </div>
                    </div>
                    {rightPlayerStatus}
                </Row>
            </footer>
        )
    }
}

export default connect(null,actions)(Footer);

                            // <Dropdown direction="up" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                            //     <DropdownToggle caret>
                            //         Navigate
                            //     </DropdownToggle>
                            //     <DropdownMenu>
                            //         <Link to = "/"><DropdownItem>Home</DropdownItem></Link>
                            //         <Link to = "/choose"><DropdownItem>Choose Character</DropdownItem></Link>
                            //         <Link to = "/scene"><DropdownItem>Story Scenes</DropdownItem></Link>
                            //         <Link to = "/convo"><DropdownItem>Conversations</DropdownItem></Link>
                            //         <Link to = "/map"><DropdownItem>BattleCraft Map</DropdownItem></Link>
                            //         <Link to = "/game"><DropdownItem>Battle</DropdownItem></Link>
                            //     </DropdownMenu>
                            // </Dropdown> 