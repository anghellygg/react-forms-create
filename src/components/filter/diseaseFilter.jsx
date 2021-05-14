import { useState } from "react";
import './filter.style.css';

const DiseaseFilterComponent = (props) => {

    const [diseaseType, setDiseaseType] = useState('f1');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const [nameValidator, setNameValidator] = useState('');
    const [descriptionValidator, setDescriptionValidator] = useState('');

    let validate = true;
    const addDisease = () => {
        if(name == null || name =='' || name ==' '){
            validate = false;
            setNameValidator("Name required");
        }else {
            setNameValidator("");
        }

        if(description == null || description =='' || description ==' '){
            validate = false;
            setDescriptionValidator("description required");
        }else {
            setDescriptionValidator("");
        }
        
        console.log('name: ' + name);
        console.log('description: ' + description);

        if(validate == true){
            const newDisease = {
                id: name,
                name: name,
                description: description,
            };
            props.onDisease(newDisease, diseaseType);
        }
        
    }

    return (
        <table className="table">
            <tbody>
                <tr className='filter'>
                    <td>Disease Type</td>
                    <td>
                        <select value={diseaseType} onChange={(event)=> {setDiseaseType(event.target.value)}} >
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
                    <td>description</td>
                    <td>
                        <input type='text' value={description} onChange={(event)=> {setDescription(event.target.value)}} />
                        <span className='error'>{descriptionValidator}</span>
                    </td>
                </tr>
                <tr className='filter'>
                    <td colSpan='2'>
                        <button type='button' onClick={addDisease}>Add Disease</button>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

export default DiseaseFilterComponent;