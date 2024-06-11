import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useSocket } from "../context/SocketContext";
import { getAllVideos } from "../api";
import { useNavigate } from "react-router-dom";

export const SocketEventEnum = Object.freeze({
  SOCKET_CONNECTED:'connected',
  SOCKET_DISCONNECTED:'disconnect',
  ADD_VIDEO_COMMENT:'addVideoComment',
  UPDATE_VIDEO_COMMENT:'updateVideoComment',
  ADD_TWEET_COMMENT:'addTweetComment',
  UPDATE_TWEET_COMMENT:'updateTweetComment',
  PUBLISH_VIDEO:"publishVideo",
  JOIN_COMMENT:'joinComment',
  JOIN_NOTIFICATION:'joinNotification',
  SOCKET_ERROR:'socketError',
  JOIN_LIKE:'joinLike',
  JOIN_DISLIKE:'joinDislike',
  ADDED_LIKE:'addedLike',
  ADDED_DISLIKE:'addedDislike',
});

const DashboardView = () => {
  const { logout } = useAuth();
  const [videos, setVideos] = useState([]);
  const navigate = useNavigate();

  const handleLogout = async () => await logout();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await getAllVideos();
        setVideos(data?.data);
      } catch (error) {
        console.log(`Error log video`, error);
      }
    })();
  }, []);

  return (
    <>
      <div class="h-screen overflow-y-auto bg-[#121212] text-white">
        <header class="sticky inset-x-0 top-0 z-50 w-full border-b border-white bg-[#121212]">
          <nav class="mx-auto flex max-w-7xl items-center py-2">
            <div class="w-12 shrink-0 sm:w-16">
              <button
                onClick={handleLogout}
                className="bg-indigo-500 px-4 py-2 text-white"
              >
                Logout
              </button>
            </div>
          </nav>
        </header>
        <div class="flex min-h-[calc(100vh-66px)] sm:min-h-[calc(100vh-82px)]">
          <section class="w-full pb-[70px] sm:ml-[70px] sm:pb-0 lg:ml-0">
            <div class="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-4 p-4">
              {videos &&
                videos.map((video) => (
                  <div
                    class="w-full"
                    key={video?._id}
                    onClick={() => navigate(`/video/${video?._id}`)}
                  >
                    <div class="relative mb-2 w-full pt-[56%]">
                      <div class="absolute inset-0">
                        <img
                          src={video?.thumbnail}
                          alt="JavaScript Fundamentals: Variables and Data Types"
                          class="h-full w-full"
                        />
                      </div>
                      <span class="absolute bottom-1 right-1 inline-block rounded bg-black px-1.5 text-sm">
                        {video?.duration}
                      </span>
                    </div>
                    <div class="flex gap-x-2">
                      <div class="h-10 w-10 shrink-0">
                        <img
                          src={video?.owner?.avatar}
                          alt="codemaster"
                          class="h-full w-full rounded-full"
                        />
                      </div>
                      <div class="w-full">
                        <h6 class="mb-1 font-semibold">{video?.title}</h6>
                        <p class="flex text-sm text-gray-200">
                          {video?.views} Views · 44 minutes ago
                        </p>
                        <p class="text-sm text-gray-200">
                          {video?.owner?.username}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default DashboardView;
