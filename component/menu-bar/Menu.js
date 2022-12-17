import styles from '../../styles/MenuBar.module.css'
import { useEffect } from 'react'
import MenuItem from './MenuItem'

const Menu = () => {
  const menuItemList = [
    {
      text: 'Home',
      name: 'home-outline'
    },
    {
      text: 'Profile',
      name: 'person-outline'
    },
    {
      text: 'Message',
      name: 'chatbubble-outline'
    },
    {
      text: 'Photos',
      name: 'camera-outline'
    },
    {
      text: 'Settings',
      name: 'settings-outline'
    }
  ]
  const addEventListener = () => {
    const list = document.querySelectorAll(`.${styles.list}`)

    list.forEach(item => {
      item.addEventListener('click', () => {
        list.forEach(item => {
          item.classList.remove(`${styles.active}`)
        })
        item.classList.add(`${styles.active}`)
      })
    })
  }
  useEffect(() => {
    addEventListener()
  }, [])

  return (
    <div className={styles.menuBar}>
      <ul>
        {menuItemList.map((item, idx) => {
          const active = idx == 0 ? `${styles.active}` : ''
          return <MenuItem key={idx} item={item} active={active} />
        })}
        <div className={styles.indicator}></div>
      </ul>
    </div>
  )
}

export default Menu
