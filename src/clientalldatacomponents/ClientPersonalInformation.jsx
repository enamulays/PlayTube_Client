import { useEffect, useState } from "react";

function ClientPersonalInformation() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [inputField, setInputField] = useState(true);

  useEffect(() => {
    const detailsAll = JSON.parse(localStorage.getItem("PersonalDetails"));
    if (detailsAll) {
      setFirstName(detailsAll.firstName || "");
      setLastName(detailsAll.lastName || "");
      setEmail(detailsAll.email || "");
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem(
      "PersonalDetails",
      JSON.stringify({ firstName, lastName, email })
    );
    setInputField(true)
  };

  const handleCancel = () => {
    setInputField(true)
  };
  return (
    <div className="flex justify-between p-5">
      <div className="flex-1">
        <h4>Personal Info</h4>
        <h5>Update your photo and personal details.</h5>
      </div>
      {inputField ? (
        <div className="border rounded-md w-8/12 p-4 space-y-4">
          <div className="flex justify-between items-center gap-4">
            <div className="space-y-1">
              <h4>First Name:</h4>
              <h3 className="border-b w-60 text-purple-600 border-purple-600 text-2xl">
                {firstName}
              </h3>
            </div>
            <div className="space-y-1">
              <h4>Last Name:</h4>
              <h3 className="border-b w-60 text-purple-600 border-purple-600 text-2xl">
                {lastName}
              </h3>
            </div>
          </div>
          <div className="">
            <div className="space-y-1">
              <h4>Email:</h4>
              <h3 className="border-b w-60 text-purple-600 border-purple-600 text-2xl">
                {email}
              </h3>
            </div>
          </div>
          <div className="flex justify-end gap-4 border-t pt-4">
            <button
              className="border bg-pink-500 hover:bg-pink-700 rounded-md px-3 p-1"
            onClick={()=>setInputField(false)}>
              Edit
            </button>
          </div>
        </div>
      ) : (
        <div className="border rounded-md w-8/12 p-4 space-y-4">
          <div className="flex justify-between items-center gap-4">
            <div className="space-y-2">
              <h4>First Name</h4>
              <input
                type="text"
                className="bg-transparent border rounded-md py-1 px-2 w-full"
                placeholder="Enter First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <h4>Last Name</h4>
              <input
                type="text"
                placeholder="Enter Last Name"
                className="bg-transparent border rounded-md py-1 px-2 w-full"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div className="">
            <h4>Email Address</h4>
            <input
              type="email"
              placeholder="Enter Email"
              className="bg-transparent border rounded-md py-1 px-2 w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex justify-end gap-4 border-t pt-4">
            <button
              className="border hover:bg-pink-600 rounded-md px-3 p-1"
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button
              className="border hover:bg-pink-600 rounded-md px-3 p-1"
              onClick={handleSave}
            >
              Save
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ClientPersonalInformation;
