import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 
import { Container, Collapse, Col, Row, Button, CardText, Card, CardImg } from 'reactstrap';

class FooterPage extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			collapse0: false,
			collapse1: false,
			collapse2: false   
		};

		this.toggle0 = this.toggle0.bind(this);
		this.toggle1 = this.toggle1.bind(this);
		this.toggle2 = this.toggle2.bind(this);
		
	}

	toggle0() {
		this.setState({ collapse0: !this.state.collapse0});
	}

	toggle1() {
		this.setState({ collapse1: !this.state.collapse1});
	}

	toggle2() {
		this.setState({ collapse2: !this.state.collapse2});
	}

  render() {
    return (
		<div>
			<div className = "main-wrapper footer-page">
				<div className = "d-flex flex-column">

					<div className = "instructions mb-2">
						<Button onClick={this.toggle0} style={{ marginBottom: '1rem' }} className = "text-white">How To Play</Button>
						<Collapse  isOpen={this.state.collapse0}>
							<Card className = "instructions-dropdown">
								<CardText className = "p-3">
									<h2 className = "mb-5">BATTLE SCREEN</h2>
									<CardImg className = "mb-5" src = "assets/info/battle.png"/>
									<CardImg className = "mb-5" src = "assets/info/battle2.png"/>
									<ul>
										<li className = "mb-5"><div className = "text-danger">Roll:</div> Hit the roll button to roll the dice and get the battle started. If you roll higher than 7, you'll get to attack your enemy.</li>
										<li className = "mb-5"><div className = "text-danger">Draw:</div> ALWAYS draw a weapon card from your deck first before attacking. If you see zero cards on your screen, that's your cue to draw a card.</li>
										<li className = "mb-5"><div className = "text-danger">Shuffle:</div> You have five chances to shuffle your deck. You can choose to shuffle and draw or draw without shuffling.</li>
										<li className = "mb-5"><div className = "text-danger">Attack:</div> Attack your enemy. After you attack, you will have to roll the dice again to get another chance to attack. Good luck!</li>
										<li className = "mb-5"><div className = "text-danger">Help:</div> Call your allies for help when things get bad. You can only call them once, however.</li>
										<li className = "mb-5"><div className = "text-danger">HP Up:</div> Running low on health? You have five items to replenish your health points.</li>
										<li className = "mb-5"><div className = "text-danger">AP Up:</div> You need action points to attack. If you have none, you can't attack so hit this button to replenish them here.</li>
										<li className = "mb-5"><div className = "text-danger">Deal:</div> If you run out of cards, hit this button to deal a new weapons deck.</li>
										<li className = "mb-5"><div className = "text-danger">Health Bars:</div> Pay attention to your health status. Once it's at zero, you're dead.</li>
										<li className = "mb-5"><div className = "text-danger">Action Points Bars:</div> You AP bar lets you know how much action points you have left.</li>
										<li className = "mb-5"><div className = "text-danger">Pause:</div> You can pause/resume the game by pressing this button, but you won't be allowed to attack, of course.</li>
										<li className = "mb-5"><div className = "text-danger">Time:</div> Watch out for the time.</li>

										<Link to = "/game" ><Button>Go to Battle!</Button></Link>
									</ul>
								</CardText>
							</Card>
						</Collapse>
					</div>
					
					<div className = "sountrack mb-2">
						<Button onClick={this.toggle1} style={{ marginBottom: '1rem' }}>Soundtrack</Button>
						<Collapse isOpen={this.state.collapse1}>
							<Card className = "soundtrack-dropdown">
								<CardText className = "p-3">
									<ul>
										<li className = "mb-4">
											<h2>HOME PAGE:</h2>
											<div className="attribution-block">
												<a href="http://dig.ccmixter.org/files/speck/56076 ">April May March Back In December</a> 
												&nbsp; by Speck (c) copyright 2017 Licensed under a Creative Commons
												<a href="http://creativecommons.org/licenses/by-nc/3.0/">&nbsp;Attribution Noncommercial  (3.0)</a> 
												&nbsp;license. Ft: Darkroom
											</div>
										</li>
										<li className = "mb-4">
											<h2>CHOOSE CHARACTER PAGE:</h2> 
											<div className="attribution-block">
												<a href="http://dig.ccmixter.org/files/airtone/56520 ">nightWalk</a> 
												&nbsp; by airtone (c) copyright 2017 Licensed under a Creative Commons
												<a href="http://creativecommons.org/licenses/by-nc/3.0/">&nbsp;Attribution Noncommercial  (3.0)</a> 
												&nbsp;license.
											</div>
										</li>
										<li className = "mb-4">
											<h2>SCENE PAGE:</h2>
											<div className="attribution-block">
												<a href=" http://dig.ccmixter.org/files/tobias_weber/56664">Between Worlds</a> 
												&nbsp; by Aussens@iter (c) copyright 2017 Licensed under a Creative Commons
												<a href="http://creativecommons.org/licenses/by-nc/3.0/">&nbsp;Attribution Noncommercial  (3.0)</a> 
												&nbsp;license. Ft: (Smiling Cynic)
											</div>
										</li>
										<li className = "mb-4">
											<h2>CONVO PAGE:</h2>
											<div className="attribution-block">
												<a href ="http://dig.ccmixter.org/files/JeffSpeed68/56307">POD Dreams</a> 
												&nbsp; by Stefan Kartenberg (c) copyright 2017 Licensed under a Creative Commons 
												<a href="http://creativecommons.org/licenses/by-nc/3.0/">&nbsp;Attribution Noncommercial  (3.0)</a> 
												&nbsp;license. Ft: Debbizo,  Michael Bacich
											</div>
										</li>
										<li className = "mb-4">
											<h2>MAP PAGE:</h2> 
											<div className="attribution-block">
												<a href="http://dig.ccmixter.org/files/NiGiD/56286">Tender Steps</a> 
												&nbsp; by Martijn de Boer (NiGiD) (c) copyright 2017 Licensed under a Creative Commons 
												<a href="http://creativecommons.org/licenses/by-nc/3.0/">&nbsp;Attribution Noncommercial  (3.0)</a> 
												&nbsp;license. Ft: Javolenus
											</div>
										</li>
										<li className = "mb-4">
											<h2>BATTLE PAGE:</h2>
											<div className="attribution-block">
												<a href="http://dig.ccmixter.org/files/Quarkstar/56268 ">Head Noise</a> 
												&nbsp; by Quarkstar(c) copyright 2017 Licensed under a Creative Commons
												<a href="http://creativecommons.org/licenses/by-nc/3.0/">&nbsp;Attribution Noncommercial  (3.0)</a> 
												&nbsp;license. 
											</div>
										</li>
									</ul>
								</CardText>
							</Card>
						</Collapse>
					</div>

					<div className = "donate mb-2">
						<Button onClick={this.toggle2} style={{ marginBottom: '1rem' }}>Donate</Button>
						<Collapse isOpen={this.state.collapse2}>
							<Card className="donate-dropdown">
								<CardText className = "p-3">
									<div>
										Thank you for taking the time to play Alien BattleCraft. If you would like to see this game grow,
										please consider making a donation of any size as you see fit to support my work. Thank you!
									</div>
									<a href = "http://paypal.me/cssdeveloper"><Button>Donate Here!</Button></a>
								</CardText>
							</Card>
						</Collapse>
					</div>
				</div>

				<div className = "p-2 audio">
					<embed 
						src="assets/music/Speck.mp3" 
						preload = "auto" 
						width="10"
						height="10"
						loop="true"
					controls/>	
				</div>
			</div>
		</div>
    );
  }
}

export default FooterPage; 