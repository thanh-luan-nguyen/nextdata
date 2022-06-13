/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['jp', 'cn', 'tw'],
    defaultLocale: 'jp'
  }
}

module.exports = nextConfig
