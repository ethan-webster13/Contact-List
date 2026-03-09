import { useEffect, useState } from "react";

const CreateUser = ({ newId, onAdd } ) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');
    const [phone, setPhone] = useState('');
    const [gender, setGender] = useState('');
    const [birthDate, setBirthDate] = useState('')

    const [month, setMonth] = useState('')
    const [day, setDay] = useState('');
    const [year, setYear] = useState('')
 
    //age phone gender bd
    useEffect(()=> {

    if (month && day && year) {
        setBirthDate(`${month}/${day}/${year}`);
    }
    }, [month, day, year]);
        
        


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
        const phoneRegex = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
        //const emailRegex = ;
        const isNameValid = (firstName.length > 0 && lastName.length > 0)
        const isPhoneValid = phoneRegex.test(phone) ;
        const isAgeValid = age >13 && age <100 && age !==NaN


            if (isNameValid && isAgeValid)

             onAdd(newUser)
                console.log(isPhoneValid)
        }

        const handlePhoneChange = (e) => {
            const input = e.target.value;
            const cleaned = input.replace(/\D/g, '');

            const area = cleaned.slice(0,3);
            const first = cleaned.slice(3,6);
            const last = cleaned.slice(6,10)

            let cleanedPhone = '';
          
            if (cleaned.length > 6) {
                cleanedPhone = `${area}-${first}-${last}`
            } else if (cleaned.length > 3) {
                cleanedPhone = `${area}-${first}`
            } else {
                cleanedPhone = `${area}`
            }

            setPhone(cleanedPhone)
        }

       
        const months = [];
            for (let m = 1; m <= 12; m++) {
                months.push(<option key={m} value={m}>{m}</option>)
            }

        const days = [];
            for (let i = 1; i <= 31; i++) {
             days.push(<option key={i} value={i}>{i}</option>);
            }

        const yearOptions =[];
        const currentYear = new Date().getFullYear();
        for (let j = currentYear; j >= 1920; j--)
            yearOptions.push(<option key={j} value={j}>{j}</option>)

       

    


    return (
        <div >
            <form name="newUser" className="newCard">
                <label >First Name:</label>
                <input value={firstName} onChange={(e)=>setFirstName(e.target.value)} required/>
                
                <label>Last Name:</label>
                <input value={lastName} onChange={(e)=>setLastName(e.target.value)} required/>
                
                <label>Age:</label>
                <input value={age} onChange={(e)=>setAge(e.target.value)} required/>
                
                <label>Phone:</label>
                <input value={phone} onChange={(e) =>handlePhoneChange(e)} placeholder="xxx-xxx-xxxx" required/>
                
                <label>Gender Preference:</label>
                <select  value={gender} onChange={(e)=>setGender(e.target.value)}>
                    <option value={""} disabled >Select Gender</option>
                    <option value={'Male'}>Male</option>
                    <option value={'Female'}>Female</option>
                    <option value={'Non-Binary'}>Non-Binary</option>
                    <option value={'Prefer not to say'}>Prefer not to say</option>
                </select>
                
                <label style={{gridColumn: 'span 2'}}>Birth Date:</label>
                
                <label>Month:</label>
                <select value={month} onChange={(e)=> setMonth(e.target.value)}>
                    <option value=""></option>
                    {months}
              

                </select>
                <label>Days:</label>
                <select value={day} onChange={(e)=>setDay(e.target.value)}>
                    <option value="" ></option>
                    {days}
                </select> 
                <label>Years:</label>

                <select value={year} onChange={(e)=> setYear(e.target.value)}>
                    <option value=""></option>
                    {yearOptions}

                </select>




                <button type="button" onClick={handleSubmit} style={{gridColumn: 'span 2'}}>Add User </button>

            </form>

        </div>
    )

}

export default CreateUser;