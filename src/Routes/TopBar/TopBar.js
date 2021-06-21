import { Link } from 'react-router-dom'
import { root, titles } from '../routesConstants'
import styles from './styles.module.sass'

const TopBar = ({ isLoaded }) => {
  if (isLoaded) {
    return (
      <header className={styles.container}>
        <Link to={root}>Home</Link>
        <Link to={titles}>Titles</Link>
      </header>
    )
  } else {
    return <div className={styles.loader} />
  }
}

export default TopBar
