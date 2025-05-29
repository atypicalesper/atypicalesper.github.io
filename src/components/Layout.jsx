import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="container">
      <Navbar />
      <main className="content">
        <Outlet /> {/* This will render the matched child route */}
      </main>
    </div>
  );
};

export default Layout;