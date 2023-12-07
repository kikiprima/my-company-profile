import Image from "next/image"

export default function Category(){
    return(
      <>
    <div className="flex justify-center items-center w-screen bg-base-200 text-3xl font-bold">Best Product</div>
    <div className='grid  justify-center items-center gap-6 text-projekblack font-black w-screen bg-white'>
      <div className='grid md:grid-cols-1 lg:grid-cols-3 gap-3'>
      <div>   
            <div className="card w-[350px] h-[350px] bg-white  ">
              <figure className="px-10 pt-10">
              <img src='/Images/excavator.jpg' className="w-[250px] h-[200px]" alt='Logo'/>
              </figure>
              <div className="card-body items-center justify-center text-center">
                <h2 className="card-title text-xl">Excavator</h2>
              </div>
            </div>
      </div>
      <div>   
            <div className="card w-[350px] h-[350px] bg-white">
              <figure className="px-10 pt-10">
              <img src='/Images/grader.jpg' className="w-[250px] h-[200px]" alt='Logo'/>
              </figure>
              <div className="card-body items-center justify-center text-center">
                <h2 className="card-title text-xl">Grader</h2>
              </div>
            </div>
      </div>
      <div>   
            <div className="card w-[350px] h-[350px] bg-white">
              <figure className="px-10 pt-10">
              <img src='/Images/loader.jpg' className="w-[250px] h-[200px]" alt='Logo'/>
              </figure>
              <div className="card-body items-center justify-center text-center">
                <h2 className="card-title text-xl">Loader</h2>
              </div>
            </div>
      </div>
      </div>
    </div>
      </>
    )
}