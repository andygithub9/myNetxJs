import React, { useContext, useEffect } from 'react'
import { useRouter } from 'next/dist/client/router'
import MyWebContext from '../store'

function Admin(props) {
  const router = useRouter()
  const myWebCxt = useContext(MyWebContext)

  useEffect(() => {
    console.log(myWebCxt)
    if (myWebCxt && !myWebCxt.isLogin) {
      console.log('未登入')
      router.push({
        pathname: '/',
      })
    }
  }, [])

  const btn_logout_onclick = () => {
    myWebCxt.logout()
    router.push({
      pathname: '/',
    })
  }

  return (
    <>
      <div>
        <h1>管理頁面</h1>
        <hr />
        {myWebCxt && (
          <>
            用戶: {myWebCxt.username.toString()}
            <br />
            狀態: {myWebCxt.isLogin.toString()}
          </>
        )}
        <hr />
        <button onClick={btn_logout_onclick}>退出</button>
      </div>
    </>
  )
}
export default Admin
