import React, { useState, Component } from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';

import './_Store.scss';
import storage from '../../storage/storage';
import ProductThumbnail from '../Product-Thumbnail/Product-Thumbnail';

const imagesRoot = 'https://backendapi.turing.com/images/products/';

class Store extends Component {
    constructor(props: any) {
        super(props);
        storage.getProducts();
    }

    render() {
        return (
            <div className="store col-6">
                <div className="store__container row">
                    {storage.products && storage.products.map((products) => {
                        return <ProductThumbnail
                            name={products.name}
                            product_id={products.product_id}
                            discounted_price={products.discounted_price}
                            thumbnail={`${imagesRoot}/${products.thumbnail}`}
                            price={products.price} />;
                    })}
                </div>
            </div>
        );
    }
}

export default observer(Store);


