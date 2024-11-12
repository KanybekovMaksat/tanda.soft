import {HomeContent, HomeHeader} from "@/entities/Home"

const Home = () => {

  return (
    <div className='Home'>
      <div className="container">
        <HomeHeader/>
        <HomeContent/>
      </div>
    </div>
  )
}

export default Home
