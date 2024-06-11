import React, { useEffect, useState } from "react";
import { getAllNotifications } from "../api";
import { useSocket } from "../context/SocketContext";
import { SocketEventEnum } from "./DashboardView";
import { useAuth } from "../context/AuthContext";

const NotificationView = () => {
  const [notifications, setNotifications] = useState([]);
  const { socket } = useSocket();
  const { user } = useAuth()

  const addNotification = (notification) => {
    setNotifications((prev) => [notification, ...prev]);
  };

  useEffect(() => {
    if (!socket) return;
    socket.emit(SocketEventEnum.JOIN_NOTIFICATION, user?._id);
    socket.on(SocketEventEnum.PUBLISH_VIDEO, addNotification);
    return () => {
      socket.off(SocketEventEnum.PUBLISH_VIDEO, addNotification);
    };
  }, [socket, user]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await getAllNotifications();
        setNotifications(data.data);
      } catch (error) {
        console.log(`Error log notification`, error);
      }
    })();
  }, []);

  return (
    <>
      <main class="xs:mx-3 w-auto bg-white lg:mx-auto lg:mt-16 lg:rounded-xl lg:p-8 lg:max-w-xl">
        <div class="xs:mt-6 flex justify-between">
          <h1 class="text-xl font-bold">
            Notifications
            <span
              id="notifications-counter"
              class="ml-2 bg-blue text-white rounded-md px-3"
            ></span>
          </h1>
          <span
            id="mark-all-as-read"
            class="text-sm font-bold text-gb cursor-pointer hover:text-blue"
            href="#"
          >
            Mark all as read
          </span>
        </div>
        {notifications &&
          notifications.map((notification) => (
            <div
              id="notification-card-1"
              class="mt-3 bg-verylightgb rounded-md flex justify-between p-3 "
            >
              <img
                src={notification?.channelAvatar}
                alt="notification user avatar"
                class="w-12 h-12 "
              />
              <div class="ml-2 text-sm flex-auto">
                <a href="#" class="font-bold hover:text-blue">
                  {notification?.user?.username}
                </a>
                <span class="text-darkgb">{notification?.message}</span>
                <span id="notification-ping">
                  <span class="absolute inline-block rounded-full mt-2 ml-1 p-1 bg-red">
                    {" "}
                  </span>
                  <span class="relative inline-block animate-ping rounded-full ml-1 p-1 bg-red">
                    {" "}
                  </span>
                </span>
                <p class="text-gb mt-1">1m ago</p>
              </div>
              <div>
                <img
                  src={notification?.videoThumbnail}
                  alt="notification user avatar"
                  class="w-12 h-12 "
                />
              </div>
            </div>
          ))}
      </main>
    </>
  );
};

export default NotificationView;
