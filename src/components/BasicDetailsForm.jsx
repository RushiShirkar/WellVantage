import { useState } from "react";
import Input from "./ui/Input";
import Select from "./ui/Select";
import MobileInput from "./ui/MobileInput";
import Button from "./ui/Button";
import MeasurementField from "./MeasurementField";

const GENDER_OPTIONS = ["Male", "Female", "Non-Binary", "Other"];
const HEIGHT_UNITS = ["cm", "ft"];
const WEIGHT_UNITS = ["kg", "lb"];

function BasicDetailsForm({ updateTab, leadData, updateLeadData, saveLead }) {
  const [formData, setFormData] = useState({
    firstName: leadData?.firstName || "",
    lastName: leadData?.lastName || "",
    phoneNumber: leadData?.phoneNumber || "",
    email: leadData?.email || "",
    gender: leadData?.gender || "",
    dateOfBirth: leadData?.dateOfBirth || "",
    height: leadData?.height || "",
    heightUnit: leadData?.heightUnit || "kg",
    weight: leadData?.weight || "",
    weightUnit: leadData?.weightUnit || "cm",
  });

  const handleChange = (field) => (event) => {
    setFormData((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Update lead data in parent component and get updated lead
    const updatedLead = updateLeadData(formData);
    
    // Save to localStorage with the updated lead
    saveLead(updatedLead);
    
    // Navigate to next tab
    updateTab(1);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Input
          label="First Name"
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
        <MobileInput
          label="Phone Number"
          required
          onVerify={(data) => console.log(data)}
          showVerify={false}
          value={formData.phoneNumber}
          onChange={handleChange("phoneNumber")}
        />
        <Input
          label="Email"
          required
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange("email")}
        />
        <Select 
          label="Gender"
          required
          options={GENDER_OPTIONS}
          value={formData.gender}
          onChange={handleChange("gender")}
        />
        <Input
          label="Date of Birth"
          required
          name="dateOfBirth"
          type="date"
          value={formData.dateOfBirth}
          onChange={handleChange("dateOfBirth")}
        />
        <MeasurementField
          label="Height"
          required
          name="height"
          unitName="heightUnit"
          unitOptions={HEIGHT_UNITS}
          value={formData.height}
          unitValue={formData.heightUnit}
          onChange={handleChange("height")}
          onUnitChange={handleChange("heightUnit")}
        />
        <MeasurementField
          label="Weight"
          required
          name="weight"
          unitName="weightUnit"
          unitOptions={WEIGHT_UNITS}
          value={formData.weight}
          unitValue={formData.weightUnit}
          onChange={handleChange("weight")}
          onUnitChange={handleChange("weightUnit")}
        />
      </div>
      <div className="flex justify-center mt-12">
        <Button type="submit" className="w-[393px]">Update</Button>
      </div>
    </form>
  );
}

export default BasicDetailsForm;