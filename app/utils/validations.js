export const REGEX = {
    EMAIL: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    PASSWORD: /^[a-zA-Z0-9!@#$%^&*]{6,16}$/
}

export const validateEmail= (email) => {
    let regex = REGEX.EMAIL;
    if(email == ''){
        return 'Email Id cannot be empty';
    } else if (!regex.test(email)) {
        return 'Are you sure you entered the valid email?';
    } else {
        return '';
    }
}

export const validatePassword = (password) => {
    let regex = REGEX.PASSWORD;
    if(password == ''){
        return 'Password cannot be empty';
    } else if(!regex.test(password)){
        return 'Please enter password with minimum 6 characters';
    } else {
        return '';
    }
}

export const validateName = (name) => {
    let regex = /^[a-zA-Z0-9]+$/;
    if(!regex.test(name)){
        return 'This field can only contain “Alphanumeric” values. Please try again.';
    } else {
        return '';
    }
}