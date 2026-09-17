import React, { Component } from 'react'
import styles from './SearchBar.module.css'
import { SearchBarIcon } from './SearchBarIcon'

export class SearchBar extends Component {
    render() {
        return (
            <div className={styles.searchBarContainer}>
                <SearchBarIcon/>
                <input
                    className={styles.input}
                    placeholder='Поиск в каталоге'
                    >
                </input>
            </div>
        )
    }
}