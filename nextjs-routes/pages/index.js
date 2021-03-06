import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from "next/dist/client/router";

export default function Home() {
  const router = useRouter()
  const goto_news001 = () => {
    router.push({
      pathname: '/news/[id]',
      query: { id: '001' }
    })
  }

  const goto_book1 = () => {
    router.push({
      pathname: '/taoyuan-library/[id]/[category]/[title]',
      query: { id: '001', category: '心靈成長', title: '慣性討好：不再無底限迎合' }
    })
  }

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to Next.js!</h1>
        <hr />
        <Link href="/about">about</Link><br />

        <Link href={{
          pathname: '/news/[id]',
          query: { id: '001' }
        }}>news001</Link><br />

        <Link href={{
          pathname: '/news/[id]',
          query: { id: '002' }
        }}>news002</Link><br />

        <Link href={{
          pathname: '/taoyuan-library/[id]/[category]/[title]',
          query: { id: '123', category: '文學類', title: '失落的衛星' }
        }}>文學類: 失落的衛星</Link><br />

        <button onClick={goto_news001}>news001</button><br />
        <button onClick={goto_book1}>慣性討好：不再無底限迎合</button><br />
      </main>
    </div>
  )
}
