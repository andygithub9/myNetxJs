import Head from 'next/head'
import Link from 'next/link'
import MyButton from '../components/MyButton'
import { useState } from 'react'

import Image from 'next/image'
import myImg from '../public/dorahemon.png'

export default function Home() {
  const [msg, setMsg] = useState('')

  const btnSetMsg = (props) => {
    setMsg(`你點了 - ${props}`)
  }

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>主頁面</h1>
        <hr />
        <Link href="/about">
          <a>To About</a>
        </Link>
        <hr />
        <MyButton value="按鈕一" btnClick={() => btnSetMsg('1')}></MyButton>
        <MyButton value="按鈕二" btnClick={() => btnSetMsg('2')}></MyButton>
        <MyButton value="按鈕三" btnClick={() => btnSetMsg('3')}></MyButton>
        <h2>{msg}</h2>
        <hr />
        <Image src={myImg}></Image>
      </div>
    </div>
  )
}
