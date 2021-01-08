import PropTypes from "prop-types";

export default function DashboardLayout({children}) {
  return (
    <div className="bg-gray-800 font-sans leading-normal tracking-normal">
      {children}
    </div>
  );
}

DashboardLayout.propTypes = {
  children: PropTypes.element.isRequired
}