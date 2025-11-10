import { useState, useEffect } from "react";
import Input from "./Input";
import Select from "./Select";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const OPTIONS = {
  assignees: ["Ram Mohan", "Anita Sharma", "Vikram Singh"],
  interestLevels: ["Cold", "Warm", "Hot"],
  followUpStatuses: ["Needs Follow Up", "In Progress", "Completed"],
  packages: ["Package A", "Package B", "Package C"],
  ptPackages: ["None", "PT Basic", "PT Plus"],
  sources: ["Social Media", "Referral", "Walk-in", "Event"],
};

function StatusForm({ leadData, updateLeadData, saveLead }) {
  const navigate = useNavigate();
  const [status, setStatus] = useState({
    inquiryDate: leadData?.inquiryDate || "",
    assignee: leadData?.assignee || "",
    interestLevel: leadData?.interestLevel || "",
    followUpStatus: leadData?.followUpStatus || "",
    preferredPackage: leadData?.preferredPackage || "",
    preferredPtPackage: leadData?.preferredPtPackage || "",
    source: leadData?.source || "",
  });

  useEffect(() => {
    if (leadData) {
      setStatus({
        inquiryDate: leadData.inquiryDate || "",
        assignee: leadData.assignee || "",
        interestLevel: leadData.interestLevel || "",
        followUpStatus: leadData.followUpStatus || "",
        preferredPackage: leadData.preferredPackage || "",
        preferredPtPackage: leadData.preferredPtPackage || "",
        source: leadData.source || "",
      });
    }
  }, [leadData]);

  const handleChange = (field) => (event) => {
    setStatus((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Update lead data in parent component and get updated lead
    const updatedLead = updateLeadData(status);
    
    // Save to localStorage with the updated lead
    saveLead(updatedLead);
    
    // Navigate back to leads list
    navigate("/lead-management");
  };

  return (
    <form className="space-y-8" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="flex flex-col space-y-2">
          <Input
            label="Inquiry Date"
            type="date"
            name="inquiryDate"
            value={status.inquiryDate}
            onChange={handleChange("inquiryDate")}
          />
        </div>

        <Select
          label="Assigned To Admin/Receptionist"
          name="assignee"
          options={OPTIONS.assignees}
          value={status.assignee}
          onChange={handleChange("assignee")}
        />

        <Select
          label="Interest Level"
          name="interestLevel"
          options={OPTIONS.interestLevels}
          value={status.interestLevel}
          onChange={handleChange("interestLevel")}
        />

        <Select
          label="Follow Up Status"
          name="followUpStatus"
          options={OPTIONS.followUpStatuses}
          value={status.followUpStatus}
          onChange={handleChange("followUpStatus")}
        />

        <Select
          label="Preferred Package"
          name="preferredPackage"
          options={OPTIONS.packages}
          value={status.preferredPackage}
          onChange={handleChange("preferredPackage")}
        />

        <Select
          label="Preferred PT Package (If Any)"
          name="preferredPtPackage"
          options={OPTIONS.ptPackages}
          value={status.preferredPtPackage}
          onChange={handleChange("preferredPtPackage")}
        />

        <Select
          label="How They Heard About The Gym"
          name="source"
          options={OPTIONS.sources}
          value={status.source}
          onChange={handleChange("source")}
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

export default StatusForm;