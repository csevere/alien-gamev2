import React from 'react';
import { Row, Col } from 'reactstrap';

const Footer = () => { 
	return(
		<footer className = "main-footer pl-3">
            <Row className="no-gutters">
                <div className = "d-flex flex-row">
                    <div className = "p-2"><p>Copyright &copy; 2017 Severe | Alien BattleCraft</p></div>
                    <div className = "p-2">Credits</div>
                    <div className = "p-2">Donate</div>
                    <div className = "p-2">Soundtrack</div>
                </div>
            </Row>
		</footer>
	)
}
	
export default Footer; 