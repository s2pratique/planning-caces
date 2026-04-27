import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
 
const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
 
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
 
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
 
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header onMenuClick={toggleSidebar} />
      
      <div className="flex">
        <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
        
        <main className="flex-1 p-4 lg:p-6">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};
 
export default Layout;
 
