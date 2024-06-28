import { Link } from 'react-router-dom';
import './Form.css'
import { useState } from 'react';
import RegisterValidation from './RegisterValidation';

const Register = () => {

    const [User, setUser] = useState({
        email: '',
        password: '',
        confirmpassword: '',
        name: '',
        age: '',
        contact: ''
    })

    const [Errors, setErrors] = useState({})

    const [Modal, setModal] = useState(false)

    const HandleChange = (e)=>{
        const {name, value} = e.target
        setUser({
            ...User, [name]: value
        })
        console.log(User)
    }

    const HandleSubmit = (e)=>{
        e.preventDefault();
        setErrors(RegisterValidation(User))
        if(Object.keys(RegisterValidation(User)).length === 0){
            setModal(!Modal)
        }
    }

    const HandleModal = ()=>{
        setUser({
            email: '',
            password: '',
            confirmpassword: '',
            name: '',
            age: '',
            contact: ''
        })
    }


  return (
    <div className="container">
        <section className='form-section'>
            <form className="form-container">
                <div className="text-header">
                    <h1>Create an account</h1>
                </div>
                <div className="input-container">
                    <input type="text" name="name" placeholder="Enter your full name" onChange={HandleChange} value={User.name}/>
                </div>
                {Errors && (<div className='error-container'><p className='errors'>{Errors.name}</p></div>)}

                <div className="input-container">
                    <input type="email" name="email"  placeholder="Enter your email"  onChange={HandleChange} value={User.email}/>
                </div>
                {Errors && (<div className='error-container'><p className='errors'>{Errors.email}</p></div>)}

                <div className="input-container">
                    <input type="number" name="age"  placeholder="Enter your age"  onChange={HandleChange} value={User.age}/>
                </div>
                {Errors && (<div className='error-container'><p className='errors'>{Errors.age}</p></div>)}

                <div className="input-container">
                    <input type="number" name="contact"  placeholder="Enter your number"  onChange={HandleChange} value={User.contact}/>
                </div>
                {Errors && (<div className='error-container'><p className='errors'>{Errors.contact}</p></div>)}

                <div className="input-container">
                    <input type="password" name="password"  placeholder="Enter your password"  onChange={HandleChange} value={User.password}/>
                </div>
                {Errors && (<div className='error-container'><p className='errors'>{Errors.password}</p></div>)}

                <div className="input-container">
                    <input type="password" name="confirmpassword"  placeholder="Confirrm your password"  onChange={HandleChange} value={User.confirmpassword}/>
                </div>
                {Errors && (<div className='error-container'><p className='errors'>{Errors.confirmpassword}</p></div>)}

                <div className="btn-container">
                    <button className="btn" onClick={HandleSubmit}>Register</button>
                </div>
                <div className='account'>
                    <p>Already have an account ? <Link to="/Login" className='account-login'>login</Link></p>
                </div>

                {Modal && (
                    <div className='modal-container'>
                        <div className='modal'>
                            <h1>Your information has been recorded successfully</h1>
                            <button onClick={HandleModal}>ok</button>
                        </div>
                    </div>
                )}
            </form>
        </section>
    </div>
  )
}

export default Register;