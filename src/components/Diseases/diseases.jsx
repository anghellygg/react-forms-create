import React from "react";
import './diseases.style.css';

const DiseaseComponent = (props) => {
    return (
        <React.Fragment key={props.disease.id}>
            <tr className='disease'>
                <td className='title'>{props.disease.name}</td>
                <td className='title'>{props.disease.description}</td>
            </tr>
        </React.Fragment>
    );
}

export default DiseaseComponent;