import type { FormFields } from "../types";

const validateEmail = (email: string) => {
    const emailRegExp = /^[\w.!#$%&'*+/=?^`{|}~-]+@[a-z\d-]+(?:\.[a-z\d-]+)*\.[a-z]{2,}$/i; // np. example@gmail.com | muszą być przynajmniej 2 LITERY po gmail
    return email.length > 0 && emailRegExp.test(email);
}

export const validateContactForm = (data: FormFields) => {
    const array = Object.entries(data);
    let valid = true;

    array.forEach((entry) => {
        const crop: string = entry[1].trim();
        valid = crop.length > 0 ? valid : false;
    })

    if(!valid){
        return false;
    }

    const isEmailValid = validateEmail(data.email.trim());    
    
    if(!isEmailValid){
        return false;
    }

    return true;
}