<<<<<<< Updated upstream
import React, { Component } from 'react'
=======
import React, { Component, createRef } from 'react'
>>>>>>> Stashed changes
import styles from './SearchBar.module.css'
import { SearchBarIcon } from './SearchBarIcon'

export class SearchBar extends Component {
<<<<<<< Updated upstream
    render() {
        return (
            <div className={styles.searchBarContainer}>
                <SearchBarIcon/>
                <input
                    className={styles.input}
                    placeholder='Поиск в каталоге'
                    >
=======
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
>>>>>>> Stashed changes
                </input>
            </div>
        )
    }
}