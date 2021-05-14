import React from "react";
import './mascot.style.css';

const MascotComponent = (props) => {
    return (
        <React.Fragment key={props.mascot.id}>
            <tr className='mascot'>
                <td className='title'>{props.mascot.name}</td>
                <td className='title'>{props.mascot.race}</td>
                <td className='title'>{props.mascot.age}</td>
                
            </tr>
        </React.Fragment>
    );
}

export default MascotComponent;