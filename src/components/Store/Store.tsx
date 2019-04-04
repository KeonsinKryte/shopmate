import React, { useState, Component } from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';

import './Store.scss';
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
            <div>
                {storage.products && storage.products.map((products) => {
                    return <ProductThumbnail 
                    name={products.name} 
                    id={products.id}
                    discounted={products.discounted}
                    thumbnail={`${imagesRoot}/${products.thumbnail}`}
                    price={products.price}/>;
                })}
            </div>
        );
    }
}

export default observer(Store);


