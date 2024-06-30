import { useContext, useState } from "react";
import { DataContext } from "../components/DataProviderContext";
import styles from "../style/clientAllDataStyle/ClientTweets.module.css";
import { BiLike, BiDislike, BiSolidLike, BiSolidDislike } from "react-icons/bi";
import { useParams } from "react-router-dom";
import { BsThreeDots } from "react-icons/bs";

function ClientTweetsComponent() {
  const { tweets, data, setTweets } = useContext(DataContext);
  const { id } = useParams();
  const datas = data.find((item) => item.id === Number(id));
  const [inputs, setInputs] = useState("");
  const [statuses, setStatuses] = useState(
    tweets.map(() => ({ liked: false, disliked: false }))
  );
  console.log(tweets)

  const handleNewTweets = () => {
    if (inputs.trim() !== "") {
      const newTweet = {
        tweetsTitle: inputs,
      };
      setTweets([...tweets, newTweet]);
      setInputs("");

      setStatuses([...statuses, { liked: false, disliked: false }]);
    }
  };

  // Function start for Like and Dislike Button
  const handleLikeToggle = (index) => {
    setStatuses((prevStatuses) =>
      prevStatuses.map((status, i) =>
        i === index ? { liked: !status.liked, disliked: false } : status
      )
    );
  };

  const handleDisLikeToggle = (index) => {
    setStatuses((prevStatuses) =>
      prevStatuses.map((status, i) =>
        i === index ? { disliked: !status.disliked, liked: false } : status
      )
    );
  };
  // Function Ends for Like and Dislike Button

  if (!datas) {
    return <div>No data available</div>;
  }

  return (
    <>
      <div>
        <div className="flex justify-between p-4 gap-3">
          <input
            type="text"
            className="w-full bg-transparent border px-2 py-1"
            value={inputs}
            onChange={(e) => setInputs(e.target.value)}
          />
          <div className="flex justify-between items-center gap-3">
            <button className="bg-gray-700 px-1 py-2 rounded-md hover:bg-gray-500">
              <BsThreeDots />
            </button>
            <button
              className="bg-pink-500 hover:bg-pink-600 py-1 px-4 rounded-md"
              onClick={handleNewTweets}
            >
              Send
            </button>
          </div>
        </div>
        <div className={styles.tweets}>
          {tweets.map((tweet, index) => (
            <div key={index} className={styles.tweets_in}>
              <img src={datas.image} alt="image" />
              <div className={styles.context}>
                <div className={styles.chinfo}>
                  <span>{datas.chName}</span>
                  <h4>5 hours ago</h4>
                </div>
                <p>{tweet.tweetsTitle}</p>
                <button onClick={() => handleLikeToggle(index)}>
                  {statuses[index].liked ? <BiSolidLike /> : <BiLike />}
                </button>
                <button onClick={() => handleDisLikeToggle(index)}>
                  {statuses[index].disliked ? (
                    <BiSolidDislike />
                  ) : (
                    <BiDislike />
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ClientTweetsComponent;
