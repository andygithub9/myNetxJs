import React, { useState, useEffect } from 'react'

// import SWR
import useSWR from 'swr'
// 定義一個 AJAX 函數讓 SWR 調用
const fetcher = (...args) => fetch(...args).then((res) => res.json())

const Siteinfo = () => {
  const [siteinfo, setSiteinfo] = useState({})

  // 調用 useSWR
  const { data, error } = useSWR('/api/hello', fetcher)
  if (error) {
    console.error(error)
    return <div>數據取得失敗</div>
  }

  // 頁面啟動時執行
  // useEffect 第一個回調函數參數不能是 async function 否則會報錯
  useEffect(() => {
    if (data) {
      console.log('通過 swr 取得的 data', data)
      setSiteinfo(data)
    }
  }, [data])

  return (
    <React.Fragment>
      <h1>siteinfo</h1>
      <hr />
      {siteinfo && (
        <>
          <h2>{siteinfo.name}</h2>
          <h3>{siteinfo.sitename}</h3>
        </>
      )}
    </React.Fragment>
  )
}
export default Siteinfo
