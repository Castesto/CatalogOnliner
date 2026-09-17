import React, { Component } from 'react'
import { Logo } from './Logo'
import { SearchBar } from './SearchBar'
import styles from './Header.module.css'

export class Header extends Component {
    render() {
        return (
            <header className={styles.header}>
                <Logo></Logo>
                <SearchBar></SearchBar>
            </header>
        )
    }
}
