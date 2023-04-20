import Head from 'next/head';
import Image from 'next/image';
import mainBg from '../public/images/main.jpg';

export default function Home() {
  return (
   
    <div className='app '>
       <Head>
        <title>Pet Shop</title>
        <meta property="og:title" content="Pet Shop" key="title" />
      </Head>
      
      <div>
        <div className='flex flex-row justify-center text-white w-full z-50 fixed py-[1rem]'>
             <p className='text-center text-[#d4d4d4] text-[1.5rem] mx-5 p-2 cursor-pointer transition-all duration-200 hover:scale-105 hover:text-white hover:font-[600]'>Products</p>
             <p className='text-center text-white text-[1.5rem] mx-5 p-2 cursor-pointer transition-all duration-200 hover:scale-105 hover:text-white hover:font-[600]' >Brands</p>
             <p className='text-center text-white text-[1.5rem] mx-5 p-2 cursor-pointer transition-all duration-200 hover:scale-105 hover:text-white hover:font-[600]'>Contact</p>
        </div>
        <Image src={mainBg} layout='responsive' objectFit='initial'/>
      </div>
      
      
      <p className="text-center mt-[3rem] text-[#505050] font-[600] text-[3rem]">Pet Shop</p>

    </div>
  )
}
