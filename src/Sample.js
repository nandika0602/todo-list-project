import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faPlus } from '@fortawesome/free-solid-svg-icons'


const Sample = () => {
    const [fname, setfName] = useState('');
    const [mname, setmName] = useState('');
    const [lname, setlName] = useState('');
    const [gender, setGender] = useState('');
    const [phone, setPhone] = useState('');
    const [marital, setMarital] = useState('')
    const [contact, setContact] = useState([])
    const [join, setJoin] = useState('');
    const [list, setList] = useState([])

    const addTask = () =>{
        setList([...list, {
            fname,
            mname,
            lname,
            gender,
            phone,
            marital,
            join,
            contact
        }])
        setfName('');
        setmName('');
        setlName('');
        setGender('');
        setPhone('');
        setMarital('');
        setJoin('');
        setContact([]);
    }

    return (
        <div className="text-center">
            <div>
                <h1>INPUT {fname}-{mname}-{lname}</h1>
                <input type="text" value={fname} onChange={(e) => {setfName(e.target.value)}} />
                <input type="text" value={mname} onChange={(e) => {setmName(e.target.value)}} />
                <input type="text" value={lname} onChange={(e) => {setlName(e.target.value)}} />
            </div>
            <div>
                <h1>RADIO {gender}</h1>
                <input type="radio" name="gender" checked={gender === 'Male'} value="Male" onChange={(e) => setGender(e.target.value)}/> Male
                <input type="radio" name="gender" checked={gender === 'Female'} value="Female" onChange={(e) => setGender(e.target.value)}/> Female
                <input type="radio" name="gender" checked={gender === 'Others'} value="Others" onChange={(e) => setGender(e.target.value)}/> Others
            </div>
            <div>
                <h1>INPUT {phone}</h1>
                <input type="number" value={phone} onChange={(e) => {setPhone(e.target.value)}} />
            </div>
            <div>
                <h1>OPTION DROPDOWN {marital}</h1>
                <select value={marital} onChange={(e) => {setMarital(e.target.value)}}>
                    <option>Select your Marital Status</option>
                    <option>Married</option>
                    <option>Unmarried</option>
                </select>
            </div>
            <div>
                <h1>CHECKBOX {contact}</h1>
                <input type="checkbox" value="email" checked={contact.includes("email")} onChange={(e) =>{ e.target.checked ? setContact([...contact, e.target.value]) : setContact(contact.filter((v) => v !== e.target.value))}}/> email
                <input type="checkbox" value="phone" checked={contact.includes("phone")} onChange={(e) =>{ e.target.checked ? setContact([...contact, e.target.value]) : setContact(contact.filter((v) => v !== e.target.value))}}/> phone
            </div>
            <div>
                <h1>RADIO {join}</h1>
                <input type="radio" name="join" checked={join === 'Yes'} value="Yes" onChange={(e) => setJoin(e.target.value)}/> Yes
                <input type="radio" name="join" checked={join === 'No'} value="No" onChange={(e) => setJoin(e.target.value)}/> No
            </div>
            <button className="bg-green-600 text-white mt-3 px-4 py-1 rounded-lg" onClick={() => addTask()}><FontAwesomeIcon icon={faPlus} /></button>
            <div>
                {list.map((val) => {
                   return <li>{val.fname + val.mname + val.lname + val.gender + val.phone + val.marital + val.join + val.contact}</li>
                })}
            </div>
        </div>
    )
}

export default Sample;