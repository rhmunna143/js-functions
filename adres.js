function findAddress(obj) {
    if (typeof obj !== "object" || obj === null) {
        return 'Input must be a object with property and value.';
    }

    const properties = Object.keys(obj);
    const values = [];

    for (let i = 0; i < 3; i++) {
        const property = properties[i];
        values.push(obj[property] || "__");
    }

    return values.join(', ');
}
