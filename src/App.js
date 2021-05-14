import { useState } from "react";
import './App.css';
import MascotFilterComponent from "./components/filter/mascotFilter";
import TypePetComponent from "./components/TypePet/typePet";
import DiseaseFilterComponent from "./components/filter/diseaseFilter";
import DiseaseTypeComponent from "./components/Diseases-Type/diseaseType";
import  pets from './img/pets.png';

let theGodfatherList = [
    {
      id: 'f1',
      name: 'Dog',
      typePet: [
        {
          id:'f1a1',
          name: 'Pepe',
          race: 'Criollo',
          age: 4
        },
        {
          id:'f1a2',
          name: 'Matias',
          race: 'Pastor Aleman',
          age: 3
        },
        {
          id:'f1a3',
          name: 'Toby',
          race: 'Pinche',
          age: 6
        },
        {
          id:'f1a4',
          name: 'Tom ',
          race: 'Pinche',
          age: 2
        },
        {
          id:'f1a5',
          name: 'Malco',
          race: 'Bulldog',
          age: 3
        }
      ]
    },
    {
      id: 'f2',
      name: 'Cat',
      typePet: [
        {
          id:'f2a1',
          name: 'lulu',
          race: 'Persa',
          age: 4
        },
        {
          id:'f2a2',
          name: 'Bruno',
          race: 'Siamés',
          age: 2
        },
        {
          id:'f2a3',
          name: 'Luna,',
          race: 'Ragdoll',
          age: 1
        }
      ]
    }
];


let diseaseList = [
  {
    id: 'f1',
    type: 'Dog',
    disease: [
      {
        id:'f1a1',
        name: 'Moquillo',
        description: 'El moquillo afecta al aparato digestivo y al aparato respiratorio de los perros.​',
      },
      {
        id:'f1a2',
        name: 'Rabia',
        description: 'Esta grave enfermedad está provocada por un virus que entra en el cuerpo a través de una mordedura o de una herida contaminada por la saliva de un animal infectado.​',
      },
    ]
  },
  {
    id: 'f2',
    type: 'Cat',
    disease: [
      {
        id:'f1a4',
        name: 'La Tiña',
        description: 'Se trata de una infección cutánea provocada por varios tipos de hongos presentes en la tierra y en la piel de los seres humanos y de las mascotas.',
      },
      {
        id:'f1a1',
        name: 'La toxoplasmosis',
        description: 'Esta enfermedad se contrae después de entrar en contacto con un parásito presente en las heces de los gatos.',
      },
    ]
  },
  
];


function App() {

  const [typePet, setTypePet] = useState(theGodfatherList);

  const [disease, setDisease] = useState(diseaseList);

  return (
    <div className="App">
      
      <img alt="pets" src={pets} />
      <br/>
      <div className='data-container'>
        <div className='first-container'>
          <div className='filter-container'>
            <MascotFilterComponent
              onMascot={(mascotObj, selectedTypePet) =>{
                const newTypePet = [];
                for(let i =0; i < typePet.length; i++) {
                  if(typePet[i].id !== selectedTypePet) {
                    newTypePet.push(typePet[i]);
                  }else {
                    newTypePet.push(
                      {
                        ...typePet[i], 
                        typePet:[...typePet[i].typePet, mascotObj]
                      }
                    );
                  }
                }
                setTypePet(newTypePet);
              }} 
            />
          </div>
          <div className='table-container'>
          <table className="table2">
            <tbody>
              <TypePetComponent theGodfatherList={typePet} />
            </tbody>
          </table>
          </div>
        </div>
        <div className='second-container'>
          <div className='filter-container'>
            <DiseaseFilterComponent 
              onDisease={(onDisease, diseaseType) =>{
                const newDisease = [];
                for(let i =0; i < disease.length; i++) {

                  if(disease[i].id !== diseaseType) {
                    newDisease.push(disease[i]);
                  }else {
                    newDisease.push(
                      {
                        ...disease[i], 
                        disease:[...disease[i].disease, onDisease]
                      }
                    );
                  }
                }
                setDisease(newDisease);
              }} 
            />
          </div>
          <div className='table-container'>
          
          <table className="table2">
            <tbody>
              <DiseaseTypeComponent diseaseList={disease}/>
            </tbody>
          </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
