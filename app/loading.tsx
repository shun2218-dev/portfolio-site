import Spinner from '~/components/Spinner'
import styles from '~/styles/loading.module.scss'

const Laoding = () => {
  return (
    <main>
      <div className={styles['loading-wrapper']}>
        <Spinner color={'site-primary'} />
      </div>
    </main>
  )
}

export default Laoding
