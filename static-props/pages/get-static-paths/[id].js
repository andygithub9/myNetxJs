import React from 'react'
import { useRouter } from 'next/dist/client/router'

const GetStaticPathsid = (props) => {
  const router = useRouter()
  const { result } = props

  console.log(router.query)

  return (
    <React.Fragment>
      <h1>props.result: {result}</h1>
      <hr />
      {router.query.id && <h3>router.query.id: {router.query.id}</h3>}
    </React.Fragment>
  )
}
export default GetStaticPathsid

// 為生成靜態頁面 props
export async function getStaticProps(context) {
  console.log('get-static-paths/[id].js -> getStaticProps is running...')

  // 從 context 形參拿到動態路由參數
  const { params } = context
  const frameworkName = params.id

  return {
    props: {
      result: frameworkName,
    },
  }
}

// 為動態路由組件生成靜態頁面路由(頁面數據)
export async function getStaticPaths() {
  return {
    paths: [
      // 路由的參數是 params.動態路由文件名
      // 所以要寫成 { params: { id: 'react' } }
      // params 是固定寫法
      { params: { id: 'react', data: '123' } },
      { params: { id: 'vue' } },
      { params: { id: 'angular' } },
    ],

    // 當路徑不存在時顯示404頁面
    fallback: false,

    // fallback: true // 當路徑不存在時自動生成路徑
  }
}
