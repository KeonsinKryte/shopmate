import React, { Component } from 'react';
import {action, computed} from 'mobx';

class SearchInput extends Component<any, any> {
    constructor(props: {}) {
        super(props);

        this.state = {
            visible: false,
            search: '',
        };

        this.searchInput = this.searchInput.bind(this);
        this.getSearchInputValue = this.getSearchInputValue.bind(this);
    }

    @action searchInput(): void {
        this.setState({ visible: !this.state.visible});
    }

    @action getSearchInputValue(event: any): void {
        this.setState({ search: event.target.value });
    }

    render() {
        const isVisible = this.state.visible;
        let searchInputValue = this.state.search;

        if (isVisible) {
            return (
                <article className="searchInput-open">
                    <div className='searchInput-open__bar'>
                        <div className='searchInput-open__elements'>
                            <img src="sources/icons/search.svg" alt="" />
                            <input type="text" placeholder="search anything" onChange={this.getSearchInputValue} />
                        </div>
                        <img onClick={this.searchInput} className="searchInput-open__close" src="/sources/icons/close.svg" alt="" />
                    </div>
                </article>
            );
        } else {
            return (
                <article className="searchInput">
                    <input type="text" value='' />
                    <img onClick={this.searchInput} src="sources/icons/search.svg" alt="" />
                </article>
            );
        }
    }
}

export default SearchInput;