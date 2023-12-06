import Image from "next/image"

export default function Category(){
    return(
      <>
      <div className="flex justify-center items-center bg-yellow bg-yellow-800 text-3xl font-bold">Best Product</div>
    <div className='grid justify-center items-center gap-6 text-projekblack font-black w-screen h-screen bg-yellow-800'>
      <div className='flex gap-6'>
      <span>   
      <div className="card w-[350px] h-[350px] bg-yellow-900  ">
              <figure className="px-10 pt-10">
              <img src='/Images/excavator.jpg' className="w-[250px] h-[200px]" alt='Logo'/>
              </figure>
              <div className="card-body items-center justify-center text-center">
                <h2 className="card-title text-xl">Excavator</h2>
              </div>
            </div>
      </span>
      <span>   
            <div className="card w-[350px] h-[350px] bg-yellow-900">
              <figure className="px-10 pt-10">
              <img src='/Images/grader.jpg' className="w-[250px] h-[200px]" alt='Logo'/>
              </figure>
              <div className="card-body items-center justify-center text-center">
                <h2 className="card-title text-xl">Grader</h2>
              </div>
            </div>
      </span>
      <span>   
            <div className="card w-[350px] h-[350px] bg-yellow-900">
              <figure className="px-10 pt-10">
              <img src='/Images/loader.jpg' className="w-[250px] h-[200px]" alt='Logo'/>
              </figure>
              <div className="card-body items-center justify-center text-center">
                <h2 className="card-title text-xl">Loader</h2>
              </div>
            </div>
      </span>
      </div>
    </div>
      </>
    )
}