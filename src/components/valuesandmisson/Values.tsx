import missionImg from '../../Assets/AboutPageAssets/misson.svg'

const data = [
    {name: "Mission", desc: 'At Little Learners Academy, our mission is to inspire a passion for learning and empower young minds to become confident, compassionate, and creative individuals. We strive to create a safe and inclusive space where children thrive academically, socially, and emotionally, setting the stage for a successful educational journey.', img: missionImg},
    {name: "Vision", desc: 'At Little Learners Academy, our mission is to inspire a passion for learning and empower young minds to become confident, compassionate, and creative individuals. We strive to create a safe and inclusive space where children thrive academically, socially, and emotionally, setting the stage for a successful educational journey.', img: missionImg},
]

const Values = () => {
  return (
    <div className="flex flex-col items-center xs:text-center lg:text-left gap-5">
        <p className="text-lg bg-white border-2 border-black rounded-md text-center w-[175px] py-1 px-5">Misson & Visions</p>
        <h2 className="text-5xl font-bold">Our Mission & Visions</h2>
        <p>We are here to provide a nurturing and inclusive environment where young minds can thrive, fostering a love for learning and personal growth.</p>
        

        <div className="flex xs:flex-col lg:flex-row gap-10">
         
          {data.map((card) => (
            <div className="3xl:w-[768px] 3xl:h-[410px] 2xl:w-[620px] 2xl:h-[330px] xs:w-[358px] bg-white rounded border-r-8 border-b-8 border-l-2 border-t-2 border-[#262626] p-12">
                <div className="flex justify-between items-center">
                    <h2 className='font-bold text-5xl'>{card.name}</h2>
                    <img src={card.img} alt="" />
                </div>
                <p className='mt-12 3xl:text-lg'>{card.desc}</p>
            </div>
          ))}

        </div>


    </div>
  )
}

export default Values