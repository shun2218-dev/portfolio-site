'use client'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import 'swiper/css/autoplay'
import styles from '~/styles/pon-design/TopPage.module.scss'
import newsStyles from '~/styles/pon-design/News.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { Autoplay, EffectFade, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { createBreakpoint } from 'react-use'
import { useElementHeight } from '../_hooks/useElementHeight'
import { memo, useCallback, useEffect, useMemo, useState } from 'react'
import { Title } from '../_components/pon-design/Title'
import { PaginationOptions } from 'swiper/types'
import Spinner from '~/components/Spinner'
import useSWR from 'swr'
import { Button } from '~/components/pon-design/Button'
import { PageLayout } from '../_components/pon-design/PageLayout'

const useBreakpoint = createBreakpoint({ laptopL: 1440, laptop: 1179, tablet: 768, smartphone: 560 })

type SwiperImagePath = {
  pc: string
  sp: string
}

const fetcher = async (url: string) => {
  const res = await fetch(url)
  const data = (await res.json()) as SwiperImagePath[]
  return data
}

const TopPageMemo = () => {
  const [imagePaths, setImagePaths] = useState<SwiperImagePath[]>([])
  const { data, error, isLoading } = useSWR('/api/pon-design', fetcher)
  if (error) throw new Error(error.message)

  useEffect(() => {
    if (data) setImagePaths([...data])
  }, [data])
  const { el, DOMRect } = useElementHeight(!!imagePaths.length)
  const breakpoint = useBreakpoint()
  const sliderStyle = useMemo(() => {
    if (!DOMRect) return
    const position = DOMRect?.height! / 2
    switch (breakpoint) {
      case 'smartphone':
        return { section: { marginTop: `${position + 40}px` }, slider: { top: `${-position}px` } }
      case 'tablet':
        return { section: {}, slider: { top: '12.482%' } }
      case 'laptop':
        return { section: {}, slider: { top: '12.482%' } }
      case 'laptopL':
        return { section: {}, slider: { top: '12.482%' } }
      default:
        return { section: {}, slider: {} }
    }
  }, [DOMRect, breakpoint])

  const pagination = useMemo(
    (): PaginationOptions => ({
      el: '.p-top-works__bullets',
      clickable: true,
      renderBullet: (index, className) => {
        return `<span class='${className} swiper-custom-position'></span>`
      },
      type: 'bullets',
    }),
    []
  )
  const spinnerStyle = useCallback(() => {
    if (breakpoint !== 'smartphone') {
      return { width: '750px', height: '510px', top: `0`, left: '0' }
    } else {
      return { width: '335px', height: '210px', top: `-210px`, left: '20px' }
    }
  }, [breakpoint])

  return (
    <>
      <section className={styles['p-top-hero']}>
        <div className={styles['p-top-hero__inner']}>
          <h2 className={styles['p-top-hero__catch']}>
            WEB DESIGN <br className="u-only-sp" />
            SPECIALIST
            <span className={styles['p-top-hero__sub-catch']}>
              お客様の夢を叶える
              <br className="u-only-sp" />
              Webサイトを制作
            </span>
          </h2>

          <Button label={'CONTACT'} href={'/pon-design/contact'} variant={'outlined'} />
        </div>
      </section>
      <PageLayout>
        <section className={styles['p-top-news']}>
          <div className={styles['p-top-news__inner']}>
            <Title title={'NEWS'} subTitle={'お知らせ'} className={'c-title--section'} />
            <ul className={newsStyles['c-news__list']}>
              <li className={newsStyles['c-news__list-item']}>
                <Link href="/pon-design/news/web-magazine" className={newsStyles['c-news__link']}>
                  <div className={newsStyles['c-news__header']}>
                    <time className={newsStyles['c-news__date']} dateTime="2030-02-01">
                      2030.02.01
                    </time>
                    <div className={newsStyles['c-news__label']}>
                      <span className={newsStyles['c-news__label-text']}>お知らせ</span>
                    </div>
                  </div>
                  <h3 className={newsStyles['c-news__article-title']}>Webデザインニュースサイト「ウェブマガジン」に取材いただきました</h3>
                </Link>
              </li>
              <li className={newsStyles['c-news__list-item']}>
                <Link href="#" className={newsStyles['c-news__link']}>
                  <div className={newsStyles['c-news__header']}>
                    <time className={newsStyles['c-news__date']} dateTime="2030-01-25">
                      2030.01.25
                    </time>
                    <div className={newsStyles['c-news__label']}>
                      <span className={newsStyles['c-news__label-text']}>制作実績</span>
                    </div>
                  </div>
                  <h3 className={newsStyles['c-news__article-title']}>Smoothiesta様のWebサイトを制作いたしました</h3>
                </Link>
              </li>
              <li className={newsStyles['c-news__list-item']}>
                <Link href="#" className={newsStyles['c-news__link']}>
                  <div className={newsStyles['c-news__header']}>
                    <time className={newsStyles['c-news__date']} dateTime="2030-01-20">
                      2030.01.20
                    </time>
                    <div className={newsStyles['c-news__label']}>
                      <span className={newsStyles['c-news__label-text']}>採用</span>
                    </div>
                  </div>
                  <h3 className={newsStyles['c-news__article-title']}>Webデザイナーを１名募集中です！</h3>
                </Link>
              </li>
            </ul>
          </div>
        </section>
        <section className={styles['p-top-service']}>
          <div className={styles['p-top-service__inner']}>
            <Title title={'SERVICE'} subTitle={'事業内容'} className={'c-title--section'} />
            <ul className={styles['p-top-service__list']}>
              <li className={styles['p-top-service__list-item']}>
                <div className={styles['p-top-service__image-wrapper']}>
                  <Image
                    src="/images/pon-design/top-service_web-production.png"
                    alt="webサイト制作"
                    className={styles['p-top-service__item-image']}
                    width={335}
                    height={210}
                    style={{ objectFit: 'contain', aspectRatio: 1.59 }}
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM8UQ8AAhUBSQV8WJQAAAAASUVORK5CYII="
                  />
                </div>
                <h3 className={[styles['p-top-service__item-title'], 'u-fs18'].join(' ')}>Webサイト制作</h3>
                <p className={styles['p-top-service__item-text']}>新規サイトの制作はもちろんサイトリニューアルやランディングページの制作も可能です。</p>
              </li>
              <li className={styles['p-top-service__list-item']}>
                <div className={styles['p-top-service__image-wrapper']}>
                  <Image
                    src="/images/pon-design/top-service_web-operation.png"
                    alt="Webサイト運用"
                    className={styles['p-top-service__item-image']}
                    width={335}
                    height={210}
                    style={{ objectFit: 'contain', aspectRatio: 1.59 }}
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM8UQ8AAhUBSQV8WJQAAAAASUVORK5CYII="
                  />
                </div>
                <h3 className={[styles['p-top-service__item-title'], 'u-fs18'].join(' ')}>Webサイト運用</h3>
                <p className={styles['p-top-service__item-text']}>サイトの更新作業や独自のアクセス解析に基づいたサイト改善のご提案をいたします。</p>
              </li>
              <li className={styles['p-top-service__list-item']}>
                <div className={styles['p-top-service__image-wrapper']}>
                  <Image
                    src="/images/pon-design/top-service_app-development.png"
                    alt="アプリ開発"
                    className={styles['p-top-service__item-image']}
                    width={335}
                    height={210}
                    style={{ objectFit: 'contain', aspectRatio: 1.59 }}
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM8UQ8AAhUBSQV8WJQAAAAASUVORK5CYII="
                  />
                </div>
                <h3 className={[styles['p-top-service__item-title'], 'u-fs18'].join(' ')}>アプリ開発</h3>
                <p className={styles['p-top-service__item-text']}>スマートフォンアプリ開発の他、Vue.jsやReactによるWebアプリの開発が可能です。</p>
              </li>
            </ul>
            <Button label={'MORE'} href={'/pon-design/service'} />
          </div>
        </section>
        <section className={[styles['p-top-works'], 'js-works'].join(' ')} style={sliderStyle?.section}>
          <div className={styles['p-top-works__inner']}>
            <div className={[styles['p-top-works__slider'], 'js-slider'].join(' ')} ref={el} style={sliderStyle?.slider}>
              {!isLoading ? (
                <Swiper
                  modules={[Pagination, EffectFade, Autoplay]}
                  pagination={pagination}
                  autoplay={{ delay: 1000, disableOnInteraction: false }}
                  loop
                  effect={'fade'}
                  fadeEffect={{ crossFade: true }}
                  speed={5000}
                >
                  <>
                    {imagePaths.map((imagePath) =>
                      breakpoint !== 'smartphone' ? (
                        <SwiperSlide className={styles['p-top-works__thumbnail']} key={`${imagePath.pc.split('.')[0]}`}>
                          <Image
                            src={`/images/pon-design/${imagePath.pc}`}
                            alt={`${imagePath.pc.split('.')[0]}`}
                            width={750}
                            height={510}
                            style={{ objectFit: 'contain', aspectRatio: 1.47, height: 'auto' }}
                            placeholder="blur"
                            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM8UQ8AAhUBSQV8WJQAAAAASUVORK5CYII="
                          />
                        </SwiperSlide>
                      ) : (
                        <SwiperSlide className={styles['p-top-works__thumbnail']} key={`${imagePath.sp.split('.')[0]}`}>
                          <Image
                            src={`/images/pon-design/${imagePath.sp}`}
                            alt={`${imagePath.sp.split('.')[0]}`}
                            width={335}
                            height={210}
                            style={{ objectFit: 'cover', aspectRatio: 1.47, height: 'auto', verticalAlign: 'bottom' }}
                            placeholder="blur"
                            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM8UQ8AAhUBSQV8WJQAAAAASUVORK5CYII="
                          />
                        </SwiperSlide>
                      )
                    )}
                  </>
                </Swiper>
              ) : (
                <div style={{ ...spinnerStyle(), display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
                  <Spinner />
                </div>
              )}
              <div className={[styles['swiper-pagination'], 'p-top-works__bullets'].join(' ')}></div>
            </div>
            <div className={styles['p-top-works__container']}>
              <div>
                <Title title={'WORKS'} subTitle={'制作実績'} className={'c-title--section'} />
              </div>
              <div className={styles['p-top-works__text-wrapper']}>
                <p className={styles['p-top-works__text']}>様々なジャンルのWebサイト制作が可能です。</p>
                <p className={styles['p-top-works__text']}>ご購入やお申込み数の増加などを実現します！</p>
              </div>
              <Button label={'MORE'} href={'/pon-design/works'} />
            </div>
          </div>
        </section>
        <section className={styles['p-top-company']}>
          <div className={styles['p-top-company__inner']}>
            <Title title={'COMPANY'} subTitle={'私たちについて'} className={'c-title--section'} />
            <p className={styles['p-top-company__goal']}>
              <span className={styles['p-top-company__goal-text']}>サイトのゴール = </span>
              <span className={styles['p-top-company__goal-text']}>夢を叶えること</span>
            </p>
            <p className={styles['p-top-company__slogan']}>
              <span className={styles['p-top-company__slogan-text']}>お客様の夢を叶えること。</span>
              <span className={styles['p-top-company__slogan-text']}>
                それがWebサイトのゴールであり、
                <br className="u-only-sp" />
                私たちが目指すことです。
              </span>
              <span className={styles['p-top-company__slogan-text']}>
                だからこそちゃんと成果を出すサイトを
                <br className="u-only-sp" />
                全力でお作りします。
              </span>
              <span className={styles['p-top-company__slogan-text']}>お客様の笑顔を見たい。</span>
              <span className={styles['p-top-company__slogan-text']}>夢を実現する手助けをさせてください。</span>
            </p>
            <Button label={'MORE'} href={'/pon-design/company'} />
          </div>
        </section>
        <section className={styles['p-top-recruit']}>
          <div className={styles['p-top-recruit__inner']}>
            <div className={styles['p-top-recruit__image-wrapper']}>
              {breakpoint === 'smartphone' || breakpoint === 'tablet' ? (
                <Image
                  className={styles['p-top-recruit__top-image']}
                  src="/images/pon-design/top-recruit.png"
                  alt="recruit"
                  width={375}
                  height={140}
                  sizes="100vw"
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM8UQ8AAhUBSQV8WJQAAAAASUVORK5CYII="
                />
              ) : (
                <Image
                  className={styles['p-top-recruit__top-image']}
                  src="/images/pon-design/top-recruit_pc.png"
                  alt="recruit"
                  width={665}
                  height={332}
                  sizes="100vw"
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM8UQ8AAhUBSQV8WJQAAAAASUVORK5CYII="
                />
              )}
            </div>
            <div className={styles['p-top-recruit__container']}>
              <Title title={'RECRUIT'} subTitle={'採用情報'} className={'c-title--section'} />
              <p className={styles['p-top-recruit__text']}>私たちと一緒に働きませんか？</p>
              <Button label={'MORE'} href={'/pon-design/recruit'} />
            </div>
          </div>
        </section>
      </PageLayout>
    </>
  )
}

const Top = memo(TopPageMemo)
export default Top
