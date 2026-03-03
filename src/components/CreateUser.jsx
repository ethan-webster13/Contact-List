import { useState } from "react";

const CreateUser = ({ newId, onAdd } ) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');
    const [phone, setPhone] = useState('');
    const [gender, setGender] = useState('');
    const [birthDate, setBirthDate] = useState('')
    
    //Validation Checks
    const phoneRegex = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
    

    const isPhoneValid = phoneRegex.test([phone])
    const isAgeValid = age >= 13 && age <100;
    const isNameValid = (firstName.length > 2 && lastName.length > 2)

    //const isPhoneValid = 

    console.log('Phone is: ' +isPhoneValid)
   

    

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

        setFirstName('');
        setLastName('');
        setAge('');
        setPhone('');
        setGender('');
        setBirthDate('');
        
        console.log(newUser.id) //making sure id is being passed properly
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