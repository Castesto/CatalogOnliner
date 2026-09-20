import React, { Component } from 'react'
import { Logo } from './Logo'
import { SearchBar } from './SearchBar'
<<<<<<< Updated upstream
=======
import { Navigation } from './Navigation'
>>>>>>> Stashed changes
import styles from './Header.module.css'

export class Header extends Component {
    render() {
        return (
            <header className={styles.header}>
                <Logo></Logo>
                <SearchBar></SearchBar>
<<<<<<< Updated upstream
=======
                <Navigation></Navigation>
>>>>>>> Stashed changes
            </header>
        )
    }
}
