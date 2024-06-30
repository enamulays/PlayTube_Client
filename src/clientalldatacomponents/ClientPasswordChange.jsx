function ClientPasswordChange() {
  return (
    <div className="p-5 flex">
      <div>
        <h4>Password</h4>
        <h5>Please enter your current password to change your password.</h5>
      </div>
      <div className="py-4 border rounded-md space-y-4 w-9/12">
        <div className="space-y-1 px-4">
          <h4>Current Password</h4>
          <input
            type="text"
            className="w-full bg-transparent px-4 p-1.5 border rounded-md"
            placeholder="currnet password"
          />
        </div>
        <div className="space-y-1 px-4">
          <h4>New Password</h4>
          <input
            type="text"
            className="w-full bg-transparent px-4 p-1.5 border rounded-md"
            placeholder="currnet password"
          />
          <h5>Your new password must be more than 8 characters.</h5>
        </div>
        <div className="space-y-1 px-4">
          <h4>Confirm Password</h4>
          <input
            type="text"
            className="w-full bg-transparent px-4 p-1.5 border rounded-md"
            placeholder="confirm password"
          />
        </div>
        <div className="flex justify-end gap-4 border-t px-4 pt-4">
          <button className="border hover:bg-pink-600 rounded-md px-3 p-1">Cancel</button>
          <button className="border hover:bg-pink-600 rounded-md px-3 p-1">Update Password</button>
        </div>
      </div>
    </div>
  );
}

export default ClientPasswordChange;
