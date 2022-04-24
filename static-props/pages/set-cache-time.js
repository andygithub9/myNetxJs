import Head from 'next/head'

export default function SetCacheTime(props) {
  const { current } = props

  return (
    <div>
      <Head>
        <title>frameworks-github-starts</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>現在的時間是:{current}</div>
    </div>
  )
}

export async function getStaticProps(context) {
  console.log('set-cache-time 頁面的 getStaticProps is running...')
  const date = new Date()

  var h = date.getHours()
  var m = date.getMinutes()
  var s = date.getSeconds()

  const current = `${h}:${m}:${s}`

  return {
    props: {
      current,
    },
    // 將 StaticProps 緩存十秒鐘，每十秒更新一次
    // 在開發模式下不起作用，只在生產環境下作用
    revalidate: 10,
  }
}
