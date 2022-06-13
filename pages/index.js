/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { useRouter } from 'next/router'
import content from '../assets/content.json'
import LayoutContainer from '../components/LayoutContainer'
import ReadMoreButton from '../components/ReadMoreButton'

export default function Home() {
  const { locale } = useRouter()
  const extractedContent = content[locale].Body.Home

  return (
    <LayoutContainer title='株式会社ネクストデータ'>
      <>
        <main>
          {/* banner */}
          <div className='relative w-full'>
            <div
              className='w-full text-center text-nextdata-font-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl absolute top-1/2 -translate-y-1/2 font-[900]'
              style={{ textShadow: '5px 5px 5px #333' }}
            >
              ［　株式会社ネクストデータ　］
            </div>
            <img
              src='/home/banner01.0x0.cutting.jpg'
              alt='banner01.0x0.cutting'
              className='object-contain'
            />
          </div>

          {/* about */}
          <div
            id='about'
            className='bg-nextdata-footer-grey w-full lg:pt-[6rem] lg:pb-[3rem]'
          >
            <div id='bg' className='relative h-[30rem]'>
              <img
                className='absolute left-0 top-1/2 -translate-y-1/2 h-[20rem]'
                src='/home/left.0x500.cutting.jpg'
                alt='left.0x500.cutting'
              />
              <img
                className='absolute right-0 top-1/2 -translate-y-1/2 h-[20rem]'
                src='/home/right.0x500.cutting.jpg'
                alt='right.0x500.cutting'
              />
              <div
                id='content'
                className='absolute w-full lg:w-[80%] lg:max-w-[55rem] h-full left-1/2 -translate-x-1/2 bg-white text-center pt-[7rem] px-[2rem]'
              >
                <h2 className='text-nextdata-font-blue mb-[1rem] text-3xl'>
                  {extractedContent.about.title}
                </h2>
                <h3 className='text-nextdata-font-grey mb-[2rem]'>ABOUT US</h3>
                <p className='mb-[2.5rem]'>{extractedContent.about.text}</p>
                <ReadMoreButton height='5rem' width='23rem' href='/about' />
              </div>
            </div>
          </div>

          {/* gallery */}
          <div className='mb-12 lg:pt-12 lg:pl-[calc((100vw-1200px)/2)]'>
            <div className='flex flex-col lg:flex-row-reverse w-full border'>
              <div
                className='h-[10rem] lg:h-[20rem] w-full grid place-items-center text-white'
                style={{
                  backgroundImage: 'url(/home/right-04.0x0.cutting.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className='text-center'>
                  <h2 className='text-3xl mb-3'>
                    {extractedContent.gallery.title}
                  </h2>
                  <span>SYSTEM DEVELOPMENT</span>
                </div>
              </div>
              <ul className='w-full lg:w-[35rem] font-bold text-lg'>
                {[
                  {
                    href: '/service',
                    content: extractedContent.gallery.service
                  },
                  {
                    href: '/service/results',
                    content: extractedContent.gallery.results
                  }
                ].map((item, index) => (
                  <Link key={index} href={item.href}>
                    <li className='border h-[10rem] grid place-items-center cursor-pointer hover:text-nextdata-font-blue hover:bg-nextdata-bg-grey transition duration-400'>
                      <a>{item.content}</a>
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>

          {/* product */}
          <div className='text-center py-[3rem] bg-nextdata-bg-grey mb-10 md:mb-0'>
            <h2 className='text-nextdata-font-button text-3xl mb-3'>
              {extractedContent.product.title}
            </h2>
            <span className='text-nextdata-link-font-grey inline-block mb-4'>
              PRODUCT
            </span>
            <div className='flex flex-col md:flex-row items-center space-y-10 md:space-y-0 md:space-x-16 w-full max-w-[45rem] mx-auto'>
              {[
                {
                  alt: 'nextshop-icon-03new.0x0.cutting',
                  content: extractedContent.product.nextshop,
                  href: '/product/next_shop'
                },
                {
                  alt: 'nextcloud-icon-04.0x0.cutting',
                  content: extractedContent.product.nextcloud,
                  href: 'product/next_cloud'
                }
              ].map((item, index) => (
                <div key={index} className='w-[21rem]'>
                  <img
                    className='w-[80%] md:w-auto md:h-24 mx-auto mb-7'
                    src={`/next-product/${item.alt}.png`}
                    alt={item.alt}
                  />
                  <p className='h-16 mb-7'>{item.content}</p>
                  <ReadMoreButton height='4rem' width='100%' href={item.href} />
                </div>
              ))}
            </div>
          </div>

          {/* service */}
          <div className=''>
            <div className='mb-28 lg:relative h-[28rem]'>
              <div
                className='py-16 text-center text-white lg:absolute lg:w-[70%] lg:h-full lg:pt-[11rem] lg:text-left lg:pl-[15%] '
                style={{
                  backgroundImage: 'url(/home/left-03.0x0.cutting.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: '0 40%'
                }}
              >
                <h2 className='text-3xl mb-5'>
                  {extractedContent.service.title}
                </h2>
                <span className='lg:text-lg'>TALENTS CULTIVATION</span>
              </div>
              <ul
                className='lg:absolute lg:w-full lg:h-full lg:flex lg:justify-end lg:items-end lg:flex-col'
                style={{ paddingRight: 'calc((100vw - 1200px)/2)' }}
              >
                {['shanghai_new_graduates', 'technical_seminar'].map(
                  (item, index) => (
                    <li
                      key={index}
                      className='cursor-pointer pt-8 pb-9 px-8 border lg:w-[35rem] bg-white hover:bg-nextdata-bg-hover-grey transition duration-400'
                    >
                      <a href={`/service/${item}`}>
                        <h3 className='text-nextdata-font-blue font-semibold mb-2'>
                          {extractedContent.service[item].title}
                        </h3>
                        <div className='text-nextdata-font-grey'>
                          {extractedContent.service[item].text}
                          {locale === 'jp' && (
                            <>
                              <br />
                              <>{extractedContent.service[item].text2}</>
                            </>
                          )}
                        </div>
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </main>

        <div
          className='py-32 text-center px-5'
          style={{ backgroundImage: 'url(/home/contact-02.0x0.cutting.jpg)' }}
        >
          <h3 className='text-white mb-10 text-2xl'>
            ご相談・ご質問等ございましたら、お気軽にお問い合わせください。
          </h3>
          <div
            className={`text-white hover:bg-nextdata-font-button transition duration-500 mx-auto grid items-center cursor-pointer border-2 border-white hover:border-nextdata-font-button`}
            style={{ height: '4rem', width: '20rem' }}
          >
            <Link href='/contact'>
              <a className=''>お問い合わせはこちら</a>
            </Link>
          </div>
        </div>
      </>
    </LayoutContainer>
  )
}
