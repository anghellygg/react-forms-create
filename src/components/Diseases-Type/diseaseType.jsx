import React from "react";
import DiseaseComponent from "../Diseases/diseases";
import './diseaseType.style.css';


const DiseaseTypeComponent = (props) => {
    return (
        <React.Fragment key='0'>
          {
            props.diseaseList.map((diseaseType, index)=> {
              return (
                <React.Fragment key={diseaseType.id}>
                  <tr className='diseaseType'>
                    <th colSpan='2' className='type'>{diseaseType.type}</th>
                  </tr>
                  <tr className='diseaseType'>
                    <th>Name</th>
                    <th>Description</th>
                  </tr>
                  
                  {
                    diseaseType.disease.map((disease, index)=> {
                      return (
                        <React.Fragment key={disease.id}>
                          <DiseaseComponent disease={disease}/>
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

export default DiseaseTypeComponent;