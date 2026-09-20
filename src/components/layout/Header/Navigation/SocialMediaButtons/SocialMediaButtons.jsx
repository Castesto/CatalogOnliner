import React, { Component } from 'react'
import styles from './SocialMediaButtons.module.css'
import Button from './Button'

const SOCIALS = [
    { name: 'facebook', label: 'F'  },
    { name: 'vk', label: 'VK' },
    { name: 'google', label: 'G' },
]

export class SocialMediaButtons extends Component {
    render() {
        return (
            <div className={styles.list}>
                {SOCIALS.map(({ name, label }) => (
                    <Button
                        key={name}
                        className={`${styles.button} ${styles[name]}`}
                        text={label}
                    />
                ))}
            </div>
        )
    }
}