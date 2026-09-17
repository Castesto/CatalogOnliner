import React, {Component} from 'react'
import logoImg from 'components/assets/images/icon_поиск.png'
import styles from './SearchBar.module.css'

export class SearchBarIcon extends Component {
    render() {
        return (
            <img src={logoImg} className={styles.searchIcon} />
        )
    }
}
