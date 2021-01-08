import PropTypes from "prop-types";
import Navbar from './components/navbar.component';
import Sidebar from './components/sidebar.component';

export default function DashboardLayout({children}) {
  return (
    <div className="bg-gray-50 font-sans leading-normal tracking-normal">
      <Navbar />
      <Sidebar />
      {children}
    </div>
  );
}

DashboardLayout.propTypes = {
  children: PropTypes.element.isRequired
}