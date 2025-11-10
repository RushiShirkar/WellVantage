import { useState } from "react";
import Input from "./Input";
import MobileInput from "./MobileInput";
import OtpInput from "./OtpInput";
import CheckboxWithLabel from "./CheckboxWithLabel";
import Button from "./Button";
import { useNavigate } from 'react-router-dom';

function DetailsForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    gymName: '',
    firstName: '',
    lastName: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    country: '',
    phoneNumber: '',
    otp: '',
    isPrivacyAccepted: false
  });

  const handleChange = (field) => (event) => {
    setFormData((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handlePhoneChange = (event) => {
    setFormData((prev) => ({ ...prev, phoneNumber: event.target.value }));
  };

  const handleOtpChange = (value) => {
    setFormData((prev) => ({ ...prev, otp: value }));
  };

  const handleCheckboxChange = (e) => {
    setFormData((prev) => ({ ...prev, isPrivacyAccepted: e.target.checked }));
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    localStorage.setItem('userData', JSON.stringify(formData));
    navigate('/dashboard');
  }

  return (
    <div className="p-4 md:p-6">
      <h3 className="text-center font-poppins font-semibold text-[31px]">Details</h3>
      <p className="font-poppins font-semibold text-[18px] mt-6">
        {`Let’s build your gym’s digital HQ! 🏋️‍♂️`}
      </p>
      <p className="font-poppins font-semibold text-[15px] mt-6 text-center text-[#737373]">
        Enter your name, address & contact so we can tailor everything for your business.
      </p>

      {/* Details Form */}
      <form className="flex flex-col gap-4 mt-5" onSubmit={handleSubmitForm}>
        <Input
          label="Gym Name"
          required
          name="gymName"
          value={formData.gymName}
          onChange={handleChange("gymName")}
        />
        <Input
          label="Gym Owner's First Name"
          subLabel="(will have access to all features of the app)"
          required
          name="firstName"
          value={formData.firstName}
          onChange={handleChange("firstName")}
        />

        <Input
          label="Last Name"
          required
          name="lastName"
          value={formData.lastName}
          onChange={handleChange("lastName")}
        />
        <Input
          label="Address Line 1"
          required
          name="addressLine1"
          value={formData.addressLine1}
          onChange={handleChange("addressLine1")}
        />
        <Input
          label="Address Line 2"
          required
          name="addressLine2"
          value={formData.addressLine2}
          onChange={handleChange("addressLine2")}
        />
        <Input
          label="City"
          required
          name="city"
          value={formData.city}
          onChange={handleChange("city")}
        />
        <Input
          label="State"
          required
          name="state"
          value={formData.state}
          onChange={handleChange("state")}
        />
        <Input
          label="Country"
          required
          name="country"
          value={formData.country}
          onChange={handleChange("country")}
        />
        <MobileInput
          label="Phone Number"
          required
          value={formData.phoneNumber}
          onChange={handlePhoneChange}
          onVerify={(data) => console.log(data)}
          showVerify={true}
        />
        <div className="flex justify-center items-center">
          <OtpInput
            value={formData.otp}
            onChange={handleOtpChange}
            required
          />
        </div>
        <div className="flex justify-center items-center mt-2">
          <CheckboxWithLabel
            required
            checked={formData.isPrivacyAccepted}
            onChange={handleCheckboxChange}
          />
        </div>
        <div className="flex justify-center mt-2">
          <Button type="submit" className="w-[393px]">Next</Button>
        </div>
      </form>
    </div>
  )
}

export default DetailsForm;