import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Product-Thumbnail.scss';

interface ProductThumbnailProps {
    name: string;
    id: number;
    discounted?: string;
    thumbnail: string;
    price: string;
}

const ProductThumbnail = function ({ name, id, discounted, thumbnail, price }: ProductThumbnailProps) {
    if (discounted && parseFloat(discounted) <= 0) discounted = '';

    return (
        <div className={`productThumbnail ${discounted ? 'productThumbnail--discounted' : ''}`}>
            <Link to={`/store/product/${id}`}>
                <div className="productThumbnail__card">
                    <img className="productThumbnail__thumbnail" src={thumbnail} />
                    <h2 className="productThumbnail__title">{name}</h2>
                    <p className="productThumbnail__price">
                        <span>{price}</span>
                        {discounted && <span>{discounted}</span>}
                    </p>
                </div>
            </Link>
        </div>
    );
}

export default ProductThumbnail;