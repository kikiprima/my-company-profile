export default function WhyUs () {
    return(
        <>
        <div className='flex justify-center items-center bg-yellow-800 text-3xl'>KENAPA MEMILIH KITA?</div>
        <div className='bg-yellow-800 grid grid-cols-2 justify-center items-center w-screen h-screen'>
            <div className='grid justify-center'>
            <div className="card w-96 bg-yellow-800 text-black">
                <div className="card-body">
                    <h2 className="card-title text-3xl">Kualitas yang Teruji</h2>
                    <p>Kami menyediakan alat berat berkualitas tinggi yang telah terbukti handal, tahan lama, dan sesuai dengan standar tertinggi di industri ini.</p>
                </div>
            </div >
            <div className="card w-96 bg-yellow-800 text-black">
                <div className="card-body pt-[15px]">
                    <h2 className="card-title text-3xl">Inovasi yang Mendahului</h2>
                    <p>Kami terus mengembangkan teknologi terkini dalam alat berat untuk memberikan solusi yang lebih efisien, aman, dan menghadirkan kinerja yang unggul.</p>
                </div>
            </div >
            </div>
            <div className='grid justify-center'>
            <div className="card w-96 bg-yellow-800 text-black">
                <div className="card-body">
                    <h2 className="card-title pt-2 text-3xl">Layanan Pelanggan yang Unggul</h2>
                    <p>Kami berkomitmen untuk memberikan layanan pelanggan yang prima, dengan tim dukungan teknis yang responsif siap membantu setiap kebutuhan Anda.</p>
                </div>
            </div >
            <div className="card w-96 bg-yellow-800 text-black pb-14 ">
                <div className="card-body">
                    <h2 className="card-title text-3xl">Harga Kompetitif, Nilai yang Tinggi</h2>
                    <p>Kami menawarkan harga yang bersaing tanpa mengorbankan kualitas. Dengan garansi produk yang baik dan layanan purna jual yang memuaskan, kami memberikan nilai tambah yang signifikan.</p>
                </div>
            </div >
            </div>
        </div>
        </>
        
    )
}