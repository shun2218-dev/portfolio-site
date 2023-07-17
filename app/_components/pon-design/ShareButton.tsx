import Image from 'next/image'
import { FC, memo, useMemo } from 'react'
import styles from '~/styles/pon-design/ShareButton.module.scss'

type Props = {
  type: 'thumbsUp' | 'share' | 'bookmark' | 'twitter' | 'line'
  onClick?: () => void
  counterState?: number
  label?: string
  iconPath?: string
  iconSize?: number
}

const ShareButtonMemo: FC<Props> = ({ type, onClick, counterState, label, iconPath, iconSize }) => {
  const iconClass = useMemo(() => {
    switch (type) {
      case 'thumbsUp':
        return styles['c-share-button--blue']
      case 'share':
        return [styles['c-share-button--blue'], styles['c-share-button__icon--share']].join(' ')
      case 'bookmark':
        return [styles['c-share-button--light-blue'], styles['c-share-button__icon--bookmark'], 'u-fwb'].join(' ')
      case 'twitter':
        return styles['c-share-button--twitter']
      case 'line':
        return styles['c-share-button--only-icon']
      default:
        return ''
    }
  }, [type])
  return (
    <button className={[styles['c-share-button'], iconClass].join(' ')} onClick={onClick}>
      {iconPath !== undefined && iconSize !== undefined && <Image src={iconPath} alt={type} width={iconSize} height={iconSize} className={styles['c-share-button__icon']} />}
      {label !== undefined && <span className={styles['c-share-button__label']}>{label}</span>}
      {type === 'thumbsUp' && <span className={styles['c-share-button__counter']}>{counterState!}</span>}
    </button>
  )
}

const ShareButton = memo(ShareButtonMemo)
export { ShareButton }
