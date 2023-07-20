import { FC } from 'react'
import styles from '~/styles/Spinner.module.scss'

type Props = {
  color?: string
}

const Spinner: FC<Props> = ({ color = 'primary' }) => {
  return <div className={[styles['loader'], styles[`loader--${color}`]].join(' ')}>Loading...</div>
}

export default Spinner
