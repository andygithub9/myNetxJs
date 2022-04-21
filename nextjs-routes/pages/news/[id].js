import React from 'react'
import { useRouter } from 'next/dist/client/router'

const newsid = () => {
  const router = useRouter()
  console.log(router.pathname)
  console.log(router.query)

  return (
    <React.Fragment>
      <h1>newsid</h1>
      <hr />
      {router.pathname && <h2>router.pathname: {router.pathname}</h2>}
      {router.query && <h2>router.query.id: {router.query.id}</h2>}
    </React.Fragment>
  )
}

export default newsid