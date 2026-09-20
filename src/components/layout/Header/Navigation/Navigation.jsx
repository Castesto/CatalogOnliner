import React, { Component } from 'react'
import { Authorization } from './AuthorizationButton'
import { SocialMediaButtons } from './SocialMediaButtons'
import styles from './Navigation.module.css'

export class Navigation extends Component {
    render() {
        return (
            <nav className={styles.navBar}>
                <Authorization></Authorization>
                <SocialMediaButtons></SocialMediaButtons>
            </nav>
        )
}
}