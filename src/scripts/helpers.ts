import type { FormFields } from "../types";

const validateEmail = (email: string) => {
    const emailRegExp = /^[\w.!#$%&'*+/=?^`{|}~-]+@[a-z\d-]+(?:\.[a-z\d-]+)*\.[a-z]{2,}$/i; // np. example@gmail.com | there MUST be atleast two letters after @gmail.
    return email.length > 0 && emailRegExp.test(email);
}

const validatePhone = (phone: string) => {
    const phoneRegExp = /^(\+?\d{2}|00\d{2})?\s?([0-9]{3}\s[0-9]{3}\s[0-9]{3}|[0-9]{9})$/;
    return phone.length > 0 && phoneRegExp.test(phone);
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
    const isPhoneValid = validatePhone(data.phone.trim());
    
    if(!isEmailValid || !isPhoneValid){
        return false;
    }

    return true;
}