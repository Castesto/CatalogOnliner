import React, { Component } from 'react'
import styles from './SortList.module.css'

const OPTIONS = [
    { value: 'popular', label: 'популярные' },
    { value: 'cheap', label: 'дешёвые' },
    { value: 'expensive', label: 'дорогие' },
    { value: 'new', label: 'новые' },
]


export class SortList extends Component {
    state = { value: 'popular' }

    handleChange = (e) => {
        this.setState({ value: e.target.value })
    }

    render() {
        const { value } = this.state
        const current = OPTIONS.find(o => o.value === value).label;

        return (
            <div className={styles.sortContainer}>
                <div type='button' className={styles.sort}>
                    <span>Сначала </span>{current}
                    <select
                        className={styles.select}
                        value={value}
                        onChange={this.handleChange}
                    >
                        {OPTIONS.map(o => (
                            <option key={o.value} value={o.value}>
                                {o.label}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        )
    }
}