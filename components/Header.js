import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { BsGlobe } from 'react-icons/bs'
import { GrClose } from 'react-icons/gr'
import content from '../assets/content.json'

import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

export default function Header() {
  const { locale, locales, asPath } = useRouter()
  const extractedContent = content[locale].Header
  
  const convertLocale = (locale) => {
    switch (locale) {
      case 'jp':
        return '日本語'
      case 'cn':
        return '简体中文'
      case 'tw':
        return '繁體中文'
      default:
        return '日本語'
    }
  }

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const menuItems = [
    { href: '/about', name: extractedContent.about },
    { href: '/service', name: extractedContent.service },
    { href: '/product', name: extractedContent.product },
    { href: '/recruit', name: extractedContent.recruit },
    { href: '/contact', name: extractedContent.contact }
  ]
  const renderMobileMenu = () => (
    <div className='z-50 lg:hidden absolute top-0 left-0 w-full h-full bg-white border-2 border-nextdata-font-blue'>
      <ul className='mt-20 px-10'>
        {menuItems.map((item, index) => (
          <Link key={index} href={item.href} locale={locale}>
            <li
              className={`border-t hover:bg-nextdata-bg-hover-grey cursor-pointer py-5 pl-5 ${
                index == menuItems.length - 1 && 'border-b'
              }`}
            >
              {item.name}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  )

  /* close language choice on resizing window */
  useEffect(() => {
    const handleResize = () => handleCloseLanguageChoice()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  /* close language choice on resizing window */

  /* language choice handlers */
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleOpenLanguageChoice = (e) => setAnchorEl(e.currentTarget)
  const handleCloseLanguageChoice = () => setAnchorEl(null)
  /* language choice handlers */

  const renderLanguageChoice = () => (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={handleCloseLanguageChoice}
      className='mt-2'
      elevation={2}
    >
      {locales
        .filter((l) => l !== locale)
        .map((l, i) => (
          <Link href={asPath} locale={l} key={i}>
            <MenuItem onClick={handleCloseLanguageChoice}>
              {convertLocale(l)}
            </MenuItem>
          </Link>
        ))}
    </Menu>
  )

  return (
    <header>
      <div className='flex justify-between h-[3.25rem] lg:h-[4.5rem] max-w-6xl items-center mx-auto'>
        {/* NEXTDATA LOGO */}
        <div className='relative w-[9rem] lg:w-[13rem] ml-1 h-full cursor-pointer '>
          <Link href='/' title='株式会社ネクストデータ'>
            <Image
              src='/header/logo4.0x0.cutting.png'
              alt='株式会社ネクストデータ'
              layout='fill'
              objectFit='contain'
            />
          </Link>
        </div>

        {/* NAVBAR MENU */}
        {renderLanguageChoice()}
        <div className='h-full '>
          {/* DESKTOP */}
          <ul className='hidden lg:flex h-full items-center space-x-8 px-5'>
            {menuItems.map((item, index) => (
              <li
                key={index}
                className='hover:text-nextdata-font-blue hover:-translate-y-[2px] transition duration-400'
              >
                <Link href={item.href} title={item.name}>
                  {item.name}
                </Link>
              </li>
            ))}
            <li
              onClick={handleOpenLanguageChoice}
              className='cursor-pointer text-nextdata-font-blue flex items-center space-x-2 hover:-translate-y-[2px] transition duration-400'
            >
              <BsGlobe />{' '}
              <span className='hidden lg:inline'>{convertLocale(locale)}</span>
            </li>
          </ul>

          {/* MOBILE */}
          {mobileMenuOpen && renderMobileMenu()}
          <div className='lg:hidden h-full flex flex-row'>
            <div onClick={handleOpenLanguageChoice} className='mobileMenu'>
              <BsGlobe className='text-xl text-nextdata-font-blue' />
            </div>

            <div
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`z-50 mobileMenu ${
                mobileMenuOpen &&
                'border-t-2 border-r-2 border-nextdata-font-blue'
              }`}
            >
              {mobileMenuOpen ? (
                <GrClose className='text-xl' />
              ) : (
                <AiOutlineMenu className='text-2xl text-nextdata-font-blue' />
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
