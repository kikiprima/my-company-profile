import Image from 'next/image'
import WhyUs from './whyus/page'
import Category from './category/page'

export default function Home() {
  return (
    <>
    <div className="hero min-h-screen bg-fixed bg-cover" style={{backgroundImage: 'url(/Images/walpaper2.jpg)'}}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-7 font-serif text-black text-3xl font-bold">HEAVYGEAR SOLUTIONS</h1>
          <p className="mb-5 text-xl font-bold font-serif">Memperkuat Fondasi <br/>Membangun Masa Depan</p>
        </div>
      </div>
    </div>
    <WhyUs/>
    <Category/>

    </>
  )
}
