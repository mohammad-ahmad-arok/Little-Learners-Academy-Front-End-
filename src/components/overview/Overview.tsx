import topImg from '../../Assets/AboutPageAssets/Abstract Design.svg'
import styles from '../../styles';

interface OverviewProps {
  sub?: string;
  title: string;
  para: string;
}
const Overview: React.FC<OverviewProps> = ({sub,title,para}) => {
  return (
    <div className={`${styles.marginX} ${styles.cardStyle}
    my-12 bg-white gap-[50px] flex items-center justify-around relative lg:flex-row xs:flex-col xs:text-center lg:text-left xs:justify-center`}>

       <img src={topImg} className='absolute left-0 top-0 xs:w-[100px] lg:w-[200px]' alt="" />

       <div className='xs:flex flex-col justify-center items-start '>
        <p className='text-lg font-medium border-2 rounded-lg w-[117px] text-center'>{sub}</p>
        <h1 className='3xl:text-[48px] 2xl:text-[38px] xs:text-[28px] font-bold 3xl:w-[765px] 2xl:w-[600px]'>{title}</h1>
       </div>

       <div>
         <p className='3xl:text-[20px] xs:text-base xs:-mt-4'>
           {para}
         </p>
       </div>

    </div>
  )
}

export default Overview