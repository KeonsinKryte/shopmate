import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';

import SearchInput from "../SearchInput/SearchInput";

import './Navbar.scss';
import storage from '../../storage/storage';

class Navbar extends Component {
    constructor(props: {}) {
        super(props);

        storage.getDepartments();
    }

    links() {
        return (
            <article className="links">
                <ul className="links__list">
                    {storage.departments && storage.departments.map((departments) => {
                        return (
                            <li><Link to={`/store/${departments.name}`}>{departments.name}</Link></li>
                        );
                    })}
                </ul>
            </article >
        );
    }

    shopBag() {
        return (
            <article className="shopBag">
                <img src="/sources/icons/shopping-bag.svg" alt="Shopping Bag" />
            </article>
        );
    }

    render() {
        return (
            <header className="navbar">
                <h1 className="logo">SHOPMATE</h1>
                <article className="navbar__elements">
                    {this.links()}
                    <div className='navbar__module'>
                        <SearchInput />
                        {this.shopBag()}
                    </div>
                </article>
            </header>
        );
    }
}

export default observer(Navbar);