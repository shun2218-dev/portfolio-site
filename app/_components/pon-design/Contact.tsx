import styles from '~/styles/pon-design/Contact.module.scss'
import { Title } from './Title'
import { FC, memo } from 'react'
import { NextFont } from 'next/dist/compiled/@next/font'
import { Button } from '~/components/pon-design/Button'

type Props = {
  font: NextFont
}

const ContactMemo: FC<Props> = ({ font }) => {
  return (
    <section className={[styles['c-contact'], font.className].join(' ')}>
      <Title title={'CONTACT'} subTitle={'お問い合わせ'} className={'c-title--section'} />
      <p className={styles['c-contact__text']}>
        Webサイトの制作のご依頼やお見積りなど、
        <br className="u-only-sp" />
        お気軽にご相談ください。
      </p>

      <Button label={'MORE'} href={'/pon-design/contact'} />
    </section>
  )
}

const Contact = memo(ContactMemo)
export { Contact }
