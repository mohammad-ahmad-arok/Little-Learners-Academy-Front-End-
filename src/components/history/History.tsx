import historyImg from '../../Assets/AboutPageAssets/Abstract DesignHs.svg'

const History = () => {

    const timelineData = [
        {
          year: "2023",
          title: "Resilience and Future Horizons",
          description:
            "Adapting to new challenges, we remained committed to our mission of providing an exceptional early education...",
        },
        {
          year: "2017",
          title: "Innovation and Technology",
          description:
            "Innovation became the driving force behind our kindergarten’s progress from 2016 to 2020...",
        },
        {
          year: "2012",
          title: "Expansion and Recognition",
          description:
            "These years marked a period of expansion and recognition for our school...",
        },
        {
          year: "2005",
          title: "Inception and Growth",
          description:
            "Established in 2005, our kindergarten school began its journey with a vision to provide a nurturing space...",
        },
      ];

  return (
    <div className="flex flex-col items-center xs:text-center gap-5 pt-24">
    <p className="text-lg bg-white border-2 border-black rounded-md text-center w-[236px] py-1 px-3">Our Progressive Journey</p>
    <h2 className="text-5xl font-bold">Our History</h2>
    <p className="3xl:text-[20px] 2xl:text-[16px] 2xl:w-[880px] 3xl:w-[996px] xs:w-[358px]">Founded with a passion for early education in 2005, our kindergarten school boasts a rich history of empowering young learners to reach their potential through innovative teaching methods and a supportive learning environment</p>


   <div className="history flex justify-center gap-32 bg-white 3xl:w-[1596px] 2xl:w-[1280px] xs:w-[358px] 2xl:h-[1174px] relative">
     
   <div className='h-[892px] w-[24px] bg-black border-8 border-[#FFBE99] my-24 '></div>

     <div className='h-[892px]'>


     {timelineData.map((data) => (
         <div className='flex items-center justify-center my-24 '>
            <div className='flex flex-col '>

            <div className='flex flex-col items-center justify-center'>
            <div className='border-r-8 border-b-8 border-l-2 border-t-2 border-[#262626] rounded-lg xl:w-[364px] h-[110px] lg:p-[34px] flex items-center justify-evenly'>
          <img src={historyImg} className='w-[87px]' alt="" />
          <h2 className='font-bold text-[68px]'>{data.year}</h2>
         </div> 

         <p className='w-[360px]'>{data.description}</p>
            </div>


            </div>

         </div>
    ))}
     </div>

   </div>

</div>
  )
}

export default History