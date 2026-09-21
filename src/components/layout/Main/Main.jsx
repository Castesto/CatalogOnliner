import React, { Component } from 'react'
import styles from './Main.module.css'
import { SortList } from './SortList/'

export class Main extends Component {
    render() {
        return (
            <main className={styles.main}>
                <h1>Мониторы</h1>
                <div className={styles.line}></div>
                <SortList></SortList>
            </main>
        )
    }
}