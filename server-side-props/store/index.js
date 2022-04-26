import { createContext, useState } from 'react'

const MyWebContext = createContext({
  isLogin: false,
  username: null,
  login(username) {},
  logout() {},
})
export default MyWebContext

export function MyWebContextProvider(props) {
  const [isLogin, setLogin] = useState(false)
  const [username, setUsername] = useState('')

  function login(username) {
    setUsername(username)
    setLogin(true)
  }

  function logout() {
    setUsername('')
    setLogin(false)
  }

  const context = {
    isLogin,
    username,
    login,
    logout,
  }

  return (
    <MyWebContext.Provider value={context}>
      {props.children}
    </MyWebContext.Provider>
  )
}
