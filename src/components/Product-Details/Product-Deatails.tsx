import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Product-Details.scss';

interface ProductDetailsProps {
    name: string;
    product_id: number;
    discounted_price: number | null;
    thumbnail: string;
    price: string;
}

const ProductDetails = function ({ name, product_id, discounted_price, thumbnail, price }: ProductDetailsProps) {
    if (discounted_price && discounted_price <= 0) discounted_price = null;

    return (
        <div className={`product__details card mb-3 ${discounted_price ? 'productThumbnail--discounted_price' : ''}`} >
            <div className="row no-glutters">
                <div className="col-md-4">
                    <img src={thumbnail} alt="" className="card-img" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h2>{name}</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, expedita corporis eveniet officia itaque cumque sit, alias minus necessitatibus vitae quos! Quidem, voluptatibus? Eos laudantium repellat deleniti debitis culpa sapiente?</p>
                        <h4 className="productThumbnail__price">{price}</h4>
                        {discounted_price && <h4 className="productThumbnail__discouted_price">{discounted_price}</h4>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;