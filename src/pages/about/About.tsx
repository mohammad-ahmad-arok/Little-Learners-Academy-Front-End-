import Awards from "../../components/Awards/Awards"
import History from "../../components/history/History"
import Overview from "../../components/overview/Overview"
import Team from "../../components/Team/Team"
import Values from "../../components/valuesandmisson/Values"

const About = () => {
  return (
    <div className="bg-[#FFF5F0] flex flex-col items-center">
    <Overview/>
    <Values/>
    <Awards/>
    <History/>
    <Team/>
    </div>
  )
}

export default About