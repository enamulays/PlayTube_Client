import PropTypes from "prop-types";
import { Link } from "react-router-dom";
function SideBarListData({ sidebar }) {
  return (
    <ul>
      {sidebar.map((list, index) => (
        <li key={index}>
          <Link to={list.path}>
            <div className="side-icon">{list.icon}</div>
            <div className="side-text">{list.title}</div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
SideBarListData.propTypes = {
  sidebar: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.node.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default SideBarListData;
