import Tabs from "../components/ui/Tabs";
import { useState } from "react";
import BasicDetailsForm from "../components/BasicDetailsForm";
import PreferencesForm from "../components/PreferencesForm";
import StatusForm from "../components/StatusForm";

function NewLead() {
  const [activeTab, setActiveTab] = useState(0);
  const [currentLead, setCurrentLead] = useState(null);

  const updateLeadData = (data) => {
    if (currentLead) {
      // Update existing lead
      const updatedLead = { ...currentLead, ...data };
      setCurrentLead(updatedLead);
      return updatedLead;
    } else {
      // Create new lead with ID
      const newLead = { id: Date.now(), ...data };
      setCurrentLead(newLead);
      return newLead;
    }
  };

  const saveLeadToStorage = (leadToSave = null) => {
    const lead = leadToSave || currentLead;
    if (!lead) return;

    const existingLeads = localStorage.getItem("leads");
    const leads = existingLeads ? JSON.parse(existingLeads) : [];
    
    // Check if lead already exists or add new
    const existingIndex = leads.findIndex((l) => l.id === lead.id);
    
    if (existingIndex >= 0) {
      // Update existing lead
      leads[existingIndex] = lead;
    } else {
      // Add new lead
      leads.push(lead);
    }
    
    localStorage.setItem("leads", JSON.stringify(leads));
  };

  return (
    <>
      <div className="space-y-6 mt-8">
        <Tabs
          activeTab={activeTab}
          tabs={["Basic", "Preferences", "Status"]}
          onChange={setActiveTab}
          allowDirectNavigation={false}
        />

        {activeTab === 0 && (
          <>
            <h2 className="font-poppins text-xl font-semibold">Basic Details</h2>
            <BasicDetailsForm 
              updateTab={(id) => setActiveTab(id)}
              leadData={currentLead}
              updateLeadData={updateLeadData}
              saveLead={saveLeadToStorage}
            />
          </>
        )}
        {activeTab === 1 && (
          <>
            <h2 className="font-poppins text-xl font-semibold">Preferences</h2>
            <PreferencesForm 
              updateTab={(id) => setActiveTab(id)}
              leadData={currentLead}
              updateLeadData={updateLeadData}
              saveLead={saveLeadToStorage}
            />
          </>
        )}
        {activeTab === 2 && (
          <>
            <h2 className="font-poppins text-xl font-semibold">Status</h2>
            <StatusForm 
              leadData={currentLead}
              updateLeadData={updateLeadData}
              saveLead={saveLeadToStorage}
            />
          </>
        )}
      </div>
    </>
  )
} 

export default NewLead;