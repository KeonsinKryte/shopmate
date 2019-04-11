import React, { Component, useState } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';

const imagesRoot = 'https://backendapi.turing.com/images/products/';

import Storage from '../../storage/storage';
import './_Product.scss';
import storage from '../../storage/storage';
import ProductThumbnail from '../Product-Thumbnail/Product-Thumbnail';
import ProductDetails from '../Product-Details/Product-Deatails';

class Product extends React.Component<RouteComponentProps<any>> {
    constructor(props: any) {
        super(props);
        let search = new URLSearchParams(this.props.location.search);
        let productId = search.get('id');
        console.log(productId);

        if (Storage.products && productId != null) {
            Storage.productsFiltered = Storage.products.filter(function (elem) {
                let id = elem.product_id + '';
                return id == productId;
            });
        }
    }


    render() {
        return (
            <div className="product__container">
                {storage.productsFiltered && storage.productsFiltered.map((products) => {
                    return <ProductDetails
                        name={products.name}
                        product_id={products.product_id}
                        discounted_price={products.discounted_price}
                        thumbnail={`${imagesRoot}/${products.thumbnail}`}
                        price={products.price} />;
                })}
            </div>
        );
    }
}

export default withRouter(Product);