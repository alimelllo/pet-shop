import Head from 'next/head';
import Image from 'next/image';
import mainBg from '../public/images/main.webp';

export default function Home() {
  return (
   
    <div className='app '>
       <Head>
        <title>Pet Shop</title>
        <meta property="og:title" content="Pet Shop" key="title" />
      </Head>
      
      <div>
        <div className='flex flex-row justify-center  text-white w-full z-50 fixed py-[1rem]'>
             <p className='text-center text-[#676767] text-[1.25rem] mx-5 p-2 cursor-pointer transition-all duration-200 hover:scale-105 hover:text-[#1a1a1a] hover:font-[600]'>محصولات</p>
             <p className='text-center text-[#676767] text-[1.25rem] mx-5 p-2 cursor-pointer transition-all duration-200 hover:scale-105 hover:text-[#1a1a1a] hover:font-[600]' >دسته ها</p>
             <p className='text-center text-[#676767] text-[1.25rem] mx-5 p-2 cursor-pointer transition-all duration-200 hover:scale-105 hover:text-[#1a1a1a] hover:font-[600]'>تماس </p>
        </div>
        <div>
            <Image src={mainBg} layout='fill' objectFit='contain'/>
        </div>
      </div>
  

    </div>
  )
}
