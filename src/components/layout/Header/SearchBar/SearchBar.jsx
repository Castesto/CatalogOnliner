
import React, { Component, createRef } from 'react'
import styles from './SearchBar.module.css'
import { SearchBarIcon } from './SearchBarIcon'

export class SearchBar extends Component {
    inputRef = createRef();

    handleContainerClick = () => {
        this.inputRef.current?.focus()
    }

    render() {
        return (
            <div className={styles.searchBarContainer}
            onClick={this.handleContainerClick}
            >
                <SearchBarIcon />
                <input
                    ref={this.inputRef}
                    className={styles.input}
                    placeholder='Поиск в каталоге'
                >
                </input>
            </div>
        )
    }
}