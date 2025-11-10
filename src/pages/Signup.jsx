import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import Button from '../components/Button';
import logo from '../assets/logo.png';
import backArrow from '../assets/backArrow.png';
import SignupDetailsForm from '../components/SignupDetailsForm';

function Signup() {
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  return (
    <div className="flex flex-col md:flex-row h-screen overflow-hidden">

      {/* Left Section */}
      <div className="w-full md:w-1/2 h-auto md:h-full min-h-[200px] md:min-h-0 bg-[#28A745] flex flex-col items-center justify-center space-y-2 md:space-y-4 relative overflow-hidden py-6 md:py-0">
        <NavLink to="/" className="absolute top-3 left-3 md:top-4 md:left-4 z-10">
          <img src={backArrow} className="w-8 h-8 md:w-[49px] md:h-[49px]" alt="Back" />
        </NavLink>
        <div className="flex flex-col items-center justify-center space-y-2 md:space-y-4 mt-8 md:mt-0">
          <img src={logo} alt="Wellvantage Logo" className="w-16 h-16 md:w-[120px] md:h-[120px]" />
          <p className="font-poppins font-semibold text-2xl md:text-[40px] text-white">Wellvantage</p>
        </div>
      </div>

      {/* Right Section */}
      {isButtonClicked ? (
        <div className="w-full md:w-1/2 flex-1 md:h-full overflow-y-auto flex flex-col p-4 md:p-6 space-y-6">
          <SignupDetailsForm />
        </div>
      ) : (
        <div className="w-full md:w-1/2 flex-1 md:h-full overflow-y-auto flex flex-col items-center justify-center p-4 md:p-6 text-center space-y-6">
          <h1 className="font-poppins font-semibold text-[31px]">Sign Up</h1>
          <p className="font-poppins font-semibold max-w-[336px]">
            Welcome! Manage, Track and Grow your Gym with Wellvantage.
          </p>
          <Button
            variant="secondary"
            size="md"
            className="flex items-center gap-3"
            onClick={() => setIsButtonClicked(prev => !prev)}
          >
            <img
              src="https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg"
              alt="Google"
              className="w-5 h-5"
            />
            Continue with Google
          </Button>
        </div>
      )}
    </div>
  );
}

export default Signup;