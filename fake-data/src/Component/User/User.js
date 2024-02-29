import React from 'react';
import './User.css';


const User = (props) => {
    const {name, email, phone, photo, price} = props.data;
    return (
        <div className='user_info'>
            <img src={photo} alt="" />
            <div className="section_main">
                <h1 className='user_name'>{name}</h1>
                <h3>email:<small className='email_text'> {email}</small></h3>
                <h3>Phone:<small> {phone}</small></h3>
                <h3>Yearly Salary: <small>{price}$</small> </h3>
                <button className='btn_menu' onClick={() => props.handleClick(props.data)}>Add Friend</button>
                <button>Show Number</button>
            </div>
        </div>
    );
   
};

export default User;