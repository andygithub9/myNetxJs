import React from 'react'
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'

const books = () => {
    const router = useRouter()

    return (
        <React.Fragment>
            <h1>taoyuan-library</h1>
            <hr />
            {router.pathname && <h2>router.pathname: {router.pathname}</h2>}
            {
                typeof router.query.books === 'object' && (<h2>router.books: {router.query.books.join(',')}</h2>)
            }
            <hr />
            <Link href="/">home</Link>
        </React.Fragment>
    )
}

export default books
