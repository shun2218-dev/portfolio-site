import Link from 'next/link'
import React, { FC, useMemo } from 'react'
import styles from '~/styles/pon-design/Button.module.scss'

type Props = {
  id: string
  ariaLabel: string
  label: string
  href?: string
  type?: 'button' | 'submit'
  onClick?: () => void
  variant?: 'contained' | 'outlined' | 'text'
}

const Button: FC<Props> = ({ id, ariaLabel, label, href, type, onClick, variant = 'contained' }) => {
  const variantStyle = () => {
    switch (variant) {
      case 'contained':
        return styles['c-button--contained']
      case 'outlined':
        return styles['c-button--outlined']
      case 'text':
        return styles['c-button--text']
      default:
        return ''
    }
  }
  return (
    <div className={[styles['c-button'], variantStyle()].join(' ')}>
      {href && (
        <Link data-pw={id} href={href}>
          {label}
        </Link>
      )}
      {type && (
        <button type={type} onClick={onClick} id={id} aria-label={ariaLabel} title={ariaLabel} data-pw={id}>
          {label}
        </button>
      )}
    </div>
  )
}

export { Button }
