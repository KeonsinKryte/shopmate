import { observable, toJS, action } from 'mobx';

import api from '../utils/api';

export type product = {name: string, product_id: number, description: string, price: number, discounted_price: number | null, image: string, image2: string, thumbnail: string}[];

export type departmentsArray = { name: string, department_id: number }[];
export type categoriesArray = { name: string, category_id: number, department_id: number }[];
export type productsArray = { name: string, price: string, discounted_price: number | null, thumbnail: string, product_id: number }[];

class Storage {

    @observable departments: departmentsArray | null = null;
    @observable loadingDepartments: boolean = false;

    @observable categories: categoriesArray | null | false = null;

    @observable productsFiltered: productsArray | null | false | undefined = null;

    @observable products: productsArray | null | false | undefined = null;
    @observable loadingProducts: boolean = false;

    @observable currentDepartment: number | null = null;
    @observable currentCategory: number | null = null;

    @observable product: product | null = null;

    @action getDepartments() {
        if (this.loadingDepartments || this.departments) return;

        var departmentsLocal = localStorage.getItem('departments');
        var departmentsLocalTime = localStorage.getItem('departments-time');

        if (departmentsLocal && departmentsLocalTime && Date.now() - parseInt(departmentsLocalTime) < 7 * 24 * 60 * 60 * 1000) {
            this.departments = JSON.parse(departmentsLocal);
            return;
        }

        this.loadingDepartments = true;
        var callback = (result: departmentsArray) => {
            localStorage.setItem('departments', JSON.stringify(toJS(result)));
            localStorage.setItem('departments-time', Date.now() + '');

            this.departments = result;
            this.loadingDepartments = false;
        }
        api.getDepartments(callback);
    }

    @action setDepartment(id: number) {
        this.currentDepartment = id;
        this.currentCategory = null;
    }

    @action getCategories() {
        if (this.categories != null) return;

        this.categories = false;
        api.getCategories((result: categoriesArray) => {
            this.categories = result;
        });
    }

    @action setCategory(id: number) {
        this.currentCategory = id;
    }

    @action getProducts() {
        if (this.loadingProducts || this.products) return;

        var productsLocal = localStorage.getItem('products');
        var productsLocalTime = localStorage.getItem('products-time');

        if (productsLocal && productsLocalTime && Date.now() - parseInt(productsLocalTime) < 24 * 60 * 60 * 1000) {
            this.products = JSON.parse(productsLocal);
            return;
        }

        var callback = (result: productsArray) => {
            localStorage.setItem('products', JSON.stringify(toJS(result)));
            localStorage.setItem('products-time', Date.now() + '');

            this.products = result;
            this.loadingProducts = false;
        }
        api.getProducts(callback);
    }

    @action getProductById(product_id: string | null) {
        var callback = (result: product) => {
            this.product = result;
        }
        api.getProductById(product_id, callback);
    }

    @action getProductsByDepartment(department_id: number) {
        var callback = (result: productsArray) => {
            this.products = result;
        }
        api.getProductsByDepartment(department_id, callback);
    }

    @action getProductsByCategory(category_id: number) {
        var callback = (result: productsArray) => {
            this.products = result;
        }
        api.getProductsByCategory(category_id, callback);
    }
}

const storage = new Storage();

export default storage;