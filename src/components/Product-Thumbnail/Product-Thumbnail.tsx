import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './_Product-Thumbnail.scss';

interface ProductThumbnailProps {
    name: string;
    product_id: number;
    discounted_price: number | null;
    thumbnail: string;
    price: string;
}

const ProductThumbnail = function ({ name, product_id, discounted_price, thumbnail, price }: ProductThumbnailProps) {
    if (discounted_price && discounted_price <= 0) discounted_price = null;

    return (
        <div className={`productThumbnail col-4 ${discounted_price ? 'productThumbnail--discounted_price' : ''}`}>
            <Link to={`/product/?id=${product_id}`}>
                <div className="productThumbnail__card card ">
                    <img className="productThumbnail__thumbnail card-img-top" src={thumbnail} />
                    <h2 className="productThumbnail__title card-title">{name}</h2>
                    <h4 className="productThumbnail__price">{price}</h4>
                    {discounted_price && <h4 className="productThumbnail__discouted_price">{discounted_price}</h4>}
                </div>
            </Link>
        </div>
    );
}

export default ProductThumbnail;