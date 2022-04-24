import React, { useState, useEffect } from 'react'

const Siteinfo = () => {
  const [siteinfo, setSiteinfo] = useState({})

  async function getResponse() {
    const res = await fetch('/api/hello')
    const data = await res.json()
    console.log(data)
    setSiteinfo(data)
  }

  // 頁面啟動時執行
  // useEffect 第一個回調函數參數不能是 async function 否則會報錯
  useEffect(() => {
    getResponse()
  }, [])

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
