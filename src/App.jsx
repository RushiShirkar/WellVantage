import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import Signup from './pages/Signup';
import Leads from './pages/Leads';
import Dashboard from './pages/Dashboard';
import Layout from './pages/Layout';
import NewLead from './pages/NewLead';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/signup" element={<Signup />} />

        {/* Routes With Sidebar Layout */}
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/lead-management" element={<Leads />} />
          <Route path="/lead-management/new" element={<NewLead />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;