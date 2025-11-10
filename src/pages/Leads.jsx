import LeadsTable from '../components/LeadsTable';
import { useState, useEffect } from 'react';

function Leads() {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    const leads = localStorage.getItem('leads');
    if (leads) {
      setLeads(JSON.parse(leads));
    }
  }, []);

  return (
    <div className="overflow-auto mt-8">
      <LeadsTable leads={leads} />
    </div>
  )
}

export default Leads;