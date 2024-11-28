import topImg from '../../Assets/AboutPageAssets/Abstract Design.svg'

const Overview = () => {
  return (
    <div className='3xl:w-[1820px] 2xl:w-[1280px] lg:w-[960px] xs:w-[358px] xs:h-[508px] h-[485px] border-r-8 border-b-8 border-l-2 border-t-2 border-[#262626]
    my-12 rounded-lg bg-white gap-[50px] flex items-center justify-around relative lg:p-28 lg:flex-row xs:flex-col xs:text-center lg:text-left xs:justify-center'>

       <img src={topImg} className='absolute left-0 top-0 xs:w-[100px] lg:w-[200px]' alt="" />

       <div className='xs:flex flex-col justify-center items-start '>
        <p className='text-lg font-medium border-2 rounded-lg w-[117px] text-center'>Overview</p>
        <h1 className='3xl:text-[48px] 2xl:text-[38px] xs:text-[28px] font-bold 3xl:w-[765px] 2xl:w-[600px]'>Welcome to Little Learners Academy</h1>
       </div>

       <div>
         <p className='3xl:text-[20px] xs:text-base xs:-mt-4'>
         A leading kinder garden school dedicated to providing a nurturing and stimulating environment for young learners. With a commitment to excellence in early education, we believe in shaping curious minds and building a strong foundation for a lifelong love of learning. Our holistic approach fosters intellectual, social, emotional, and physical development, ensuring that each child reaches their full potential.
         </p>
       </div>

    </div>
  )
}

export default Overview