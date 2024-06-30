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
  const [login, setLogin] = useState(false);
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
      banner: "../image/thumbnail1.webp",
      videoUploads: false,
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
      banner: "../image/thumbnail1.webp",
      videoUploads: false,
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
      banner: "../image/thumbnail1.webp",
      videoUploads: false,
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
      banner: "../image/thumbnail1.webp",
      videoUploads: false,
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
      banner: "../image/thumbnail1.webp",
      videoUploads: false,
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
      banner: "../image/thumbnail1.webp",
      videoUploads: false,
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
      banner: "../image/thumbnail1.webp",
      videoUploads: false,
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
      banner: "../image/thumbnail1.webp",
      videoUploads: false,
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
      banner: "../image/thumbnail1.webp",
      videoUploads: false,
    },
  ]);
  const [sidebar, setSidebar] = useState([
    { icon: <RiHome3Line />, title: "Home", path:'/'},
    { icon: <BiLike />, title: "Liked Videos", path:'/'},
    { icon: <PiClockCounterClockwiseFill />, title: "History", path:'/'},
    { icon: <IoVideocamOutline />, title: "My Content", path:'/'},
    { icon: <PiFolder />, title: "Collections" },
    { icon: <RiUserFollowLine />, title: "Subscribers", path:'/'},
    { icon: <BsQuestionCircle />, title: "Support", path:'/'},
    { icon: <GoGear />, title: "Settings", path:'/'},
  ]);



const [comments, setComments] = useState([
    {
      name: "Sarah Johnson",
      userName: "@sarahjv",
      comTime: "17",
      title:
        "This series is exactly what I've been looking for! Excited to dive into these advanced React patterns. Thanks for putting this together!",
        uploads: false,
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
  const [tweets, setTweets] = useState([
    {
      tweetsTitle:
        "Exploring the latest features in JavaScript ES11! The language keeps evolving. 💡 #JavaScript #ES11",
    },
    {
      tweetsTitle:
        "Embracing the benefits of TypeScript for stronger, more reliable code. 🚀 #TypeScript #Programming",
    },
    {
      tweetsTitle:
        "Building dynamic user interfaces with React! The go-to library for modern web development. 🚀 #React #WebDev",
    },
    {
      tweetsTitle:
        "Next.js makes server-side rendering a breeze! Boost your React app's performance with ease. 🚀 #Nextjs #React",
    },
    {
      tweetsTitle:
        "Dive into advanced JavaScript concepts like closures and prototypes. Level up your coding skills! 🔍 #AdvancedJS #CodingTips",
    },
    {
      tweetsTitle:
        "Mastering TypeScript: From basics to advanced concepts. Boost your development workflow with strong typing! 🚀 #TypeScript #Development",
    },
    {
      tweetsTitle:
        "Simplify your CSS workflow with Tailwind CSS. Effortless styling for modern web development! 🎨 #TailwindCSS #WebDev",
    },
    {
      tweetsTitle:
        "Building dynamic UIs with React - A comprehensive guide for developers. Get started with React today! 🚀 #React #WebDevelopment",
    },
    {
      tweetsTitle:
        "Optimize server-side rendering with Next.js. Improve performance and SEO for your React applications! 🚀 #Nextjs #React",
    },
  ]);
  const [popup, setPopup] = useState(false);
  return (
    <>
      <DataContext.Provider
        value={{
          data,
          setData,
          sidebar,
          setSidebar,
          comments,
          setComments,
          login,
          setLogin,
          tweets, setTweets,
          popup, setPopup
        }}
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
