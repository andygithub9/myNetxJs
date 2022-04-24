import React from 'react'

const About = (props) => {
  const { sitename } = props

  return (
    <React.Fragment>
      <h1>About - {sitename}</h1>
    </React.Fragment>
  )
}
export default About

// getServerSideProps 在編譯打包後如果刷新頁面就會觸發，getStaticProps 則不會
export async function getServerSideProps(context) {
  console.log('About getServerSideProps is running...')

  // 可以參照 nodejs 的 http 模塊
  // https://nodejs.org/api/http.html
  const { params, req, res } = context
  console.log('req.headers: ', req.headers)
  console.log('req.methods: ', req.method)
  console.log('-------------------------------------')
  console.log('req.constructor.name: ', req.constructor.name)
  console.log('res.constructor.name: ', res.constructor.name)

  return {
    props: {
      sitename: '我的網站',
    },
  }
}
