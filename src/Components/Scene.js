import React, {Component} from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import {Link} from 'react-router-dom'; 

class Scene extends Component{

    render(){
        return(
            <ListView
                dataSource = {this.dataSource}
                renderRow = {this.renderRow}
            />
        );
    }
}

const mapStateToProps = state =>{
    return { libraries: state.libraries };

}

//mapStateToProps takes our global state object, our app's state, maps it, take the properties and provides them as props to our library list

export default connect(mapStateToProps)(Scene); 
