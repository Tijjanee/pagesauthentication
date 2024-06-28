const RegisterValidation = (values)=>{
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
    if(values.password !== values.confirmpassword){
        ErrorMessage.confirmpassword = 'password does not match'
    }
    if(!values.name){
        ErrorMessage.name = 'name is required'
    }
    if(!values.age){
        ErrorMessage.age = 'age is required'
    }
    else if(values.age < 12){
        ErrorMessage.age = 'you are under-age'
    }
    else if(values.age >60){
        ErrorMessage.age = 'you are over-age'
    }
    if(!values.contact){
        ErrorMessage.contact = 'contact is required'
    }

    return ErrorMessage
}

export default RegisterValidation;