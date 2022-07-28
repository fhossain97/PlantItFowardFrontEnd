import React from "react";
import Navbar from "../Navbar/Navbar";

const Layout = ({ user, children, setUser, handleLogout}) => {
  console.log(children);
  return (
    <div>
      <Navbar user={user} setUser={setUser} handleLogout={handleLogout}/>
      {children}
    </div>
  );
};
export default Layout;
