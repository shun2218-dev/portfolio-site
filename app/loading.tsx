import Spinner from '~/components/Spinner'
import styles from '~/styles/loading.module.scss'

const Laoding = () => {
  return (
    <div className={styles['loading-wrapper']}>
      <Spinner color={'site-primary'} />
    </div>
  )
}

export default Laoding
