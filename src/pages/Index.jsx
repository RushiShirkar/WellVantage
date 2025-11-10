import ImageSlider from '../components/ImageSlider';
import { slides } from '../content';
import logo from "../assets/logo.png";
import Button from '../components/Button';
import { NavLink } from 'react-router-dom';

function Index() {
  return (
    <div className="flex flex-col md:flex-row">

      {/* Slider side */}
      <div className="w-full md:w-1/2 h-[50vh] md:h-screen">
        <ImageSlider slides={slides} />
      </div>

      {/* Right content side */}
      <div className="w-full md:w-1/2 h-[50vh] md:h-screen flex flex-col items-center justify-center p-6">
        <h4 className="font-poppins font-bold text-[40px] text-[#28A745] leading-[35px] tracking-normal text-center">
          Welcome to
        </h4>
        <div className="flex gap-2 items-center justify-center mt-4">
          <img
            src={logo}
            className="w-[72px] h-[69px]"
            alt=""
          />
          <p className="font-poppins text-[34px] font-semibold">Wellvantage</p>
        </div>
        <NavLink to="/signup">
          <Button className="mt-12 px-12">Gym Owner - Sign Up</Button>
        </NavLink>
      </div>

    </div>
  )
}

export default Index;