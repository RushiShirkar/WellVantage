import { Navigate, Outlet } from 'react-router-dom';

export default function ProtectedRoute() {
  const userData = localStorage.getItem('userData');
  
  if (!userData) {
    return <Navigate to="/" replace />;
  }
  
  return <Outlet />;
}