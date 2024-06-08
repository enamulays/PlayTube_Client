import { createContext, useState } from "react";
import PropTypes from "prop-types";
import { RiHome3Line, RiUserFollowLine } from "react-icons/ri";
import { BiLike } from "react-icons/bi";
import { PiClockCounterClockwiseFill, PiFolder } from "react-icons/pi";
import { IoVideocamOutline } from "react-icons/io5";
import { BsQuestionCircle } from "react-icons/bs";
import { GoGear } from "react-icons/go";

export const DataContext = createContext();

function DataProviderContext({ children }) {
  const [data, setData] = useState([
    {
      video: "../videos/video1.mp4",
      image: "../image/pexels-photo-3561339.webp",
      title: "JavaScript Fundamentals Variables and Data Types",
      view: "10.3",
      upTime: "44",
      chName: "Code Master",
      description:
        "Learn How to create stunning visualizations and dashboards using Tableau for data analysis",
      subscriber: "3248",
    },
    {
      video: "../videos/video2.mp4",
      image: "../image/pexels-photo-3561339.webp",
      title: "JavaScript Fundamentals Variables and Data Types",
      view: "10.3",
      upTime: "44",
      chName: "Code Master",
      description:
        "Learn How to create stunning visualizations and dashboards using Tableau for data analysis",
      subscriber: "3248",
    },
    {
      video: "../videos/video3.mp4",
      image: "../image/pexels-photo-3561339.webp",
      title: "JavaScript Fundamentals Variables and Data Types",
      view: "10.3",
      upTime: "44",
      chName: "Code Master",
      description:
        "Learn How to create stunning visualizations and dashboards using Tableau for data analysis",
      subscriber: "3248",
    },
    {
      video: "../videos/video4.mp4",
      image: "../image/pexels-photo-3561339.webp",
      title: "JavaScript Fundamentals Variables and Data Types",
      view: "10.3",
      upTime: "44",
      chName: "Code Master",
      description:
        "Learn How to create stunning visualizations and dashboards using Tableau for data analysis",
      subscriber: "3248",
    },
    {
      video: "../videos/video5.mp4",
      image: "../image/pexels-photo-3561339.webp",
      title: "JavaScript Fundamentals Variables and Data Types",
      view: "10.3",
      upTime: "44",
      chName: "Code Master",
      description:
        "Learn How to create stunning visualizations and dashboards using Tableau for data analysis",
      subscriber: "3248",
    },
    {
      video: "../videos/video6.mp4",
      image: "../image/pexels-photo-3561339.webp",
      title: "JavaScript Fundamentals Variables and Data Types",
      view: "10.3",
      upTime: "44",
      chName: "Code Master",
      description:
        "Learn How to create stunning visualizations and dashboards using Tableau for data analysis",
      subscriber: "3248",
    },
    {
      video: "../videos/video7.mp4",
      image: "../image/pexels-photo-3561339.webp",
      title: "JavaScript Fundamentals Variables and Data Types",
      view: "10.3",
      upTime: "44",
      chName: "Code Master",
      description:
        "Learn How to create stunning visualizations and dashboards using Tableau for data analysis",
      subscriber: "3248",
    },
    {
      video: "../videos/video8.mp4",
      image: "../image/pexels-photo-3561339.webp",
      title: "JavaScript Fundamentals Variables and Data Types",
      view: "10.3",
      upTime: "44",
      chName: "Code Master",
      description:
        "Learn How to create stunning visualizations and dashboards using Tableau for data analysis",
      subscriber: "3248",
    },
    {
      video: "../videos/video8.mp4",
      image: "../image/pexels-photo-3561339.webp",
      title: "JavaScript Fundamentals Variables and Data Types",
      view: "10.3",
      upTime: "44",
      chName: "Code Master",
      description:
        "Learn How to create stunning visualizations and dashboards using Tableau for data analysis",
      subscriber: "3248",
    },
  ]);
  const [sidebar, setSidebar] = useState([
    { icon: <RiHome3Line />, title: "Home" },
    { icon: <BiLike />, title: "Liked Videos" },
    { icon: <PiClockCounterClockwiseFill />, title: "History" },
    { icon: <IoVideocamOutline />, title: "My Content" },
    { icon: <PiFolder />, title: "Collections" },
    { icon: <RiUserFollowLine />, title: "Subscribers" },
    { icon: <BsQuestionCircle />, title: "Support" },
    { icon: <GoGear />, title: "Settings" },
  ]);

  return (
    <>
      <DataContext.Provider value={{ data, setData, sidebar, setSidebar }}>
        {children}
      </DataContext.Provider>
    </>
  );
}
DataProviderContext.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DataProviderContext;
