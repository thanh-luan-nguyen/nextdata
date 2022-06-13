import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import content from '../assets/content.json'

function Footer() {
  const { locale } = useRouter()
  const extractedContent = content[locale].Footer

  const menuItems = [
    { href: '/about', name: extractedContent.about },
    { href: '/service', name: extractedContent.service },
    { href: '/product', name: extractedContent.product },
    { href: '/recruit', name: extractedContent.recruit },
    { href: '/contact', name: extractedContent.contact },
    { href: '/privacy', name: extractedContent.privacy },
    { href: '/quality', name: extractedContent.quality },
    { href: '/sitemap', name: extractedContent.sitemap }
  ]

  return (
    <footer className='bg-nextdata-footer-grey text-sm text-nextdata-link-font-grey p-5'>
      <div className='max-w-6xl mx-auto flex items-center flex-col'>
        {/* menu items */}
        <ul className='w-full grid grid-cols-2 md:grid-cols-4 xl:grid-cols-8 mb-7'>
          {menuItems.map((item, index) => (
            <li key={index} className='text-center leading-8'>
              <Link href={item.href}>
                <a>{item.name}</a>
              </Link>
            </li>
          ))}
        </ul>
        {/*  logos */}
        <div className=' h-[5rem] mb-5'>
          {['lin-02.0x0.cuttingJapanese', 'ISO_9001_2015_UKAS_purple'].map(
            (item, index) => (
              <div
                key={index}
                className='relative h-full w-[7rem] inline-block'
              >
                <Image
                  src={`/footer/${item}.png`}
                  alt={item}
                  layout='fill'
                  objectFit='contain'
                />
              </div>
            )
          )}
        </div>
        <div className='text-center'>
          株式会社ネクストデータ
          <br />
          Copyright© 2017～2020 All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
