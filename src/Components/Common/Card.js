import React from 'react';


const Card = (props) =>{
    return(
        <View style={styles.containerStyle}>
            {props.children}
        </View> 
    );
};
