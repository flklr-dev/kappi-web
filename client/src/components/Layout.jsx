import Header from './Header';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  return (
    <div className="h-screen flex flex-col">
      {/* Header - Full width at top */}
      <Header />
      
      {/* Content area with sidebar */}
      <div className="flex-1 flex">
        {/* Sidebar */}
        <Sidebar />
        
        {/* Main content */}
        <main className="flex-1 bg-[#FBFAF8] overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout; 