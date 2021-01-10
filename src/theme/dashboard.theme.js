import PropTypes from "prop-types";
import Navbar from './components/navbar.component';
import Sidebar from './components/sidebar.component';

export default function DashboardLayout({children}) {
  return (
    <div className="bg-gray-50 font-sans leading-normal tracking-normal">
      <Navbar />
      <div className="flex flex-col md:flex-row">
				<Sidebar />
				<div className="main-content flex-1 bg-gray-100 mt-12 md:mt-12 md:ml-48 pb-24 md:pb-5">
					<div className="flex flex-wrap p-5 mt-12 md:mt-0">
						{children}
					</div>
				</div>
      </div>
    </div>
  );
}

DashboardLayout.propTypes = {
  children: PropTypes.element.isRequired
}