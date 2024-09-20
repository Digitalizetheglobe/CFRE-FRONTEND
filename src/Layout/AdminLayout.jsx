import React from 'react';
import AdminNavbar from '../AdminDashboard/AdminNavbar'
import AdminFooter from '../AdminDashboard/AdminFooter'

const AdminLayout = ({ children }) => {
  return (
    <>
      <AdminNavbar />
      <main>{children}</main>
      {/* <AdminFooter /> */}
    </>
  );
};

export default AdminLayout;
