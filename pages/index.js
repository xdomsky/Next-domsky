import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/footer'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Domsky | Home</title>
        <meta name="keywords" content="ninja" />
      </Head>
      <div>
        <a class="fixed bottom-2 right-2 bg-black text-white px-2 py-2"><Link href="#top">elo</Link></a>
        <div id="top" class="px-20 py-40 bg-indigo-200 flex justify-center">
          <h1 class="text-4xl font-bold max-w-sm text-center">Projektuje i tworze strone na miarę potrzeb Klienta.</h1>
        </div>
        <div class="px-20 py-20 bg-white">
          <h1 class="text-3xl font-bold text-center">Strony Internetowe</h1>
          <div class="flex justify-center">
            <p class="text-xl max-w-2xl text-center">Tworzę profesjonalne, nowoczesne i co najważniejsze funkcjonalne strony internetowe. Dzięki którym klienci w łatwy sposób znajdą ważne dla nich informacje.</p>
          </div>
        </div>
        <div class="px-20 py-10 bg-indigo-300 grid grid-cols-2 flex items-center">
          <div class="left max-w-md mx-52">
            <h1 class="text-3xl font-bold text-indigo-500">Projektuje Strony Internetowe</h1>
            <p class="pt-5 text-xl text-indigo-500">Projektuje strony internetowe co oznacza że robię najpierw projekt graficzny następnie tworze strony dla firm.</p>
          </div>
          <div class="right max-w-md">
            <img src="/projekts.jpg" alt="img" class="mx-5"></img>
          </div>
        </div>
        <div class="px-20 py-10 bg-white grid grid-cols-2 flex items-center">
          <div class="left max-w-md mx-52">
            <img src="/mobile.jpg" alt="img" class="-mx-5"></img>
          </div>
          <div class="right max-w-md">
            <h1 class="text-3xl font-bold text-black">Wdrażam mobilność strony</h1>
            <p class="pt-5 text-xl text-black">Wdrażam w strone mobilność strony co oznacza że można ją obejrzeć na telefonie.</p>
          </div>
        </div>
        <div class="px-20 py-10 bg-indigo-300 grid grid-cols-2 flex items-center">
          <div class="left max-w-md mx-52">
            <h1 class="text-3xl font-bold text-indigo-500">Pozycjonuje Strony Internetowe</h1>
            <p class="pt-5 text-xl text-indigo-500">Pozycjonuje wyszukiwanie strony w wyszukiwarce internetowej.</p>
          </div>
          <div class="right max-w-md">
            <img src="/pozycjonowanies.jpg" alt="img" class="mx-5"></img>
          </div>
        </div>
      </div>
    </>
  )
}