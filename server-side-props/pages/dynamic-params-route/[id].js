import React from 'react'

const DynamicParamsRoute = (props) => {
  const { dynamicParams } = props

  return (
    <React.Fragment>
      <h1>dynamicParams - {dynamicParams}</h1>
    </React.Fragment>
  )
}
export default DynamicParamsRoute

export async function getServerSideProps(context) {
  console.log('/dynamic-params-route/[id].js -> getServerSideProps is running')

  // 取得 URL 參數
  const { params } = context
  const dynamicParams = params.id

  return {
    props: {
      sitename: 'my website',
      // return props 給組件
      dynamicParams,
    },
  }
}
