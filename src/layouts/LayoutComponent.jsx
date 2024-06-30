import Navbar from "../components/Navbar";
import PropTypes from "prop-types";

function LayoutComponent({ children }) {
  return (
    <div className="container">
      <div className="container-wrapper relative">
        <Navbar/>
        {children}
      </div>
    </div>
  );
}
LayoutComponent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutComponent;
