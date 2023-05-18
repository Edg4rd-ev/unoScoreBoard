import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'
import Uno from './posts/uno'

export default function Home() {
  return (
    <>
      {/* Keep the existing code here */}
      <Head>
        <title>Uno Scoreboard</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <Uno />
      </section>
    </>
  )
}
