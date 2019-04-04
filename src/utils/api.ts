import { departmentsArray, categoriesArray, productsArray } from '../storage/storage';

const apiRoot = 'https://backendapi.turing.com';
const imagesRoot = 'https://backendapi.turing.com/images/products/';

function getDepartments(callback: (result: departmentsArray) => void) {
    fetch(`${apiRoot}/departments`)
        .then((rawInfo) => {
            return rawInfo.json();
        })
        .then((departments) => {
            callback(departments);
        });
}

function getCategories(callback: (result: categoriesArray) => void) {
    fetch(`${apiRoot}/categories`)
        .then((rawInfo) => {
            return rawInfo.json();
        })
        .then((categories) => {
            callback(categories.rows);
        });
}

function getProducts(callback: (result: productsArray) => void) {
    fetch(`${apiRoot}/products`)
        .then((rawInfo) => {
            return rawInfo.json();
        })
        .then((products) => {
            callback(products.rows);
        });
}

export default {
    getDepartments,
    getCategories,
    getProducts
};