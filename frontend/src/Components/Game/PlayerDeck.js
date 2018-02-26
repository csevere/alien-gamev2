import React, {Component} from 'react';
import { connect} from 'react-redux';
import { Container, 
    Row, 
    Col,
    Button, 
    Card, 
    CardHeader,
    CardFooter,
    CardText, 
    CardImg, 
    CardImgOverlay 
} from 'reactstrap';


class PlayerDeck extends Component{
    constructor(props){
        super(props);
            this.state = {
            }
    }

    render(){
        const showCards = this.props.showCards 
        const showFightCards = {
            visibility: 'visible'
        }
        const hideFightCards = {
            visibility: 'hidden'
        }

        console.log(showCards); 


        return(
            <div>
                <div className = "player-deck d-flex flex-row">
                    <Card className = "player-deck-card m-2" style = {!showCards ? hideFightCards : showFightCards}>
                        <CardHeader className = "text-center">Armageddon Rifle</CardHeader>
                        <CardImg height="67%"  src = "assets/deck/weapons/armageddonrifle.jpg" />
                        <CardFooter>
                            <div>Damage: 50</div>
                            <div>Accuracy: 50</div>
                        </CardFooter>
                    </Card>
                    <Card className = "player-deck-card m-2" style = {!showCards ? hideFightCards : showFightCards}>
                        <CardHeader className = "text-center">Anti-matter Rifle</CardHeader>
                        <CardImg height="67%" src = "assets/deck/weapons/antimatterrifle.jpg" />
                        <CardFooter>
                            <div>Damage: 50</div>
                            <div>Accuracy: 25</div>
                        </CardFooter>
                    </Card>
                    <Card className = "player-deck-card m-2">
                        <CardImg height="100%" src = "assets/deck/scifi-texture.jpg" />
                    </Card>
                </div>
            </div>
        )
    }
              
}

export default PlayerDeck; 