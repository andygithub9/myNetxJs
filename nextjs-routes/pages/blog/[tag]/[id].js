import React from 'react'
import { useRouter } from 'next/dist/client/router'

const newsid = () => {
    const router = useRouter()

    return (
        <React.Fragment>
            <h1>blog</h1>
            <hr />
            {router.pathname && <h2>router.pathname: {router.pathname}</h2>}
            {router.query && <h2>router.query.tag: {router.query.tag}</h2>}
            {router.query && <h2>router.query.id: {router.query.id}</h2>}
        </React.Fragment>
    )
}

export default newsid
