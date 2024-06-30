import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/Navbar.css";
import { DataContext } from "./DataProviderContext";
import { RiVideoAddLine } from "react-icons/ri";
import { FaRegBell } from "react-icons/fa";
import ClientProfileDialogueBox from "../clientalldatacomponents/ClientProfileDialogueBox";

function Navbar() {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();
  const inputRef = useRef();
  const { login, data } = useContext(DataContext);
  const datas = data.find((item) => item);
  const [dialogue, setDialogue] = useState(false);
  const [notification, setNotification] = useState(false);
  const [profile, setProfile] = useState(false);

  const handleVideoDialogueBox = (e) => {
    e.stopPropagation();
    {
      setDialogue(true), setNotification(false), setProfile(false);
    }
  };
  const handleNotification = (e) => {
    e.stopPropagation();
    {
      setNotification(true), setDialogue(false), setProfile(false);
    }
  };

  const handleProfile = (e) => {
    e.stopPropagation();
    {
      setProfile(true), setDialogue(false), setNotification(false);
    }
  };

  useEffect(() => {
    const handleDialogueBoxClose = () => {
      if (dialogue || notification || profile) {
        setDialogue(false);
        setNotification(false);
        setProfile(false);
      }
    };
    document.addEventListener("click", handleDialogueBoxClose);
    return () => {
      document.removeEventListener("click", handleDialogueBoxClose);
    };
  }, [dialogue, notification, profile]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Enter" && searchInput != "") {
        navigate(`/search?query=${searchInput}`);
      }
    };

    const inputElement = inputRef.current;
    if (inputElement) {
      inputElement.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      if (inputElement) {
        inputElement.removeEventListener("keydown", handleKeyDown);
      }
    };
  }, [navigate, searchInput]);

  return (
    <div className="nav relative">
      <div className="nav-inner">
        <Link to="/">
          <img
            src="../image/play_small_icon.PNG"
            alt="play_small_icon"
            className="play-img"
          />
        </Link>
        <div className="nav-input">
          <span className="input-icon">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </span>
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => setSearchInput(e.target.value)}
            value={searchInput}
            ref={inputRef}
          />
        </div>
        {login ? (
          <div className="flex justify-end items-center gap-x-3">
            <button className="h-8 w-8 rounded-full p-1 hover:bg-gray-400 flex justify-center items-center text-xl">
              <RiVideoAddLine onClick={handleVideoDialogueBox} />
            </button>
            <button
              className="h-8 w-8 rounded-full p-1 hover:bg-gray-400 flex justify-center items-center text-xl"
              onClick={handleNotification}
            >
              <FaRegBell />
            </button>
            <img
              src={datas.image}
              alt="image"
              className="h-8 w-8 rounded-full hover:bg-gray-400 flex justify-center items-center text-xl cursor-pointer"
              onClick={handleProfile}
            />
          </div>
        ) : (
          <div className="nav-sign-option">
            <Link to="/login">
              <button className="login-btn">Log in</button>
            </Link>
            <Link to="/signup">
              <button className="signup-btn">Sign up</button>
            </Link>
          </div>
        )}
      </div>

      {/**********Video Upload Dialogue Box  Area**********/}
      <ClientProfileDialogueBox
        notification={notification}
        dialogue={dialogue}
        profile={profile}
      />
    </div>
  );
}

export default Navbar;
