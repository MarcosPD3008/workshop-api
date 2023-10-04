export const validateCedula = (cedula: string): boolean => {
    const pattern = /^[0-9]{3}-?[0-9]{7}-?[0-9]{1}$/;
    if (!pattern.test(cedula)) {
        return false;
    }

    // Remove dashes if present
    cedula = cedula.replace(/-/g, '');

    let sum = 0;
    const weights = [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1];

    for (let i = 0; i < 11; i++) {
        let product = parseInt(cedula.charAt(i), 10) * weights[i];
        if (product >= 10) {
            product = product.toString().split('').reduce((a, b) => parseInt(a.toString(), 10) + parseInt(b, 10), 0);
        }
        sum += product;
    }
    
    return sum % 10 === 0;
}

// Test the function