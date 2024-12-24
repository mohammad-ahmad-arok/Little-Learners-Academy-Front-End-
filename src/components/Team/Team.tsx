import Img from '../../Assets/AboutPageAssets/Abstract DesignHs.svg'

const teamMembers = [
    {name: "Sarah A Sarah", img:Img, desc:'Ms. Sarah is a passionate educator with over 10 years of experience in guiding young minds. Her warm and nurturing approach creates a welcoming classroom environment where children feel comfortable to explore and learn.', qualification: 'Qualification:Bachelors Degree in Early Childhood Education'}
    ,{name: "Sarah A Sarah", img:Img, desc:'Ms. Sarah is a passionate educator with over 10 years of experience in guiding young minds. Her warm and nurturing approach creates a welcoming classroom environment where children feel comfortable to explore and learn.', qualification: 'Qualification:Bachelors Degree in Early Childhood Education'}
    ,{name: "Sarah A Sarah", img:Img, desc:'Ms. Sarah is a passionate educator with over 10 years of experience in guiding young minds. Her warm and nurturing approach creates a welcoming classroom environment where children feel comfortable to explore and learn.', qualification: 'Qualification:Bachelors Degree in Early Childhood Education'}
    ,{name: "Sarah A Sarah", img:Img, desc:'Ms. Sarah is a passionate educator with over 10 years of experience in guiding young minds. Her warm and nurturing approach creates a welcoming classroom environment where children feel comfortable to explore and learn.', qualification: 'Qualification:Bachelors Degree in Early Childhood Education'}
    ,{name: "Sarah A Sarah", img:Img, desc:'Ms. Sarah is a passionate educator with over 10 years of experience in guiding young minds. Her warm and nurturing approach creates a welcoming classroom environment where children feel comfortable to explore and learn.', qualification: 'Qualification:Bachelors Degree in Early Childhood Education'}
    ,{name: "Sarah A Sarah", img:Img, desc:'Ms. Sarah is a passionate educator with over 10 years of experience in guiding young minds. Her warm and nurturing approach creates a welcoming classroom environment where children feel comfortable to explore and learn.', qualification: 'Qualification:Bachelors Degree in Early Childhood Education'}
]

const Team = () => {

  return (
    <div className="flex flex-col items-center xs:text-center gap-5 pt-24">
    <p className="text-lg bg-white border-2 border-black rounded-md text-center w-[236px] py-1 px-3">Our Teachers With Experties</p>
    <h2 className="text-5xl font-bold">Our Team Members</h2>
    <p className="3xl:text-[20px] 2xl:text-[16px] 2xl:w-[880px] 3xl:w-[996px] xs:w-[358px]">At Little Learners Academy, our teaching team is the heart of our educational journey. We take great pride in employing highly qualified and passionate educators who possess a deep understanding of early childhood development. Our teachers create a warm and engaging atmosphere, encouraging curiosity, instilling confidence, and fostering a love for learning.</p>
 
    <div className='grid lg:grid-cols-2 lg:grid-rows-3 xs:grid-rows-1 gap-6'>
    {teamMembers.map((member) => (
        <div className='lg:w-[620px] xs:w-[358px] lg:h-[404px] xs:h-[454px] bg-white border-r-8 border-b-8 border-l-2 border-t-2 border-[#262626] rounded p-10'>

          <div className='flex items-center justify-between'>
            <div className='flex items-center justify-center'>
            <img src={member.img} className='border-2 border-black rounded' alt="" />
            <h2 className='font-extrabold text-2xl ml-3'>{member.name}</h2>
            </div>

          </div>

          <div className='lg:w-[540px] xs:w-[298px] xs:h-[256px] lg:h-[220px] bg-[#FFF5F0] mt-5 border-2 border-black'>
            <p className='font-semibold text-xl text-left xs:p-2 p-6'>{member.qualification}</p>
            <p className='font-medium'>{member.desc}</p>
          </div>
 
        </div>
    ))}
    </div>

</div>
  )
}

export default Team;