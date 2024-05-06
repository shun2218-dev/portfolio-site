'use client'
import 'swiper/css'
import 'aos/dist/aos.css'
import styles from '~/styles/sneakers/TopPage.module.scss'
import AOS from 'aos'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { memo, useEffect, useState } from 'react'
import useSWR from 'swr'

type SneakersReaponseContent = {
  id: number
  path: string
  alt: string
  width: number
  height: number
}

type SneakersAPIResponse = {
  PICKUP_SLIDES: SneakersReaponseContent[]
  FEATURE_ITEMS: SneakersReaponseContent[]
}

const fetcher = async (url: string) => {
  const res = await fetch(url)
  const data = (await res.json()) as SneakersAPIResponse
  return data
}

const SneakersTopMemo = () => {
  const [isVideoReady, setIsVideoReady] = useState(false)
  const { data, error, isLoading } = useSWR('/api/sneakers', fetcher)
  useEffect(() => {
    if (isVideoReady) {
      AOS.init()
    }
  }, [isVideoReady])
  return (
    <main onLoad={() => setIsVideoReady(true)}>
      <section id="hero" className={styles['p-hero']}>
        <video className={styles['p-hero__main-video']} src="/videos/sneakers/main-visual.mp4" loop autoPlay muted playsInline />
      </section>
      <section id="pickup" className={[styles['p-pickup'], 'c-section'].join(' ')}>
        <div className={styles['p-pickup__inner']}>
          <h1 className="c-section__title">PICK UP</h1>

          {!isLoading && (
            <Swiper
              loop
              centeredSlides
              slidesPerView={1.5}
              spaceBetween={40}
              breakpoints={{
                768: {
                  slidesPerView: 4,
                  spaceBetween: 60,
                },
              }}
              wrapperTag="ul"
            >
              {data?.PICKUP_SLIDES.map((slide) => {
                return (
                  <SwiperSlide key={`slide_${slide.id}`} tag="li">
                    <Image
                      className="swiper-slide__image"
                      src={slide.path}
                      alt={slide.alt}
                      placeholder="blur"
                      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM8UQ8AAhUBSQV8WJQAAAAASUVORK5CYII="
                      style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                      width={slide.width}
                      height={slide.height}
                    />
                  </SwiperSlide>
                )
              })}
            </Swiper>
          )}
        </div>
      </section>
      <section id="feature" className={[styles['p-feature'], 'c-section'].join(' ')}>
        <div className={styles['p-feature__inner']}>
          <h1 className="c-section__title">FEATURE</h1>
          <ul className={styles['p-feature__card-list']}>
            {!isLoading &&
              isVideoReady &&
              data?.FEATURE_ITEMS.map((item) => {
                return (
                  <li className="c-card" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true" key={`feature-item_${item.id}`}>
                    <Image
                      className="c-card__image"
                      src={item.path}
                      alt={item.alt}
                      placeholder="blur"
                      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM8UQ8AAhUBSQV8WJQAAAAASUVORK5CYII="
                      style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
                      width={item.width}
                      height={item.height}
                    />
                    <div className="c-card__text-container">
                      <p className="c-card__category">category</p>
                      <p className="c-card__description">テキストテキストテキストテキストテキストテキストテキストテキスト</p>
                      <p className="c-card__date">XXXX.XX.XX</p>
                    </div>
                  </li>
                )
              })}
          </ul>
        </div>
      </section>
      <section id="contact" className={[styles['p-contact'], 'c-section'].join(' ')}>
        <div className={styles['p-contact__inner']}>
          <h1 className="c-section__title">CONTACT</h1>
          <div className={styles['p-contact__wrapper']}>
            <div className={styles['p-contact__text-container']}>
              <p className={styles['p-contact__text']}>テキストテキストテキスト</p>
              <p className={styles['p-contact__text']}>
                テキストテキストテキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキストテキストテキスト
                テキストテキストテキストテキストテキストテキストテキストテキストテキスト
              </p>
              <p className={styles['p-contact__text']}>
                テキストテキストテキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキストテキストテキスト
                テキストテキストテキストテキストテキストテキストテキストテキストテキスト
              </p>
            </div>
            <form className={[styles['p-contact__form'], 'js-contact-form'].join(' ')} name="contact-form">
              <label htmlFor="name" className={styles['p-contact__label']}>
                Name:
              </label>
              <input type="text" name="name" id="name" className={[styles['p-contact__input'], styles['p-contact__input--name']].join(' ')} />
              <label htmlFor="email" className={styles['p-contact__label']}>
                Email:
              </label>
              <input type="email" inputMode="email" name="email" id="name" className={[styles['p-contact__input'], styles['p-contact__input--email']].join(' ')} />
              <label htmlFor="message" className={styles['p-contact__label']}>
                Message:
              </label>
              <textarea id="message" name="message" rows={4} className={[styles['p-contact__input'], styles['p-contact__input--message']].join(' ')}></textarea>
              <button className={styles['p-contact__submit-button']}>SEND</button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}

const SneakersTop = memo(SneakersTopMemo)
export default SneakersTop
