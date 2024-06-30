import { FaBold } from "react-icons/fa";
import { ImItalic } from "react-icons/im";
import { AiOutlineBars } from "react-icons/ai";
import { useState } from "react";

function ClientChannelInformation() {
  const [description, setDescription] = useState("");
  const [userName, setUserName] = useState('');
  const [activeBtn, setActiveBtn] = useState(designBtn.map(()=>true))
  
  const handleBtnActive=(index) =>{
    setActiveBtn(activeBtn.map((val, i)=> i===index? !val: val))
    // setActiveBtn((prev) =>
      //   prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    // );
  }
  console.log(activeBtn[0])



  const TextAreaChange = (e) => {
    setDescription(e.target.value);
  };
  const maxLength = 250;
  const left = maxLength - description.length;

  return (
    <div className="flex gap-9 p-5 pb-10">
      <div>
        <h4>Channel Info</h4>
        <h5>Update your Channel details here.</h5>
      </div>
      <div className=" w-8/12 border rounded-md">
        <div className="px-4 py-2 space-y-1">
          <span>Username</span>
          <div>
            <input
              type="text"
              className="bg-transparent border px-2 py-1 outline-none rounded-tl-lg rounded-bl-lg w-3/12"
              value={"Video.com/"}
              readOnly
            />
            <input
              type="text"
              className="bg-transparent border px-2 py-1 outline-none rounded-tr-lg rounded-br-lg w-9/12"
              value={userName}
              onChange={(e)=>setUserName(e.target.value)}
            />
          </div>
        </div>
        <div className="px-4 py-2 space-y-1">
          <h4>Description</h4>
          <textarea
            name="textarea"
            className={`w-full bg-transparent border rounded-md p-1 ${activeBtn[0]? "font-normal":"font-bold"} ${activeBtn[1]?"non-italic":"italic"} ${activeBtn[2]?"text-left":"text-center"}`}
            rows="4"
            onChange={TextAreaChange}
            value={description}
            maxLength={maxLength}
          ></textarea>
          <h5>{left} character left</h5>
        </div>
        <div className="flex items-center px-4 py-2 gap-4 justify-between">
          <select name="select" className="bg-transparent border px-2 py-1 w-10/12">
            <option value="regular" className="text-black">Regular</option>
            <option value="semi-bold" className="text-black">Semi Bold</option>
            <option value="light" className="text-black">Light</option>
          </select>
          {designBtn.map((item, index)=>(
            <button className={`hover:bg-gray-500 p-1 rounded-full ${activeBtn[index] ? "":"bg-gray-600"}`} key={index} onClick={()=>handleBtnActive(index)}>
              {item.icon}
          </button>
          ))}
        </div>
        <div className="px-4 py-4">
          <select className="bg-transparent border px-2 py-1 w-full">
            {timezones.map((item, index) => (
              <option key={index} value={item.value} className="text-black">
                {item.text}
              </option>
            ))}
          </select>
        </div>
        <div className="flex justify-end gap-4 border-t p-4">
          <button className="border hover:bg-pink-600 rounded-md px-3 p-1">Cancel</button>
          <button className="border hover:bg-pink-600 rounded-md px-3 p-1">Save Changes</button>
        </div>
      </div>
    </div>
  );
}

export default ClientChannelInformation;

const designBtn = [
  {title: "bold", icon: <FaBold />},
  {title: "bold", icon: <ImItalic />},
  {title: "bold", icon: <AiOutlineBars />},
]

const timezones = [
  { value: "Pacific/Midway", text: "(GMT-11:00) Midway Island, Samoa" },
  { value: "America/Adak", text: "(GMT-10:00) Hawaii-Aleutian" },
  { value: "Etc/GMT+10", text: "(GMT-10:00) Hawaii" },
  { value: "Pacific/Marquesas", text: "(GMT-09:30) Marquesas Islands" },
  { value: "Pacific/Gambier", text: "(GMT-09:00) Gambier Islands" },
];
