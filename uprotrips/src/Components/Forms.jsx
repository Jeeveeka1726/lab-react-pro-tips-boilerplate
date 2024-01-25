import React, { useState } from 'react'
import "../Stlyes/Forms.css"

function Forms() {

    const [formData,setFormData] = useState({
        firstname : "",
        lastname : "",
        email : "",
        phoneNumber : ""
        })

    const [formError,setFormError] = useState({})
    const [fSubmit,setFSubmit] = useState(false)

    const handleInput = (e) => {
        let{name,value} = e.target
        setFormData({
            ...formData,
            [name] : value
        })
    }

    const formSubmit=(e)=>{
        e.preventDefault();
        let errors = validate(formData)
        setFormError(errors)

        let errorKey = Object.keys(errors);
        if (errorKey.length == 0){
            setFSubmit(true)
        }else{
            setFSubmit(false)
        }
    }

    const validate = (data) => {
        let error = {}
        if(data.firstname.trim() == ""){
           error.firstname = "Please Enter your First Name"
        }

        if(data.lastname.trim() == ""){
            error.lastname = "Please Enter your Last Name"
        }

        if(data.email.trim() == ""){
           error.email = "Please enter the correct email"
        }

        if(data.phoneNumber.trim() == "" || data.phoneNumber.trim().length != 10){
            error.phoneNumber = "Please enter the correct phone number"
        }

        return error;
    }

  return (
    <>
    <div className='form-parent'>
      <form id='main-form' onSubmit={formSubmit}>
        <div>
            {fSubmit && <h3> Registration Successful!</h3> }
        </div>
        <label htmlFor="firstname">First Name : </label>
        <input type="text" name='firstname' placeholder='Enter First Name' onChange={handleInput}/>
        {formError.firstname ? <p className='error-message'>{formError.firstname}</p> : ""}

        <label htmlFor="lastname">Last Name : </label>
        <input type="text" name='lastname' placeholder='Enter Last Name' onChange={handleInput}/>
        {formError.lastname ? <p className='error-message'>{formError.lastname}</p> : ""}

        <label htmlFor="email">Email : </label>
        <input type="email" name='email' placeholder='Enter Email' onChange={handleInput} />
        {formError.email ? <p className='error-message'>{formError.email}</p> : ""}

        <label htmlFor="phoneNumber">Phone Number : </label>
        <input type="number" name='phoneNumber' placeholder='Enter Phone Number' onChange={handleInput}/>
        {formError.phoneNumber ? <p className='error-message'>{formError.phoneNumber}</p> : ""}

        <input type="submit" value={"Register"} />
      </form>
    </div>
    </>
    
  )
}

export default Forms