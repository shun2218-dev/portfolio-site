import Spinner from '~/components/Spinner'
import styles from '~/styles/loading.module.scss'

const Laoding = () => {
  return (
    <div className={styles['loading-wrapper']}>
      <Spinner />
    </div>
  )
}

export default Laoding
