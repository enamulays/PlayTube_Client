import { useContext } from "react";
import SideBarListData from "../components/SideBarListData";
import { DataContext } from "../components/DataProviderContext";
import PropTypes from "prop-types";
import "../style/Sidebar.css";

function LayoutTwo({ children }) {
  const { sidebar } = useContext(DataContext);
  return (
    <div className="flex">
      <div className="sidebar">
        <div className="sidebar-wrap">
          <SideBarListData sidebar={sidebar} />
        </div>
      </div>
      <div className="right-side">{children}</div>
    </div>
  );
}

LayoutTwo.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutTwo;
