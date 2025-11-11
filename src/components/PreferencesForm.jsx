import { useState, useEffect } from "react";
import Select from "./ui/Select";
import Button from "./ui/Button";

const OPTIONS = {
  activityLevel: ["Sedentary", "Lightly active", "Moderately active", "Very active"],
  wellnessGoals: ["Lose weight", "Gain weight", "Build muscle", "Modify My Diet", "Manage Stress", "Improve Step Count", "General wellness"],
  fitnessFocus: ["Gym workouts", "Yoga", "Meditation", "Nutrition", "Recovery"],
  gymTime: ["Morning", "Afternoon", "Evening", "Late evening"],
  intensity: ["light", "moderate", "high"],
  medicalConcerns: ["None", "Diabetes", "Hypertension", "Asthma", "Others"],
  gymExperience: ["Yes", "No"],
};

function PreferencesForm({ updateTab, leadData, updateLeadData, saveLead }) {
  const [preferences, setPreferences] = useState({
    activityLevel: leadData?.activityLevel || "",
    wellnessGoals: leadData?.wellnessGoals || "",
    fitnessFocus: leadData?.fitnessFocus || "",
    gymTime: leadData?.gymTime || "",
    intensity: leadData?.intensity || "",
    medicalConcerns: leadData?.medicalConcerns || "",
    gymExperience: leadData?.gymExperience || "",
  });

  useEffect(() => {
    if (leadData) {
      setPreferences({
        activityLevel: leadData.activityLevel || "",
        wellnessGoals: leadData.wellnessGoals || "",
        fitnessFocus: leadData.fitnessFocus || "",
        gymTime: leadData.gymTime || "",
        intensity: leadData.intensity || "",
        medicalConcerns: leadData.medicalConcerns || "",
        gymExperience: leadData.gymExperience || "",
      });
    }
  }, [leadData]);

  const handleChange = (field) => (event) => {
    setPreferences((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Update lead data in parent component and get updated lead
    const updatedLead = updateLeadData(preferences);
    
    // Save to localStorage with the updated lead
    saveLead(updatedLead);
    
    // Navigate to next tab
    updateTab(2);
  };

  return (
    <form className="space-y-8" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Select
          label="Activity Level"
          name="activityLevel"
          options={OPTIONS.activityLevel}
          value={preferences.activityLevel}
          onChange={handleChange("activityLevel")}
        />
        <Select
          label="Wellness Goals"
          name="wellnessGoals"
          options={OPTIONS.wellnessGoals}
          value={preferences.wellnessGoals}
          onChange={handleChange("wellnessGoals")}
        />
        <Select
          label="Primary Fitness Focus"
          name="fitnessFocus"
          options={OPTIONS.fitnessFocus}
          value={preferences.fitnessFocus}
          onChange={handleChange("fitnessFocus")}
        />
        <Select
          label="Preferred Gym Time"
          name="gymTime"
          options={OPTIONS.gymTime}
          value={preferences.gymTime}
          onChange={handleChange("gymTime")}
        />
        <Select
          label="Preferred Workout Intensity"
          name="intensity"
          options={OPTIONS.intensity}
          value={preferences.intensity}
          onChange={handleChange("intensity")}
        />
        <Select
          label="Medical Concerns"
          name="medicalConcerns"
          options={OPTIONS.medicalConcerns}
          value={preferences.medicalConcerns}
          onChange={handleChange("medicalConcerns")}
        />
        <Select
          label="Previous Gym Experience"
          name="gymExperience"
          options={OPTIONS.gymExperience}
          value={preferences.gymExperience}
          onChange={handleChange("gymExperience")}
        />
      </div>

      <div className="flex justify-center mt-12">
        <Button type="submit" className="w-[393px]">
          Update
        </Button>
      </div>
    </form>
  );
}

export default PreferencesForm;