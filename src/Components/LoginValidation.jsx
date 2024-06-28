const LoginValidation = (values)=>{
    const ErrorMessage = {};

    if(!values.email){
        ErrorMessage.email = 'Email is required'
    }
    else if(!/\S+@\S+\.\S+/.test(values.email)){
        ErrorMessage.email = 'Email is not valid'
    }
    if(!values.password){
        ErrorMessage.password = 'password is required'
    }
    else if(values.password.length < 5){
        ErrorMessage.password = 'password should be morethan 4 characters'
    }
    if(values.password.length > 15){
        ErrorMessage.password = 'password should be lessthan 16 characters'
    }

    return ErrorMessage
}

export default LoginValidation;