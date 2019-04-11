import { departmentsArray, categoriesArray, productsArray, product } from '../storage/storage';

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
    fetch(`${apiRoot}/products?limit=200`)
        .then((rawInfo) => {
            return rawInfo.json();
        })
        .then((products) => {
            callback(products.rows);
        });
}

function getProductById(productId: string | null, callback: (result: product) => void) {
    fetch(`${apiRoot}/products/${productId}`)
        .then((rawInfo) => {
            return rawInfo.json();
        })
        .then((productsById) => {
            callback(productsById.rows);
            console.log(productsById);
        });
}

function getProductsByDepartment(departmentId: number, callback: (result: productsArray) => void) {
    fetch(`${apiRoot}/products/inDepartment/${departmentId}`)
        .then((rawInfo) => {
            return rawInfo.json();
        })
        .then((productsByDepartment) => {
            callback(productsByDepartment.rows);
        });
}

function getProductsByCategory(categoryId: number, callback: (result: productsArray) => void) {
    fetch(`${apiRoot}/products/inCategory/${categoryId}`)
        .then((rawInfo) => {
            return rawInfo.json();
        })
        .then((productsByCategory) => {
            callback(productsByCategory.rows);
        });
}

export default {
    getDepartments,
    getCategories,
    getProducts,
    getProductById,
    getProductsByDepartment,
    getProductsByCategory
};