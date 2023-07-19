'use client'
import styles from '~/styles/pon-design/ContactPage.module.scss'
import { Button } from '~/components/pon-design/Button'
import { PageLayout } from '~/components/pon-design/PageLayout'

const ContactPage = () => {
  return (
    <PageLayout title={'CONTACT'} subTitle={'お問い合わせ'} contact={false}>
      <section className={styles['p-contact-content']}>
        <div className={styles['p-contact-content__inner']}>
          <p className={styles['p-contact-content__message']}>
            Webサイトの制作のご依頼やお見積りなど、
            <br className="u-only-sp" />
            お気軽にご相談ください。
          </p>
          <form action="POST" className={styles['p-contact-content__form']}>
            <legend className={[styles['p-contact-content__label'], styles['p-contact-content__label--legend']].join(' ')}>
              <span className={styles['p-contact-content__label-text']}>
                お問い合わせ種別
                <span className={styles['p-contact-content__label--required']}>*必須</span>
              </span>

              <label className={[styles['p-contact-content__label'], styles['p-contact-content__label--radio']].join(' ')}>
                <span className={styles['p-contact-content__label-text']}>お仕事のご依頼・ご相談</span>
                <input type="radio" className={[styles['p-cotact-content__input'], styles['p-contact-content__input--radio']].join(' ')} name="inquiry-type" value="1" required />
              </label>
              <label className={[styles['p-contact-content__label'], styles['p-contact-content__label--radio']].join(' ')}>
                <span className={styles['p-contact-content__label-text']}>お見積りのご依頼</span>
                <input type="radio" className={[styles['p-cotact-content__input'], styles['p-contact-content__input--radio']].join(' ')} name="inquiry-type" value="2" required />
              </label>
              <label className={[styles['p-contact-content__label'], styles['p-contact-content__label--radio']].join(' ')}>
                <span className={styles['p-contact-content__label-text']}>採用について</span>
                <input type="radio" className={[styles['p-cotact-content__input'], styles['p-contact-content__input--radio']].join(' ')} name="inquiry-type" value="3" required />
              </label>
              <label className={[styles['p-contact-content__label'], styles['p-contact-content__label--radio']].join(' ')}>
                <span className={styles['p-contact-content__label-text']}>その他</span>
                <input type="radio" className={[styles['p-cotact-content__input'], styles['p-contact-content__input--radio']].join(' ')} name="inquiry-type" value="4" required />
              </label>
            </legend>
            <label className={styles['p-contact-content__label']}>
              <span className={styles['p-contact-content__label-text']}>
                お名前<span className={styles['p-contact-content__label--required']}>*必須</span>
              </span>
              <input type="text" className={styles['p-contact-content__input']} name="name" required />
            </label>
            <label className={styles['p-contact-content__label']}>
              <span className={styles['p-contact-content__label-text']}>会社名</span>
              <input type="text" className={styles['p-contact-content__input']} name="company-name" />
            </label>
            <label className={styles['p-contact-content__label']}>
              <span className={styles['p-contact-content__label-text']}>
                メールアドレス<span className={styles['p-contact-content__label--required']}>*必須</span>
              </span>
              <input type="email" className={styles['p-contact-content__input']} name="mail-address" required />
            </label>
            <label className={styles['p-contact-content__label']}>
              <span className={styles['p-contact-content__label-text']}>
                お電話番号<span className={styles['p-contact-content__label--notice']}>（半角数字ハイフンなし）</span>
              </span>
              <input type="tell" className={styles['p-contact-content__input']} name="phone-number" />
            </label>
            <label className={styles['p-contact-content__label']}>
              <span className={styles['p-contact-content__label-text']}>
                お問い合わせ内容<span className={styles['p-contact-content__label--required']}>*必須</span>
              </span>
              <textarea className={[styles['p-contact-content__input'], styles['p-contact-content__input--textarea']].join(' ')} name="inquiry-sentence" required></textarea>
            </label>
            <label className={styles['p-contact-content__label']}>
              <span className={styles['p-contact-content__label-text']}>
                PON DESIGNをどちらでお知りになりましたか？<span className={styles['p-contact-content__label--required']}>*必須</span>
              </span>
              <select className={[styles['p-contact-content__input'], styles['p-contact-content__input--select']].join(' ')} name="how" required>
                <option value="">選択してください</option>
                <option value="1">Google/Yahoo検索</option>
                <option value="2">SNS</option>
                <option value="3">ブログ</option>
                <option value="4">友人や知人</option>
                <option value="5">その他</option>
              </select>
            </label>
            <Button label={'送信する'} type={'submit'} id={'contact-form-submit'} ariaLabel={'Submit contact form'} />
          </form>
        </div>
      </section>
    </PageLayout>
  )
}

export default ContactPage
