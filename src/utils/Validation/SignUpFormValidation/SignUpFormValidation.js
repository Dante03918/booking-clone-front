
export const checkValidity = (value, type) => {

    let isValid = true;

    if (type === 'name') {
        isValid = value.length > 6 && isValid
    }
    if (type === 'surname') {
        isValid = value.length > 5 && isValid
    }
    if (type === 'email') {
        const emailPattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;
        isValid = emailPattern.test(value);
    }
    if (type === 'age') {
        isValid = !isNaN(value) && value > 0 && value < 100
    }
    return isValid;
}