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
      id: 1,
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
      id: 2,
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
      id: 3,
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
      id: 4,
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
      id: 5,
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
      id: 6,
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
      id: 7,
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
      id: 8,
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
      id: 9,
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

  const [comments, setComments] = useState([
    {
      name: "Sarah Johnson",
      userName: "@sarahjv",
      comTime: "17",
      title:
        "This series is exactly what I've been looking for! Excited to dive into these advanced React patterns. Thanks for putting this together!",
    },
    {
      name: "Sarah Johnson",
      userName: "@sarahjv",
      comTime: "17",
      title:
        "This series is exactly what I've been looking for! Excited to dive into these advanced React patterns. Thanks for putting this together!",
    },
    {
      name: "Sarah Johnson",
      userName: "@sarahjv",
      comTime: "17",
      title:
        "This series is exactly what I've been looking for! Excited to dive into these advanced React patterns. Thanks for putting this together!",
    },
    {
      name: "Sarah Johnson",
      userName: "@sarahjv",
      comTime: "17",
      title:
        "This series is exactly what I've been looking for! Excited to dive into these advanced React patterns. Thanks for putting this together!",
    },
    {
      name: "Sarah Johnson",
      userName: "@sarahjv",
      comTime: "17",
      title:
        "This series is exactly what I've been looking for! Excited to dive into these advanced React patterns. Thanks for putting this together!",
    },
    {
      name: "Sarah Johnson",
      userName: "@sarahjv",
      comTime: "17",
      title:
        "This series is exactly what I've been looking for! Excited to dive into these advanced React patterns. Thanks for putting this together!",
    },
    {
      name: "Sarah Johnson",
      userName: "@sarahjv",
      comTime: "17",
      title:
        "This series is exactly what I've been looking for! Excited to dive into these advanced React patterns. Thanks for putting this together!",
    },
    {
      name: "Sarah Johnson",
      userName: "@sarahjv",
      comTime: "17",
      title:
        "This series is exactly what I've been looking for! Excited to dive into these advanced React patterns. Thanks for putting this together!",
    },
    {
      name: "Sarah Johnson",
      userName: "@sarahjv",
      comTime: "17",
      title:
        "This series is exactly what I've been looking for! Excited to dive into these advanced React patterns. Thanks for putting this together!",
    },
    {
      name: "Sarah Johnson",
      userName: "@sarahjv",
      comTime: "17",
      title:
        "This series is exactly what I've been looking for! Excited to dive into these advanced React patterns. Thanks for putting this together!",
    },
    {
      name: "Sarah Johnson",
      userName: "@sarahjv",
      comTime: "17",
      title:
        "This series is exactly what I've been looking for! Excited to dive into these advanced React patterns. Thanks for putting this together!",
    },
  ]);

  return (
    <>
      <DataContext.Provider
        value={{ data, setData, sidebar, setSidebar, comments, setComments }}
      >
        {children}
      </DataContext.Provider>
    </>
  );
}
DataProviderContext.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DataProviderContext;
