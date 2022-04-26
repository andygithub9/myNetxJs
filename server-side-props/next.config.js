/** @type {import('next').NextConfig} */

module.exports = (phase, { defaultConfig }) => {
  const nextConfig = {
    reactStrictMode: true,
    env: {
      sitename: 'my site',
      dbUrl: '127.0.0.1:3306',
      dbUsername: 'root',
      dbPassword: '123123123',
    },
  }
  if (process.env.NODE_ENV === 'production') {
    nextConfig.env.dbUrl = 'http://aws/rds/myspl-prod.2352134135'
  }

  return nextConfig
}
