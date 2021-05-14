import { useState } from "react";
import './filter.style.css';

const MascotFilterComponent = (props) => {

    const [typePet, setTypePet] = useState('f1');
    const [name, setName] = useState('');
    const [race, setRace] = useState('');
    const [age, setAge] = useState('');

    const [nameValidator, setNameValidator] = useState('');
    const [raceValidator, setRaceValidator] = useState('');
    const [ageValidator, setAgeValidator] = useState('');

    let validate = true;
    const addMascot = () => {
        if(name == null || name =='' || name ==' '){
            validate = false;
            setNameValidator("Name required");
        }else {
            setNameValidator("");
        }

        if(race == null || race =='' || race ==' '){
            validate = false;
            setRaceValidator("race required");
        }else {
            setRaceValidator("");
        }

        if(age == null || age <= 0){
            validate = false;
            setAgeValidator("age must be greater than 0");
        }else {
            setAgeValidator("");
        }
        
        console.log('name: ' + name);
        console.log('race: ' + race);
        console.log('age: ' + Number(age));
        if(validate == true){
            const newMascot = {
                id: name,
                name: name,
                race: race,
                age: Number(age)
            };
            props.onMascot(newMascot, typePet);
        }
        
    }

    return (
        <table className="table">
            <tbody>
                <tr className='filter'>
                    <td>TypePet</td>
                    <td>
                        <select value={typePet} onChange={(event)=> {setTypePet(event.target.value)}} >
                            <option value="f1">Dog</option>
                            <option value="f2">Cat</option>
                        </select>
                    </td>
                </tr>
                <tr className='filter'>
                    <td>Name</td> 
                    <td>
                        <input type='text' value={name} onChange={(event)=> {setName(event.target.value)}} />
                        <span className='error'>{nameValidator}</span>
                    </td>
                </tr>
                <tr className='filter'>
                    <td>race</td>
                    <td>
                        <input type='text' value={race} onChange={(event)=> {setRace(event.target.value)}} />
                        <span className='error'>{raceValidator}</span>
                    </td>
                </tr>
                <tr className='filter'>
                    <td>age</td>
                    <td>
                        <input type='number' value={age} onChange={(event)=> {setAge(event.target.value)}} />
                        <span className='error'>{ageValidator}</span>
                    </td>
                </tr>
                <tr className='filter'>
                    <td colSpan='2'>
                        <button type='button' onClick={addMascot}>Add mascot</button>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

export default MascotFilterComponent;