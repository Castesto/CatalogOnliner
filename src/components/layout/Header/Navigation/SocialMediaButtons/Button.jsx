import React, { Component } from 'react'
import styles from './SocialMediaButtons.module.css'

class Button extends Component {

    render() {
        const { text, ...rest } = this.props

        return (
            <>
                <div {...rest}>{text}</div>
            </>
        )
    }
}

export default Button