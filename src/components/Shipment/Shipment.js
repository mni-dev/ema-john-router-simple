import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipment = () => {
    const [user] = useAuthState(auth);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    // const navigate = useNavigate();

    const handleNameBlur= event =>{
          setName(event.target.name);  
    }

    const handleEmailBlur = event =>{
        setEmail(event.target.value);
    }

    const handleAddressBlur = event =>{
        setAddress(event.target.value);
    }

    const handlePhoneBlur = event =>{
        setPhone(event.target.value);
    }

    const handleCreateUser = event => {
        event.preventDefault();
    }

    return (
        <div className='form-container'>
        <div>
            <h2 className='form-title'>Shipping Information</h2>
            <form onSubmit={handleCreateUser} >
                <div className="input-group">
                    <label htmlFor="name">Name</label>
                    <input onBlur={handleNameBlur} type="text" name="name" id="name" required/>
                </div>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input value={user?.email} readOnly type="email" name="email" id="email" required/>
                </div>
                <div className="input-group">
                    <label htmlFor="address">Address</label>
                    <input onBlur={handleAddressBlur} type="text" name="address" id="address" required/>
                </div>
                <div className="input-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input onBlur={handlePhoneBlur} type="number" name="number" id="number" required/>
                </div>
                <p style={{color:'red'}}>{error}</p>
                <input className='form-submit' type="submit" value="Sign Up" />
            </form>
             
        </div>
    </div>
    );
};

export default Shipment;