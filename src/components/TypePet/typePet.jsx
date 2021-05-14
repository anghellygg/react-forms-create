import React from "react";
import MascotComponent from "../Mascot/mascot";
import './typePet.style.css';

const TypePetComponent = (props) => {
    return (
        <React.Fragment key='0'>
          {
            props.theGodfatherList.map((faction, index)=> {
              return (
                <React.Fragment key={faction.id}>
                  <tr className='typePet'>
                    <th colSpan='3' className='faction'>{faction.name}</th>
                  </tr>
                  <tr className='typePet'>
                    <th>Name</th>
                    <th>Race</th>
                    <th>Age</th>
                  </tr>
                  
                  {
                    faction.typePet.map((mascot, index)=> {
                      return (
                        <React.Fragment key={mascot.id}>
                          <MascotComponent mascot={mascot}/>
                        </React.Fragment>
                      );
                    })
                  }
                  
                </React.Fragment>
              );
              
            })
          }
          
        </React.Fragment>
    );
}

export default TypePetComponent;