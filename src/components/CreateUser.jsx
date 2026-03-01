import { useState } from "react";

const CreateUser = ({ newId, onAdd } ) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');
    const [phone, setPhone] = useState('');
    const [gender, setGender] = useState('');
    const [birthDate, setBirthDate] = useState('')
    //age phone gender bd

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newUser = {
            id: newId,
            firstName: firstName,
            lastName: lastName,
            age: age,
            phone: phone,
            gender: gender,
            birthDate: birthDate
        }
        onAdd(newUser)
        console.log(newUser.id)
        }
    


    return (
        <div >
            <form name="newUser" className="newCard">
                <label >First Name:</label>
                <input value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
                
                <label>Last Name:</label>
                <input value={lastName} onChange={(e)=>setLastName(e.target.value)} />
                
                <label>Age:</label>
                <input value={age} onChange={(e)=>setAge(e.target.value)} />
                
                <label>Phone:</label>
                <input value={phone} onChange={(e)=>setPhone(e.target.value)} />
                
                <label>Gender Preference:</label>
                <input value={gender} onChange={(e)=>setGender(e.target.value)} />
                
                <label>Birth Date:</label>
                <input value={birthDate} onChange={(e)=>setBirthDate(e.target.value)} />

                <button type="button" onClick={handleSubmit}>Add User </button>

            </form>

        </div>
    )

}

export default CreateUser;