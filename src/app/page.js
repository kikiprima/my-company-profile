import Image from 'next/image'
import WhyUs from './whyus/page'
import Category from './category/page'
import Hero from './Hero/page'

export default function Home() {
  return (
    <>
    <Hero />
    <WhyUs/>
    <Category/>

    </>
  )
}
