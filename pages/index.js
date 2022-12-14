import Head from 'next/head'
import Hero from '../components/Hero.jsx'

export default function Home() {
  return (
    <div>
      <Head>
        <title Captur />
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Hero heading="Captur Blogs" message="I capture moments in life and keep them alive." />
    </div>
  )
}
