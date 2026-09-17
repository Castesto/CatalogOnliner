import React, { Component } from 'react'
import logo from 'components/assets/images/onliner_logo.v3@2x.png'
import styles from './Logo.module.css'

export class Logo extends Component {
    render() {
        return (
            <img className={styles.logo} src={logo} ></img>
        )
    }
}