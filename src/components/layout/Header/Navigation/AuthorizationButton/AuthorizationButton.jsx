import React, { Component } from 'react'
import styles from './Authorization.module.css'

export class AuthorizationButton extends Component {
    render() {
        return (
            <div className={styles.signUP} type='button'>Вход</div>
        )
    }
}