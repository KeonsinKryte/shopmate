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
    fetch(`${apiRoot}/products?limit=200`)
        .then((rawInfo) => {
            return rawInfo.json();
        })
        .then((products) => {
            callback(products.rows);
        });
}

function getProductsById(DepartmentId: number, callback: (result: productsArray) => void) {
    fetch(`${apiRoot}/products/inDepartment/${DepartmentId}`)
        .then((rawInfo) => {
            return rawInfo.json();
        })
        .then((productsById) => {
            callback(productsById.rows);
        });
}

function getProductsByCategory(CategoryId: number, callback: (result: productsArray) => void) {
    fetch(`${apiRoot}/products/inCategory/${CategoryId}`)
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
    getProductsById,
    getProductsByCategory
};