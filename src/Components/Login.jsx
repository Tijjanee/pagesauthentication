import './Form.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import LoginValidation from './LoginValidation';

const Login = () => {

    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const [Errors, setErrors] = useState({})

    const HandleChange = (e)=>{
        const {name, value} = e.target
        setValues({
            ...values, [name]: value
        })
        console.log(values)
    }

    const HandleSubmit = (e)=>{
        e.preventDefault();
        setErrors(LoginValidation(values))
        if(Object.keys(LoginValidation(values)).length === 0){
            alert('you signed in')
        }
    }

  return (
    <div className="container">
        <section className='form-section'>
            <form className="form-container">
                <div className="text-header">
                    <h1>Sign in</h1>
                </div>
                <div className="input-container">
                    <input type="email" name="email"  placeholder="Enter your email" value={values.email} onChange={HandleChange}/>
                </div>
                {Errors && (<div className='error-container'><p className='errors'>{Errors.email}</p></div>)}

                <div className="input-container">
                    <input type="password" name="password"  placeholder="Enter your password" value={values.password} onChange={HandleChange}/>
                </div>
                {Errors && (<div className='error-container'><p className='errors'>{Errors.password}</p></div>)}

                <div className="btn-container">
                    <button className="btn" onClick={HandleSubmit}>Login</button>
                </div>
                <div className='account'>
                    <p>Don't have an account ? <Link to="/Register" className='account-register'>Register</Link></p>
                </div>
            </form>
        </section>
    </div>
  )
}

export default Login;