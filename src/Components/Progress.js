import React from 'react';

function Progress(props){

   return(

     <div className = "text-center"> 
         <div id = "bars" name = "progress">
            Your Health {props.health}
            <progress id = "userHealth" value = {props.health} max = "500"></progress>
            Your Action Points {props.ap}
            <progress id = "actionPoints" value = {props.ap} max = "100"></progress>
            {"Alien's Health"} <br/> {props.ahealth}
            <progress id = "alienHealth" value = {props.ahealth} max = "1000"></progress>
            {"Alien's Action Points"}  <br/> {props.aap}
            <progress id = "a_actionPoints" value = {props.aap} max = "50"></progress>
          </div>
      </div>  


   )

}

export default Progress; 







