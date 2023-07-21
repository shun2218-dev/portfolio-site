import Spinner from '~/components/Spinner'
import styles from '~/styles/loading.module.scss'

const Laoding = () => {
  return (
    <main>
      <div className={styles['loading-wrapper']}>
        <Spinner />
      </div>
      <h1>loading...</h1>
    </main>
  )
}

export default Laoding
