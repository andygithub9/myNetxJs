import { useContext, useState } from 'react'
import { useRouter } from 'next/dist/client/router'
import MyWebContext from '../store'

console.log('process.env.NODE_ENV: ', process.env.NODE_ENV)

export default function Home(props) {
  const router = useRouter()
  const myWebCxt = useContext(MyWebContext)

  const [username, setUsername] = useState('andy')
  const username_onchange = (e) => {
    setUsername(e.target.value)
  }

  const btn_login_onclick = () => {
    myWebCxt.login(username)
    router.push({
      pathname: '/admin',
    })
  }

  return (
    <div>
      <div>
        <h1>主頁面</h1>
        <hr />
        <div>
          <label htmlFor="username">用戶名: </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={username_onchange}
          />
        </div>
        <button onClick={btn_login_onclick}>登入</button>
        <hr />
        <h2>環境變量</h2>
        <div>{process.env.sitename}</div>
        <div>{process.env.dbUrl}</div>
        <div>{process.env.dbUsername}</div>
        <div>{process.env.dbPassword}</div>
      </div>
    </div>
  )
}
