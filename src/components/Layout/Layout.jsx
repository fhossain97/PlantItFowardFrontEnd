import React from "react";
import Navbar from "../Navbar/Navbar";

const Layout = ({ user, children, setUser, handleLogout}) => {
  return (
    <div>
      <Navbar user={user} setUser={setUser} handleLogout={handleLogout}/>
      {children}
    </div>
  );
};
export default Layout;
