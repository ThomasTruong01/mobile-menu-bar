import styles from '../../styles/MenuBar.module.css'

const MenuItem = ({ item, active}) => {
    return (
        <li className={`${styles.list} ${active}`}>
            <a href="#">
                <span className={styles.icon}><ion-icon name={item.name}></ion-icon></span>
                <span className={styles.text}>{item.text}</span>
            </a>
        </li>
    )
}

export default MenuItem
