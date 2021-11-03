
export const checkValidity = (value, type) => {

    let isValid = true;
    let error = '';

    if (type === 'name') {
        isValid = value.length > 6 && isValid;
        error = 'Name is too short';
    }
    if (type === 'surname') {
        isValid = value.length > 5 && isValid;
        error = 'Surname is too short';
    }
    if (type === 'email') {
        const emailPattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;
        isValid = emailPattern.test(value);
        error = 'Email is invalid'
    }
    if (type === 'age') {
        isValid = !isNaN(value) && value > 0 && value < 100;
        error = 'Age must be a number'
    }

    if (type === 'password') {
        isValid = value.length > 8;
        error = 'Password should have more than 8 characters'
    }
    return {isValid, error};
}