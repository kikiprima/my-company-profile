import Image from "next/image"

const gambar = [
  {
    url : "/Images/hero.jpg"
  },
  {
    url : "/Images/hero1.jpg"
  },
  {
    url : "/Images/hero6.jpg"
  },
  {
    url : "/Images/hero3.jpg"
  }
]

export default function Hero(){
    return(
      <div className="carousel w-full">
      {
        gambar.map((item,index) => {
          return(
            <>
            <div id={`slide${index+1}`} className="carousel-item relative h-full w-full">
              <img src={item.url} className="w-full h-screen opacity-80" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">❮</a>
              <p className="text-white font-extrabold text-5xl">HeavyGear Solutions</p>
              <a href="#slide2" className="btn btn-circle">❯</a>
              </div>
          </div>
          </>
          )
        })
      }
     </div>
  
    )
}