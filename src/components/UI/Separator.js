import React from 'react'
import styles from './Separator.module.css'

export const Separator = (props) => {
    return (
        <div className={styles.separator}>
            {props.children}
        </div>
    )
}
