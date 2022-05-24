function arrayOfProducts(array) {
    const products = [];
    for (let i = 0; i < array.length; i++) {
        let total = 1;
        for (let j = 0; j < array.length; j++) {
            if (j != i) total = array[j] * total;
        }
        products.push(total);
    }
    return products;
}
// Do not edit the line below.
exports.arrayOfProducts = arrayOfProducts;


function arrayOfProducts(array) {
    const products = new Array(array.length).fill(1);
    let left = 1;
    let right = 1;
    for (let i = 0; i < array.length; i++) {
        products[i] = left;
        left *= array[i];
    }
    for (let i = array.length - 1; i >= 0; i--) {
        products[i] *= right;
        right *= array[i];
    }
    return products;
}
// Do not edit the line below.
exports.arrayOfProducts = arrayOfProducts;